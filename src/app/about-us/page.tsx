import { Metadata } from 'next';
import { LocalBusinessStructuredData } from '@/components/common/StructuredData';
import AboutUsPageClient from '@/components/about/AboutUsPageClient'; // Import client component

// Server Component: Handles Metadata and renders Client Component

// Metadata export
export const metadata: Metadata = {
  title: 'About Us | Vitality Community Care',
  description: 'Learn about Vitality Community Care\'s mission, values, and dedicated team. We provide compassionate NDIS and aged care services across Victoria.',
  openGraph: {
    title: 'About Vitality Community Care | Our Mission & Values',
    description: 'Founded in 2015, Vitality Community Care is committed to providing personalized care that respects each individual\'s dignity and uniqueness.',
    url: 'https://vitalitycommunitycare.com.au/about-us',
    images: [
      {
        url: '/images/about-us-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Vitality Community Care team',
      },
    ],
  },
};

export default function AboutUsPage() {
  return (
    <>
      {/* Render structured data here if it needs to be server-rendered */}
      <LocalBusinessStructuredData 
        name="Vitality Community Care"
        description="Vitality Community Care provides personalized NDIS, aged care, and allied health services in Australia. Established in 2015, we're committed to empowering individuals to live their best lives through compassionate care."
        url="https://vitalitycommunitycare.com.au/about-us"
        telephone="+61 1300 395 852"
        address={{
          streetAddress: "123 Community Street",
          addressLocality: "Melbourne",
          addressRegion: "VIC",
          postalCode: "3000",
          addressCountry: "AU",
        }}
      />
      {/* Render the client component containing the page UI */}
      <AboutUsPageClient />
    </>
  );
} 