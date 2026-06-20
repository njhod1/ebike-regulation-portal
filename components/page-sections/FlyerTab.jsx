import { Download } from 'lucide-react'

export default function FlyerTab({ flyer, stateName }) {
  if (!flyer?.available) return null

  return (
    <div className="mb-12">
      <div className="flex flex-col items-center py-6 sm:py-10">
        <a
          href={flyer.pdfPath}
          download
          className="mb-8 flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-black uppercase text-base hover:scale-105 transition-transform shadow-2xl active:scale-95"
        >
          <Download size={24} /> Download Official Flyer (PDF)
        </a>

        <div className="w-full max-w-full overflow-x-auto overflow-y-hidden pb-10 flex flex-col items-center cursor-grab active:cursor-grabbing">
          <div
            className="print-container bg-white shadow-2xl overflow-hidden border-[6px] sm:border-[12px] border-slate-900 origin-top scale-[0.4] sm:scale-[0.55] md:scale-75 lg:scale-100 transition-transform mb-[-600px] sm:mb-[-500px] md:mb-[-150px] lg:mb-10"
            style={{ width: '210mm', height: '275mm', padding: '15mm', boxSizing: 'border-box' }}
          >
            <div className="bg-[#1A2A3A] text-white text-center py-8 -mx-10 -mt-10 mb-6">
              <h1 className="text-5xl font-black tracking-tighter uppercase leading-none">URGENT: E-Bike Regulations</h1>
              <p className="text-xl font-bold text-[#F39C12] uppercase tracking-widest mt-1">{stateName} Compliance &amp; Parental Liability Guide 2026</p>
            </div>

            <div className="bg-[#C0392B] text-white text-center font-bold py-3 mb-6 text-lg uppercase leading-tight">
              CRACKDOWN ACTIVE (MAR 2026): NON-COMPLIANT BIKES SUBJECT TO SEIZURE AND DESTRUCTION.
            </div>

            <div className="space-y-6 text-slate-800">
              <section className="border-b-2 border-[#1A2A3A] pb-1">
                <h3 className="text-xl font-black text-[#1A2A3A] uppercase tracking-tighter leading-none pb-1">1. The Compliance Sticker Rule</h3>
              </section>
              <div className="grid grid-cols-1 gap-2 text-sm font-medium">
                <p>• <strong>The 250W Cap:</strong> Motor power must not exceed 250W (from 1 March 2026).</p>
                <p>• <strong>EN 15194 Standard:</strong> Required on all new bikes sold from Feb 2026. Mandatory for ALL road use from 1 March 2029.</p>
                <p>• <strong>Grace Period:</strong> 500W bikes owned before 1 Mar 2026 remain legal until 1 Mar 2029 in NSW only.</p>
                <p>• <strong>Rating &gt; 250W (new purchase):</strong> Legally a <strong>Motorcycle</strong>. Illegal for unlicensed riders.</p>
              </div>

              <section className="border-b-2 border-[#1A2A3A] pb-1 pt-2">
                <h3 className="text-xl font-black text-[#1A2A3A] uppercase tracking-tighter leading-none pb-1">2. Seizure &amp; Retailer Accountability</h3>
              </section>
              <div className="grid grid-cols-1 gap-2 text-sm font-medium leading-tight">
                <p>• <strong>No Sticker = Seizure:</strong> Bikes lacking compliance stickers are presumed illegal.</p>
                <p>• <strong>Retailer Warning:</strong> Selling high-power bikes as &quot;legal&quot; is a breach of Consumer Law.</p>
                <p>• <strong>Dyno Testing:</strong> NSW Police use portable roadside dyno units to verify motor power cuts out at 25 km/h.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-[#F4F7F6] p-4 rounded-lg border border-[#1A2A3A]">
                  <h4 className="font-black text-xs uppercase mb-2">Penalties at a Glance</h4>
                  <div className="text-[10px] space-y-1 font-bold">
                    <p>Unregistered Vehicle: $686–$2,200</p>
                    <p>Uninsured Vehicle: $686–$5,500</p>
                    <p>Footpath Speeding: up to $2,200</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-[#C0392B]">
                  <h4 className="font-black text-xs text-[#C0392B] uppercase mb-2">Parents: Asset Risk</h4>
                  <div className="text-[10px] space-y-1 font-bold">
                    <p>Insurance: Policy VOID for motorcycles.</p>
                    <p>Liability: Millions in medical costs.</p>
                    <p>House: Assets can be seized to pay debts.</p>
                  </div>
                </div>
              </div>

              <section className="border-b-2 border-[#C0392B] pb-1 pt-2">
                <h3 className="text-xl font-black text-[#C0392B] uppercase tracking-tighter leading-none">Parents: Is Your Home At Risk?</h3>
              </section>
              <div className="grid grid-cols-1 gap-1 text-[11px] font-bold leading-snug bg-red-50 p-2 border border-red-200 rounded">
                <p>1. <strong>NO INSURANCE:</strong> Home policies exclude unregistered motor vehicles.</p>
                <p>2. <strong>PERSONAL LIABILITY:</strong> Parents sued for millions in medical damages.</p>
                <p>3. <strong>ASSET LIQUIDATION:</strong> Savings and the family home seized to pay debts.</p>
              </div>
            </div>

            <div className="absolute bottom-6 left-10 right-10 bg-[#1A2A3A] text-white p-6 rounded-lg text-center">
              <h4 className="font-black text-[#F39C12] uppercase text-sm tracking-widest leading-none">Official Statutory Reference</h4>
              <p className="text-[10px] mt-2 opacity-80 uppercase font-mono tracking-tighter">Road Rules 2014 | Road Transport Act 2013 | RVS Act 2018</p>
            </div>
          </div>
        </div>
        <p className="text-slate-400 text-xs italic mt-4 md:hidden text-center print-hide">Tip: Pinch to zoom or swipe the flyer to view full details.</p>
      </div>
    </div>
  )
}
