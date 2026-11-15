import { ALL_STATES } from '@/data/index.js'
import { SITE_URL as BASE_URL, LAST_REVIEWED } from '@/lib/site'
import { GUIDES } from '@/lib/guides'

export default function sitemap() {
  const lastModified = new Date(`${LAST_REVIEWED}T00:00:00Z`)
  return [
    { url: BASE_URL, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    ...ALL_STATES.map(s => ({
      url: `${BASE_URL}${s.seo.canonicalPath}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
    ...GUIDES.map(g => ({
      url: `${BASE_URL}${g.path}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    { url: `${BASE_URL}/about`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
  ]
}
