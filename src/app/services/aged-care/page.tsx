import { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/common/StructuredData';
import AgedCareServicesPageClient from '@/components/services/AgedCareServicesPageClient';

// Server Component: Handles Metadata and renders Client Component

// Metadata export
export const metadata: Metadata = {
  title: 'Aged Care Services | Vitality Community Care',
  description: 'Quality aged care services in Melbourne including Home Care Packages, CHSP, and private care options. Personalized support for seniors to maintain independence.',
  keywords: [
    'aged care services Melbourne', 
    'home care packages', 
    'Commonwealth Home Support Programme', 
    'senior care services',
    'in-home care for elderly'
  ],
  openGraph: {
    title: 'Aged Care Services | Vitality Community Care',
    description: 'Quality care services for seniors, ensuring comfort, dignity, and well-being in their golden years.',
    url: 'https://vitalitycommunitycare.com.au/services/aged-care',
    images: [
      {
        url: '/images/aged-care-og.jpg', // Replace with actual image when available
        width: 1200,
        height: 630,
        alt: 'Vitality Community Care aged care services',
      },
    ],
  },
};

export default function AgedCareServicesPage() {
  return (
    <>
      <ServiceStructuredData 
        name="Aged Care Services by Vitality Community Care"
        description="Quality aged care services including Home Care Packages, Commonwealth Home Support Programme (CHSP), and private care options. We provide personalized support to help seniors maintain independence and quality of life."
        url="https://vitalitycommunitycare.com.au/services/aged-care"
        serviceType="Aged Care Service, Home Care Service"
        areaServed="Victoria, Australia"
      />
      <AgedCareServicesPageClient />
    </>
  );
} 