import React, { useState } from 'react';
import { X, Award, Trophy, Users, Target, CheckCircle } from 'lucide-react';
import { achievementsData, achievementCategories } from '../../../data/achievements';

export default function AchievementsModal({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!isOpen) return null;

  const iconMap = {
    Trophy: Trophy,
    Award: Award,
    Users: Users,
    Target: Target,
  };

  const filteredAchievements =
    selectedCategory === 'All'
      ? achievementsData
      : achievementsData.filter((a) => a.category === selectedCategory);

  return (
    <div className="fixed top-16 right-4 sm:right-6 bottom-10 sm:bottom-12 z-40 w-[calc(100vw-32px)] sm:w-[440px] max-w-lg pointer-events-auto animate-slideInRight flex flex-col glass-drawer rounded-3xl border border-[#B9A7FF]/30 shadow-2xl overflow-hidden text-[#EAF4FF]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#B9A7FF]/20 bg-[#121444]/60">
        <div className="flex items-center gap-3">
          <span className="p-2 rounded-xl bg-[#B9A7FF]/20 text-[#B9A7FF] border border-[#B9A7FF]/40">
            <Award className="w-4 h-4" />
          </span>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#B9A7FF]">
              Room 05 • Gallery
            </div>
            <h2 className="text-base font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
              Achievements Gallery
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

      {/* Category Pills */}
      <div className="flex border-b border-[#B9A7FF]/15 px-5 bg-[#0B0D2E]/50 gap-1.5 py-2 overflow-x-auto">
        {achievementCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#B9A7FF]/25 text-[#B9A7FF] border border-[#B9A7FF]/40'
                : 'text-[#B9A7FF]/70 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-3">
        {filteredAchievements.map((item) => {
          const Icon = iconMap[item.icon] || Award;
          return (
            <div
              key={item.id}
              className="p-3.5 rounded-2xl bg-[#101746]/60 border border-[#B9A7FF]/20 space-y-2 hover:border-[#55CFFF]/40 transition-all"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="p-1.5 rounded-lg bg-[#18205C] text-[#55CFFF]">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="text-[10px] font-mono text-[#55CFFF] px-2 py-0.5 rounded-full bg-[#55CFFF]/10 border border-[#55CFFF]/25">
                  {item.date}
                </span>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#B9A7FF]/80">
                  {item.category} • {item.organization}
                </div>
                <h3 className="font-bold text-xs text-[#EAF4FF] font-['Space_Grotesk'] mt-0.5">
                  {item.title}
                </h3>
              </div>

              <p className="text-[11px] text-[#EAF4FF]/85 leading-relaxed">
                {item.highlight}
              </p>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-emerald-400 font-mono">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  {item.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-[#B9A7FF]/15 bg-[#0B0D2E]/60 flex items-center justify-between text-[11px] text-[#B9A7FF]">
        <span>GENUINE MILESTONES</span>
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
