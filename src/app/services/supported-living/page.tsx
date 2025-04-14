import { Metadata } from 'next';
import { ServiceStructuredData } from '@/components/common/StructuredData';
import SupportedLivingPageClient from '@/components/services/SupportedLivingPageClient';

// Server Component: Handles Metadata and renders Client Component

// Metadata export
export const metadata: Metadata = {
  title: 'Supported Independent Living (SIL) | Vitality Community Care',
  description: 'Comprehensive Supported Independent Living (SIL) services in Melbourne. We help individuals live independently with tailored support plans.',
  keywords: [
    'Supported Independent Living Melbourne',
    'SIL services',
    'NDIS SIL provider',
    'independent living support',
    'disability housing support'
  ],
  openGraph: {
    title: 'Supported Independent Living (SIL) | Vitality Community Care',
    description: 'Empowering individuals with personalized SIL services for greater independence and quality of life.',
    url: 'https://vitalitycommunitycare.com.au/services/supported-living',
    images: [
      {
        url: '/icons/7061505.jpg',
        width: 1200,
        height: 630,
        alt: 'Vitality Community Care Supported Independent Living services',
      },
    ],
  },
};

export default function SupportedLivingPage() {
  return (
    <>
      <ServiceStructuredData
        name="Supported Independent Living (SIL) by Vitality Community Care"
        description="Comprehensive SIL services designed to foster independence and enhance quality of life for individuals requiring support."
        url="https://vitalitycommunitycare.com.au/services/supported-living"
        serviceType="Supported Independent Living, Disability Support Service"
        areaServed="Victoria, Australia"
      />
      <SupportedLivingPageClient />
    </>
  );
} 