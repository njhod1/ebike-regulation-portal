import Link from 'next/link'
import GuideShell from '@/components/guides/GuideShell'
import { ALL_STATES } from '@/data/index.js'

const PATH = '/is-my-ebike-legal'
const TITLE = 'Is My E-Bike Legal in Australia? 2026 Rules by State'
const DESCRIPTION = 'Is your e-bike (ebike) legal or illegal? The four checks, what makes an e-bike illegal, and the power and speed limits in every Australian state.'

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
}

const stat = (s, label) => s.stats?.find((x) => x.label === label)?.value

export default function Page() {
  return (
    <GuideShell
      path={PATH}
      title={TITLE}
      name="Is my e-bike legal in Australia?"
      description={DESCRIPTION}
      intro="A legal e-bike (also written ebike, or electric bike) is treated like a bicycle. An illegal one is treated as an unregistered motor vehicle. Here is how to tell which one you have."
    >
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">The four checks</h2>
        <ol className="list-decimal pl-5 space-y-3 text-slate-800 leading-relaxed">
          <li><strong>Pedals.</strong> It has working pedals, and the motor assists while you pedal.</li>
          <li><strong>Power.</strong> The motor is rated at no more than 250W continuous power. NSW also allows a 500W class until 28 Feb 2029.</li>
          <li><strong>Speed.</strong> Motor assistance cuts out at 25 km/h.</li>
          <li><strong>Throttle.</strong> A throttle can only drive the bike up to walking pace (6 km/h). Above that, the motor may only assist while you pedal.</li>
        </ol>
        <p className="mt-4 text-slate-700 leading-relaxed">
          A bike with an EN 15194 certification label is built to meet these rules. Check the continuous rated power, not the peak figure in the advertisement. Transport for NSW says an e-bike over the limits is illegal even if its power or speed is restricted by software.
        </p>
      </section>

      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">What makes an e-bike illegal?</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-800 leading-relaxed">
          <li>A motor above the power limit, or assistance that continues above 25 km/h.</li>
          <li>A throttle that drives the bike above walking pace.</li>
          <li>Modifications, conversion kits or &quot;unlock&quot; modes that remove the limits.</li>
          <li>No working pedals, or a petrol motor.</li>
        </ul>
        <p className="mt-4 text-slate-700 leading-relaxed">
          An illegal e-bike is treated as an unregistered motor vehicle, so it cannot legally be ridden on public roads or paths and the rider can be fined. In NSW and Queensland, police can seize illegal e-bikes and they can be destroyed. See <Link href="/illegal-ebike-penalties" className="text-blue-700 hover:underline font-bold">illegal e-bike penalties</Link>.
        </p>
      </section>

      <section className="mb-8" aria-labelledby="by-state">
        <h2 id="by-state" className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Power and speed limits by state</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ALL_STATES.map((s) => (
            <li key={s.slug} className="bg-white border border-slate-200 rounded-xl p-4">
              <Link href={`/${s.slug}`} className="font-black text-blue-700 hover:underline">{s.name}</Link>
              <p className="text-sm text-slate-800 mt-1">Maximum power: <strong>{stat(s, 'Max Power')}</strong></p>
              <p className="text-sm text-slate-800">Speed cut-off: <strong>{stat(s, 'Speed Cut')}</strong></p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Before you buy</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-800 leading-relaxed">
          <li>Ask for the EN 15194 certification label and the continuous rated power in writing.</li>
          <li>Avoid bikes sold as &quot;unlockable&quot; or &quot;off-road mode&quot;.</li>
          <li>In NSW, a 500W bike is legal to ride only until 28 Feb 2029; an EN 15194 certified bike stays legal after that.</li>
          <li>Buying for a child? Check the <Link href="/ebike-age-limits" className="text-blue-700 hover:underline font-bold">age limits</Link> in your state.</li>
        </ul>
      </section>
    </GuideShell>
  )
}
