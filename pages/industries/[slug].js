import { useRouter } from 'next/router';
import SEO from '../../components/SEO';
import Hero from '../../components/Hero';
import CTA from '../../components/CTA';
import { useUserBehavior } from '../../hooks/useUserBehavior';

const industryData = {
  'finance': {
    title: 'Financial Services',
    subtitle: 'POPIA-compliant solutions for banks, insurers, and asset managers.',
    description: 'We deliver highly regulated, compliant technology solutions for the South African financial services sector, including retail banking, investment management, and insurance.',
    challenges: ['Regulatory compliance (FSR Act, POPIA, FICA)', 'Legacy system modernisation', 'Digital customer experience', 'Fraud detection and prevention', 'Real-time reporting'],
  },
  'healthcare': {
    title: 'Healthcare',
    subtitle: 'Secure digital health platforms for modern healthcare providers.',
    description: 'Our healthcare solutions prioritise patient data security, regulatory compliance, and operational efficiency for hospitals, clinics, and medical groups.',
    challenges: ['POPIA-compliant patient data management', 'Electronic health records', 'Billing and claims processing', 'Appointment scheduling', 'Telemedicine integration'],
  },
  'retail': {
    title: 'Retail & E-commerce',
    subtitle: 'Omnichannel solutions for modern retail businesses.',
    description: 'From brick-and-mortar to online, we help retailers build seamless customer experiences and optimise operations with advanced analytics.',
    challenges: ['Inventory management', 'Customer behaviour analytics', 'Loyalty programme management', 'Supply chain optimisation', 'Multichannel integration'],
  },
};

export default function IndustryPage() {
  const router = useRouter();
  const { slug } = router.query;
  useUserBehavior(`industry-${slug}`);

  const industry = slug ? (industryData[slug] || industryData['finance']) : industryData['finance'];

  return (
    <>
      <SEO
        title={`${industry.title} Solutions – Mapengo Innovation`}
        description={industry.subtitle}
        canonical={`/industries/${slug}`}
      />

      <Hero
        title={industry.title}
        subtitle={industry.subtitle}
        ctaText="Get a Demo"
        ctaHref="/contact"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-10">{industry.description}</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Challenges We Solve</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.challenges.map((c) => (
              <li key={c} className="flex items-center gap-3 bg-brand-50 rounded-xl p-4">
                <span className="text-brand-600 text-xl">→</span>
                <span className="text-gray-800 font-medium">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        heading={`Transform Your ${industry.title} Operations`}
        subheading="Speak with our industry specialists to discover what&apos;s possible."
        ctaText="Talk to an Expert"
        ctaHref="/contact"
      />
    </>
  );
}
