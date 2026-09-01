import SectionHeader from '@/components/ui/SectionHeader'
import { Hammer, AlertCircle } from 'lucide-react'

export default function SeizureSection({ seizure }) {
  if (!seizure?.show) return null

  return (
    <section>
      <SectionHeader title="Seizure & Retailer Accountability" icon={Hammer} color="text-red-700" />
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-start gap-4 p-4 bg-red-50 border-l-4 border-red-600 rounded-r-xl mb-6">
          <AlertCircle className="text-red-600 shrink-0 mt-0.5" />
          <p
            className="text-sm text-red-900 font-bold leading-snug"
            dangerouslySetInnerHTML={{ __html: `Under the <strong>${seizure.billName}</strong>, ${seizure.description}` }}
          />
        </div>
      </div>
    </section>
  )
}
