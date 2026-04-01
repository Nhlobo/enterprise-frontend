import { useRouter } from 'next/router';
import SEO from '../../components/SEO';
import Hero from '../../components/Hero';
import CTA from '../../components/CTA';
import { useUserBehavior } from '../../hooks/useUserBehavior';

const solutionData = {
  'enterprise': {
    title: 'Enterprise Platform',
    subtitle: 'A comprehensive enterprise management platform for large organisations.',
    description: 'Our Enterprise Platform delivers end-to-end business process management, real-time analytics, and seamless integration capabilities for large South African and African enterprises.',
    features: ['Enterprise Resource Planning', 'Business Intelligence Dashboard', 'Multi-department Collaboration', 'Advanced Security & Compliance', 'API-first Architecture'],
  },
  'enterprise-analytics': {
    title: 'Enterprise Analytics',
    subtitle: 'Real-time data intelligence for strategic decisions.',
    description: 'Transform your business data into actionable insights with our enterprise analytics platform. Built for scale, designed for Africa.',
    features: ['Real-time dashboards', 'Predictive analytics', 'Custom reporting', 'Data visualisation', 'POPIA-compliant data handling'],
  },
  'digital-transformation': {
    title: 'Digital Transformation',
    subtitle: 'Modernise your business for the digital age.',
    description: 'End-to-end digital transformation services to help your organisation adapt, evolve, and thrive in an increasingly digital world.',
    features: ['Process automation', 'Legacy system modernisation', 'Change management', 'Staff training & enablement', 'Ongoing optimisation'],
  },
  'cloud-infrastructure': {
    title: 'Cloud Infrastructure',
    subtitle: 'Scalable, secure cloud solutions for enterprise.',
    description: 'Enterprise-grade cloud infrastructure designed for reliability, scalability, and security – fully managed and monitored 24/7.',
    features: ['Multi-cloud architecture', 'Disaster recovery', '99.9% SLA uptime', 'Security monitoring', 'Cost optimisation'],
  },
};

export default function SolutionPage() {
  const router = useRouter();
  const { slug } = router.query;
  useUserBehavior(`solution-${slug}`);

  const solution = slug ? (solutionData[slug] || solutionData['enterprise']) : solutionData['enterprise'];

  return (
    <>
      <SEO
        title={`${solution.title} – Mapengo Innovation`}
        description={solution.subtitle}
        canonical={`/solutions/${slug}`}
      />

      <Hero
        title={solution.title}
        subtitle={solution.subtitle}
        ctaText="Get a Demo"
        ctaHref="/contact"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-10">{solution.description}</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solution.features.map((f) => (
              <li key={f} className="flex items-center gap-3 bg-brand-50 rounded-xl p-4">
                <span className="text-brand-600 text-xl">✓</span>
                <span className="text-gray-800 font-medium">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        heading={`Ready to implement ${solution.title}?`}
        subheading="Our team will guide you through a seamless onboarding process."
        ctaText="Book a Demo"
        ctaHref="/contact"
      />
    </>
  );
}
