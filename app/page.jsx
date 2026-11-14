import Link from 'next/link'
import { ALL_STATES } from '@/data/index.js'
import { SITE_URL } from '@/lib/site'

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AU E-Bike Laws',
  url: SITE_URL,
  description: 'Is your e-bike legal or illegal? E-bike (ebike) rules for every Australian state and territory.',
  inLanguage: 'en-AU',
}

const faqs = [
  {
    q: 'Is my e-bike legal in Australia?',
    a: 'An e-bike (also written ebike) is legal on roads and paths when it has pedals, the motor only assists while you pedal (a throttle can only drive the bike up to walking pace, 6 km/h), the motor is rated at no more than 250W continuous power, and assistance cuts out at 25 km/h. NSW allows a 500W class until 28 Feb 2029. A bike with an EN 15194 certification label is built to meet these rules.',
  },
  {
    q: 'What makes an e-bike illegal?',
    a: 'An e-bike that exceeds the power or speed limits, has a throttle that drives it above walking pace, or has been modified or "unlocked" is not a legal e-bike. It is treated as an unregistered motor vehicle, so it cannot legally be ridden on public roads or paths and the rider can be fined. In NSW and Queensland, police can seize illegal e-bikes and they can be destroyed.',
  },
  {
    q: 'Can my child ride an e-bike?',
    a: 'It depends on your state. Western Australia sets a minimum age of 16. Queensland requires riders to be 16 and hold a learner licence to ride unsupervised, and 12 to 17-year-olds may ride under parental supervision. The other states have no general minimum age for a legal e-bike, and NSW has a minimum age under consideration. Check your state page for footpath and helmet rules.',
  },
  {
    q: 'What if my child injures someone on an illegal e-bike?',
    a: "If an underage rider seriously injures someone on an illegal e-bike, care costs can run into millions, and the injured person's lawyers can look to the parents, especially if they bought the bike or let the child ride it. Home insurance may not cover it. This is general information, not legal advice.",
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export const metadata = {
  title: { absolute: 'Is My E-Bike Legal? Australian E-Bike Laws by State (2026)' },
  description: 'Is your e-bike legal or illegal? 2026 rules for every Australian state: power limits, EN 15194, penalties, seizure powers and what parents risk.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Is My E-Bike Legal? Australian E-Bike Laws by State (2026)',
    description: 'Is your e-bike legal or illegal? 2026 rules for every Australian state: power limits, EN 15194, penalties and what parents risk.',
    url: '/',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="bg-red-700 text-white py-3 text-center font-bold px-4 text-xs sm:text-sm print:hidden">
        250W LIMIT NATIONAL STANDARD (NSW: 500W UNTIL 28 FEB 2029) · CHECK YOUR STATE FOR LOCAL ENFORCEMENT RULES
      </div>

      <main className="max-w-6xl mx-auto p-4 sm:p-6">
        <header className="mb-12 text-center py-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-none uppercase">
            Is your <span className="text-amber-700">e-bike</span> legal?
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-2">
            Australian e-bike (ebike) laws for 2026: what is legal, what is illegal, and what happens if a child rides one. Select your state or territory.
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
                <span className="text-2xl font-black text-amber-700 uppercase">{state.abbreviation}</span>
              </div>
              <h2 className="font-bold text-slate-800 text-lg leading-tight mb-2 group-hover:text-slate-900">{state.name}</h2>
              <p className="text-sm text-slate-500 leading-snug">{state.summary}</p>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">View Regulations →</span>
              </div>
            </Link>
          ))}
        </div>

        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-12" aria-labelledby="quick-answers">
          <h2 id="quick-answers" className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Quick answers: legal or illegal?</h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-bold text-slate-900 mb-1">{f.q}</h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-slate-900 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-black uppercase tracking-tighter text-amber-500 mb-4">National Standard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-black text-white uppercase text-base mb-1">250W Maximum</p>
              <p className="text-slate-400">Motor power limit in every state and territory, except NSW, which allows 500W until 28 Feb 2029.</p>
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
            className="inline-flex items-center gap-3 bg-emerald-700 text-white px-8 py-4 rounded-full font-black uppercase text-sm hover:bg-emerald-800 transition-all shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download National Guide (PDF)
          </a>
          <p className="mt-3 text-slate-600 text-sm">One-page printable summary covering all states &amp; territories</p>
        </div>

        <footer className="text-center text-slate-600 text-sm pb-10">
          <p>This site provides general information only. Always check official government sources for the latest regulations.</p>
          <Link href="/about" className="inline-block mt-2 text-slate-500 hover:text-slate-800 font-bold uppercase tracking-wider">About this site</Link>
        </footer>
      </main>
    </div>
  )
}
