import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Card from '../components/Card';
import CTA from '../components/CTA';
import { useUserBehavior } from '../hooks/useUserBehavior';

const solutions = [
  { title: 'Enterprise Analytics', description: 'Real-time business intelligence and data-driven insights for strategic decision-making.', href: '/solutions/enterprise-analytics', tag: 'Analytics' },
  { title: 'Digital Transformation', description: 'End-to-end digital transformation services to modernise your business processes.', href: '/solutions/digital-transformation', tag: 'Transformation' },
  { title: 'Cloud Infrastructure', description: 'Scalable, secure cloud solutions designed for enterprise workloads.', href: '/solutions/cloud-infrastructure', tag: 'Cloud' },
];

const industries = [
  { title: 'Financial Services', description: 'Regulatory-compliant solutions for banks, insurers, and asset managers.', href: '/industries/finance', tag: 'Finance' },
  { title: 'Healthcare', description: 'Secure, POPIA-compliant platforms for healthcare providers and medical groups.', href: '/industries/healthcare', tag: 'Healthcare' },
  { title: 'Retail & E-commerce', description: 'Omnichannel solutions for modern retail and e-commerce businesses.', href: '/industries/retail', tag: 'Retail' },
];

export default function Home() {
  useUserBehavior('home');

  return (
    <>
      <SEO
        title="Mapengo Innovation – Enterprise Solutions for Africa"
        description="Enterprise-grade digital solutions for modern African businesses. Analytics, cloud, transformation, and more."
        canonical="/"
      />

      <Hero
        title="Enterprise Solutions for Modern Business"
        subtitle="We help South African and African enterprises transform, scale, and compete globally with cutting-edge technology."
        ctaText="Explore Solutions"
        ctaHref="/solutions/enterprise"
        secondaryText="View Pricing"
        secondaryHref="/pricing"
      />

      {/* Solutions section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Solutions</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Tailored technology solutions for every stage of your business journey.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <Card key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Deep domain expertise across key sectors of the African economy.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((i) => (
              <Card key={i.title} {...i} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading="Ready to Transform Your Business?"
        subheading="Join hundreds of enterprises already benefiting from Mapengo Innovation's solutions."
        ctaText="Get Started Today"
        ctaHref="/contact"
      />
    </>
  );
}
