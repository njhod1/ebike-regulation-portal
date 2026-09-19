import SectionHeader from '@/components/ui/SectionHeader'
import { HeartCrack, ExternalLink } from 'lucide-react'

export default function RealRiskSection({ stateName, realRisk }) {
  return (
    <section className="mb-8 sm:mb-12">
      <SectionHeader title="The Real Risk" icon={HeartCrack} color="text-red-700" />
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6 sm:p-8">
        <p className="text-sm text-red-900 leading-relaxed mb-4">
          <strong>15+ Australians died</strong> in e-mobility incidents in 2025 (NRMA). Emergency department physicians nationwide report treating preventable injuries from non-compliant e-bikes — <strong>head trauma, broken bones, missing teeth, and fatalities</strong> — prompting the AMA to call weakened state laws a <em>"shocking disregard for safety."</em>
        </p>

        {realRisk && (
          <div className="flex items-start gap-4 p-4 bg-white border-l-4 border-red-600 rounded-r-xl">
            <div className="shrink-0 text-center">
              <p className="text-2xl font-black text-red-700 leading-none">{realRisk.stat}</p>
            </div>
            <div>
              <p className="text-sm text-red-900 font-medium leading-snug">{realRisk.detail}</p>
              {realRisk.url && (
                <a
                  href={realRisk.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:underline font-bold text-xs mt-2"
                >
                  <ExternalLink size={12} /> Source
                </a>
              )}
            </div>
          </div>
        )}

        <p className="text-xs text-red-800 mt-4">
          These are the outcomes this page exists to help {stateName} riders and parents avoid — not just fines.
        </p>
      </div>
    </section>
  )
}
