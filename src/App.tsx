import React, { useState } from 'react';
import { 
  Sparkles, Shield, Award, ArrowRight, Calendar, DollarSign, Lock, 
  ChevronRight, CheckCircle2, Layers, Terminal, Server,
  AlertCircle, Check, Phone, Plane, Thermometer, Compass, Fuel, Gauge,
  Clock, X, Flame, Image, User, Scissors
} from 'lucide-react';
import { AdminPortalModal } from './AdminPortalModal.tsx';

interface FlashPiece {
  id: string;
  title: string;
  artist: string;
  style: 'Micro-Realism' | 'Dark Neo-Traditional' | 'Black & Grey' | 'Japanese Irezumi';
  placement: string;
  estHours: string;
  deposit: number;
  fullPrice: number;
  status: 'AVAILABLE' | 'CLAIMED';
  img: string;
  aspect: string;
}

const FLASH_PIECES: FlashPiece[] = [
  {
    id: "INK-081",
    title: "The Archangel Sovereign (Full Forearm)",
    artist: "Dante Vesper (Resident Master)",
    style: "Micro-Realism",
    placement: "Inner Forearm or Calf",
    estHours: "6-8 Hours (Single Session)",
    deposit: 300,
    fullPrice: 1800,
    status: "AVAILABLE",
    img: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28",
    aspect: "row-span-2"
  },
  {
    id: "INK-044",
    title: "Obsidian Serpent & Peony Bloom",
    artist: "Kira Thorne",
    style: "Dark Neo-Traditional",
    placement: "Thigh or Ribcage",
    estHours: "4-5 Hours",
    deposit: 250,
    fullPrice: 1200,
    status: "AVAILABLE",
    img: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d",
    aspect: "row-span-1"
  },
  {
    id: "INK-109",
    title: "Gothic Cathedral Rib Vaulting & Gargoyle",
    artist: "Dante Vesper (Resident Master)",
    style: "Black & Grey",
    placement: "Full Backpiece or Chest Centerpiece",
    estHours: "18-24 Hours (Multi-Session)",
    deposit: 600,
    fullPrice: 4800,
    status: "AVAILABLE",
    img: "https://images.unsplash.com/photo-1562962230-16e4623d36e6",
    aspect: "row-span-2"
  },
  {
    id: "INK-032",
    title: "Ryu Dragon Scale & Wave Crest",
    artist: "Master Kenzo Hori",
    style: "Japanese Irezumi",
    placement: "Quarter Sleeve or Shoulder Cap",
    estHours: "8-10 Hours",
    deposit: 400,
    fullPrice: 2400,
    status: "AVAILABLE",
    img: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd",
    aspect: "row-span-1"
  }
];

