'use client'
import { useState } from 'react'
import Link from 'next/link'

const POWER = [
  { v: 'low', label: '250W or less' },
  { v: 'mid', label: '251W to 500W' },
  { v: 'high', label: 'Over 500W' },
  { v: 'unknown', label: "I don't know" },
]
const SPEED = [
  { v: 'ok', label: '25 km/h or lower' },
  { v: 'over', label: 'Above 25 km/h' },
  { v: 'unknown', label: "I don't know" },
]
const THROTTLE = [
  { v: 'none', label: 'No throttle' },
  { v: 'walk', label: 'Throttle only up to 6 km/h (walk assist)' },
  { v: 'over', label: 'Throttle drives the bike above 6 km/h' },
  { v: 'unknown', label: "I don't know" },
]
const MODIFIED = [
  { v: 'no', label: 'Never modified or unlocked' },
  { v: 'yes', label: 'Modified, converted or an unlock mode has been used' },
  { v: 'unknown', label: "I don't know (e.g. second-hand)" },
]

function Group({ legend, name, options, value, onChange }) {
  return (
    <fieldset className="mb-5">
      <legend className="font-bold text-slate-900 mb-2">{legend}</legend>
      <div className="space-y-2">
        {options.map((o) => (
          <label key={o.v} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 cursor-pointer has-[:checked]:border-amber-600 has-[:checked]:bg-amber-50">
            <input type="radio" name={name} value={o.v} checked={value === o.v} onChange={() => onChange(o.v)} className="mt-1 h-4 w-4 accent-amber-700" />
            <span className="text-sm sm:text-base text-slate-800">{o.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function LegalityChecker({ states }) {
  const [slug, setSlug] = useState('')
  const [power, setPower] = useState('')
  const [speed, setSpeed] = useState('')
  const [throttle, setThrottle] = useState('')
  const [modified, setModified] = useState('')
  const [result, setResult] = useState(null)

  const ready = slug && power && speed && throttle && modified

  function check() {
    const st = states.find((s) => s.slug === slug)
    const reasons = []
    const unknowns = []

    const overPower = power === 'high' || (power === 'mid' && st.limitW < 500)
    if (overPower) reasons.push(`The motor is over the ${st.limitW}W limit that applies in ${st.name}.`)
    if (power === 'unknown') unknowns.push('the motor\'s continuous rated power (check the label or ask the seller in writing)')
    if (speed === 'over') reasons.push('Motor assistance continues above 25 km/h.')
    if (speed === 'unknown') unknowns.push('the speed at which assistance cuts out')
    if (throttle === 'over') reasons.push('A throttle that drives the bike above walking pace (6 km/h) is not allowed.')
    if (throttle === 'unknown') unknowns.push('whether the throttle works above 6 km/h')
    if (modified === 'yes') reasons.push('Modified, converted or unlocked bikes are not legal e-bikes, even if the motor was originally rated within the limits.')
    if (modified === 'unknown') unknowns.push('whether the bike has been modified or unlocked')

    const tolerated = !overPower && power === 'mid' && st.limitW > 250
    const verdict = reasons.length ? 'illegal' : unknowns.length ? 'unsure' : 'legal'
    setResult({ verdict, reasons, unknowns, st, tolerated })
  }

  const style = {
    legal: 'bg-emerald-50 border-emerald-700 text-emerald-950',
    illegal: 'bg-red-50 border-red-700 text-red-950',
    unsure: 'bg-amber-50 border-amber-700 text-amber-950',
  }
  const heading = {
    legal: 'Likely legal as you describe it',
    illegal: 'Likely illegal as you describe it',
    unsure: "We can't tell yet",
  }

  return (
    <section id="checker" className="bg-white border-2 border-amber-600 rounded-2xl p-5 sm:p-8 mb-8" aria-labelledby="checker-title">
      <h2 id="checker-title" className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-slate-900 mb-1">Quick check: is my e-bike legal?</h2>
      <p className="text-slate-700 mb-5">Answer five questions. This is general information only, not legal advice.</p>

      <div className="mb-5">
        <label htmlFor="state" className="block font-bold text-slate-900 mb-2">Which state or territory will it be ridden in?</label>
        <select id="state" value={slug} onChange={(e) => setSlug(e.target.value)} className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-base text-slate-900">
          <option value="">Choose…</option>
          {states.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
        </select>
      </div>

      <Group legend="Motor power (continuous rated, not peak)" name="power" options={POWER} value={power} onChange={setPower} />
      <Group legend="Motor assistance cuts out at" name="speed" options={SPEED} value={speed} onChange={setSpeed} />
      <Group legend="Throttle" name="throttle" options={THROTTLE} value={throttle} onChange={setThrottle} />
      <Group legend="Has the bike been modified or unlocked?" name="modified" options={MODIFIED} value={modified} onChange={setModified} />

      <button type="button" onClick={check} disabled={!ready} className="bg-slate-900 text-white font-black uppercase tracking-wide rounded-full px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800">
        Check my e-bike
      </button>
      {!ready && <p className="text-sm text-slate-600 mt-2">Answer every question to see a result.</p>}

      <div role="status" aria-live="polite" className="mt-6">
        {result && (
          <div className={`border-l-4 rounded-r-xl p-4 sm:p-5 ${style[result.verdict]}`}>
            <h3 className="text-lg font-black mb-2">{heading[result.verdict]}</h3>
            {result.reasons.length > 0 && (
              <ul className="list-disc pl-5 space-y-1 mb-3">
                {result.reasons.map((r) => <li key={r}>{r}</li>)}
              </ul>
            )}
            {result.reasons.length > 0 && (
              <p className="mb-3">An illegal e-bike is treated as an unregistered motor vehicle. See <Link href="/illegal-ebike-penalties" className="underline font-bold">penalties and seizure</Link>.</p>
            )}
            {result.reasons.length === 0 && result.unknowns.length > 0 && (
              <>
                <p className="mb-2">Nothing you told us breaks the rules, but we need to know:</p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  {result.unknowns.map((u) => <li key={u}>{u}</li>)}
                </ul>
              </>
            )}
            {result.verdict === 'legal' && (
              <p className="mb-3">Nothing you described breaks the rules we check for {result.st.name}. Keep the EN 15194 label and receipt.</p>
            )}
            {result.tolerated && result.reasons.length === 0 && (
              <p className="mb-3 font-bold">A 251W to 500W motor is tolerated in {result.st.name} for now, but it is not the standard. See the note below.</p>
            )}
            <p className="font-bold mb-1">Also check in {result.st.name}:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              {result.st.powerNote && <li>{result.st.powerNote}</li>}
              {result.st.enText && <li>{result.st.enText}</li>}
              {result.st.ageNote && <li>{result.st.ageNote}</li>}
            </ul>
            <p>
              Full rules: <Link href={`/${result.st.slug}`} className="underline font-bold">{result.st.name}</Link>. Buying for a child? See <Link href="/ebike-age-limits" className="underline font-bold">age limits</Link>. Police and courts decide individual cases.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
