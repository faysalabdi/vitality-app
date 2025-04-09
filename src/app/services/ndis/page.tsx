import { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/common/StructuredData';
import NDISServicesPageClient from '@/components/services/NDISServicesPageClient';

// Server Component: Handles Metadata and renders Client Component

// Metadata export
export const metadata: Metadata = {
  title: 'NDIS Services | Vitality Community Care',
  description: 'Explore our comprehensive NDIS services including daily living support, community participation, accommodation, transport, and more. Registered NDIS provider in Melbourne.',
  keywords: [
    'NDIS provider Melbourne', 
    'disability support services', 
    'NDIS daily living support', 
    'NDIS community participation',
    'supported independent living'
  ],
  openGraph: {
    title: 'NDIS Services | Vitality Community Care',
    description: 'We offer a wide range of NDIS services, designed to help you achieve your goals and live independently.',
    url: 'https://vitalitycommunitycare.com.au/services/ndis',
    images: [
      {
        url: '/images/ndis-og.jpg', // Replace with actual image when available
        width: 1200,
        height: 630,
        alt: 'Vitality Community Care NDIS services',
      },
    ],
  },
};

export default function NDISServicesPage() {
  return (
    <>
      <ServiceStructuredData 
        name="NDIS Services by Vitality Community Care"
        description="Comprehensive NDIS services including daily living support, community participation, accommodation, transport, support coordination, cleaning, and early childhood support. Registered NDIS provider in Melbourne."
        url="https://vitalitycommunitycare.com.au/services/ndis"
        serviceType="Disability Support Service, NDIS Provider"
        areaServed="Victoria, Australia"
      />
      <NDISServicesPageClient />
    </>
  );
} 