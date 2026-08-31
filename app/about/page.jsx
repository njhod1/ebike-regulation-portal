import Link from 'next/link'
import { ShieldCheck, BookOpen, RefreshCcw, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: 'About',
  description: 'AU E-Bike Laws is an independent, plain-English reference tracking e-bike, e-scooter and personal mobility device regulations across every Australian state and territory.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About AU E-Bike Laws',
    description: 'An independent, plain-English reference tracking e-bike and e-scooter regulations across every Australian state and territory.',
    url: '/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-3xl mx-auto p-4 sm:p-6">
        <header className="mb-10 text-center py-10">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-none uppercase">
            About <span className="text-amber-700">AU E-Bike Laws</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto px-2">
            An independent, plain-English reference for Australian e-bike, e-scooter and personal mobility device regulations.
          </p>
        </header>

        <div className="space-y-8">
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="text-amber-700 shrink-0" size={22} />
              <h2 className="font-black text-slate-900 text-lg uppercase tracking-tight">Why this exists</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Australian e-bike and e-scooter law changed faster in 2026 than in any prior year — new seizure powers, footpath rules, age restrictions and enforcement operations, each decided separately by eight different state and territory governments. Riders, and especially parents, are largely left to find and compare that information themselves across a dozen different government websites. This site pulls the current rules for every state and territory into one place, in plain language.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-3">
              <RefreshCcw className="text-amber-700 shrink-0" size={22} />
              <h2 className="font-black text-slate-900 text-lg uppercase tracking-tight">How it's put together</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-3">
              Every state page is built from official sources: state transport authority guidance, gazetted legislation and regulation amendments, and government inquiry reports — linked directly under each state's <strong>Statutory Library</strong> and <strong>Safety &amp; Compliance</strong> sections. Enforcement operations and legal changes covered in the <strong>Enforcement &amp; News</strong> section on each page are sourced from official police/government releases and mainstream news coverage, with a source link on every entry so you can verify it yourself.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Content is reviewed and updated as laws change, not on a fixed schedule — each page notes the date information was last current.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="text-amber-700 shrink-0" size={22} />
              <h2 className="font-black text-slate-900 text-lg uppercase tracking-tight">What this is</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              An independent reference project. It is not affiliated with, endorsed by, or produced by any Australian government, transport authority, or police service — nothing on this site should be read as an official statement of the law.
            </p>
          </section>

          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="text-amber-700 shrink-0" size={22} />
              <h2 className="font-black text-amber-900 text-lg uppercase tracking-tight">What this isn't</h2>
            </div>
            <p className="text-amber-900 leading-relaxed">
              Not legal advice, and not a substitute for checking the official source before you rely on anything here. Regulations are changing quickly and can vary by local council or specific circumstances — always verify against your state's current legislation and official transport authority guidance, linked from every state page.
            </p>
          </section>
        </div>

        <div className="text-center mt-12 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-bold text-sm uppercase tracking-wider"
          >
            ← Back to all states
          </Link>
        </div>
      </main>
    </div>
  )
}
