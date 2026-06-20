import SectionHeader from '@/components/ui/SectionHeader'
import { Zap } from 'lucide-react'

export default function ComplianceStickerSection({ compliance, stateName }) {
  return (
    <section>
      <SectionHeader title="The Compliance Sticker Rule" icon={Zap} />
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
        <p className="mb-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          Every <em>new</em> e-bike sold for use on {stateName} roads or shared paths must be an <strong>EPAC</strong> (Electrically Power Assisted Cycle). Legality is determined by the manufacturer&apos;s label and certified power output.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-800 mb-2 uppercase text-xs tracking-wider">Sticker Rating ≤ 250W</h4>
            <p className="text-sm text-slate-600 font-medium tracking-tight italic">Legal for road use. Motor assistance must cut out at 25 km/h.</p>
          </div>
          <div className="p-4 bg-red-50 rounded-xl border border-red-100">
            <h4 className="font-bold text-red-800 mb-2 uppercase text-xs tracking-wider">Sticker Rating &gt; 250W</h4>
            <p className="text-sm text-red-700 font-bold tracking-tight uppercase underline leading-snug">Classified as a Motorcycle. Illegal for unlicensed riders.</p>
          </div>
        </div>
        {compliance?.gracePeriod?.exists && (
          <div className="mt-5 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-xs font-black text-amber-800 uppercase tracking-widest mb-1">Grace Period — Existing 500W Owners</p>
            <p
              className="text-sm text-amber-900 leading-snug"
              dangerouslySetInnerHTML={{ __html: compliance.gracePeriod.text }}
            />
          </div>
        )}
        {compliance?.enStandard?.mandatoryFromDate && (
          <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <p className="text-xs font-black text-slate-700 uppercase tracking-widest mb-1">EN 15194 Mandatory From {compliance.enStandard.mandatoryFromDate}</p>
            <p className="text-sm text-slate-600 leading-snug">{compliance.enStandard.text}</p>
          </div>
        )}
      </div>
    </section>
  )
}
