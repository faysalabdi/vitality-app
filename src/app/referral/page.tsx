import { Metadata } from 'next';
import ReferralPageClient from '@/components/referral/ReferralPageClient';

// Server Component: Handles Metadata and renders Client Component

// Metadata export
export const metadata: Metadata = {
  title: 'Make a Referral | Vitality Community Care',
  description: 'Refer a participant to Vitality Community Care. Submit referral details online for NDIS and aged care services in Victoria.',
  // Add other relevant metadata (keywords, openGraph, etc.) if desired
};

export default function ReferralPage() {
  return <ReferralPageClient />;
} 