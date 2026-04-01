import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: 'R 2 500',
    period: '/month',
    description: 'Perfect for small businesses getting started.',
    features: ['Up to 5 users', 'Core analytics', 'Email support', '1 integration'],
    cta: 'Get Started',
    href: '/contact',
    highlight: false,
  },
  {
    name: 'Professional',
    price: 'R 7 500',
    period: '/month',
    description: 'For growing teams needing more power.',
    features: ['Up to 25 users', 'Advanced analytics', 'Priority support', '10 integrations', 'Custom reports'],
    cta: 'Get Started',
    href: '/contact',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organisations.',
    features: ['Unlimited users', 'Full analytics suite', 'Dedicated account manager', 'Unlimited integrations', 'SLA guarantee', 'On-premise option'],
    cta: 'Contact Sales',
    href: '/contact',
    highlight: false,
  },
];

export default function PricingTable() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Choose the plan that suits your business.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col border-2 ${
                plan.highlight
                  ? 'border-brand-600 bg-brand-700 text-white shadow-xl scale-105'
                  : 'border-gray-200 bg-white text-gray-900 shadow-md'
              }`}
            >
              <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.highlight ? 'text-brand-100' : 'text-gray-500'}`}>{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? 'text-brand-200' : 'text-gray-400'}`}>{plan.period}</span>
              </div>
              <ul className="space-y-2 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <svg className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-brand-200' : 'text-brand-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`block text-center font-semibold px-6 py-3 rounded-xl transition-colors ${
                  plan.highlight
                    ? 'bg-white text-brand-700 hover:bg-brand-50'
                    : 'bg-brand-600 text-white hover:bg-brand-700'
                }`}
                data-track={`pricing-${plan.name.toLowerCase()}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
