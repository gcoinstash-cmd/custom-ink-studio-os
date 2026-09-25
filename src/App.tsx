import React, { useState } from 'react';
import { 
  PenTool, Shield, Award, Calendar, DollarSign, Lock, ArrowRight, Check, 
  Sparkles, Layers, Image as ImageIcon, Heart, User, CheckCircle2, FileSignature
} from 'lucide-react';
import { AdminPortalModal } from './AdminPortalModal.tsx';

interface Artist {
  id: string;
  name: string;
  handle: string;
  specialty: string;
  hourlyRate: string;
  nextAvailable: string;
  avatar: string;
  bookedPieces: number;
}

const ARTISTS: Artist[] = [
  {
    id: 'kai-vance',
    name: 'Kai Vance',
    handle: '@kaivance.ink',
    specialty: 'Dark Surrealism & Single-Needle Micro-Realism',
    hourlyRate: '$300 / hr ($1,800 Day Session)',
    nextAvailable: 'Late October 2026',
    avatar: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28',
    bookedPieces: 412
  },
  {
    id: 'elena-mori',
    name: 'Elena Mori',
    handle: '@mori.irezumi',
    specialty: 'Traditional Japanese Horimono & Large Scale Sleeves',
    hourlyRate: '$280 / hr ($3,500 Sleeve Retainer)',
    nextAvailable: 'November 2026',
    avatar: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6',
    bookedPieces: 328
  },
  {
    id: 'soren-black',
    name: 'Soren Black',
    handle: '@sorenblack.blackwork',
    specialty: 'Heavy Blackwork, Sacred Geometry & Freehand Flow',
    hourlyRate: '$250 / hr ($1,500 Day Session)',
    nextAvailable: 'Mid-October 2026',
    avatar: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d',
    bookedPieces: 519
  }
];

interface FlashPiece {
  id: string;
  title: string;
  artistId: string;
  price: number;
  heightClass: string;
  status: 'AVAILABLE' | 'RESERVED_CLAIMED';
  placement: string;
  img: string;
}

