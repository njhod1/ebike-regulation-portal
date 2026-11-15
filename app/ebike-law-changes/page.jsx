import Link from 'next/link'
import GuideShell from '@/components/guides/GuideShell'
import { ALL_STATES } from '@/data/index.js'
import { parseKeyDate } from '@/lib/dates'
import { LAST_REVIEWED } from '@/lib/site'

const PATH = '/ebike-law-changes'
const TITLE = 'E-Bike Law Changes in Australia: 2026 Timeline'
const DESCRIPTION = 'A dated timeline of e-bike law changes in every Australian state and territory in 2026, from power limits and age rules to seizure powers.'

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
}

const dot = { amber: 'bg-amber-400', red: 'bg-red-500', slate: 'bg-slate-400' }

export default function Page() {
  const now = Date.parse(`${LAST_REVIEWED}T00:00:00Z`)
  const items = ALL_STATES.flatMap((s) =>
    (s.keyDates || []).map((k) => ({ state: s, ...k, ts: parseKeyDate(k.date) }))
  ).sort((a, b) => b.ts - a.ts)

  return (
    <GuideShell
      path={PATH}
      title={TITLE}
      name="E-bike law changes in Australia: 2026 timeline"
      description={DESCRIPTION}
      intro="Key dates by state, newest first. Dates after the review date below are upcoming changes. Open a state page for the full rules and the latest enforcement news."
    >
      <ol className="relative border-l-2 border-amber-400 space-y-6 ml-2">
        {items.map((it, i) => (
          <li key={i} className="pl-5">
            <span className={`absolute -left-[7px] mt-1 w-3 h-3 rounded-full ${dot[it.color] || 'bg-slate-400'}`}></span>
            <p className="text-xs font-black uppercase tracking-widest text-slate-700">
              {it.date} ·{' '}
              <Link href={`/${it.state.slug}`} className="text-blue-700 hover:underline">{it.state.name}</Link>
              {it.ts > now && <span className="ml-2 bg-amber-100 text-amber-900 px-2 py-0.5 rounded">Upcoming</span>}
            </p>
            <p className="text-sm sm:text-base text-slate-800 mt-1 leading-relaxed" dangerouslySetInnerHTML={{ __html: it.text }} />
          </li>
        ))}
      </ol>
    </GuideShell>
  )
}
