import Link from 'next/link'
import GuideShell from '@/components/guides/GuideShell'
import { ALL_STATES } from '@/data/index.js'

const PATH = '/illegal-ebike-penalties'
const TITLE = 'Illegal E-Bike Penalties & Seizure in Australia (2026)'
const DESCRIPTION = 'What happens if an illegal e-bike is caught? Fines, unregistered and unlicensed offences, and police seizure powers in each Australian state.'

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
}

export default function Page() {
  const seizureStates = ALL_STATES.filter((s) => s.seizure?.show)
  return (
    <GuideShell
      path={PATH}
      title={TITLE}
      name="Illegal e-bike penalties in Australia"
      description={DESCRIPTION}
      intro="An e-bike over the power or speed limits is treated as an unregistered motor vehicle. What that costs depends on your state, and in some states police can seize the bike."
    >
      {seizureStates.length > 0 && (
        <section className="mb-8" aria-labelledby="seizure">
          <h2 id="seizure" className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Seizure powers</h2>
          <ul className="space-y-3">
            {seizureStates.map((s) => (
              <li key={s.slug} className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
                <Link href={`/${s.slug}`} className="font-black text-lg text-blue-700 hover:underline">{s.name}</Link>
                <p className="text-sm sm:text-base text-slate-800 mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: s.seizure.description }} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-8" aria-labelledby="fines">
        <h2 id="fines" className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Typical penalties by state</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ALL_STATES.map((s) => (
            <li key={s.slug} className="bg-white border border-slate-200 rounded-xl p-4">
              <Link href={`/${s.slug}`} className="font-black text-blue-700 hover:underline">{s.name}</Link>
              <ul className="mt-2 space-y-1">
                {s.penalties?.map((p) => (
                  <li key={p.label} className="text-sm text-slate-800">
                    <strong>{p.label}:</strong> {p.cost}
                    <span className="text-slate-600"> — {p.desc}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-600 mt-3">Amounts change. Check your state page and official sources for current figures.</p>
      </section>

      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-3">Is it really illegal?</h2>
        <p className="text-slate-800 leading-relaxed">
          Penalties apply to e-bikes that fail the legal definition. Use the <Link href="/is-my-ebike-legal" className="text-blue-700 hover:underline font-bold">four checks</Link> to see where yours stands, and read what parents risk on the <Link href="/ebike-age-limits" className="text-blue-700 hover:underline font-bold">age limits</Link> page.
        </p>
      </section>
    </GuideShell>
  )
}
