import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;
}

/**
 * SEO component to enhance individual pages with metadata
 * Note: In Next.js 13+ App Router, this component is less necessary as metadata
 * can be defined in the page files directly. This is provided for flexibility and
 * for Pages Router compatibility.
 */
export default function SEO({
  title = 'Vitality Community Care | NDIS & Aged Care Provider',
  description = 'Compassionate and personalized NDIS, aged care, and allied health services in Australia. Supporting individuals to live their best lives.',
  canonicalUrl,
  ogType = 'website',
  ogImage = '/images/og-image.jpg',
  ogImageAlt = 'Vitality Community Care - Nurturing lives for a better tomorrow',
}: SEOProps) {
  const router = useRouter();
  const fullUrl = canonicalUrl || `https://vitalitycommunitycare.com.au${router.asPath}`;
  
  return (
    <Head>
      {/* Standard metadata */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Vitality Community Care" />
      <meta property="og:image" content={`https://vitalitycommunitycare.com.au${ogImage}`} />
      <meta property="og:image:alt" content={ogImageAlt} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://vitalitycommunitycare.com.au${ogImage}`} />
    </Head>
  );
} 