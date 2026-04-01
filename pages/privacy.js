import Link from 'next/link';
import SEO from '../components/SEO';
import { useUserBehavior } from '../hooks/useUserBehavior';

export default function Privacy() {
  useUserBehavior('privacy');

  return (
    <>
      <SEO
        title="Privacy Policy – Mapengo Innovation"
        description="Mapengo Innovation Privacy Policy – how we collect, use, and protect your personal information in compliance with POPIA."
        canonical="/privacy"
        noIndex
      />

      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: 1 April 2025</p>

          <h2>1. Introduction</h2>
          <p>
            Mapengo Innovation (Pty) Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal information
            in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA). This Privacy Policy
            explains how we collect, use, store, and protect your personal information.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following categories of personal information:</p>
          <ul>
            <li>Contact information (name, email address, phone number, company name)</li>
            <li>Usage data (pages visited, time on site, referring URLs)</li>
            <li>Technical data (IP address, browser type, device information)</li>
            <li>Communication records (enquiries, support tickets)</li>
          </ul>

          <h2>3. Legal Basis for Processing (POPIA)</h2>
          <p>
            We process your personal information on the following lawful grounds under POPIA:
          </p>
          <ul>
            <li><strong>Consent:</strong> Where you have given express consent for a specific purpose.</li>
            <li><strong>Contractual necessity:</strong> Where processing is necessary to perform a contract with you.</li>
            <li><strong>Legitimate interest:</strong> Where we have a legitimate business interest that does not override your rights.</li>
            <li><strong>Legal obligation:</strong> Where we are required to process information by law.</li>
          </ul>

          <h2>4. How We Use Your Information</h2>
          <ul>
            <li>To respond to enquiries and provide requested services</li>
            <li>To improve our website and services through analytics</li>
            <li>To send relevant communications (with your consent)</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share information with:
          </p>
          <ul>
            <li>Service providers acting as operators under POPIA (e.g., hosting, analytics)</li>
            <li>Professional advisors (legal, accounting) bound by confidentiality</li>
            <li>Regulatory authorities where required by law</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            We retain personal information only for as long as necessary for the purposes for which it was collected,
            or as required by law. Lead and contact data is retained for a maximum of 5 years unless you request earlier deletion.
          </p>

          <h2>7. Your Rights Under POPIA</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information held by us</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (right to be forgotten)</li>
            <li>Object to processing of your information</li>
            <li>Lodge a complaint with the Information Regulator of South Africa</li>
          </ul>

          <h2>8. Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal information
            against unauthorised access, alteration, disclosure, or destruction.
          </p>

          <h2>9. Cookies</h2>
          <p>
            We use cookies and similar technologies on our website. Please see our{' '}
            <Link href="/cookies" className="text-brand-600">Cookie Policy</Link> for more information.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            For privacy-related enquiries or to exercise your POPIA rights, contact our Information Officer at:{' '}
            <a href="mailto:privacy@mapengo.co.za" className="text-brand-600">privacy@mapengo.co.za</a>
          </p>
        </div>
      </div>
    </>
  );
}
