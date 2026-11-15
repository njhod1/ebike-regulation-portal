'use client'
import { useRef, useState } from 'react'

export default function CopyBox({ label, text, rows = 5 }) {
  const ref = useRef(null)
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      ref.current?.select()
      document.execCommand?.('copy')
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
      <label className="block font-bold text-slate-900 mb-2">{label}</label>
      <textarea
        ref={ref}
        readOnly
        value={text}
        rows={rows}
        onFocus={(e) => e.target.select()}
        className="w-full text-sm sm:text-base text-slate-800 bg-slate-50 border border-slate-300 rounded-lg p-3 leading-relaxed"
      />
      <div className="mt-2 flex items-center gap-3">
        <button type="button" onClick={copy} className="bg-slate-900 text-white font-black uppercase tracking-wide text-sm rounded-full px-5 py-2 hover:bg-slate-800">
          Copy text
        </button>
        <span role="status" aria-live="polite" className="text-sm font-bold text-emerald-800">{copied ? 'Copied' : ''}</span>
      </div>
    </div>
  )
}
