import { Metadata } from 'next'; // Keep Metadata if needed
import CareersPageClient from '@/components/careers/CareersPageClient'; // Import client component

// Server Component: Handles Metadata (if any) and renders Client Component

// Define metadata for the page if needed
export const metadata: Metadata = {
  title: 'Careers | Vitality Community Care',
  description: 'Join the Vitality Community Care team! Explore career opportunities in NDIS, aged care, and allied health support across Victoria.',
  // Add other relevant metadata (keywords, openGraph, etc.) if desired
};

export default function CareersPage() {
  return <CareersPageClient />;
} 