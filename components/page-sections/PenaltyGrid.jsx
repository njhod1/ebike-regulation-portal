export default function PenaltyGrid({ penalties }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {penalties.map((p, i) => (
        <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between h-full min-h-[110px]">
          <div className="mb-2">
            <span className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1 leading-tight">{p.label}</span>
            <p className="text-sm text-slate-600 italic leading-tight">{p.desc}</p>
          </div>
          <div className="text-right border-t border-slate-200 pt-2 mt-auto">
            <span className="text-base font-black text-red-600 uppercase tracking-tighter">{p.cost}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
