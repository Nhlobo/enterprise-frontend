import { useRouter } from 'next/router';
import SEO from '../../components/SEO';
import Hero from '../../components/Hero';
import CTA from '../../components/CTA';
import { useUserBehavior } from '../../hooks/useUserBehavior';

const caseStudyData = {
  'digital-transformation': {
    title: 'Digital Transformation at Scale',
    subtitle: 'How a major South African retailer modernised its entire technology stack in 18 months.',
    client: 'Major South African Retailer (Confidential)',
    industry: 'Retail',
    duration: '18 months',
    outcome: '40% reduction in operational costs, 60% faster order processing',
    challenge: 'The client faced an aging monolithic legacy system that could no longer support rapid growth. Manual processes were causing bottlenecks, and the lack of real-time data was hampering strategic decision-making.',
    solution: 'Mapengo Innovation designed and delivered a phased digital transformation programme including microservices architecture, real-time analytics dashboards, and automated business processes.',
    results: ['40% operational cost reduction', '60% faster order processing', '99.9% platform uptime', 'Real-time inventory visibility across 200+ stores', 'Full POPIA compliance achieved'],
  },
  'analytics-platform': {
    title: 'Enterprise Analytics Platform',
    subtitle: 'Real-time business intelligence for a leading financial services group.',
    client: 'Leading South African Financial Services Group (Confidential)',
    industry: 'Financial Services',
    duration: '12 months',
    outcome: '35% improvement in risk detection, R50M cost savings in Year 1',
    challenge: 'The client had data siloed across 12 different systems with no single source of truth, making regulatory reporting cumbersome and risk management reactive rather than proactive.',
    solution: 'We implemented a unified data platform with real-time analytics, automated regulatory reporting, and predictive risk modelling capabilities.',
    results: ['35% improvement in risk detection', 'R50M cost savings in Year 1', 'Regulatory reporting time reduced by 80%', 'Single source of truth for all business data', 'FSCA-compliant reporting automation'],
  },
};

export default function CaseStudyPage() {
  const router = useRouter();
  const { slug } = router.query;
  useUserBehavior(`case-study-${slug}`);

  const study = slug ? (caseStudyData[slug] || caseStudyData['digital-transformation']) : caseStudyData['digital-transformation'];

  return (
    <>
      <SEO
        title={`${study.title} – Case Study – Mapengo Innovation`}
        description={study.subtitle}
        canonical={`/case-studies/${slug}`}
      />

      <Hero
        title={study.title}
        subtitle={study.subtitle}
        ctaText="Work With Us"
        ctaHref="/contact"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Meta info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Client', value: study.client },
              { label: 'Industry', value: study.industry },
              { label: 'Duration', value: study.duration },
              { label: 'Key Outcome', value: study.outcome },
            ].map((item) => (
              <div key={item.label} className="bg-brand-50 rounded-xl p-4">
                <p className="text-xs text-brand-600 font-semibold uppercase tracking-wide mb-1">{item.label}</p>
                <p className="text-sm text-gray-800 font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">The Challenge</h2>
            <p className="text-gray-700 text-lg">{study.challenge}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Solution</h2>
            <p className="text-gray-700 text-lg">{study.solution}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
            <ul className="space-y-3">
              {study.results.map((r) => (
                <li key={r} className="flex items-center gap-3 bg-green-50 rounded-xl p-4">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-800 font-medium">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA
        heading="Achieve Similar Results"
        subheading="Discover how Mapengo Innovation can transform your business."
        ctaText="Start Your Transformation"
        ctaHref="/contact"
      />
    </>
  );
}
