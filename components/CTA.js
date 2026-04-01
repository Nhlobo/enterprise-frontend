import Link from 'next/link';

export default function CTA({ heading, subheading, ctaText = 'Contact Us', ctaHref = '/contact' }) {
  return (
    <section className="bg-brand-700 text-white py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
        {subheading && <p className="text-brand-100 mb-8 text-lg">{subheading}</p>}
        <Link
          href={ctaHref}
          className="bg-white text-brand-700 font-semibold px-8 py-3 rounded-xl hover:bg-brand-50 transition-colors shadow-md inline-block"
          data-track="section-cta"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
