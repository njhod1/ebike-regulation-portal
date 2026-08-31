import Link from 'next/link'
import { Shield } from 'lucide-react'
import StateSelect from './StateSelect'

export default function SiteNav({ currentSlug }) {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md print:hidden">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="text-amber-500" />
          <span className="font-black text-lg sm:text-xl tracking-tighter uppercase">AU E-Bike Laws</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/about" className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-wider hidden sm:block">About</Link>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-xs hidden sm:block">Select state:</span>
            <StateSelect currentSlug={currentSlug} />
          </div>
        </div>
      </div>
    </nav>
  )
}
