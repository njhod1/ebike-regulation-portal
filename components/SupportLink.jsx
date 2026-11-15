import { SUPPORT_URL } from '@/lib/site'

export default function SupportLink({ variant = 'text' }) {
  if (!SUPPORT_URL) return null

  if (variant === 'button') {
    return (
      <a
        href={SUPPORT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-emerald-700 text-white font-black uppercase tracking-wide rounded-full px-6 py-3 hover:bg-emerald-800"
      >
        Support this site
      </a>
    )
  }

  return (
    <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-bold">
      Support this site
    </a>
  )
}
