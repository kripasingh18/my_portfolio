
import React, { useState } from 'react';
import {
  X,
  Music,
  BookOpen,
  Sparkles,
  Volume2,
  Heart,
} from 'lucide-react';

import { profileData } from '../../../data/profile';

export default function PersonalModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('story');

  if (!isOpen) return null;

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
              A Little About Me
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
      <div className="flex flex-wrap border-b border-[#B9A7FF]/15 px-5 bg-[#090E30]/50 gap-2 py-2">
        {[
          { id: 'story', label: 'My Story', icon: BookOpen },
          { id: 'music', label: 'Music & Vibes', icon: Music },
          { id: 'dreams', label: 'Things I Love', icon: Sparkles },
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

        {/* My Story */}
        {activeTab === 'story' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#55CFFF]">
              A little universe of my own
            </div>

            <div className="p-4 rounded-2xl bg-[#11194A]/60 border border-[#826BFF]/20 space-y-3">
              <h3 className="text-lg font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
                Hey, stranger. Welcome to my little universe. ✨
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-[#EAF4FF]">
                {profileData.bio}
              </p>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#55CFFF]">
                  Currently becoming
                </div>

                <p className="text-xs leading-relaxed text-[#B9A7FF]">
                  A curious learner, a creative thinker, and someone who
                  believes there is always something new to discover.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#826BFF]/15 to-[#55CFFF]/15 border border-[#55CFFF]/25 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#55CFFF]">
                A thought I carry with me
              </div>

              <p className="italic text-xs sm:text-sm font-['Space_Grotesk'] leading-relaxed text-[#EAF4FF]">
                "{profileData.philosophy}"
              </p>
            </div>

            <div className="px-2 py-1 text-center">
              <p className="text-xs text-[#B9A7FF] leading-relaxed">
                This is only the beginning. 🌙
              </p>
            </div>
          </div>
        )}

        {/* Music & Vibes */}
        {activeTab === 'music' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#55CFFF]">
                A moment beyond the noise
              </div>
              <h3 className="text-lg font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
                Into the Unknown
              </h3>
              <p className="text-xs leading-relaxed text-[#B9A7FF]">
                A quiet soundtrack for curiosity, reflection, and everything
                still waiting to be discovered.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#171746]/90 to-[#11194A]/70 border border-[#826BFF]/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-[#826BFF]/40 to-[#55CFFF]/20 border border-[#B9A7FF]/30 flex items-center justify-center">
                  <Music className="w-5 h-5 text-[#B9A7FF]" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-[#EAF4FF]">
                    Into the Unknown
                  </div>
                  <div className="text-[11px] text-[#B9A7FF]">
                    Blue Deer Studio · feat. Nichole Kreglow
                  </div>
                </div>
              </div>

              <audio
                controls
                preload="metadata"
                className="w-full"
                style={{ height: '40px' }}
                src="/audio/into-the-unknown.mp3"
              >
                Your browser does not support audio playback.
              </audio>

              <p className="text-[10px] leading-relaxed text-[#B9A7FF]/80">
                Press play when you are ready. The music will only start
                when you choose.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#0C1236]/70 border border-white/5">
              <p className="text-xs leading-relaxed text-[#B9A7FF]">
                Everyone needs a little room to think, imagine, and reset.
                Let this be yours for a moment.
              </p>
            </div>
          </div>
        )}

        {/* Things I Love */}
        {activeTab === 'dreams' && (
          <div className="space-y-3 animate-fadeIn">
            <div className="space-y-1 mb-3">
              <h3 className="text-sm font-bold text-[#EAF4FF]">
                Little things that make me, me
              </h3>
              <p className="text-xs leading-relaxed text-[#B9A7FF]">
                Different interests, different ways of thinking, and
                always something new to explore.
              </p>
            </div>

            {profileData.interests.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-xl bg-[#0F1640]/70 border border-[#826BFF]/20 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#55CFFF]" />
                  <div className="text-xs font-bold text-[#55CFFF] font-['Space_Grotesk']">
                    {item.label}
                  </div>
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
