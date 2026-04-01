import Head from 'next/head';

export default function SEO({
  title = 'Mapengo Innovation – Enterprise Solutions',
  description = 'Enterprise-grade solutions for modern businesses. Discover our products, services, and case studies.',
  canonical,
  ogImage = '/og-default.png',
  noIndex = false,
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mapengo.co.za';
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={fullUrl} />

      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
    </Head>
  );
}
