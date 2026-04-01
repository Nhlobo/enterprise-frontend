import SEO from '../components/SEO';
import CTA from '../components/CTA';
import { useUserBehavior } from '../hooks/useUserBehavior';

export default function About() {
  useUserBehavior('about');

  return (
    <>
      <SEO
        title="About Us – Mapengo Innovation"
        description="Learn about Mapengo Innovation, our mission, and our team of enterprise technology experts."
        canonical="/about"
      />

      <div className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Mapengo Innovation</h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Mapengo Innovation is a leading enterprise technology company headquartered in South Africa,
              dedicated to helping businesses across the African continent leverage the power of modern digital solutions.
            </p>
            <p>
              Founded with the mission to bridge the technology gap in African enterprises, we provide world-class
              analytics, cloud infrastructure, and digital transformation services that are tailored to the unique
              challenges and opportunities of the African business landscape.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Mission</h2>
            <p>
              To empower African enterprises with enterprise-grade technology solutions that drive growth,
              improve efficiency, and create lasting competitive advantage.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Integrity:</strong> We operate with transparency and honesty in everything we do.</li>
              <li><strong>Innovation:</strong> We continuously push the boundaries of what&apos;s possible.</li>
              <li><strong>Impact:</strong> We measure success by the value we create for our clients.</li>
              <li><strong>Inclusivity:</strong> We believe technology should be accessible to all businesses.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mt-8">Compliance &amp; Trust</h2>
            <p>
              We are fully compliant with South Africa&apos;s Protection of Personal Information Act (POPIA) and
              adhere to international data protection standards including GDPR principles. Your data security
              is our top priority.
            </p>
          </div>
        </div>
      </div>

      <CTA
        heading="Ready to Work With Us?"
        subheading="Join the growing number of enterprises transforming with Mapengo Innovation."
        ctaText="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
