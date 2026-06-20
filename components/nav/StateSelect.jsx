'use client'
import { useRouter } from 'next/navigation'
import { ALL_STATES } from '@/data/index.js'

export default function StateSelect({ currentSlug }) {
  const router = useRouter()
  return (
    <select
      className="bg-slate-800 text-white text-sm rounded-lg px-3 py-2 border border-slate-700 focus:outline-none focus:border-amber-500"
      value={currentSlug || ''}
      onChange={(e) => { if (e.target.value) router.push(`/${e.target.value}`) }}
    >
      <option value="">All States</option>
      {ALL_STATES.map(s => (
        <option key={s.slug} value={s.slug}>{s.name}</option>
      ))}
    </select>
  )
}
