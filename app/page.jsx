import Link from 'next/link'
import { ALL_STATES } from '@/data/index.js'

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AU E-Bike Laws',
  url: 'https://australia-ebike-laws.netlify.app',
  description: 'Complete guide to e-bike regulations across all Australian states and territories.',
  inLanguage: 'en-AU',
}

export const metadata = {
  title: 'Australian E-Bike Laws 2026 — All States & Territories',
  description: 'Complete guide to e-bike regulations, power limits, penalties, and compliance requirements across all 8 Australian states and territories.',
  alternates: { canonical: 'https://australia-ebike-laws.netlify.app' },
  openGraph: {
    title: 'Australian E-Bike Laws 2026 — All States & Territories',
    description: 'Complete guide to e-bike regulations across all 8 Australian states and territories.',
    url: 'https://australia-ebike-laws.netlify.app',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <div className="bg-red-700 text-white py-3 text-center font-bold px-4 text-xs sm:text-sm print:hidden">
        250W LIMIT NATIONAL STANDARD · CHECK YOUR STATE FOR LOCAL ENFORCEMENT RULES
      </div>

      <main className="max-w-6xl mx-auto p-4 sm:p-6">
        <header className="mb-12 text-center py-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-none uppercase">
            Australian <span className="text-amber-500">E-Bike</span> Laws 2026
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-2">
            Select your state or territory to see the current e-bike regulations, penalties, and compliance requirements.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {ALL_STATES.map((state) => (
            <Link
              key={state.slug}
              href={`/${state.slug}`}
              className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:border-amber-500 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-black text-amber-500 uppercase">{state.abbreviation}</span>
              </div>
              <h2 className="font-bold text-slate-800 text-lg leading-tight mb-2 group-hover:text-slate-900">{state.name}</h2>
              <p className="text-xs text-slate-500 leading-snug">{state.summary}</p>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">View Regulations →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-black uppercase tracking-tighter text-amber-500 mb-4">National Standard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-black text-white uppercase text-base mb-1">250W Maximum</p>
              <p className="text-slate-400">Motor power limit applies across all states and territories.</p>
            </div>
            <div>
              <p className="font-black text-white uppercase text-base mb-1">25 km/h Cut-off</p>
              <p className="text-slate-400">Motor assistance must cut out at 25 km/h in all jurisdictions.</p>
            </div>
            <div>
              <p className="font-black text-white uppercase text-base mb-1">EN 15194 Standard</p>
              <p className="text-slate-400">European safety standard required for compliant e-bikes nationwide.</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <a
            href="/ebike_national_flyer.pdf"
            download
            className="inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-full font-black uppercase text-sm hover:bg-emerald-700 transition-all shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download National Guide (PDF)
          </a>
          <p className="mt-3 text-slate-400 text-xs">One-page printable summary covering all states &amp; territories</p>
        </div>

        <footer className="text-center text-slate-400 text-xs pb-10">
          <p>This site provides general information only. Always check official government sources for the latest regulations.</p>
        </footer>
      </main>
    </div>
  )
}