export default function App() {
  const [selectedStyle, setSelectedStyle] = useState<string>('ALL');
  const [selectedPiece, setSelectedPiece] = useState<FlashPiece | null>(null);
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [clientName, setClientName] = useState('Christian Bale');
  const [placementInput, setPlacementInput] = useState('Left Inner Forearm');
  const [consultDate, setConsultDate] = useState('2026-10-22');
  const [claimedSuccess, setClaimedSuccess] = useState(false);

  const [isAdminOpen, setIsAdminOpen] = useState(
    typeof window !== 'undefined' && (
      window.location.search.includes('admin') || 
      window.location.pathname.endsWith('/admin') ||
      window.location.hash === '#admin'
    )
  );

  const filtered = FLASH_PIECES.filter(p => 
    selectedStyle === 'ALL' || p.style === selectedStyle
  );

  const handleClaim = (piece: FlashPiece) => {
    setSelectedPiece(piece);
    setPlacementInput(piece.placement);
    setIsDepositOpen(true);
    setClaimedSuccess(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-zinc-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      {/* Top Telemetry Header */}
      <header className="border-b border-zinc-800 bg-[#0C0D11]/95 backdrop-blur-md px-6 py-4 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-30 font-mono text-sm">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
          <span className="font-serif tracking-widest text-white flex items-center gap-2 text-base font-bold">
            <Flame size={18} className="text-rose-500" /> NOIR ATELIER // BESPOKE TATTOO FLASH & BODY ART
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400 font-semibold uppercase text-xs">ARCHETYPE B: ASYMMETRIC EDITORIAL</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-300">
            <Shield size={14} className="text-rose-500" />
            <span>SINGLE-USE AUTOCLAVE & MEDICAL GRADE STERILIZATION</span>
          </div>
          <button 
            onClick={() => setIsAdminOpen(true)}
            className="px-3.5 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/40 rounded-lg text-xs font-mono font-bold transition-all"
          >
            [ ATELIER CHAIR PASS ]
          </button>
        </div>
      </header>

      {/* Editorial Header Statement */}
      <section className="px-6 py-12 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400 bg-rose-950/40 border border-rose-500/30 px-3 py-1 rounded-full">
            Private Resident Body Art Archive
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-serif leading-[1.1]">
            One-Off Flash Works. <br />
            <span className="text-zinc-400 italic font-light">Tattooed Once, Never Repeated.</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
            High-contrast dark editorial showcase of exclusive custom pieces authored by resident masters. Reserve claiming rights with an escrow deposit.
          </p>
        </div>

        {/* Dynamic Style Filters */}
        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-zinc-800/80 font-mono text-xs">
          {['ALL', 'Micro-Realism', 'Dark Neo-Traditional', 'Black & Grey', 'Japanese Irezumi'].map(style => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`px-4 py-2 rounded-full border transition-all ${
                selectedStyle === style 
                  ? 'bg-rose-500 text-white border-rose-500 font-bold' 
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </section>

      {/* Asymmetric Masonry Flash Gallery */}
      <section className="px-6 pb-20 max-w-7xl mx-auto w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filtered.map(piece => (
            <div 
              key={piece.id}
              className="bg-[#111217] border border-zinc-800 rounded-2xl overflow-hidden group hover:border-rose-500/50 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={piece.img} 
                  alt={piece.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full font-mono text-xs font-bold text-rose-400 border border-white/10">
                  {piece.id}
                </div>
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full font-mono text-xs font-bold text-white border border-white/10">
                  {piece.style}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase font-semibold">
                    Artist: {piece.artist}
                  </span>
                  <h3 className="text-xl font-black text-white font-serif mt-1">
                    {piece.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2 py-3 border-y border-zinc-800 font-mono text-xs">
                  <div>
                    <span className="text-zinc-500 block text-[10px]">RECOMMENDED PLACEMENT</span>
                    <span className="text-zinc-200 font-bold">{piece.placement}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">SESSION ESTIMATE</span>
                    <span className="text-zinc-200 font-bold">{piece.estHours}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">TOTAL INVESTMENT</span>
                    <span className="text-2xl font-black text-white font-mono">
                      ${piece.fullPrice.toLocaleString()} <span className="text-xs text-rose-400">(${piece.deposit} Deposit)</span>
                    </span>
                  </div>

                  <button
                    onClick={() => handleClaim(piece)}
                    className="px-5 py-2.5 bg-rose-500 hover:bg-rose-400 text-white font-mono font-black text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-lg shadow-rose-500/20 cursor-pointer min-h-[44px]"
                  >
                    <span>CLAIM PIECE</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slide-over Consultation & Deposit Sheet */}
      {isDepositOpen && selectedPiece && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#0E0F14] border-l border-zinc-800 p-8 overflow-y-auto flex flex-col justify-between font-sans shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Flame size={20} className="text-rose-500" />
                  <span className="font-mono text-sm font-bold text-white uppercase tracking-wider">Flash Claim & Deposit Sheet</span>
                </div>
                <button 
                  onClick={() => setIsDepositOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
                >
                  <X size={20} />
                </button>
              </div>

              <div>
                <img 
                  src={selectedPiece.img} 
                  alt={selectedPiece.title} 
                  className="w-full h-44 object-cover rounded-xl border border-zinc-800" 
                />
                <div className="mt-3 flex justify-between items-center text-xs font-mono text-rose-400">
                  <span>PIECE: {selectedPiece.id}</span>
                  <span>{selectedPiece.style}</span>
                </div>
                <h2 className="text-2xl font-black text-white font-serif mt-1">{selectedPiece.title}</h2>
                <p className="text-xs text-zinc-400 mt-1">Authored by {selectedPiece.artist}</p>
              </div>

              {/* Consultation Details */}
              <div className="space-y-4 font-mono text-xs">
                <div className="space-y-1.5">
                  <label className="text-zinc-400 uppercase font-bold">Collector Full Name</label>
                  <input 
                    type="text"
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3 text-white font-mono text-sm focus:border-rose-400 outline-none min-h-[44px]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-400 uppercase font-bold">Desired Body Placement</label>
                  <input 
                    type="text"
                    value={placementInput}
                    onChange={e => setPlacementInput(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3 text-white font-mono text-sm focus:border-rose-400 outline-none min-h-[44px]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-400 uppercase font-bold">Preferred Session Date</label>
                  <input 
                    type="date"
                    value={consultDate}
                    onChange={e => setConsultDate(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3 text-white font-mono text-sm focus:border-rose-400 outline-none min-h-[44px]"
                  />
                </div>
              </div>

              {/* Deposit Pricing Box */}
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Total Piece Honorarium:</span>
                  <span className="text-white font-bold">${selectedPiece.fullPrice} USD</span>
                </div>
                <div className="flex justify-between text-rose-400 font-bold pt-1 border-t border-zinc-800">
                  <span>Non-Refundable Holding Deposit:</span>
                  <span>${selectedPiece.deposit} USD</span>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 border-t border-zinc-800 space-y-3 font-mono">
              {claimedSuccess ? (
                <div className="p-4 bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-xl text-center text-xs font-bold space-y-1">
                  <div>✓ FLASH PIECE CLAIMED & RETIRED FROM ARCHIVE</div>
                  <div className="text-[11px] text-zinc-300">Intake coordinator sent calendar invite and prep instructions.</div>
                </div>
              ) : (
                <button
                  onClick={() => setClaimedSuccess(true)}
                  className="w-full py-4 bg-rose-500 hover:bg-rose-400 text-white font-black text-sm rounded-xl transition-all shadow-xl shadow-rose-500/20 cursor-pointer min-h-[44px]"
                >
                  DEPOSIT ${selectedPiece.deposit} & CLAIM FLASH EXCLUSIVE
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <AdminPortalModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
}
