import Link from 'next/link'
import { ALL_STATES } from '@/data/index.js'
import { SITE_URL, LAST_REVIEWED, formatReviewed } from '@/lib/site'
import { GUIDES } from '@/lib/guides'

export default function GuideShell({ path, title, name, description, intro, children }) {
  const url = `${SITE_URL}${path}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    inLanguage: 'en-AU',
    dateModified: LAST_REVIEWED,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name, item: url },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="max-w-4xl mx-auto p-4 sm:p-6 pb-16">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-600 mt-2 mb-6">
          <Link href="/" className="text-blue-700 hover:underline font-bold">Home</Link>
          <span aria-hidden="true"> / </span>
          <span>{name}</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-slate-900 mb-3">{name}</h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{intro}</p>
          <p className="text-sm text-slate-600 mt-3">Information last reviewed {formatReviewed()}.</p>
        </header>

        {children}

        <section className="mt-12" aria-labelledby="state-links">
          <h2 id="state-links" className="text-lg font-black uppercase tracking-tighter text-slate-900 mb-3">Rules for your state</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {ALL_STATES.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="block bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold text-blue-700 hover:border-amber-500">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="more-guides">
          <h2 id="more-guides" className="text-lg font-black uppercase tracking-tighter text-slate-900 mb-3">More guides</h2>
          <ul className="space-y-2">
            {GUIDES.filter((g) => g.path !== path).map((g) => (
              <li key={g.path}>
                <Link href={g.path} className="text-blue-700 hover:underline font-bold">{g.label}</Link>
                <span className="text-sm text-slate-600"> — {g.blurb}</span>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-sm text-slate-600">
          This is general information only, not legal advice. Always check your state&apos;s official transport authority and legislation. <Link href="/about" className="text-blue-700 hover:underline font-bold">About this site</Link>
        </p>
      </main>
    </div>
  )
}
