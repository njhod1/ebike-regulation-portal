import { ALL_STATES } from '@/data/index.js'
import { SITE_URL as BASE_URL } from '@/lib/site'

export default function sitemap() {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    ...ALL_STATES.map(s => ({
      url: `${BASE_URL}${s.seo.canonicalPath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
  ]
}
