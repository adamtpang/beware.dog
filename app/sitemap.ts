import type { MetadataRoute } from 'next'
const BASE = 'https://beware.dog'
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 }]
}
