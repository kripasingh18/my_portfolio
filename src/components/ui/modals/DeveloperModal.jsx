import React, { useState } from 'react';
import { X, Code2, ExternalLink, GitBranch } from 'lucide-react';
import { skillsData } from '../../../data/skills';
import { profileData } from '../../../data/profile';

export default function DeveloperModal({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState('programming');

  if (!isOpen) return null;

  const currentCategory =
    skillsData.categories.find((c) => c.id === activeCategory) || skillsData.categories[0];

  return (
    <div className="fixed top-16 right-4 sm:right-6 bottom-10 sm:bottom-12 z-40 w-[calc(100vw-32px)] sm:w-[440px] max-w-lg pointer-events-auto animate-slideInRight flex flex-col glass-drawer rounded-3xl border border-[#55CFFF]/30 shadow-2xl overflow-hidden text-[#EAF4FF]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#55CFFF]/20 bg-[#0A1644]/60">
        <div className="flex items-center gap-3">
          <span className="p-2 rounded-xl bg-[#55CFFF]/20 text-[#55CFFF] border border-[#55CFFF]/40">
            <Code2 className="w-4 h-4" />
          </span>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#55CFFF]">
              Room 02 • Studio
            </div>
            <h2 className="text-base font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
              Developer Studio
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
      <div className="flex border-b border-[#55CFFF]/15 px-5 bg-[#081030]/50 gap-1.5 py-2 overflow-x-auto">
        {skillsData.categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#55CFFF]/20 text-[#55CFFF] border border-[#55CFFF]/40'
                : 'text-[#B9A7FF]/70 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {/* Category Description */}
        <p className="text-xs text-[#B9A7FF] leading-relaxed">
          {currentCategory.description}
        </p>

        {/* Skills Cards */}
        <div className="space-y-2.5">
          {currentCategory.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-3.5 rounded-2xl bg-[#0D1642]/70 border border-[#55CFFF]/20 space-y-2"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#EAF4FF] font-['Space_Grotesk']">
                  {skill.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#55CFFF]/15 text-[#55CFFF] border border-[#55CFFF]/30">
                  {skill.level}
                </span>
              </div>
              <p className="text-[11px] text-[#B9A7FF] leading-relaxed">
                {skill.highlight}
              </p>
            </div>
          ))}
        </div>

        {/* GitHub Direct Link Button */}
        <div className="pt-2">
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-3.5 rounded-2xl bg-[#101A4B] border border-[#55CFFF]/40 hover:border-[#55CFFF] text-[#EAF4FF] text-xs font-['Space_Grotesk'] font-bold flex items-center justify-between transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <GitBranch className="w-4 h-4 text-[#55CFFF]" />
              <span>Explore GitHub Repositories</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#55CFFF] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-[#55CFFF]/15 bg-[#081030]/60 flex items-center justify-between text-[11px] text-[#B9A7FF]">
        <span>HONEST PROFICIENCIES</span>
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
