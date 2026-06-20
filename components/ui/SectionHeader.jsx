const SectionHeader = ({ title, icon: Icon, color = "text-slate-800" }) => (
  <div className="flex items-center gap-3 mb-6 border-b-2 border-amber-500 pb-2">
    {Icon && <Icon className={color} size={28} />}
    <h2 className={`text-2xl font-bold ${color}`}>{title}</h2>
  </div>
)
export default SectionHeader
