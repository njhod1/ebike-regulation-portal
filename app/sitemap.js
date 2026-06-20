import { ALL_STATES } from '@/data/index.js'

const BASE_URL = 'https://nsw-ebike-safety-2026.netlify.app'

export default function sitemap() {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    ...ALL_STATES.map(s => ({
      url: `${BASE_URL}${s.seo.canonicalPath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
  ]
}
