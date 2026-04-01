import SEO from '../components/SEO';
import { useUserBehavior } from '../hooks/useUserBehavior';

export default function Terms() {
  useUserBehavior('terms');

  return (
    <>
      <SEO
        title="Terms of Service – Mapengo Innovation"
        description="Mapengo Innovation Terms of Service governing the use of our platform and services."
        canonical="/terms"
        noIndex
      />

      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: 1 April 2025</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Mapengo Innovation&apos;s website and services, you agree to be bound by these
            Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.
          </p>

          <h2>2. Services Description</h2>
          <p>
            Mapengo Innovation provides enterprise technology solutions including analytics platforms, cloud
            infrastructure services, digital transformation consulting, and related professional services.
          </p>

          <h2>3. User Obligations</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information when creating an account or submitting enquiries</li>
            <li>Use our services only for lawful purposes</li>
            <li>Not attempt to gain unauthorised access to our systems</li>
            <li>Not use our services to transmit malicious code or interfere with operations</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, trademarks, logos, and intellectual property on this website are owned by or licensed
            to Mapengo Innovation. You may not reproduce or distribute any content without prior written consent.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Mapengo Innovation shall not be liable for any indirect,
            incidental, special, or consequential damages arising from your use of our services.
          </p>

          <h2>6. Data Protection</h2>
          <p>
            Your use of our services is subject to our Privacy Policy. We process personal information in
            compliance with POPIA and applicable data protection laws.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These terms are governed by the laws of the Republic of South Africa. Any disputes shall be
            subject to the exclusive jurisdiction of the South African courts.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify registered users of significant changes.
            Continued use of our services after changes constitutes acceptance of the updated terms.
          </p>

          <h2>9. Contact</h2>
          <p>
            For questions about these Terms, contact us at{' '}
            <a href="mailto:legal@mapengo.co.za" className="text-brand-600">legal@mapengo.co.za</a>
          </p>
        </div>
      </div>
    </>
  );
}
