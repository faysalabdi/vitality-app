import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vitalitycommunitycare.com.au';
  
  // Define routes for the sitemap
  const routes = [
    {
      url: '/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: '/about-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/contact-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/referral',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // NDIS pages
    {
      url: '/ndis',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/ndis/daily-living',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: '/ndis/community-participation',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: '/ndis/accommodation',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: '/ndis/transport',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: '/ndis/support-coordination',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: '/ndis/cleaning',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: '/ndis/early-childhood',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Aged Care pages
    {
      url: '/aged-care',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/aged-care/home-care-package',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: '/aged-care/chsp',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: '/aged-care/private-care',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Allied Health pages
    {
      url: '/allied-health',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/allied-health/physiotherapy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: '/allied-health/behaviour-support',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: '/allied-health/psychology',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: '/allied-health/rehabilitation-counsellor',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: '/allied-health/dietitian',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: route.priority,
  }));
} 