import React from 'react';
import { Volume2, VolumeX, Compass, LayoutGrid } from 'lucide-react';
import { roomsData } from '../../data/rooms';

export default function CosmicHeader({
  activeRoom,
  onNavigate,
  isMuted,
  onToggleSound,
  onToggle2DMode,
  is2DMode,
}) {
  // On landing screen, keep it minimal: only subtle audio toggle in top right
  if (activeRoom === 'landing' && !is2DMode) {
    return (
      <header className="fixed top-0 right-0 z-40 p-6 pointer-events-none">
        <button
          onClick={onToggleSound}
          className="pointer-events-auto p-2.5 rounded-full bg-[#172650]/50 hover:bg-[#172650]/80 border border-[#C7B7FF]/30 text-[#C7B7FF] hover:text-[#8ECFFF] transition-colors cursor-pointer backdrop-blur-md"
          title={isMuted ? "Enable Ambient Sound" : "Mute Sound"}
          aria-label="Sound Toggle"
        >
          {!isMuted ? <Volume2 className="w-4 h-4 text-[#8ECFFF]" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </header>
    );
  }

  const currentRoom = roomsData.find((r) => r.id === activeRoom);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex items-center justify-between pointer-events-none">
      {/* Brand & Breadcrumb */}
      <div className="flex items-center gap-3 pointer-events-auto">
        <button
          onClick={() => onNavigate('landing')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8ECFFF] animate-pulse"></span>
            <span className="text-sm font-bold tracking-widest font-['Space_Grotesk'] text-[#F2F5FF] group-hover:text-[#8ECFFF] transition-colors">
              KRIPA
            </span>
            <span className="text-white/20">/</span>
            <span className="text-xs font-mono text-[#C7B7FF]">
              {activeRoom === 'hub' ? 'ROOM MAP' : currentRoom?.name.toUpperCase() || 'BEYOND ORBIT'}
            </span>
          </div>
        </button>
      </div>

      {/* Right Controls: Room Map, 2D Mode, Sound Toggle */}
      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Room Map quick access button */}
        <button
          onClick={() => onNavigate(activeRoom === 'hub' ? 'personal' : 'hub')}
          className={`px-3 py-1.5 rounded-full text-xs font-['Space_Grotesk'] flex items-center gap-1.5 border transition-all cursor-pointer backdrop-blur-md ${
            activeRoom === 'hub'
              ? 'bg-[#8ECFFF]/20 text-[#8ECFFF] border-[#8ECFFF]'
              : 'bg-[#172650]/60 text-[#C7B7FF] border-[#C7B7FF]/30 hover:text-white hover:border-[#8ECFFF]'
          }`}
          title="Toggle Room Map"
        >
          <Compass className="w-3.5 h-3.5 text-[#8ECFFF]" />
          <span>{activeRoom === 'hub' ? 'Close Map' : 'Room Map'}</span>
        </button>

        {/* 2D / 3D Mode Toggle */}
        <button
          onClick={onToggle2DMode}
          className={`p-2 rounded-full text-xs flex items-center justify-center border transition-all cursor-pointer backdrop-blur-md ${
            is2DMode
              ? 'bg-[#8ECFFF]/20 text-[#8ECFFF] border-[#8ECFFF]'
              : 'bg-[#172650]/60 text-[#C7B7FF] border-[#C7B7FF]/30 hover:text-white'
          }`}
          title={is2DMode ? "Switch to 3D Cosmic Exploration" : "Switch to 2D Direct Portfolio"}
        >
          <LayoutGrid className="w-4 h-4" />
        </button>

        {/* Sound Toggle */}
        <button
          onClick={onToggleSound}
          className={`p-2 rounded-full border transition-all cursor-pointer backdrop-blur-md ${
            !isMuted
              ? 'bg-[#8ECFFF]/25 text-[#8ECFFF] border-[#8ECFFF]'
              : 'bg-[#172650]/60 text-[#C7B7FF] border-[#C7B7FF]/30 hover:text-white'
          }`}
          title={isMuted ? "Enable Ambient Sound" : "Mute Sound"}
          aria-label="Sound Toggle"
        >
          {!isMuted ? <Volume2 className="w-4 h-4 text-[#8ECFFF]" /> : <VolumeX className="w-4 h-4 text-[#C7B7FF]" />}
        </button>
      </div>
    </header>
  );
}
