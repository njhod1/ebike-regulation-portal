const StatBox = ({ label, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
    <p className="text-lg font-bold text-slate-800 leading-tight">{value}</p>
  </div>
)
export default StatBox
