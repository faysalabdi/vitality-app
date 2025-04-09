import { Metadata } from 'next';
import FAQPageClient from '@/components/faq/FAQPageClient'; // Import the client component

// Export metadata (Server Component responsibility)
export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Vitality Community Care',
  description: 'Find answers to common questions about our NDIS, aged care, and allied health services. Learn about eligibility, funding, service options, and more.',
  keywords: [
    'NDIS FAQs', 
    'aged care questions', 
    'disability support FAQ', 
    'allied health services questions',
    'NDIS funding help'
  ],
};

// The main page component now just renders the client component
export default function FAQPage() {
  return <FAQPageClient />;
} 