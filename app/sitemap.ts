import type { MetadataRoute } from 'next'
const BASE = 'https://beware.dog'
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/contact', '/privacy'].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.7,
  }))
}
