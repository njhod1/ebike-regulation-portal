import React, { useState } from 'react';
import { 
  Shield, FileText, Home, Zap, AlertCircle, 
  CheckCircle2, XCircle, RotateCcw, Scale, 
  ExternalLink, Hammer, Landmark, ClipboardCheck,
  Store, Megaphone
} from 'lucide-react';

/**
 * HELPER COMPONENTS
 */
const SectionHeader = ({ title, icon: Icon, color = "text-slate-800" }) => (
  <div className="flex items-center gap-3 mb-6 border-b-2 border-amber-500 pb-2">
    {Icon && <Icon className={color} size={28} />}
    <h2 className={`text-2xl font-bold ${color}`}>{title}</h2>
  </div>
);

const StatBox = ({ label, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
    <p className="text-lg font-bold text-slate-800 leading-tight">{value}</p>
  </div>
);

/**
 * PENALTY GRID COMPONENT
 */
function PenaltyGrid() {
  const penalties = [
    { label: "Unregistered Vehicle", cost: "$700+", desc: "Illegal e-bikes are motorbikes" },
    { label: "Uninsured Vehicle", cost: "$700+", desc: "Mandatory CTP requirements" },
    { label: "Unlicensed Rider", cost: "Court", desc: "Criminal record implications" },
    { label: "Impound Fee", cost: "$1,200+", desc: "TfNSW seizure costs" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {penalties.map((p, i) => (
        <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex justify-between items-start mb-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider leading-none">{p.label}</span>
            <span className="text-sm font-black text-red-600 tracking-tighter leading-none">{p.cost}</span>
          </div>
          <p className="text-xs text-slate-600 italic leading-tight">{p.desc}</p>
        </div>
      ))}
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
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border-t-4 border-amber-500 animate-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-between items-center mb-6">
          <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">Legality Checker</span>
          <span className="text-slate-500 text-xs font-bold">Step {step + 1} of 3</span>
        </div>
        <h3 className="text-xl font-bold mb-4 leading-tight">{questions[step].question}</h3>
        <p className="text-slate-400 text-sm mb-8 italic">{questions[step].info}</p>
        <div className="flex flex-col sm:flex-row gap-4">
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
    <div className={`p-6 sm:p-8 rounded-3xl shadow-xl border-t-4 animate-in zoom-in-95 duration-500 ${isLegal ? 'bg-emerald-50 border-emerald-500' : 'bg-red-50 border-red-500'}`}>
      <div className="text-center">
        {isLegal ? (
          <>
            <CheckCircle2 className="text-emerald-500 mx-auto mb-4" size={64} />
            <h3 className="text-3xl font-black text-emerald-900 uppercase tracking-tighter mb-2">Likely Compliant</h3>
            <p className="text-emerald-800 font-medium mb-6 text-sm">Your bike meets the primary NSW road standards for 2026.</p>
          </>
        ) : (
          <>
            <XCircle className="text-red-500 mx-auto mb-4" size={64} />
            <h3 className="text-2xl sm:text-3xl font-black text-red-900 uppercase tracking-tighter mb-2 leading-none">ILLEGAL FOR ROAD USE</h3>
            <p className="text-red-800 font-medium mb-6 mt-2 text-sm italic leading-tight">Based on your answers, this device is classified as a <strong>Motorcycle</strong> and is subject to seizure.</p>
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
const App = () => {
  const [activeTab, setActiveTab] = useState('website');

  const LINKS = {
    ROAD_RULES: "https://legislation.nsw.gov.au/view/html/inforce/current/sl-2014-0758",
    ROAD_TRANSPORT_ACT: "https://legislation.nsw.gov.au/view/html/inforce/current/act-2013-018",
    VEHICLE_STANDARDS_ACT: "https://www.legislation.gov.au/Series/C2018A00061",
    TfNSW_EBIKES: "https://www.transport.nsw.gov.au/roadsafety/bicycle-riders/ebikes",
    FAMILY_ADVICE_PDF: "https://www.transport.nsw.gov.au/system/files/media/documents/2024/crs_e-bikes_families.pdf",
    FAIR_TRADING: "https://www.fairtrading.nsw.gov.au/help-centre/online-tools/make-a-complaint"
  };

  const navItems = [
    { id: 'website', label: 'Information Website' },
    { id: 'flyer', label: 'Printable A4 Flyer' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Print-specific Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { size: A4; margin: 10mm 0 0 0; }
          nav, button, .print-hide { display: none !important; }
          body, .min-h-screen { background: white !important; padding: 0 !important; margin: 0 !important; }
          main { width: 210mm !important; margin: 0 auto !important; padding: 0 !important; }
          .print-container { 
            transform: none !important; 
            box-shadow: none !important; 
            border: none !important; 
            margin: 0 !important; 
            width: 210mm !important; 
            height: 280mm !important; /* Shorter than 297mm to prevent overflow and shifting */
            padding: 15mm !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}} />

      {/* Navigation Header */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md print:hidden">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="text-amber-500" />
            <span className="font-black text-lg sm:text-xl tracking-tighter uppercase">NSW E-Bike Safety</span>
          </div>
          <div className="flex gap-2 sm:gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all text-sm sm:text-base ${
                  activeTab === item.id 
                    ? 'bg-amber-500 text-slate-900 font-bold' 
                    : 'hover:bg-slate-800 text-slate-300'
                }`}
              >
                {item.id === 'website' ? <Home size={18} /> : <FileText size={18} />}
                <span className="hidden md:inline">{item.label}</span>
                <span className="md:hidden">{item.id === 'website' ? 'Web' : 'Flyer'}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Warning Banner */}
      {activeTab === 'website' && (
        <div className="bg-red-700 text-white py-3 text-center font-bold px-4 text-xs sm:text-sm print:hidden">
          🚨 CRITICAL UPDATE: NEW "CRUSH" LAWS ACTIVE AS OF FEBRUARY 2026
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto p-4 sm:p-6">
        
        {activeTab === 'website' && (
          <div className="animate-in fade-in duration-500">
            {/* Hero Section */}
            <header className="mb-8 sm:mb-12 text-center py-6 sm:py-10">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-none uppercase">
                COMPLIANCE <span className="text-amber-500">{'&'}</span> ENFORCEMENT
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-2">
                Protecting our public spaces and families from the risks of illegal high-powered electric motorbikes.
              </p>
            </header>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
              <StatBox label="Max Power" value="250W" />
              <StatBox label="Speed Cut" value="25 km/h" />
              <StatBox label="Standard" value="EN 15194" />
              <StatBox label="Penalty" value="Seizure" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Left Column: Compliance Info */}
              <div className="lg:col-span-2 space-y-8 sm:space-y-10">
                <section>
                  <SectionHeader title="The Compliance Sticker Rule" icon={Zap} />
                  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
                    <p className="mb-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                      Every e-bike used on NSW roads or shared paths must be an <strong>EPAC</strong> (Electrically Power Assisted Cycle). Legality is determined by the manufacturer's label.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-slate-800 mb-2 uppercase text-xs">Sticker Rating ≤ 250W</h4>
                        <p className="text-sm text-slate-600 font-medium tracking-tight leading-snug italic">Legal for road use. Motor assistance must cut out at 25km/h.</p>
                      </div>
                      <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2 uppercase text-xs">Sticker Rating {'>'} 250W</h4>
                        <p className="text-sm text-red-700 font-bold tracking-tight uppercase underline leading-snug">Classified as a Motorcycle. Illegal for minors.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <SectionHeader title="Seizure & Retailer Accountability" icon={Hammer} color="text-red-700" />
                  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex items-start gap-4 p-4 bg-red-50 border-l-4 border-red-600 rounded-r-xl mb-6">
                      <AlertCircle className="text-red-600 shrink-0" />
                      <p className="text-sm text-red-900 font-bold leading-snug">
                        Under the Road Transport Act 2013, illegal bikes are destroyed (crushed). Police use portable <strong>Dyno Units</strong> to test wattage on-the-spot.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                      <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2 text-sm uppercase leading-none">
                        <Store className="text-amber-600" size={16} /> Retailer Notice
                      </h4>
                      <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                        Selling {'>'}250W motorbikes as "e-bikes" is a breach of Consumer Law. Report retailers who mislabel high-powered devices.
                      </p>
                      <a href={LINKS.FAIR_TRADING} target="_blank" rel="noreferrer" className="block w-full py-3 bg-slate-900 text-white rounded-xl text-center font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all">
                        Report to Fair Trading
                      </a>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: Quiz & Sidebars */}
              <div className="space-y-6">
                <LegalityQuiz />

                <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl border-b-4 border-amber-500">
                  <h3 className="text-lg font-black uppercase tracking-tighter text-amber-500 mb-2 leading-none">Penalties at a Glance</h3>
                  <PenaltyGrid />
                </div>

                <div className="bg-red-700 text-white p-6 sm:p-8 rounded-3xl shadow-xl border-t-4 border-white">
                  <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter leading-none">Is your house at risk?</h3>
                  <p className="text-white text-sm leading-relaxed mb-6 italic">
                    If an underage rider causes injury on an illegal e-bike, the financial fallout is catastrophic.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-white pl-4">
                      {/* NORMALIZED: Points 01 and 02 match perfectly */}
                      <h4 className="font-black text-white uppercase text-xl tracking-tight mb-1 leading-none tracking-tighter">01. NO INSURANCE</h4>
                      <p className="text-xs text-red-100 leading-snug">Home & Contents policies exclude "unregistered motor vehicles." Illegal e-bikes are motorbikes.</p>
                    </div>
                    <div className="border-l-2 border-white pl-4">
                      {/* NORMALIZED: Points 01 and 02 match perfectly */}
                      <h4 className="font-black text-white uppercase text-xl tracking-tight mb-1 leading-none tracking-tighter">02. ASSET SEIZURE</h4>
                      <p className="text-xs text-red-100 font-black uppercase leading-tight">Your family home and personal assets can be seized to pay legal judgments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Reference Section */}
            <footer className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 pb-20 text-sm print:hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-bold text-slate-800 mb-4 uppercase tracking-widest underline decoration-amber-500 underline-offset-4">Statutory Library</h3>
                  <div className="space-y-3">
                    <a href={LINKS.ROAD_RULES} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline font-bold"><ExternalLink size={14}/> Road Rules 2014 (NSW)</a>
                    <a href={LINKS.ROAD_TRANSPORT_ACT} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline font-bold"><ExternalLink size={14}/> Road Transport Act 2013 (NSW)</a>
                    <a href={LINKS.VEHICLE_STANDARDS_ACT} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline font-bold"><ExternalLink size={14}/> Road Vehicle Standards Act 2018 (Cth)</a>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-4 uppercase tracking-widest underline decoration-amber-500 underline-offset-4">Safety & Compliance</h3>
                  <div className="space-y-3">
                    <a href={LINKS.TfNSW_EBIKES} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline font-bold"><ExternalLink size={14}/> TfNSW: E-bike Safety & Sticker Info</a>
                    <a href={LINKS.FAMILY_ADVICE_PDF} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline font-bold"><ExternalLink size={14}/> Advice for families (Official PDF)</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        )}

        {/* A4 Flyer View - Optimized for Single-Page Printing */}
        {activeTab === 'flyer' && (
          <div className="flex flex-col items-center py-6 sm:py-10 animate-in fade-in zoom-in-95">
            <div className="w-full max-w-full overflow-x-auto overflow-y-hidden pb-10 flex flex-col items-center cursor-grab active:cursor-grabbing">
              <div className="print-container bg-white shadow-2xl overflow-hidden border-[6px] sm:border-[12px] border-slate-900 origin-top scale-[0.4] sm:scale-[0.55] md:scale-75 lg:scale-100 transition-transform mb-[-550px] sm:mb-[-400px] md:mb-[-150px] lg:mb-10" 
                   style={{ width: '210mm', height: '280mm', padding: '15mm', boxSizing: 'border-box' }}>
                
                <div className="bg-[#1A2A3A] text-white text-center py-8 -mx-10 -mt-10 mb-6">
                  <h1 className="text-5xl font-black tracking-tighter uppercase leading-none">URGENT: E-Bike Regulations</h1>
                  <p className="text-xl font-bold text-[#F39C12] uppercase tracking-widest mt-1">NSW Compliance {'&'} Parental Liability Guide 2026</p>
                </div>

                <div className="bg-[#C0392B] text-white text-center font-bold py-3 mb-6 text-lg uppercase">
                  CRACKDOWN ACTIVE: NON-COMPLIANT BIKES ARE SUBJECT TO SEIZURE AND DESTRUCTION.
                </div>

                <div className="space-y-6 text-slate-800">
                  <section className="border-b-2 border-[#1A2A3A] pb-1">
                    <h3 className="text-xl font-black text-[#1A2A3A] uppercase tracking-tighter leading-none pb-1">1. The Compliance Sticker Rule</h3>
                  </section>
                  <div className="grid grid-cols-1 gap-2 text-sm font-medium">
                    <p>• <strong>The 250W Cap:</strong> Motor power must not exceed 250W. The previous 500W allowance ended Dec 2025.</p>
                    <p>• <strong>Mandatory Labeling:</strong> Permanent EN 15194 compliance sticker must be visible on the frame.</p>
                    <p>• <strong>Rating {'>'} 250W:</strong> Legally a <strong>Motorcycle</strong>. Riding without registration/license is a criminal offense.</p>
                  </div>

                  <section className="border-b-2 border-[#1A2A3A] pb-1 pt-2">
                    <h3 className="text-xl font-black text-[#1A2A3A] uppercase tracking-tighter leading-none pb-1">2. Seizure {'&'} Retailer Accountability</h3>
                  </section>
                  <div className="grid grid-cols-1 gap-2 text-sm font-medium leading-tight">
                    <p>• <strong>No Sticker = Seizure:</strong> Bikes lacking compliance stickers are presumed illegal.</p>
                    <p>• <strong>Retailer Warning:</strong> Selling high-power bikes as "legal" is a breach of Consumer Law.</p>
                    <p>• <strong>Dyno Testing:</strong> Police use portable units to test motor wattage output in real-time roadside.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-[#F4F7F6] p-4 rounded-lg border border-[#1A2A3A]">
                      <h4 className="font-black text-xs uppercase mb-2 leading-none">Penalties at a Glance</h4>
                      <div className="text-[10px] space-y-1 font-bold leading-tight">
                        <p>Unregistered Vehicle: $700+ Fine</p>
                        <p>Uninsured Vehicle: $700+ Fine</p>
                        <p>Unlicensed Rider: Court Attendance</p>
                        <p>TfNSW Seizure Fee: $1,200+</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-[#C0392B]">
                      <h4 className="font-black text-xs text-[#C0392B] uppercase mb-2 leading-none">Quick Compliance Check</h4>
                      <div className="text-[10px] space-y-1 font-bold leading-tight">
                        <p>□ Permanent EN 15194 sticker?</p>
                        <p>□ Motor rated 250W or less?</p>
                        <p>□ Motor assist cuts out at 25km/h?</p>
                        <p>□ Approved helmet being worn?</p>
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

                <div className="absolute bottom-10 left-10 right-10 bg-[#1A2A3A] text-white p-6 rounded-lg text-center">
                   <h4 className="font-black text-[#F39C12] uppercase text-sm tracking-widest leading-none">Official Statutory Reference</h4>
                   <p className="text-[10px] mt-2 opacity-80 uppercase font-mono tracking-tighter">Road Rules 2014 | Road Transport Act 2013 | RVS Act 2018</p>
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-xs italic mt-4 md:hidden text-center print-hide">Tip: Pinch to zoom or swipe the flyer to view full details.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;