import { ExternalLink, Download } from 'lucide-react'

export default function StatutoryFooter({ links, flyer }) {
  return (
    <footer className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 pb-20 text-sm print:hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="font-bold text-slate-800 uppercase tracking-widest underline decoration-amber-500 underline-offset-4">Statutory Library</h3>
          <div className="flex flex-col gap-2">
            {links.statutory.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:underline font-bold"
              >
                <ExternalLink size={14} /> {link.label}
              </a>
            ))}
          </div>
          <a
            href="/ebike_national_flyer.pdf"
            download
            className="mt-4 flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-emerald-700 text-white rounded-xl font-black uppercase text-sm hover:bg-emerald-800 transition-all shadow-lg"
          >
            <Download size={18} /> Download National Guide (PDF)
          </a>
        </div>
        <div>
          <h3 className="font-bold text-slate-800 mb-4 uppercase tracking-widest underline decoration-amber-500 underline-offset-4">Safety &amp; Compliance</h3>
          <div className="space-y-3">
            {links.safety.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:underline font-bold"
              >
                <ExternalLink size={14} /> {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
