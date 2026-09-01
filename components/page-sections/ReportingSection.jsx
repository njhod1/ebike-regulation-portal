import SectionHeader from '@/components/ui/SectionHeader'
import { Phone, ExternalLink, ShieldAlert } from 'lucide-react'

export default function ReportingSection({ reporting }) {
  if (!reporting) return null
  const { policeNonEmergency, policeOnlineForm, fairTrading } = reporting

  return (
    <section>
      <SectionHeader title="Report Unsafe Riding or an Illegal E-Bike" icon={Phone} color="text-blue-700" />
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-5">
        <div className="flex items-start gap-3 p-3 bg-red-50 border-l-4 border-red-600 rounded-r-lg">
          <ShieldAlert className="text-red-600 shrink-0 mt-0.5" size={18} />
          <p className="text-sm text-red-900 font-bold">In immediate danger, call <strong>000</strong>.</p>
        </div>

        <div>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Unsafe or illegal riding — non-emergency</p>
          {policeNonEmergency && (
            <p className="text-sm text-slate-700 mb-1">Call <strong>{policeNonEmergency}</strong> to report a suspected illegal or dangerously ridden e-bike.</p>
          )}
          {policeOnlineForm && (
            <a
              href={policeOnlineForm.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline font-bold text-sm mt-1"
            >
              <ExternalLink size={14} /> {policeOnlineForm.label}
            </a>
          )}
        </div>

        <div>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Prefer to stay anonymous?</p>
          <p className="text-sm text-slate-700">Call Crime Stoppers on <strong>1800 333 000</strong> — a national, anonymous tip line for reporting a pattern of illegal riding or sales.</p>
        </div>

        {fairTrading && (
          <div>
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Retailer selling non-compliant e-bikes?</p>
            <p className="text-sm text-slate-700 mb-1">
              Report it to your state's fair trading / consumer affairs body{fairTrading.phone ? <> — <strong>{fairTrading.phone}</strong></> : null}.
            </p>
            <a
              href={fairTrading.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline font-bold text-sm mt-1"
            >
              <ExternalLink size={14} /> {fairTrading.label}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
