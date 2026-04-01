const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

async function fetchAPI(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getSolutions() {
  return fetchAPI('/api/solutions');
}

export async function getSolution(slug) {
  return fetchAPI(`/api/solutions/${slug}`);
}

export async function getIndustries() {
  return fetchAPI('/api/industries');
}

export async function getIndustry(slug) {
  return fetchAPI(`/api/industries/${slug}`);
}

export async function getCaseStudies() {
  return fetchAPI('/api/case-studies');
}

export async function getCaseStudy(slug) {
  return fetchAPI(`/api/case-studies/${slug}`);
}

export async function getRecommendations(sessionId) {
  return fetchAPI(`/api/recommendations?sessionId=${sessionId}`);
}

export async function submitLead(data) {
  return fetchAPI('/api/leads', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function trackEvent(data) {
  return fetchAPI('/api/track', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
