import React, { useState } from 'react';
import { Shield, FileText, Home, Info, Scale, ExternalLink, Zap, AlertCircle, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

/**
 * HELPER COMPONENTS
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
 * INTERACTIVE LEGALITY QUIZ COMPONENT
 */
function LegalityQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'sticker',
      question: "Does the bike have a permanent EN 15194 compliance sticker?",
      info: "Look near the pedals or on the frame for a silver/white manufacturer label."
    },
    {
      id: 'wattage',
      question: "Is the motor rated at 250W or less?",
      info: "Check the sticker or manual. Anything over 250W is legally a motorcycle in NSW."
    },
    {
      id: 'speed',
      question: "Does the motor assistance cut out automatically at 25km/h?",
      info: "If the motor keeps pushing you past 25km/h without pedaling, it's non-compliant."
    }
  ];

  const handleAnswer = (val) => {
    setAnswers({ ...answers, [questions[step].id]: val });
    setStep(step + 1);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
  };

  if (step < questions.length) {
    return (
      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl border-t-4 border-amber-500 animate-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-between items-center mb-6">
          <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">Legality Checker</span>
          <span className="text-slate-500 text-xs font-bold">Step {step + 1} of 3</span>
        </div>
        <h3 className="text-xl font-bold mb-4 leading-tight">{questions[step].question}</h3>
        <p className="text-slate-400 text-sm mb-8 italic">{questions[step].info}</p>
        <div className="flex gap-4">
          <button 
            onClick={() => handleAnswer(true)}
            className="flex-1 py-4 bg-amber-500 text-slate-900 font-black rounded-xl hover:bg-amber-400 transition-colors uppercase tracking-tight"
          >
            Yes
          </button>
          <button 
            onClick={() => handleAnswer(false)}
            className="flex-1 py-4 bg-slate-800 text-white font-black rounded-xl hover:bg-slate-700 transition-colors uppercase tracking-tight border border-slate-700"
          >
            No
          </button>
        </div>
      </div>
    );
  }

  const isLegal = answers.sticker && answers.wattage && answers.speed;

  return (
    <div className={`p-8 rounded-3xl shadow-xl border-t-4 animate-in zoom-in-95 duration-500 ${isLegal ? 'bg-emerald-50 border-emerald-500' : 'bg-red-50 border-red-500'}`}>
      <div className="text-center">
        {isLegal ? (
          <>
            <CheckCircle2 className="text-emerald-500 mx-auto mb-4" size={64} />
            <h3 className="text-3xl font-black text-emerald-900 uppercase tracking-tighter mb-2">Likely Compliant</h3>
            <p className="text-emerald-800 font-medium mb-6">Your bike meets the primary NSW road standards for 2026.</p>
          </>
        ) : (
          <>
            <XCircle className="text-red-500 mx-auto mb-4" size={64} />
            <h3 className="text-3xl font-black text-red-900 uppercase tracking-tighter mb-2">ILLEGAL FOR ROAD USE</h3>
            <p className="text-red-800 font-medium mb-6">Based on your answers, this device is classified as a <strong>Motorcycle</strong> and is subject to seizure.</p>
          </>
        )}
        <button 
          onClick={resetQuiz}
          className="flex items-center gap-2 mx-auto text-slate-500 hover:text-slate-800 font-bold text-sm transition-colors"
        >
          <RotateCcw size={16} /> Start Over
        </button>
      </div>
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
                    ? 'bg-amber-500 text-slate-900 font-bold' 
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Left Column: Compliance Info */}
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
                        <p className="text-sm text-slate-600 font-medium tracking-tight">Legal for road use. Motor assistance must cut out at 25km/h. No throttle over 6km/h.</p>
                      </div>
                      <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Sticker Rating {">"} 250W</h4>
                        <p className="text-sm text-red-700 font-bold tracking-tight uppercase underline">Classified as a Motorcycle. Illegal for minors.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <SectionHeader title="Seizure & Destruction Powers" icon={AlertCircle} color="text-red-700" />
                  <div className="bg-red-50 p-8 rounded-2xl shadow-sm border border-red-200">
                    <h3 className="text-xl font-bold text-red-800 mb-4 tracking-tight">"The Crush Law"</h3>
                    <p className="text-red-900 mb-4 font-bold italic leading-snug">
                      "If the bike breaks the rules, it's gone for good."
                    </p>
                    <ul className="space-y-3 text-red-800">
                      <li className="flex gap-2 font-medium">Under the <a href={LINKS.ROAD_TRANSPORT_ACT} className="underline hover:text-red-600" target="_blank" rel="noreferrer">Road Transport Act 2013</a>, illegal bikes are destroyed (crushed) to prevent re-sale.</li>
                      <li className="flex gap-2 font-medium">Police are utilizing portable <strong>Dyno Units</strong> to test wattage on the spot.</li>
                    </ul>
                  </div>
                </section>
              </div>

              {/* Right Column: Interactive Quiz & Risk Sidebar */}
              <div className="space-y-6">
                {/* INTERACTIVE QUIZ INTEGRATION */}
                <LegalityQuiz />

                <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl border-t-4 border-red-500">
                  <h3 className="text-2xl font-black mb-4 text-amber-500 uppercase tracking-tighter leading-none">Parents: Is your house at risk?</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    If an underage rider causes injury on an illegal e-bike, the financial fallout is catastrophic.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-red-500 pl-4">
                      <h4 className="font-bold text-red-400 uppercase text-xs tracking-widest mb-1">01. No Insurance</h4>
                      <p className="text-xs text-slate-400">Home & Contents policies exclude "unregistered motor vehicles." Illegal e-bikes are motorcycles.</p>
                    </div>
                    <div className="border-l-2 border-red-500 pl-4">
                      <h4 className="font-bold text-red-400 text-lg uppercase tracking-tighter mb-1 leading-none">02. ASSET SEIZURE</h4>
                      <p className="text-xs text-slate-400 font-black uppercase text-white leading-tight">Your family home and personal assets can be seized to pay legal judgments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Reference Section */}
            <footer className="mt-20 border-t border-slate-200 pt-10 pb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-bold text-slate-800 mb-4 uppercase text-sm tracking-widest underline decoration-amber-500 underline-offset-4">Statutory Library</h3>
                  <div className="space-y-3">
                    <a href={LINKS.ROAD_RULES} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-bold"><ExternalLink size={14}/> Road Rules 2014 (NSW)</a>
                    <a href={LINKS.ROAD_TRANSPORT_ACT} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-bold"><ExternalLink size={14}/> Road Transport Act 2013 (NSW)</a>
                    <a href={LINKS.VEHICLE_STANDARDS_ACT} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-bold"><ExternalLink size={14}/> Road Vehicle Standards Act 2018 (Cth)</a>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-4 uppercase text-sm tracking-widest underline decoration-amber-500 underline-offset-4">Safety & Compliance</h3>
                  <div className="space-y-3">
                    <a href={LINKS.TfNSW_EBIKES} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-bold"><ExternalLink size={14}/> TfNSW: E-bike Safety & Sticker Info</a>
                    <a href={LINKS.FAMILY_ADVICE_PDF} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-bold"><ExternalLink size={14}/> Advice for families (Official PDF)</a>
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
                    <h3 className="text-lg font-black border-b-2 border-amber-500 mb-3 text-slate-900 uppercase tracking-tighter">1. Compliance</h3>
                    <ul className="text-sm space-y-3">
                      <li><strong>Max Power:</strong> 250W Continuous.</li>
                      <li><strong>Max Speed:</strong> 25km/h motor cut-off.</li>
                      <li><strong>Sticker Required:</strong> EN 15194 must be visible.</li>
                      <li className="text-red-700 font-bold italic">Bikes rated {">"} 250W are legally Motorcycles and will be seized.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-black border-b-2 border-amber-500 mb-3 text-slate-900 uppercase tracking-tighter">2. Enforcement</h3>
                    <ul className="text-sm space-y-3">
                      <li><strong>Dyno Testing:</strong> Roadside power tests.</li>
                      <li><strong>Seizure:</strong> Immediate confiscation for non-compliance.</li>
                      <li><strong>Crushing:</strong> High-powered bikes destroyed beyond reuse.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-black border-b-2 border-amber-500 mb-3 text-slate-900 uppercase tracking-tighter">3. Import Changes</h3>
                    <ul className="text-sm space-y-3">
                      <li><strong>Federal Law:</strong> Import standards reinstated December 2025.</li>
                      <li><strong>2021—2025 Gap:</strong> Older imports are still subject to current NSW 250W road usage laws.</li>
                      <li><strong>1000W+ Motors:</strong> Strictly for private property only.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-100 p-8 rounded-xl border-2 border-slate-900 flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl font-black text-red-700 mb-2 leading-none tracking-tighter">PARENTAL ALERT</h3>
                    <p className="text-xl font-bold mb-6 underline uppercase text-slate-900">Is your house at risk?</p>
                    
                    <p className="text-lg leading-snug mb-8 font-semibold text-slate-800">
                      If an underage rider causes injury on an illegal bike, <strong className="text-red-700">Home Insurance is VOID.</strong>
                    </p>
                    
                    <div className="bg-white p-6 border-2 border-red-200 rounded-lg mb-8 shadow-sm">
                      <p className="text-lg font-black text-slate-900 uppercase mb-2 underline tracking-tighter">The "House" Scenario:</p>
                      <p className="text-base text-slate-700 leading-relaxed font-black uppercase">
                        Without insurance, legal debts result in the <span className="text-red-600 underline">seizure and sale</span> of the family home.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 italic font-medium leading-tight border-t border-slate-200 pt-4">
                    Negligent supervision of a minor on an unregistered motor vehicle leads to direct personal liability.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-900 text-white rounded-xl flex justify-between items-center">
                <div>
                  <h4 className="font-black text-amber-500 text-lg uppercase tracking-widest">Statutory Reference</h4>
                  <p className="text-[10px] opacity-70">Current as of February 2026.</p>
                </div>
                <div className="text-right text-[10px] opacity-80 font-mono leading-relaxed uppercase">
                  Road Vehicle Standards Act 2018 (Cth)<br/>
                  Road Transport Act 2013 (NSW)<br/>
                  Road Rules 2014 (NSW)
                </div>
              </div>

              <div className="mt-auto pt-6 text-center">
                <p className="text-[10px] font-black text-slate-900 tracking-tighter mb-2">OFFICIAL INFORMATION: TRANSPORT.NSW.GOV.AU/ROADSAFETY</p>
                <div className="flex justify-center gap-12 opacity-30">
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