import React from 'react';

interface LocalBusinessStructuredDataProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  image?: string;
  priceRange?: string;
}

/**
 * Generates LocalBusiness structured data for the organization
 * This helps search engines better understand information about the business
 */
export function LocalBusinessStructuredData({
  name = 'Vitality Community Care',
  description = 'Providing personalized NDIS, aged care, and allied health services in Australia.',
  url = 'https://vitalitycommunitycare.com.au',
  telephone = '+61 1300 395 852',
  address = {
    streetAddress: '123 Community Street',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    postalCode: '3000',
    addressCountry: 'AU',
  },
  geo = {
    latitude: -37.8136,
    longitude: 144.9631,
  },
  openingHours = [
    'Monday-Friday 09:00-17:00',
    'Saturday 10:00-14:00',
    'Sunday Closed',
  ],
  image = 'https://vitalitycommunitycare.com.au/images/logo.jpg',
  priceRange = '$$',
}: LocalBusinessStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name,
    description,
    url,
    telephone,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...geo,
    },
    openingHoursSpecification: openingHours.map((hours) => {
      const [days, timeRange] = hours.split(' ');
      const [open, close] = timeRange ? timeRange.split('-') : ['', ''];
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: days.split('-').map((day) => day),
        opens: open,
        closes: close,
      };
    }),
    image,
    priceRange,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface ServiceStructuredDataProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  serviceType?: string;
  areaServed?: string;
}

/**
 * Generates Service structured data
 * Use this on service pages to improve their visibility in search results
 */
export function ServiceStructuredData({
  name,
  description,
  url,
  provider = 'Vitality Community Care',
  serviceType = 'Healthcare Service',
  areaServed = 'Victoria, Australia',
}: ServiceStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    serviceType,
    areaServed,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface FAQStructuredDataProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * Generates FAQ structured data
 * Use this on pages with frequently asked questions to potentially get rich results
 */
export function FAQStructuredData({ questions }: FAQStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 