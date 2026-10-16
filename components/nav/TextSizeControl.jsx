'use client'
import { useEffect, useState } from 'react'

const SIZES = [
  { key: 'md', pct: 100, label: 'Normal text size', cls: 'text-xs' },
  { key: 'lg', pct: 118, label: 'Large text size', cls: 'text-base' },
  { key: 'xl', pct: 136, label: 'Extra large text size', cls: 'text-xl' },
]

export default function TextSizeControl() {
  const [size, setSize] = useState('md')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('textSize')
      if (SIZES.some(s => s.key === saved)) setSize(saved)
    } catch {}
  }, [])

  function choose(s) {
    setSize(s.key)
    document.documentElement.style.fontSize = s.pct + '%'
    try { localStorage.setItem('textSize', s.key) } catch {}
  }

  return (
    <div role="group" aria-label="Text size" className="flex items-center rounded-lg border border-slate-600 overflow-hidden">
      {SIZES.map(s => (
        <button
          key={s.key}
          type="button"
          onClick={() => choose(s)}
          aria-label={s.label}
          aria-pressed={size === s.key}
          className={`w-8 h-8 flex items-center justify-center font-black leading-none ${s.cls} ${size === s.key ? 'bg-amber-500 text-slate-900' : 'text-slate-200 hover:bg-slate-700'}`}
        >
          A
        </button>
      ))}
    </div>
  )
}
