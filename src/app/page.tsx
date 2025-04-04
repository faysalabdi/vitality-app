import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { LocalBusinessStructuredData } from "@/components/common/StructuredData";

// Define metadata for the homepage
export const metadata: Metadata = {
  title: 'Vitality Community Care | NDIS & Aged Care Provider in Melbourne',
  description: 'Vitality Community Care offers personalized NDIS, aged care, and allied health services in Melbourne. Expert support for daily living, community participation, and mental health.',
  keywords: [
    'NDIS provider Melbourne', 
    'aged care services Victoria', 
    'disability support Australia', 
    'community care Melbourne',
    'mental health services NDIS'
  ],
};

import { HeroCarousel } from '@/components/sections/HeroCarousel';
import { IntroSection } from '@/components/sections/IntroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ReferralCTA } from '@/components/sections/ReferralCTA';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { ContactForm } from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <>
      <LocalBusinessStructuredData />
      <HeroCarousel />
      <IntroSection />
      <ServicesSection />
      <ReferralCTA />
      <BenefitsSection />
      <CertificationsSection />
      <ContactForm />
    </>
  );
}
