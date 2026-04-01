import SEO from '../components/SEO';
import { useUserBehavior } from '../hooks/useUserBehavior';

export default function Cookies() {
  useUserBehavior('cookies');

  return (
    <>
      <SEO
        title="Cookie Policy – Mapengo Innovation"
        description="Mapengo Innovation Cookie Policy – information about cookies and tracking technologies used on our website."
        canonical="/cookies"
        noIndex
      />

      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: 1 April 2025</p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They help us remember
            your preferences, understand how you use our site, and improve your experience.
          </p>

          <h2>2. Types of Cookies We Use</h2>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function and cannot be disabled. They are set in
            response to actions you take, such as setting privacy preferences or filling in forms.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            We use Google Analytics to understand how visitors interact with our website. These cookies collect
            anonymised information about pages visited, time spent on site, and traffic sources. You can opt out
            of Google Analytics by declining cookies in our consent banner.
          </p>

          <h3>Functional Cookies</h3>
          <p>
            These cookies enable enhanced functionality and personalisation, such as remembering your session
            preferences and displaying personalised content recommendations.
          </p>

          <h2>3. Cookie Consent (POPIA Compliance)</h2>
          <p>
            In accordance with POPIA and international best practices, we request your consent before placing
            non-essential cookies. You can withdraw consent at any time by clearing your browser cookies and
            declining when prompted on your next visit.
          </p>

          <h2>4. Managing Cookies</h2>
          <p>You can control cookies through:</p>
          <ul>
            <li>Our cookie consent banner at the bottom of the page</li>
            <li>Your browser settings (most browsers allow you to block or delete cookies)</li>
            <li>Third-party opt-out tools (e.g., Google Analytics Opt-out Browser Add-on)</li>
          </ul>

          <h2>5. Third-Party Cookies</h2>
          <p>
            We may use third-party services that set their own cookies, including Google Analytics and
            other performance measurement tools. We do not control these third-party cookies.
          </p>

          <h2>6. Contact</h2>
          <p>
            For cookie-related enquiries, contact us at{' '}
            <a href="mailto:privacy@mapengo.co.za" className="text-brand-600">privacy@mapengo.co.za</a>
          </p>
        </div>
      </div>
    </>
  );
}
