import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Our Team | Careers at Vitality Community Care',
  description: 'Explore career opportunities at Vitality Community Care. Join our team of dedicated professionals providing NDIS, aged care, and allied health services in Melbourne.',
  keywords: [
    'NDIS careers', 
    'aged care jobs', 
    'disability support careers', 
    'allied health positions',
    'healthcare jobs Melbourne'
  ],
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 