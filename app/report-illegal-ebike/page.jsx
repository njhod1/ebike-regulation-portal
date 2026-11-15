import Link from 'next/link'
import GuideShell from '@/components/guides/GuideShell'
import { ALL_STATES } from '@/data/index.js'

const PATH = '/report-illegal-ebike'
const TITLE = 'How to Report an Illegal E-Bike or Dangerous Rider (2026)'
const DESCRIPTION = 'Who to contact about an illegal or dangerously ridden e-bike in each Australian state: police non-emergency lines, online reports, Crime Stoppers and consumer affairs.'

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
}

export default function Page() {
  return (
    <GuideShell
      path={PATH}
      title={TITLE}
      name="How to report an illegal or dangerous e-bike"
      description={DESCRIPTION}
      intro="Seen a rider doing wheelies, a bike that is clearly over the limits, or a shop selling illegal e-bikes? Here is who to contact in each state."
    >
      <div className="flex items-start gap-3 p-4 bg-red-50 border-l-4 border-red-600 rounded-r-lg mb-6">
        <p className="text-red-900 font-bold">In immediate danger, or for a crime in progress, call <strong>000</strong>.</p>
      </div>

      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-3">Want to stay anonymous?</h2>
        <p className="text-slate-800 leading-relaxed">
          Call Crime Stoppers on <strong>1800 333 000</strong>, a national anonymous tip line. If it is safe, note the place, the time and a description of the rider and bike.
        </p>
      </section>

      <section aria-labelledby="by-state">
        <h2 id="by-state" className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Contacts by state</h2>
        <ul className="space-y-3">
          {ALL_STATES.map((s) => {
            const r = s.reporting
            if (!r) return null
            return (
              <li key={s.slug} className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
                <Link href={`/${s.slug}`} className="font-black text-lg text-blue-700 hover:underline">{s.name}</Link>
                <p className="text-sm sm:text-base text-slate-800 mt-2">
                  <strong>Police (non-emergency):</strong>{' '}
                  {r.policeNonEmergency ? <strong>{r.policeNonEmergency}</strong> : 'see the online form'}
                  {r.policeOnlineForm && (
                    <> · <a href={r.policeOnlineForm.url} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline font-bold">{r.policeOnlineForm.label}</a></>
                  )}
                </p>
                {r.fairTrading && (
                  <p className="text-sm sm:text-base text-slate-800 mt-1">
                    <strong>Shop selling non-compliant e-bikes:</strong>{' '}
                    <a href={r.fairTrading.url} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline font-bold">{r.fairTrading.label}</a>
                    {r.fairTrading.phone && <> · {r.fairTrading.phone}</>}
                  </p>
                )}
              </li>
            )
          })}
        </ul>
      </section>
    </GuideShell>
  )
}
