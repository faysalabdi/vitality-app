import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/api/',
        '/private/',
        '/*.json$',
      ],
    },
    sitemap: 'https://vitalitycommunitycare.com.au/sitemap.xml',
  };
} 