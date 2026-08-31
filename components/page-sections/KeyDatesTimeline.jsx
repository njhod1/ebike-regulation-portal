export default function KeyDatesTimeline({ dates }) {
  if (!dates || dates.length === 0) return null

  const dotColor = {
    amber: 'bg-amber-400',
    red: 'bg-red-500',
    slate: 'bg-slate-400',
  }

  const textColor = {
    amber: 'text-amber-700',
    red: 'text-red-600',
    slate: 'text-slate-500',
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 mb-8 sm:mb-12">
      <h2 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4">Key Regulatory Dates</h2>
      <ol className="relative border-l-2 border-amber-400 space-y-5 ml-2">
        {dates.map((item, i) => (
          <li key={i} className="pl-5">
            <span className={`absolute -left-[7px] mt-1 w-3 h-3 rounded-full ${dotColor[item.color] || 'bg-slate-400'}`}></span>
            <p className={`text-xs font-black uppercase tracking-widest ${textColor[item.color] || 'text-slate-500'}`}>{item.date}</p>
            <p
              className="text-sm text-slate-700 mt-0.5"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </li>
        ))}
      </ol>
    </div>
  )
}
