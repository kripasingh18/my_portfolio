import React from 'react';
import { ArrowLeft, Heart, Code, Palette, Radio, Award, MessageSquare, Compass, X } from 'lucide-react';
import { roomsData } from '../../data/rooms';

export default function RoomMapNav({
  activeRoom,
  onSelectRoom,
}) {
  const iconMap = {
    Heart: Heart,
    Code: Code,
    Palette: Palette,
    Radio: Radio,
    Award: Award,
    MessageSquare: MessageSquare,
  };

  // If in 'hub' view, show an elegant, compact non-blocking Room Map drawer
  if (activeRoom === 'hub') {
    return (
      <div className="fixed inset-0 z-40 flex flex-col justify-end md:justify-center items-center p-4 md:p-8 pointer-events-none animate-fadeIn">
        <div className="w-full max-w-4xl glass-drawer rounded-3xl p-6 md:p-8 pointer-events-auto border border-[#826BFF]/35 shadow-2xl space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#826BFF]/20 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#55CFFF]">
                <Compass className="w-3.5 h-3.5" />
                <span>COSMIC HOUSE • NAVIGATION MAP</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
                Select a Room to Explore
              </h2>
            </div>
            <button
              onClick={() => onSelectRoom('personal')}
              className="p-2 rounded-full hover:bg-white/10 text-[#B9A7FF] hover:text-white transition-colors cursor-pointer"
              title="Close Map"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Room Cards Grid (Compact, clean cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {roomsData.map((room) => {
              const Icon = iconMap[room.icon] || Compass;
              return (
                <button
                  key={room.id}
                  onClick={() => onSelectRoom(room.id)}
                  className="p-4 rounded-2xl bg-[#11194A]/70 hover:bg-[#162260]/90 border border-[#826BFF]/25 hover:border-[#55CFFF] transition-all text-left group flex items-start gap-3.5 cursor-pointer"
                >
                  <span className="p-2.5 rounded-xl bg-[#182568] text-[#55CFFF] border border-[#55CFFF]/30 group-hover:scale-105 transition-transform flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </span>
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-[#55CFFF] uppercase tracking-wider">
                      Room {room.number}
                    </div>
                    <div className="font-bold text-sm text-[#EAF4FF] group-hover:text-[#55CFFF] transition-colors font-['Space_Grotesk']">
                      {room.name}
                    </div>
                    <div className="text-xs text-[#B9A7FF]/80 leading-relaxed line-clamp-1">
                      {room.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer Back Action */}
          <div className="pt-2 flex items-center justify-between text-xs text-[#B9A7FF]/70 font-mono">
            <span>Click any room to glide there</span>
            <button
              onClick={() => onSelectRoom('landing')}
              className="hover:text-[#55CFFF] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Exterior View</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Inside any specific room: discreet bottom switcher
  if (activeRoom !== 'landing') {
    return (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto hidden sm:flex items-center gap-1.5 p-1.5 rounded-full glass-panel border border-[#826BFF]/30 bg-[#0B1032]/85 backdrop-blur-md shadow-xl animate-fadeIn">
        {roomsData.map((room) => {
          const Icon = iconMap[room.icon] || Compass;
          const active = room.id === activeRoom;
          return (
            <button
              key={room.id}
              onClick={() => onSelectRoom(room.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                active
                  ? 'bg-[#55CFFF]/25 text-[#55CFFF] border border-[#55CFFF] font-semibold shadow-[0_0_12px_rgba(85,207,255,0.35)]'
                  : 'text-[#B9A7FF] hover:text-white hover:bg-white/5 border border-transparent'
              }`}
              title={room.name}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{room.name}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return null;
}