const FLASH_PIECES: FlashPiece[] = [
  { id: 'FLASH-01', title: 'The Obsidian Seraph', artistId: 'kai-vance', price: 650, heightClass: 'h-80', status: 'AVAILABLE', placement: 'Forearm / Calve', img: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28' },
  { id: 'FLASH-02', title: 'Ryu Dragon Coil Study', artistId: 'elena-mori', price: 1200, heightClass: 'h-96', status: 'AVAILABLE', placement: 'Full Ribcage / Back', img: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6' },
  { id: 'FLASH-03', title: 'Geometric Torus Pulse', artistId: 'soren-black', price: 550, heightClass: 'h-72', status: 'AVAILABLE', placement: 'Upper Bicep / Shoulder', img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d' },
  { id: 'FLASH-04', title: 'Anatomical Heart & Thorns', artistId: 'kai-vance', price: 750, heightClass: 'h-96', status: 'RESERVED_CLAIMED', placement: 'Chest Center Plate', img: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28' },
  { id: 'FLASH-05', title: 'Chrysanthemum & Wave', artistId: 'elena-mori', price: 850, heightClass: 'h-80', status: 'AVAILABLE', placement: 'Thigh / Hip Transition', img: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6' },
  { id: 'FLASH-06', title: 'Sacred Mandala Compass', artistId: 'soren-black', price: 600, heightClass: 'h-72', status: 'AVAILABLE', placement: 'Forearm Inner Plate', img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d' },
];

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(
    typeof window !== 'undefined' && (
      window.location.search.includes('admin') || 
      window.location.pathname.endsWith('/admin') ||
      window.location.hash === '#admin'
    )
  );

  const [selectedPiece, setSelectedPiece] = useState<FlashPiece | null>(FLASH_PIECES[0]);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [waiverSigned, setWaiverSigned] = useState(false);
  const [depositPaid, setDepositPaid] = useState(false);

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone || !waiverSigned) return;
    setDepositPaid(true);
    setTimeout(() => {
      setDepositPaid(false);
      setClientName('');
      setClientPhone('');
      setWaiverSigned(false);
      setSelectedPiece(null);
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-zinc-100 font-sans selection:bg-rose-500/20 selection:text-rose-400">
      {/* Editorial Floating Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-zinc-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-red-700 flex items-center justify-center text-white font-serif font-black shadow-lg shadow-rose-600/20">
              <PenTool className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider font-mono uppercase tracking-widest text-rose-400 font-bold block">BESPOKE ATELIER // LA & NYC</span>
              <h1 className="text-base font-serif font-extrabold text-white leading-none tracking-wide">CUSTOM INK STUDIO OS</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <a href="#artists" className="hover:text-rose-400 transition">Resident Roster</a>
            <a href="#flash-gallery" className="hover:text-rose-400 transition">Flash Book (1-of-1)</a>
            <a href="#booking-drawer" className="hover:text-rose-400 transition">Deposit Gate</a>
          </div>

          <button
            onClick={() => setIsAdminOpen(true)}
            className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-rose-500/30 text-rose-400 hover:bg-rose-500/10 text-xs font-mono uppercase tracking-wider transition flex items-center gap-1.5"
          >
            <Lock className="w-3 h-3" />
            <span>[ ATELIER PASS ]</span>
          </button>
        </div>
      </header>

      {/* Hero & Philosophy */}
      <section className="pt-16 pb-12 px-6 max-w-6xl mx-auto text-center">
        <span className="text-xs font-mono text-rose-400 uppercase tracking-widest block mb-3">PRIVATE APPOINTMENT ONLY // ZERO FOOT TRAFFIC</span>
        <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-white">
          Permanent Artistry & <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500 font-serif">One-of-One Flash</span>
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Master resident artists executing single-needle micro-realism, large scale Japanese Horimono body suits, and sacred blackwork geometry. Every flash piece is inked once and retired forever.
        </p>
      </section>

      {/* Resident Artists Showcase */}
      <section id="artists" className="py-8 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-zinc-800">
          <div>
            <span className="text-xs font-mono text-rose-400 uppercase tracking-widest block">ATELIER MASTERS</span>
            <h3 className="text-2xl font-serif font-bold text-white">Resident Artist Roster</h3>
          </div>
          <span className="text-xs font-mono text-zinc-400">Books Open for Q4</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTISTS.map((artist) => (
            <div key={artist.id} className="p-6 rounded-3xl bg-[#121214] border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img src={artist.avatar} alt={artist.name} className="w-14 h-14 rounded-2xl object-cover border border-zinc-700" />
                  <div>
                    <h4 className="text-lg font-serif font-bold text-white leading-tight">{artist.name}</h4>
                    <span className="text-xs font-mono text-rose-400 block">{artist.handle}</span>
                    <span className="text-xs font-semibold font-mono text-zinc-300">{artist.bookedPieces} Works Archived</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 font-sans mb-4 leading-relaxed">{artist.specialty}</p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 text-xs font-mono">
                <div className="flex justify-between mb-1">
                  <span className="text-zinc-300">Rate:</span>
                  <span className="text-white font-bold">{artist.hourlyRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-300">Next Calendar:</span>
                  <span className="text-rose-400 font-bold">{artist.nextAvailable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Asymmetric Flash Gallery */}
      <section id="flash-gallery" className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-3 border-b border-zinc-800">
          <div>
            <span className="text-xs font-mono text-rose-400 uppercase tracking-widest block">VAULT ARCHIVE</span>
            <h3 className="text-2xl font-serif font-bold text-white">Available 1-of-1 Flash Pieces</h3>
          </div>
          <span className="text-xs font-mono text-zinc-400 mt-2 sm:mt-0">Click any artwork to lock and claim with a $150 deposit</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLASH_PIECES.map((piece) => {
            const isSelected = selectedPiece?.id === piece.id;
            const isClaimed = piece.status === 'RESERVED_CLAIMED';
            return (
              <div
                key={piece.id}
                onClick={() => !isClaimed && setSelectedPiece(piece)}
                className={`group rounded-3xl overflow-hidden border transition cursor-pointer relative flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-rose-950/20 border-rose-500 shadow-2xl shadow-rose-950/50' 
                    : isClaimed 
                    ? 'bg-zinc-950 border-zinc-900 opacity-60 cursor-not-allowed'
                    : 'bg-[#121214] border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className={`relative ${piece.heightClass} overflow-hidden bg-zinc-950`}>
                  <img 
                    src={piece.img} 
                    alt={piece.title} 
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-black/80 backdrop-blur-md text-xs font-semibold tracking-wider font-mono text-zinc-300 border border-zinc-700">
                    {piece.placement}
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-xl bg-black/80 backdrop-blur-md text-xs font-semibold tracking-wider font-mono font-bold border border-zinc-700">
                    {isClaimed ? (
                      <span className="text-zinc-300">RESERVED</span>
                    ) : (
                      <span className="text-rose-400">AVAILABLE</span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold tracking-wider font-mono text-zinc-300 uppercase tracking-widest">{piece.id}</span>
                  <h4 className="text-lg font-serif font-bold text-white mb-1">{piece.title}</h4>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-800">
                    <span className="text-base font-serif font-black text-rose-400">${piece.price} USD</span>
                    <button
                      disabled={isClaimed}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition ${
                        isClaimed ? 'bg-zinc-900 text-zinc-600' : isSelected ? 'bg-rose-500 text-zinc-950' : 'bg-zinc-900 text-zinc-200 hover:bg-zinc-800'
                      }`}
                    >
                      {isClaimed ? 'CLAIMED' : isSelected ? 'SELECTED' : 'LOCK DESIGN'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Selected Flash Booking & Deposit Drawer */}
      {selectedPiece && (
        <section id="booking-drawer" className="py-12 px-6 max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-[#121214] border border-rose-500/40 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-rose-400 uppercase tracking-widest block">DEPOSIT LOCK GATE</span>
                <h3 className="text-2xl font-serif font-bold text-white">Claim "{selectedPiece.title}"</h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-zinc-300 block">TOTAL PIECE COST:</span>
                <span className="text-2xl font-serif font-extrabold text-rose-400">${selectedPiece.price} USD</span>
              </div>
            </div>

            <form onSubmit={handleClaim} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold tracking-wider font-mono text-zinc-400 uppercase mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Sterling Thorne"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold tracking-wider font-mono text-zinc-400 uppercase mb-1">Mobile Contact (Confirmation SMS)</label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+1 (555) 982-1204"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              {/* Digital Consent Waiver Check */}
              <div 
                onClick={() => setWaiverSigned(!waiverSigned)}
                className={`p-4 rounded-2xl border transition cursor-pointer flex items-center gap-3 ${
                  waiverSigned ? 'bg-rose-950/20 border-rose-500 text-white' : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                }`}
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                  waiverSigned ? 'bg-rose-500 border-rose-500 text-zinc-950' : 'border-zinc-700'
                }`}>
                  {waiverSigned && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div className="text-xs font-mono">
                  <span>I agree to the <strong>Digital Consent & Health Department Sterility Waiver</strong> and confirm a <strong>$150 non-refundable deposit</strong> to permanently retire this piece from the vault.</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={!waiverSigned}
                className={`w-full py-4 rounded-xl font-serif font-black text-sm uppercase tracking-wider transition shadow-lg shadow-rose-500/25 ${
                  waiverSigned ? 'bg-rose-500 hover:bg-rose-400 text-zinc-950 cursor-pointer' : 'bg-zinc-800 text-zinc-300 cursor-not-allowed'
                }`}
              >
                {depositPaid ? '✓ $150 DEPOSIT SECURED // FLASH CLAIMED' : 'PAY $150 DEPOSIT & LOCK IN DESIGN'}
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800 bg-[#0A0A0B] text-zinc-300 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-zinc-300 font-serif font-bold">CUSTOM INK STUDIO OS</span> • Luxury Tattoo Atelier v1.0.0
          </div>
          <div className="flex items-center gap-6">
            <span>Ghost Factory™ Protocol</span>
            <span>Supabase RLS Enforced</span>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-rose-400 hover:underline"
            >
              Atelier Portal (customink2026)
            </button>
          </div>
        </div>
      </footer>

      {/* Admin Modal */}
      <AdminPortalModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
}
