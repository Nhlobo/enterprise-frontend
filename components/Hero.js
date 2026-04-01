import Link from 'next/link';

export default function Hero({ title, subtitle, ctaText = 'Get Started', ctaHref = '/contact', secondaryText, secondaryHref }) {
  return (
    <section className="bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">{title}</h1>
        {subtitle && <p className="text-lg md:text-2xl text-brand-100 mb-10 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={ctaHref}
            className="bg-white text-brand-700 font-semibold px-8 py-3 rounded-xl hover:bg-brand-50 transition-colors shadow-lg"
            data-track="hero-primary-cta"
          >
            {ctaText}
          </Link>
          {secondaryText && (
            <Link
              href={secondaryHref || '#'}
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-brand-700 transition-colors"
              data-track="hero-secondary-cta"
            >
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
