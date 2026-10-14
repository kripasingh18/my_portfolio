import React from 'react';
import { ArrowRight, Mouse } from 'lucide-react';

export default function LandingOverlay({ onEnterUniverse }) {
  return (
    <div className="absolute inset-0 z-30 flex items-center p-8 md:p-16 lg:p-24 pointer-events-none select-none animate-fadeIn">
      {/* Portfolio Introduction Placed Elegantly on the Left Side */}
      <div className="w-full max-w-xl space-y-6 md:space-y-8 pointer-events-auto text-left">
        {/* Subtle Brand Mark */}
        <div className="inline-flex items-center gap-3 text-xs md:text-sm font-['Space_Grotesk'] tracking-[0.35em] text-[#C7B7FF]/90 uppercase">
          <span className="w-6 h-[1px] bg-[#C7B7FF]/40 inline-block"></span>
          <span className="text-[#8ECFFF]">✦</span>
          <span className="font-semibold text-[#F2F5FF]">KRIPA</span>
          <span className="text-[#8ECFFF]">✦</span>
          <span className="w-6 h-[1px] bg-[#C7B7FF]/40 inline-block"></span>
        </div>

        {/* Main Title: BEYOND ORBIT */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light font-['Space_Grotesk'] tracking-[0.08em] uppercase text-[#F2F5FF] leading-none drop-shadow-[0_4px_30px_rgba(142,207,255,0.4)]">
            BEYOND <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F2F5FF] via-[#8ECFFF] to-[#C7B7FF]">ORBIT</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-light tracking-wide text-[#C7B7FF] font-['Space_Grotesk'] max-w-md leading-relaxed">
            A universe of code, creativity &amp; possibilities
          </p>
        </div>

        {/* Refined Glass Button: ENTER MY UNIVERSE */}
        <div className="pt-2">
          <button
            onClick={onEnterUniverse}
            className="cosmic-glass-btn group cursor-pointer inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs md:text-sm font-['Space_Grotesk'] tracking-[0.12em] uppercase font-semibold text-[#F2F5FF] transition-all"
          >
            <span>ENTER MY UNIVERSE</span>
            <ArrowRight className="w-4 h-4 text-[#8ECFFF] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Subtle Interactive Hint */}
        <div className="pt-4 flex items-center gap-2.5 text-xs font-['Space_Grotesk'] text-[#C7B7FF]/70 tracking-wider">
          <span className="w-4 h-[1px] bg-[#C7B7FF]/30 inline-block"></span>
          <Mouse className="w-3.5 h-3.5 text-[#8ECFFF]/80" />
          <span>Interactive 3D Experience</span>
          <span className="w-4 h-[1px] bg-[#C7B7FF]/30 inline-block"></span>
        </div>
      </div>
    </div>
  );
}
