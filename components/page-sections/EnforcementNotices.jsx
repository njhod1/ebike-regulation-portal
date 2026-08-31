import { Newspaper, ExternalLink } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

export default function EnforcementNotices({ notices }) {
  if (!notices?.length) return null

  return (
    <section>
      <SectionHeader title="Enforcement & News" icon={Newspaper} color="text-slate-700" />
      <div className="space-y-4">
        {notices.map((notice, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
            <div className="flex items-start justify-between gap-4 mb-1">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">{notice.date}</span>
              {notice.url && (
                <a
                  href={notice.url}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 flex items-center gap-1 text-blue-600 hover:underline text-xs font-bold"
                >
                  Source <ExternalLink size={11} />
                </a>
              )}
            </div>
            <h3 className="font-black text-slate-900 text-sm uppercase tracking-tight mb-1">{notice.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{notice.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
