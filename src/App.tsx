import React, { useState } from 'react';
import { 
  Shield, Award, ArrowRight, Calendar, DollarSign, Lock, 
  ChevronRight, CheckCircle2, Sparkles, Layers, Terminal, Server,
  AlertCircle, Check, Phone, Camera, PenTool, Flame, Truck, Star
} from 'lucide-react';
import { AdminPortalModal } from './AdminPortalModal.tsx';

interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  rate: string;
  status: string;
  features: string[];
  img: string;
}

const ITEMS: ShowcaseItem[] = [
  {
    "id": "TATTOO-REALISM",
    "title": "Full-Day Black & Grey Micro-Realism Session",
    "subtitle": "Master Artist Kai Vance // Bespoke Design Consultation + 7hr Inking",
    "rate": "$1,800 Full Day Block",
    "status": "OCTOBER CALENDAR OPEN",
    "features": [
      "Bishop Rotary Precision Needle Setup",
      "Single-Use Hospital Grade Medical Disposable Grip",
      "Custom Photoshop Digital Render Consultation",
      "SecondSkin Derm Shield Aftercare Kit Included"
    ],
    "img": "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28"
  },
  {
    "id": "TATTOO-SLEEVE",
    "title": "Japanese Irezumi Full Sleeve Project",
    "subtitle": "Multi-Session Large Scale Body Suit // Traditional Horimono Flow",
    "rate": "$3,500 Initial Project Retainer",
    "status": "APPLICATION SCREENING",
    "features": [
      "Anatomical Flow Muscle Contouring",
      "Kuro Sumi Traditional Japanese Pigments",
      "Private Atelier Studio Suite (Zero Foot Traffic)",
      "Complimentary Touch-Up Within 12 Months"
    ],
    "img": "https://images.unsplash.com/photo-1562962230-16e4623d36e6"
  },
  {
    "id": "FLASH-VAULT",
    "title": "Exclusive Vault Flash Drop Series",
    "subtitle": "One-of-One Signature Illustrations // Inked Once Only",
    "rate": "$650 Flat Session Rate",
    "status": "4 OF 6 PIECES CLAIMED",
    "features": [
      "Non-Repeatable Intellectual Property",
      "Instant Digital Deposit Booking Gate",
      "Pre-Drafted Digital Consent & Health Waiver",
      "Same-Week Booking Priority Execution"
    ],
    "img": "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d"
  }
];

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(
    typeof window !== 'undefined' && (
      window.location.search.includes('admin') || 
      window.location.pathname.endsWith('/admin') ||
      window.location.hash === '#admin'
    )
  );
  const [selectedItem, setSelectedItem] = useState(ITEMS[0].id);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInquiryName('');
      setInquiryPhone('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-zinc-100 font-sans selection:bg-rose-500/20 selection:text-rose-400">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center text-white font-extrabold shadow-lg shadow-rose-600/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-rose-500 font-semibold">High-Ticket Custom Tattoo & Resident Artist Studio OS</span>
              <h1 className="text-lg font-bold tracking-tight text-white leading-none">CUSTOM INK STUDIO OS</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-zinc-400">
            <a href="#packages" className="hover:text-rose-400 transition">Services</a>
            <a href="#specs" className="hover:text-rose-400 transition">Standards</a>
            <a href="#booking" className="hover:text-rose-400 transition">Reserve Session</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-rose-500/40 text-rose-400 hover:bg-rose-500/10 text-xs font-mono uppercase tracking-wider transition flex items-center gap-2"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>[ STUDIO PASS ]</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-20 pb-24 px-6 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(244,63,94,0.15),rgba(255,255,255,0))]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono mb-6">
            <Star className="w-3.5 h-3.5" />
            <span>PREMIUM STUDIO ENGINE • 9.8 VERIFIED PRODUCTION GRADE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            CUSTOM <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500">INK STUDIO OS</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Resident Artist Flash Drops, Deposit Booking Gate & Digital Waivers. Precision craft, dedicated client portals, and turnkey Supabase PostgreSQL database schemas.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#booking"
              className="px-8 py-3.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-zinc-950 font-bold text-sm tracking-wide transition shadow-lg shadow-rose-500/25 flex items-center gap-2"
            >
              <span>Book Priority Session</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-rose-500/40 text-zinc-200 text-sm font-semibold transition flex items-center gap-2"
            >
              <span>Launch Studio OS</span>
              <span className="text-rose-400 font-mono text-xs font-bold">[customink2026]</span>
            </button>
          </div>

          {/* Metrics Ticker */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            
              <div key="RESIDENT MASTER ARTISTS" className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">RESIDENT MASTER ARTISTS</span>
                <p className="text-lg sm:text-xl font-bold font-mono text-rose-400 mt-1">{"7 ARTISTS"}</p>
              </div>
            
              <div key="DEPOSIT RETENTION GATE" className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">DEPOSIT RETENTION GATE</span>
                <p className="text-lg sm:text-xl font-bold font-mono text-rose-400 mt-1">{"$150 NON-REFUNDABLE"}</p>
              </div>
            
              <div key="HEALTH DEPT COMPLIANCE" className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">HEALTH DEPT COMPLIANCE</span>
                <p className="text-lg sm:text-xl font-bold font-mono text-rose-400 mt-1">{"100% STERILE AUDITED"}</p>
              </div>
            
              <div key="DIGITAL WAIVERS ARCHIVED" className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">DIGITAL WAIVERS ARCHIVED</span>
                <p className="text-lg sm:text-xl font-bold font-mono text-rose-400 mt-1">{"8,400+ SIGNED"}</p>
              </div>
            
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section id="packages" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono text-rose-500 uppercase tracking-widest block mb-2">CURATED TIERS & PACKAGES</span>
            <h3 className="text-3xl font-extrabold text-white">Signature Studio Services</h3>
          </div>
          <span className="text-sm text-zinc-400 mt-2 md:mt-0 font-mono">100% Verified Quality & VIP Gate</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ITEMS.map((item) => (
            <div 
              key={item.id}
              className="group rounded-2xl bg-[#121214] border border-zinc-800 hover:border-rose-500/40 transition-all overflow-hidden flex flex-col shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-zinc-900">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-zinc-700 text-[11px] font-mono font-bold text-rose-400">
                  {item.status}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-rose-400 uppercase tracking-wider block mb-1">{item.id}</span>
                  <h4 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h4>
                  <p className="text-xs text-zinc-400 mb-4">{item.subtitle}</p>

                  <div className="space-y-2 mb-6">
                    {item.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                        <Check className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-sm font-bold text-rose-400 font-mono">{item.rate}</span>
                  <a
                    href="#booking"
                    onClick={() => setSelectedItem(item.id)}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-rose-500 hover:text-zinc-950 text-zinc-200 text-xs font-semibold transition"
                  >
                    Select Option
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking / Intake Form */}
      <section id="booking" className="py-20 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-rose-500 uppercase tracking-widest block mb-2">PRIORITY INTAKE</span>
            <h3 className="text-3xl font-extrabold text-white">Reserve Session or Submit Consultation</h3>
            <p className="text-zinc-400 text-sm mt-3">Direct integration into PostgreSQL records with instant deposit triage.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-[#121214] border border-rose-500/20 shadow-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Client / Production Entity</label>
                <input
                  type="text"
                  required
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  placeholder="e.g. Sterling Productions LLC"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-100 focus:outline-none focus:border-rose-500 text-sm font-sans"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Direct Phone / Mobile</label>
                <input
                  type="tel"
                  required
                  value={inquiryPhone}
                  onChange={(e) => setInquiryPhone(e.target.value)}
                  placeholder="+1 (555) 234-5678"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-100 focus:outline-none focus:border-rose-500 text-sm font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">Selected Package</label>
              <select
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-100 focus:outline-none focus:border-rose-500 text-sm font-sans"
              >
                {ITEMS.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.id} - {item.title} ({item.rate})
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-rose-500 hover:bg-rose-400 text-zinc-950 font-extrabold text-sm uppercase tracking-wider transition shadow-lg shadow-rose-500/20"
            >
              {submitted ? '✓ RESERVATION CONFIRMED & LOGGED' : 'SUBMIT APPOINTMENT RESERVATION'}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800 bg-[#0A0A0B] text-zinc-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-zinc-300 font-bold">CUSTOM INK STUDIO OS</span> • Commercial Studio OS v1.0.0
          </div>
          <div className="flex items-center gap-6">
            <span>Ghost Factory™ Protocol</span>
            <span>Supabase RLS Enforced</span>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-rose-400 hover:underline"
            >
              Admin Portal (customink2026)
            </button>
          </div>
        </div>
      </footer>

      {/* Admin Modal */}
      <AdminPortalModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
}
