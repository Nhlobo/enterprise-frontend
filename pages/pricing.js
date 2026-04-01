import SEO from '../components/SEO';
import PricingTable from '../components/PricingTable';
import CTA from '../components/CTA';
import { useUserBehavior } from '../hooks/useUserBehavior';

export default function Pricing() {
  useUserBehavior('pricing');

  return (
    <>
      <SEO
        title="Pricing – Mapengo Innovation"
        description="Simple, transparent pricing for enterprise solutions. Choose the plan that fits your business."
        canonical="/pricing"
      />

      <div className="bg-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h1>
          <p className="text-lg text-gray-600">Transparent pricing with no hidden costs. Scale as your business grows.</p>
        </div>
      </div>

      <PricingTable />

      <CTA
        heading="Need a Custom Solution?"
        subheading="Our enterprise team is ready to build a tailored package for your organisation."
        ctaText="Talk to Sales"
        ctaHref="/contact"
      />
    </>
  );
}
