export default function ParentalLiabilitySection({ config }) {
  if (!config?.show) return null

  return (
    <div className="bg-red-700 text-white p-6 sm:p-8 rounded-3xl shadow-xl border-t-4 border-white">
      <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter leading-none">Is your house at risk?</h3>
      <p className="text-white text-sm leading-relaxed mb-6 italic">
        If an underage rider causes injury on an illegal e-bike, the financial fallout is catastrophic.
      </p>
      <div className="space-y-6">
        {config.items.map((item) => (
          <div key={item.number} className="border-l-2 border-white pl-4">
            <h4 className="font-black text-white uppercase text-xl tracking-tight mb-1 leading-none">{item.number}. {item.title}</h4>
            <p className="text-xs text-red-100 leading-snug">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
