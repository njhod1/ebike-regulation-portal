import Link from 'next/link'
import { Shield } from 'lucide-react'
import StateSelect from './StateSelect'
import TextSizeControl from './TextSizeControl'

export default function SiteNav({ currentSlug }) {
  return (
    <nav className="bg-slate-900 text-white sm:sticky sm:top-0 z-50 shadow-md print:hidden">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-x-3 gap-y-2">
        <Link href="/" className="flex items-center gap-2 order-1 whitespace-nowrap">
          <Shield className="text-amber-500" />
          <span className="font-black text-lg sm:text-xl tracking-tighter uppercase">AU E-Bike Laws</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4 order-3 w-full sm:w-auto sm:order-2">
          <Link href="/about" className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-wider hidden sm:block">About</Link>
          <div className="flex items-center gap-2 flex-1 sm:flex-none min-w-0">
            <span className="text-slate-400 text-xs hidden sm:block">Select state:</span>
            <StateSelect currentSlug={currentSlug} />
          </div>
        </div>
        <div className="order-2 sm:order-3"><TextSizeControl /></div>
      </div>
    </nav>
  )
}
