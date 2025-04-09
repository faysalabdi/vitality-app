import { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/common/StructuredData';
import AlliedHealthServicesPageClient from '@/components/services/AlliedHealthServicesPageClient';

// Server Component: Handles Metadata and renders Client Component

// Metadata export
export const metadata: Metadata = {
  title: 'Allied Health Services | Vitality Community Care',
  description: 'Professional allied health services including physiotherapy, behavior support, psychology, rehabilitation counselling, and dietitian services. Expert support for NDIS participants in Melbourne.',
  keywords: [
    'allied health services Melbourne', 
    'NDIS physiotherapy', 
    'behavior support services', 
    'psychology NDIS',
    'dietitian services Melbourne'
  ],
  openGraph: {
    title: 'Allied Health Services | Vitality Community Care',
    description: 'Expert allied health services including physiotherapy, behavior support, psychology, rehabilitation counselling, and dietitian services. Supporting your health and wellbeing.',
    url: 'https://vitalitycommunitycare.com.au/services/allied-health',
    images: [
      {
        url: '/images/allied-health-og.jpg', // Replace with actual image when available
        width: 1200,
        height: 630,
        alt: 'Vitality Community Care allied health services',
      },
    ],
  },
};

export default function AlliedHealthServicesPage() {
  return (
    <>
      <ServiceStructuredData 
        name="Allied Health Services by Vitality Community Care"
        description="Professional allied health services including physiotherapy, behavior support, psychology, rehabilitation counselling, and dietitian services. Our qualified professionals provide personalized care to enhance your health and wellbeing."
        url="https://vitalitycommunitycare.com.au/services/allied-health"
        serviceType="Allied Health Service, Healthcare Service"
        areaServed="Victoria, Australia"
      />
      <AlliedHealthServicesPageClient />
    </>
  );
} 