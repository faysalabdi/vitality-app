import { Metadata } from 'next';
import { LocalBusinessStructuredData } from '@/components/common/StructuredData';
import ContactUsPageClient from '@/components/contact/ContactUsPageClient';

// Server Component: Handles Metadata and renders Client Component

// Metadata export
export const metadata: Metadata = {
  title: 'Contact Us | Vitality Community Care',
  description: 'Get in touch with Vitality Community Care. Contact us for NDIS and aged care services in Melbourne, Victoria. Phone: 1300 395 852.',
  openGraph: {
    title: 'Contact Vitality Community Care | NDIS & Aged Care Provider',
    description: 'Reach out to our team for personalized care services. Multiple ways to contact us - phone, email, or visit our Melbourne office.',
    url: 'https://vitalitycommunitycare.com.au/contact-us',
    images: [
      {
        url: '/images/contact-us-og.jpg', // Replace with actual image when available
        width: 1200,
        height: 630,
        alt: 'Vitality Community Care contact information',
      },
    ],
  },
};

export default function ContactUsPage() {
  return (
    <>
      <LocalBusinessStructuredData 
        name="Vitality Community Care"
        description="Contact Vitality Community Care for NDIS and aged care services in Melbourne, Victoria. Our team is available via phone, email, or in-person at our Melbourne office."
        url="https://vitalitycommunitycare.com.au/contact-us"
        telephone="+61 1300 395 852"
        address={{
          streetAddress: "Corporate One, 84 Hotham St",
          addressLocality: "Preston",
          addressRegion: "VIC",
          postalCode: "3072",
          addressCountry: "AU",
        }}
        openingHours={[
          "Monday-Sunday 09:00-17:00",
        ]}
      />
      <ContactUsPageClient />
    </>
  );
} 