import { useEffect, useRef } from 'react';
import { trackEvent } from '../lib/api';

function generateId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function getOrCreateSessionId() {
  if (typeof window === 'undefined') return null;
  let sessionId = sessionStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = generateId();
    sessionStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
}

export function useUserBehavior(pageName) {
  const sessionId = useRef(null);

  useEffect(() => {
    sessionId.current = getOrCreateSessionId();

    const payload = {
      sessionId: sessionId.current,
      event: 'page_view',
      page: pageName,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
    };

    trackEvent(payload).catch(() => {});

    const handleClick = (e) => {
      const target = e.target.closest('[data-track]');
      if (!target) return;
      trackEvent({
        sessionId: sessionId.current,
        event: 'click',
        element: target.dataset.track,
        page: pageName,
        timestamp: new Date().toISOString(),
      }).catch(() => {});
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pageName]);

  return { sessionId: sessionId.current };
}
