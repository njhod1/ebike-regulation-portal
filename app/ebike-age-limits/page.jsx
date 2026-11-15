import Link from 'next/link'
import GuideShell from '@/components/guides/GuideShell'
import { ALL_STATES } from '@/data/index.js'

const PATH = '/ebike-age-limits'
const TITLE = 'E-Bike Age Limits in Australia by State (2026)'
const DESCRIPTION = 'Can my child ride an e-bike? Minimum ages and footpath rules for every Australian state and territory, and what parents risk if a child rides an illegal e-bike.'

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
}

const ageText = (s) =>
  s.minimumAge?.notes ||
  (s.slug === 'nsw' ? 'No minimum age is in force in NSW. A minimum age is under consideration.' : 'No minimum age specified.')

export default function Page() {
  return (
    <GuideShell
      path={PATH}
      title={TITLE}
      name="E-bike age limits in Australia: can my child ride one?"
      description={DESCRIPTION}
      intro="Most states have no general minimum age for riding a legal e-bike. Western Australia and Queensland do, and NSW is considering one. Rules for illegal e-bikes are a different matter."
    >
      <section className="mb-8" aria-labelledby="age-by-state">
        <h2 id="age-by-state" className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Age and footpath rules by state</h2>
        <ul className="space-y-3">
          {ALL_STATES.map((s) => (
            <li key={s.slug} className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
              <Link href={`/${s.slug}`} className="font-black text-lg text-blue-700 hover:underline">{s.name}</Link>
              <p className="text-sm sm:text-base text-slate-800 mt-2"><strong>Minimum age:</strong> {ageText(s)}</p>
              <p className="text-sm sm:text-base text-slate-800 mt-1"><strong>Footpaths:</strong> {s.footpathRule?.notes}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-red-700 text-white rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-black uppercase tracking-tighter mb-3">If a child rides an illegal e-bike</h2>
        <p className="leading-relaxed mb-3">
          If an underage rider seriously injures someone on an illegal e-bike, care costs can run into millions, and the injured person&apos;s lawyers can look to the parents, especially if they bought the bike or let the child ride it. Home insurance may not cover it.
        </p>
        <p className="leading-relaxed">
          In Queensland, parents can be fined if a child under 16 rides an illegal e-bike or PMD (from 1 Jul 2026), or rides one underage or unlicensed (from 31 Aug 2026). Check the <Link href="/is-my-ebike-legal" className="underline font-bold">four legality checks</Link> before you buy.
        </p>
      </section>
    </GuideShell>
  )
}
