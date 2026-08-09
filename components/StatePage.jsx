import StatBox from '@/components/ui/StatBox'
import KeyDatesTimeline from '@/components/page-sections/KeyDatesTimeline'
import ComplianceStickerSection from '@/components/page-sections/ComplianceStickerSection'
import SeizureSection from '@/components/page-sections/SeizureSection'
import LegalityQuiz from '@/components/page-sections/LegalityQuiz'
import PenaltyGrid from '@/components/page-sections/PenaltyGrid'
import ParentalLiabilitySection from '@/components/page-sections/ParentalLiabilitySection'
import StatutoryFooter from '@/components/page-sections/StatutoryFooter'
import FlyerTab from '@/components/page-sections/FlyerTab'
import EnforcementNotices from '@/components/page-sections/EnforcementNotices'

export default function StatePage({ stateData }) {
  const {
    name,
    stats,
    alertBanner,
    keyDates,
    compliance,
    seizure,
    penalties,
    parentalLiability,
    quiz,
    links,
    flyer,
    notices,
  } = stateData

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {alertBanner?.show && (
        <div className={`py-3 text-center font-bold px-4 text-xs sm:text-sm print:hidden ${
          alertBanner.color === 'red'
            ? 'bg-red-700 text-white'
            : 'bg-amber-500 text-slate-900'
        }`}>
          {alertBanner.color === 'red' ? '🚨 ' : '⚠️ '}
          {alertBanner.text}
        </div>
      )}

      <main className="max-w-6xl mx-auto p-4 sm:p-6">
        <div>
          <header className="mb-8 sm:mb-12 text-center py-6 sm:py-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-none uppercase">
              {name} <span className="text-amber-500">&</span> E-Bike Laws
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-2">
              Official 2026 guide to e-bike regulations, compliance requirements and penalties in {name}.
            </p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {stats.map((stat, i) => (
              <StatBox key={i} label={stat.label} value={stat.value} />
            ))}
          </div>

          <KeyDatesTimeline dates={keyDates} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8 sm:space-y-10">
              <ComplianceStickerSection compliance={compliance} stateName={name} />
              <SeizureSection seizure={seizure} />
              <EnforcementNotices notices={notices} />
            </div>

            <div className="space-y-6">
              <LegalityQuiz quiz={quiz} stateName={name} />

              <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl border-b-4 border-amber-500">
                <h3 className="text-lg font-black uppercase tracking-tighter text-amber-500 mb-2 leading-none">Penalties at a Glance</h3>
                <PenaltyGrid penalties={penalties} />
              </div>

              <ParentalLiabilitySection config={parentalLiability} />
            </div>
          </div>

          {flyer?.available && (
            <FlyerTab flyer={flyer} stateName={name} />
          )}

          <StatutoryFooter links={links} flyer={flyer} />
        </div>
      </main>
    </div>
  )
}
