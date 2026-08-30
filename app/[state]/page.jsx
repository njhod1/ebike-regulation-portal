import { ALL_STATES, STATE_SLUGS } from '@/data/index.js'
import { notFound } from 'next/navigation'
import StatePage from '@/components/StatePage'
import { SITE_URL } from '@/lib/site'

const BASE_URL = SITE_URL

export async function generateStaticParams() {
  return STATE_SLUGS.map(slug => ({ state: slug }))
}

export async function generateMetadata({ params }) {
  const { state } = await params
  const stateData = ALL_STATES.find(s => s.slug === state)
  if (!stateData) return {}
  const { seo } = stateData
  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: { canonical: seo.canonicalPath },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonicalPath,
      images: [{ url: seo.ogImage ?? '/og-preview.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
  }
}

function StateJsonLd({ stateData }) {
  const { seo, name } = stateData
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: seo.title,
    description: seo.description,
    url: `${BASE_URL}${seo.canonicalPath}`,
    inLanguage: 'en-AU',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: name, item: `${BASE_URL}${seo.canonicalPath}` },
      ],
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function StateFaqJsonLd({ quiz }) {
  if (!quiz?.length) return null
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: quiz.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.info },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default async function Page({ params }) {
  const { state } = await params
  const stateData = ALL_STATES.find(s => s.slug === state)
  if (!stateData) notFound()
  return (
    <>
      <StateJsonLd stateData={stateData} />
      <StateFaqJsonLd quiz={stateData.quiz} />
      <StatePage stateData={stateData} />
    </>
  )
}
