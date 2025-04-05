import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Make a Referral | Vitality Community Care',
  description: 'Refer a participant to Vitality Community Care for NDIS and aged care services. Quick and easy online referral process.',
  openGraph: {
    title: 'Refer to Vitality Community Care | NDIS & Aged Care Provider',
    description: 'Submit a referral for personalized care services. Help connect individuals with the support they need.',
    url: 'https://vitalitycommunitycare.com.au/referral',
    images: [
      {
        url: '/images/referral-og.jpg', // Replace with actual image when available
        width: 1200,
        height: 630,
        alt: 'Vitality Community Care referral form',
      },
    ],
  },
};

export default function ReferralLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 