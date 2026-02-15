import React, { useState } from 'react';
import { Shield, FileText, Home, Info, Scale, ExternalLink, Zap, AlertCircle } from 'lucide-react';

/**
 * HELPER COMPONENTS
 * Defined outside the main App component to satisfy ESLint rules.
 */

function SectionHeader({ title, icon: Icon, color = "text-slate-800" }) {
  return (
    <div className="flex items-center gap-3 mb-6 border-b-2 border-amber-500 pb-2">
      {Icon && <Icon className={color} size={28} />}
      <h2 className={`text-2xl font-bold ${color}`}>{title}</h2>
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
      <p className="text-lg font-bold text-slate-800">{value}</p>
    </div>
  );
}

/**
 * MAIN APP COMPONENT
 */
export default function App() {
  const [activeTab, setActiveTab] = useState('website');

  const navItems = [
    { id: 'website', label: 'Information Website', icon: <Home size={20} /> },
    { id: 'flyer', label: 'Printable A4 Flyer', icon: <FileText size={20} /> },
  ];

  const LINKS = {
    ROAD_RULES: "https://legislation.nsw.gov.au/view/html/inforce/current/sl-2014-0758",
    ROAD_TRANSPORT_ACT: "https://legislation.nsw.gov.au/view/html/inforce/current/act-2013-018",
    VEHICLE_STANDARDS_ACT: "https://www.legislation.gov.au/Series/C2018A00061",
    TfNSW_EBIKES: "https://www.transport.nsw.gov.au/roadsafety/bicycle-riders/ebikes",
    FAMILY_ADVICE_PDF: "https://www.transport.nsw.gov.au/system/files/media/documents/2024/crs_e-bikes_families.pdf"
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation Header */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md print:hidden">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="text-amber-500" />
            <span className="font-black text-xl tracking-tighter uppercase">NSW E-Bike Safety</span>
          </div>
          <div className="flex gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  activeTab === item.id 
                    ? 'bg-amber-50 text-slate-900 font-bold' 
                    : 'hover:bg-slate-800 text-slate-300'
                }`}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Warning Banner */}
      {activeTab === 'website' && (
        <div className="bg-red-700 text-white py-3 text-center font-bold px-4 print:hidden">
          🚨 CRITICAL UPDATE: NEW "CRUSH" LAWS ACTIVE AS OF FEBRUARY 2026
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto p-6">
        
        {activeTab === 'website' && (
          <div className="animate-in fade-in duration-500">
            {/* Hero Section */}
            <header className="mb-12 text-center py-10">
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 mb-4 tracking-tight">
                COMPLIANCE <span className="text-amber-500">&</span> ENFORCEMENT
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Protecting our public spaces and families from the risks of illegal high-powered electric motorbikes.
              </p>
            </header>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              <StatBox label="Max Road Power" value="250W" />
              <StatBox label="Max Speed Cut-off" value="25 km/h" />
              <StatBox label="Import Standard" value="EN 15194" />
              <StatBox label="Penalty for Illegal Use" value="Seizure & Destruction" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Compliance */}
              <div className="lg:col-span-2 space-y-10">
                
                <section>
                  <SectionHeader title="The Compliance Sticker Rule" icon={Zap} />
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <p className="mb-4 text-slate-700 leading-relaxed">
                      Every e-bike used on NSW roads or shared paths must be an <strong>EPAC</strong> (Electrically Power Assisted Cycle). Legality is determined by the manufacturer's label.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-slate-800 mb-2">Sticker Rating ≤ 250W</h4>
                        <p className="text-sm text-slate-600">Legal for road use. Motor assistance must cut out at 25km/h. No throttle over 6km/h.</p>
                      </div>
                      <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Sticker Rating {">"} 250W</h4>
                        <p className="text-sm text-red-700 font-medium">Classified as a Motorcycle. Requires registration, CTP, and a license. Illegal for minors.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <SectionHeader title="Seizure & Destruction Powers" icon={AlertCircle} color="text-red-700" />
                  <div className="bg-red-50 p-8 rounded-2xl shadow-sm border border-red-200">
                    <h3 className="text-xl font-bold text-red-800 mb-4">"The Crush Law"</h3>
                    <p className="text-red-900 mb-4 font-medium italic">
                      "If the bike breaks the rules, it's gone for good."
                    </p>
                    <ul className="space-y-3 text-red-800">
                      <li className="flex gap-2 font-medium">Under the <a href={LINKS.ROAD_TRANSPORT_ACT} className="underline hover:text-red-600" target="_blank" rel="noreferrer">Road Transport Act 2013</a>, illegal bikes are destroyed (crushed) to prevent re-sale.</li>
                      <li className="flex gap-2 font-medium">Police are utilizing portable <strong>Dyno Units</strong> to test wattage on the spot.</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <SectionHeader title="Federal Import & The 'Gap' Period" icon={Scale} />
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      The <a href={LINKS.VEHICLE_STANDARDS_ACT} className="underline text-blue-600 font-bold" target="_blank" rel="noreferrer">Road Vehicle Standards Act 2018</a> was amended in <strong>December 2025</strong> to reinstate strict import controls.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold mb-2 text-slate-800 text-lg">Bikes Imported 2021—2025:</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        During the period import laws were relaxed, many 500W+ "fat bikes" entered Australia. While they may have been legal to *import* then, they are <strong>illegal to ride in public now</strong> as they do not meet the 250W road standard.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: Sidebar Risks */}
              <div className="space-y-6">
                <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl border-t-4 border-red-500">
                  <h3 className="text-2xl font-black mb-4 text-amber-500 uppercase tracking-tighter leading-none">Parents: Is your house at risk?</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    If an underage rider causes injury or damage on an illegal e-bike, the financial fallout is catastrophic.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-red-500 pl-4">
                      <h4 className="font-bold text-red-400">01. No Insurance</h4>
                      <p className="text-xs text-slate-400">Home & Contents policies exclude "unregistered motor vehicles." Illegal e-bikes are motorcycles.</p>
                    </div>
                    <div className="border-l-2 border-red-500 pl-4">
                      <h4 className="font-bold text-red-400 text-lg">02. ASSET SEIZURE</h4>
                      <p className="text-xs text-slate-400 font-bold uppercase text-white">Without insurance, your family home and personal assets can be seized to pay legal judgments.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-100 p-6 rounded-2xl border border-amber-200">
                  <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-2 text-lg">
                    <Info size={18} /> Stopping Seizure
                  </h4>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    The <strong>only</strong> way to protect a 1000W+ bike from seizure is to never ride it on public land. Software-limiting does not change its legal hardware status.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Reference Section */}
            <footer className="mt-20 border-t border-slate-200 pt-10 pb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-bold text-slate-800 mb-4 uppercase text-sm tracking-widest">Statutory Library</h3>
                  <div className="space-y-3">
                    <a href={LINKS.ROAD_RULES} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-medium"><ExternalLink size={14}/> Road Rules 2014 (NSW)</a>
                    <a href={LINKS.ROAD_TRANSPORT_ACT} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-medium"><ExternalLink size={14}/> Road Transport Act 2013 (NSW)</a>
                    <a href={LINKS.VEHICLE_STANDARDS_ACT} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-medium"><ExternalLink size={14}/> Road Vehicle Standards Act 2018 (Cth)</a>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-4 uppercase text-sm tracking-widest">Safety & Compliance</h3>
                  <div className="space-y-3">
                    <a href={LINKS.TfNSW_EBIKES} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-medium"><ExternalLink size={14}/> TfNSW: E-bike Safety & EN 15194 Sticker Info</a>
                    <a href={LINKS.FAMILY_ADVICE_PDF} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-medium"><ExternalLink size={14}/> E-bikes - Advice for families (PDF)</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        )}

        {/* A4 Flyer View */}
        {activeTab === 'flyer' && (
          <div className="flex flex-col items-center py-10">
            <div className="bg-white shadow-2xl overflow-hidden print:shadow-none mb-10 border-[12px] border-slate-900" 
                 style={{ width: '210mm', minHeight: '297mm', padding: '15mm' }}>
              
              <div className="bg-slate-900 text-white text-center py-8 -mx-6 -mt-6">
                <h1 className="text-5xl font-black tracking-tighter uppercase">E-Bike Warning</h1>
                <p className="text-xl font-bold text-amber-500 uppercase tracking-widest mt-1">NSW Compliance Notice 2026</p>
              </div>

              <div className="bg-red-700 text-white text-center font-bold py-3 my-6 text-lg">
                CRACKDOWN ACTIVE: ILLEGAL BIKES SEIZED AND DESTROYED
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-black border-b-2 border-amber-500 mb-3 text-slate-900 uppercase">1. Compliance</h3>
                    <ul className="text-sm space-y-3">
                      <li><strong>Max Power:</strong> 250W Continuous.</li>
                      <li><strong>Max Speed:</strong> 25km/h motor cut-off.</li>
                      <li><strong>Sticker Required:</strong> EN 15194 must be visible.</li>
                      <li className="text-red-700 font-bold italic">Bikes rated {">"} 250W are legally Motorcycles and will be seized.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-black border-b-2 border-amber-500 mb-3 text-slate-900 uppercase">2. Enforcement</h3>
                    <ul className="text-sm space-y-3">
                      <li><strong>Dyno Testing:</strong> Roadside power tests.</li>
                      <li><strong>Seizure:</strong> Immediate confiscation for non-compliance.</li>
                      <li><strong>Crushing:</strong> High-powered bikes destroyed beyond reuse.</li>
                    </ul>
                  </div>

                  {/* IMPORT CHANGES SECTION MOVED HERE FOR BALANCE */}
                  <div>
                    <h3 className="text-lg font-black border-b-2 border-amber-500 mb-3 text-slate-900 uppercase">3. Import Changes</h3>
                    <ul className="text-sm space-y-3">
                      <li><strong>Federal Law:</strong> Import standards reinstated December 2025.</li>
                      <li><strong>2021—2025 Gap:</strong> Older imports are still subject to current NSW 250W road usage laws.</li>
                      <li><strong>1000W+ Motors:</strong> Strictly for private property only.</li>
                    </ul>
                  </div>
                </div>

                {/* PARENTAL ALERT SECTION */}
                <div className="bg-slate-100 p-8 rounded-xl border-2 border-slate-900 flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl font-black text-red-700 mb-2 leading-none">PARENTAL ALERT</h3>
                    <p className="text-xl font-bold mb-6 underline uppercase text-slate-900">Is your house at risk?</p>
                    
                    <p className="text-lg leading-snug mb-8 font-medium text-slate-800">
                      If an underage rider causes injury on an illegal bike, <strong className="text-red-700">Home Insurance is VOID.</strong>
                    </p>
                    
                    <div className="bg-white p-6 border-2 border-red-200 rounded-lg mb-8 shadow-sm">
                      <p className="text-lg font-black text-slate-900 uppercase mb-2 underline">The "House" Scenario:</p>
                      <p className="text-base text-slate-700 leading-relaxed font-semibold">
                        Without insurance, court-awarded damages result in the <span className="text-red-600">seizure and sale</span> of the family home to satisfy debt.
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 italic leading-tight">
                    Negligent supervision of a minor on a motor vehicle can lead to direct personal liability.
                  </p>
                </div>
              </div>

              {/* FOOTER STATUTES BAR - REFINED */}
              <div className="mt-12 p-6 bg-slate-900 text-white rounded-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-amber-500 text-lg uppercase tracking-wider">Statutory Reference</h4>
                    <p className="text-xs opacity-90">Regulatory framework current as of February 2026.</p>
                  </div>
                  <div className="text-right text-[10px] opacity-80 font-mono text-xs leading-relaxed uppercase">
                    Road Vehicle Standards Act 2018 (Cth)<br/>
                    Road Transport Act 2013 (NSW)<br/>
                    Road Rules 2014 (NSW)
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 text-center">
                <p className="text-[10px] font-black text-slate-900 tracking-tighter mb-2">OFFICIAL INFORMATION: TRANSPORT.NSW.GOV.AU/ROADSAFETY</p>
                <p className="text-[8px] text-slate-500 mb-4 font-bold">
                  PDF Resource: <a href={LINKS.FAMILY_ADVICE_PDF} target="_blank" rel="noreferrer" className="text-blue-600 underline break-all">{LINKS.FAMILY_ADVICE_PDF}</a>
                </p>
                <div className="flex justify-center gap-12 opacity-40">
                  <div className="text-[8px] uppercase font-black tracking-[0.2em]">Safety First</div>
                  <div className="text-[8px] uppercase font-black tracking-[0.2em]">Asset Security</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}