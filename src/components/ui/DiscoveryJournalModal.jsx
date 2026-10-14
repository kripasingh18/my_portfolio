import React from 'react';
import { X, Compass, CheckCircle2, Lock, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';
import { roomsData } from '../../data/rooms';

export default function DiscoveryJournalModal({
  isOpen,
  onClose,
  discoveredRooms = new Set(),
  onTeleportToRoom,
  onResetProgress,
}) {
  if (!isOpen) return null;

  const totalRooms = roomsData.length;
  const discoveredCount = discoveredRooms.size;
  const progressPercent = Math.round((discoveredCount / totalRooms) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#070B24]/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col glass-panel-glow border border-[#826BFF]/40 overflow-hidden text-[#EAF4FF] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#826BFF]/25 bg-[#0F1640]/70">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[#826BFF]/20 text-[#B9A7FF] border border-[#826BFF]/40">
              <Compass className="w-5 h-5" />
            </span>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#B9A7FF]">
                Explorer Logbook
              </div>
              <h2 className="text-lg md:text-xl font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
                Room Discovery Journal
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#B9A7FF] hover:text-[#EAF4FF] hover:bg-[#826BFF]/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar Header */}
        <div className="p-6 bg-[#0B1032]/60 border-b border-[#826BFF]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono text-[#55CFFF] uppercase tracking-wider">
              Exploration Status:
            </div>
            <div className="text-xl font-bold font-['Space_Grotesk'] text-[#EAF4FF] flex items-center gap-2">
              <span>{discoveredCount} / {totalRooms} Rooms Discovered</span>
              {discoveredCount === totalRooms && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Fully Explored!
                </span>
              )}
            </div>
          </div>

          <div className="w-full md:w-64 space-y-1.5">
            <div className="flex justify-between text-xs text-[#B9A7FF] font-mono">
              <span>Progress</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="w-full bg-[#080D2A] rounded-full h-2.5 overflow-hidden border border-white/5">
              <div
                className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-[#826BFF] via-[#55CFFF] to-[#F0BFFF]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3.5">
          {roomsData.map((room) => {
            const isDiscovered = discoveredRooms.has(room.id);
            return (
              <div
                key={room.id}
                className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                  isDiscovered
                    ? 'bg-[#11194A]/70 border-[#55CFFF]/30 hover:border-[#55CFFF]/60 shadow-[0_0_15px_rgba(85,207,255,0.08)]'
                    : 'bg-[#0A0E2C]/50 border-white/5 opacity-70'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 border ${
                      isDiscovered
                        ? 'bg-[#182362] text-[#55CFFF] border-[#55CFFF]/40'
                        : 'bg-[#080B22] text-[#B9A7FF]/40 border-white/10'
                    }`}
                  >
                    {isDiscovered ? (
                      <CheckCircle2 className="w-5 h-5 text-[#55CFFF]" />
                    ) : (
                      <Lock className="w-4 h-4 text-[#B9A7FF]/40" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#55CFFF]">
                        Room {room.number}
                      </span>
                      {isDiscovered && (
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#826BFF]/20 text-[#B9A7FF] border border-[#826BFF]/30 font-semibold">
                          Badge: {room.discoveryBadge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-sm text-[#EAF4FF] font-['Space_Grotesk']">
                      {room.name} — <span className="text-xs text-[#B9A7FF] font-normal">{room.subtitle}</span>
                    </h3>
                    <p className="text-xs text-[#B9A7FF]/80 mt-1 max-w-md">
                      {room.lore}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onTeleportToRoom(room.id);
                    onClose();
                  }}
                  className="cosmic-btn-secondary text-xs py-1.5 px-3.5 flex items-center gap-1.5 self-end sm:self-center flex-shrink-0"
                >
                  <span>Teleport</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#826BFF]/20 bg-[#0F1640]/70 flex items-center justify-between text-xs text-[#B9A7FF]">
          <button
            onClick={onResetProgress}
            className="flex items-center gap-1.5 hover:text-red-300 transition-colors text-[11px]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Discovery Progress</span>
          </button>
          <button
            onClick={onClose}
            className="cosmic-btn-primary text-xs py-1.5 px-4"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
