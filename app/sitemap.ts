import type { MetadataRoute } from 'next'
import { spotlights } from '../lib/spotlights'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.athenamea.com'
  const now = new Date().toISOString()

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Service pages
  const services = [
    'market-entry-strategy',
    'talent-discovery',
    'compensation-benchmarking',
    'competitive-intelligence',
    'hr-due-diligence',
    'strategic-consulting',
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts
  const blogSlugs = [
    'regulatory-pitfalls-india-2026',
    'uae-free-zone-vs-mainland-2026',
    'uae-free-zone-vs-mainland',
    'india-market-entry-guide-2025',
    'hiring-leaders-india-middle-east',
    'compensation-benchmarking-trends-2025',
  ]

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/insights/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Spotlight pages (from data)
  const spotlightPages: MetadataRoute.Sitemap = spotlights.map((s) => ({
    url: `${baseUrl}/insights/spotlight/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...corePages, ...servicePages, ...blogPages, ...spotlightPages]
}
