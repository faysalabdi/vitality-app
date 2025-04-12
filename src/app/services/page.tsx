import { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/common/StructuredData';
import ServicesPageClient from '@/components/services/ServicesPageClient';

// Define metadata for this page
export const metadata: Metadata = {
  title: 'Our Services | Vitality Community Care',
  description: 'Explore our comprehensive range of NDIS, aged care, and allied health services. Personalized support for daily living, community participation, and mental health.',
  keywords: [
    'NDIS services', 
    'aged care services', 
    'disability support services', 
    'community care services',
    'allied health services'
  ],
  openGraph: {
    title: 'Our Services | Vitality Community Care',
    description: 'We offer a wide range of personalized services, designed to meet your unique needs.',
    url: 'https://vitalitycommunitycare.com.au/services',
    images: [
      {
        url: '/images/services-og.jpg', 
        width: 1200,
        height: 630,
        alt: 'Vitality Community Care services',
      },
    ],
  },
};

// Server Component: Handles Metadata, Structured Data, and renders the Client Component
export default function ServicesPage() {
  return (
    <>
      {/* Add structured data for SEO (remains in Server Component) */}
      <ServiceStructuredData 
        name="Vitality Community Care Services"
        description="Comprehensive range of NDIS, aged care, and allied health services tailored to individual needs. We support daily living, community participation, accommodation, transport, and more."
        url="https://vitalitycommunitycare.com.au/services"
        serviceType="Healthcare Service, Disability Service, Aged Care Service"
        areaServed="Victoria, Australia"
      />
      {/* Render the Client Component containing the actual page content */}
      <ServicesPageClient />
    </>
  );
} 