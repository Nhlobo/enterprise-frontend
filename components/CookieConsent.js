import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white px-4 py-4 md:py-5 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
        <p className="text-sm text-gray-300 flex-1">
          We use cookies to improve your experience and for analytics. By continuing, you consent to our use of cookies.{' '}
          <Link href="/cookies" className="underline text-brand-300 hover:text-brand-200">Cookie Policy</Link>
          {' | '}
          <Link href="/privacy" className="underline text-brand-300 hover:text-brand-200">Privacy Policy</Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-sm px-4 py-2 rounded-lg border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-sm px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-colors"
            data-track="cookie-accept"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
