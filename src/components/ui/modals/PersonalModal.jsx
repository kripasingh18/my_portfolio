import React, { useState } from 'react';
import { X, Music, BookOpen, Sparkles, Volume2, Heart } from 'lucide-react';
import { profileData } from '../../../data/profile';
import { cosmicAudio } from '../../../utils/audio';

export default function PersonalModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('story');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!isOpen) return null;

  const handleAudioToggle = () => {
    const isNowPlaying = cosmicAudio.toggleSound();
    setIsPlayingAudio(isNowPlaying);
  };

  return (
    <div className="fixed top-16 right-4 sm:right-6 bottom-10 sm:bottom-12 z-40 w-[calc(100vw-32px)] sm:w-[440px] max-w-lg pointer-events-auto animate-slideInRight flex flex-col glass-drawer rounded-3xl border border-[#B9A7FF]/30 shadow-2xl overflow-hidden text-[#EAF4FF]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#B9A7FF]/20 bg-[#0E1544]/60">
        <div className="flex items-center gap-3">
          <span className="p-2 rounded-xl bg-[#826BFF]/20 text-[#B9A7FF] border border-[#826BFF]/30">
            <Heart className="w-4 h-4" />
          </span>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#B9A7FF]">
              Room 01 • Sanctuary
            </div>
            <h2 className="text-base font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
              Personal Sanctuary
            </h2>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-full hover:bg-white/10 text-[#B9A7FF] hover:text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#B9A7FF]/15 px-5 bg-[#090E30]/50 gap-2 py-2">
        {[
          { id: 'story', label: 'Story & Bio', icon: BookOpen },
          { id: 'music', label: 'Music & Vibes', icon: Music },
          { id: 'dreams', label: 'Interests', icon: Sparkles },
        ].map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                active
                  ? 'bg-[#826BFF]/25 text-[#55CFFF] border border-[#826BFF]/40'
                  : 'text-[#B9A7FF]/70 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <Icon className="w-3.5 h-3.5 text-[#B9A7FF]" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {activeTab === 'story' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="p-4 rounded-2xl bg-[#11194A]/60 border border-[#826BFF]/20 space-y-2">
              <p className="text-xs sm:text-sm leading-relaxed text-[#EAF4FF]">
                {profileData.bio}
              </p>
              <div className="pt-2 border-t border-white/5 text-[11px] text-[#B9A7FF] space-y-1">
                <div><span className="text-[#55CFFF] font-semibold">Degree:</span> {profileData.education.degree}</div>
                <div><span className="text-[#55CFFF] font-semibold">Focus:</span> {profileData.education.focus}</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#826BFF]/15 to-[#55CFFF]/15 border border-[#55CFFF]/25 space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#55CFFF]">
                Creative Philosophy
              </div>
              <p className="italic text-xs sm:text-sm font-['Space_Grotesk'] text-[#EAF4FF]">
                "{profileData.philosophy}"
              </p>
            </div>
          </div>
        )}

        {activeTab === 'music' && (
          <div className="space-y-3.5 animate-fadeIn">
            <div className="p-4 rounded-2xl bg-[#11194A]/60 border border-[#55CFFF]/25 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-[#55CFFF]/15 text-[#55CFFF]">
                  <Volume2 className="w-5 h-5 animate-pulse" />
                </span>
                <div>
                  <div className="text-xs font-bold text-[#EAF4FF]">Cosmic Pad Synthesizer</div>
                  <div className="text-[11px] text-[#B9A7FF]">Web Audio harmonic drone</div>
                </div>
              </div>
              <button
                onClick={handleAudioToggle}
                className="cosmic-btn-secondary text-xs py-1.5 px-3"
              >
                {isPlayingAudio ? 'Mute' : 'Play Sound'}
              </button>
            </div>

            <div className="space-y-2">
              {[
                { title: "Celestial Horizons", mood: "Peaceful Focus" },
                { title: "Midnight Terminal", mood: "Late Night Coding" },
                { title: "Depths of Sonaris", mood: "Hydroacoustic Pad" },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#0C1236]/70 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[#EAF4FF] font-medium">{item.title}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#55CFFF]/15 text-[#55CFFF] font-mono">
                    {item.mood}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'dreams' && (
          <div className="space-y-2.5 animate-fadeIn">
            {profileData.interests.map((item) => (
              <div key={item.id} className="p-3.5 rounded-xl bg-[#0F1640]/70 border border-[#826BFF]/20 space-y-1">
                <div className="text-xs font-bold text-[#55CFFF] font-['Space_Grotesk']">
                  {item.label}
                </div>
                <p className="text-[11px] text-[#B9A7FF] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-[#B9A7FF]/15 bg-[#090E30]/60 flex items-center justify-between text-[11px] text-[#B9A7FF]">
        <span>KRIPA • SANCTUARY</span>
        <button
          onClick={onClose}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Close Panel
        </button>
      </div>
    </div>
  );
}
