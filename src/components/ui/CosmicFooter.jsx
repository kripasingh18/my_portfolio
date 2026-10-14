import React from 'react';

export default function CosmicFooter({ activeRoom }) {
  // Hide footer on landing screen for pristine cinematic clarity
  if (activeRoom === 'landing') return null;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 px-6 py-3 flex items-center justify-between text-xs font-mono pointer-events-none text-[#B9A7FF]/60 bg-gradient-to-t from-[#070B24]/90 to-transparent">
      {/* Left: Brand Identity */}
      <div className="flex items-center gap-2">
        <span className="text-[#55CFFF] font-medium tracking-wider">KRIPAVERSE</span>
        <span className="text-white/20">—</span>
        <span>A Journey Through My World</span>
      </div>

      {/* Center: Controls Hint */}
      <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#101A4B]/40 border border-[#826BFF]/20 text-[#EAF4FF]/75 backdrop-blur-xs">
        <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-[#55CFFF]">W A S D</span>
        <span>to explore</span>
        <span className="text-white/20">•</span>
        <span>Click glowing beacons to inspect</span>
      </div>

      {/* Right: Pillars */}
      <div className="hidden sm:flex items-center gap-2 text-[11px] tracking-wider text-[#B9A7FF]/70">
        <span className="text-[#55CFFF]">CODE</span>
        <span>•</span>
        <span className="text-[#F0BFFF]">CREATE</span>
        <span>•</span>
        <span className="text-[#EAF4FF]">DISCOVER</span>
      </div>
    </footer>
  );
}
