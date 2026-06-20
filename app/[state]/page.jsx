import { ALL_STATES, STATE_SLUGS } from '@/data/index.js'
import { notFound } from 'next/navigation'
import StatePage from '@/components/StatePage'

export async function generateStaticParams() {
  return STATE_SLUGS.map(slug => ({ state: slug }))
}

export async function generateMetadata({ params }) {
  const { state } = await params
  const stateData = ALL_STATES.find(s => s.slug === state)
  if (!stateData) return {}
  return {
    title: stateData.seo.title,
    description: stateData.seo.description,
    openGraph: {
      title: stateData.seo.title,
      description: stateData.seo.description,
      images: [{ url: stateData.seo.ogImage ?? '/og-preview.png', width: 1200, height: 630 }],
    },
  }
}

export default async function Page({ params }) {
  const { state } = await params
  const stateData = ALL_STATES.find(s => s.slug === state)
  if (!stateData) notFound()
  return <StatePage stateData={stateData} />
}
