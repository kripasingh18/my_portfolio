import React, { useState } from 'react';
import { Sparkles, Code2, Heart, Palette, Radio, Award, MessageSquare, ExternalLink, GitBranch, Mail, FileText } from 'lucide-react';
import { profileData } from '../../data/profile';
import { skillsData } from '../../data/skills';
import { projectsData } from '../../data/projects';
import { artworksData } from '../../data/artworks';
import { achievementsData } from '../../data/achievements';

export default function Fallback2DView({ onSwitchTo3D, onOpenResume }) {
  const [activeSection, setActiveSection] = useState('sanctuary');
  const sonaris = projectsData.find((p) => p.id === 'sonaris') || projectsData[0];

  return (
    <div className="min-h-screen bg-[#070B24] text-[#EAF4FF] overflow-y-auto px-4 md:px-12 py-12 font-['Plus_Jakarta_Sans'] select-text">
      {/* Top Bar */}
      <div className="max-w-4xl mx-auto flex items-center justify-between border-b border-[#826BFF]/25 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#55CFFF] animate-pulse"></span>
            <span className="text-xl md:text-2xl font-bold font-['Space_Grotesk'] tracking-wider text-[#EAF4FF]">
              KRIPAVERSE
            </span>
          </div>
          <p className="text-xs font-mono text-[#B9A7FF] mt-1 uppercase tracking-widest">
            Direct 2D Accessible Portfolio • Kripa Singh
          </p>
        </div>

        <button
          onClick={onSwitchTo3D}
          className="cosmic-btn-primary text-xs py-2 px-5 flex items-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-[#55CFFF]" />
          <span>Launch 3D Exploration World</span>
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-4xl mx-auto flex overflow-x-auto gap-2 border-b border-white/10 pb-4 mb-8">
        {[
          { id: 'sanctuary', label: 'Personal Sanctuary', icon: Heart },
          { id: 'studio', label: 'Developer Studio', icon: Code2 },
          { id: 'art', label: 'Art Studio', icon: Palette },
          { id: 'innovation', label: 'Innovation Lab (SONARIS)', icon: Radio },
          { id: 'achievements', label: 'Achievements Gallery', icon: Award },
          { id: 'contact', label: 'Contact Lounge', icon: MessageSquare },
        ].map((tab) => {
          const Icon = tab.icon;
          const active = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                active
                  ? 'bg-[#55CFFF]/20 text-[#55CFFF] border border-[#55CFFF] font-bold shadow-[0_0_12px_rgba(85,207,255,0.3)]'
                  : 'text-[#B9A7FF] hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <main className="max-w-4xl mx-auto space-y-6">
        {/* PERSONAL SANCTUARY */}
        {activeSection === 'sanctuary' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 md:p-8 rounded-3xl bg-[#0F1642]/60 border border-[#826BFF]/25 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#55CFFF]">
                Room 01 • Personal Sanctuary
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
                "Hi, I'm Kripa Singh."
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-[#EAF4FF]/90">
                {profileData.bio}
              </p>
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#826BFF]/20 to-[#55CFFF]/20 border border-[#55CFFF]/30 text-sm font-['Space_Grotesk'] italic text-[#EAF4FF]">
                "{profileData.philosophy}"
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profileData.interests.map((item) => (
                <div key={item.id} className="p-4 rounded-2xl bg-[#0B1032] border border-[#826BFF]/20 space-y-1.5">
                  <h3 className="font-bold text-sm text-[#55CFFF] flex items-center gap-2 font-['Space_Grotesk']">
                    <Sparkles className="w-4 h-4" />
                    {item.label}
                  </h3>
                  <p className="text-xs text-[#B9A7FF] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DEVELOPER STUDIO */}
        {activeSection === 'studio' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
                Developer Studio — Technical Stack
              </h2>
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-btn-primary text-xs py-1.5 px-3.5 flex items-center gap-1.5"
              >
                <GitBranch className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {skillsData.categories.map((category) => (
                <div key={category.id} className="p-5 rounded-2xl bg-[#0E1540] border border-[#55CFFF]/25 space-y-3">
                  <h3 className="font-bold text-xs text-[#55CFFF] font-mono uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#55CFFF]"></span>
                    {category.name}
                  </h3>
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="p-3 rounded-xl bg-[#080D2B] border border-white/5 space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-[#EAF4FF]">{skill.name}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#55CFFF]/15 text-[#55CFFF] border border-[#55CFFF]/30">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#B9A7FF]">{skill.highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ART STUDIO */}
        {activeSection === 'art' && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-xl md:text-2xl font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
              Art Studio — Visual Design &amp; Digital Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {artworksData.map((art) => (
                <div key={art.id} className="p-4 rounded-2xl bg-[#0F143D] border border-[#F0BFFF]/25 space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-[#B9A7FF] font-mono">
                    <span className="text-[#55CFFF]">{art.category}</span>
                    <span>{art.year}</span>
                  </div>
                  <h3 className="font-bold text-sm text-[#EAF4FF] font-['Space_Grotesk']">{art.title}</h3>
                  <p className="text-xs text-[#B9A7FF] leading-relaxed">{art.description}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {art.tools.map((t) => (
                      <span key={t} className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-[#EAF4FF] border border-white/10 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INNOVATION LAB (SONARIS) */}
        {activeSection === 'innovation' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 md:p-8 rounded-3xl bg-[#0C1A48]/70 border border-[#55CFFF]/35 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#55CFFF]">
                Flagship Case Study • {sonaris.badge}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
                {sonaris.title} — {sonaris.subtitle}
              </h2>
              <p className="text-sm font-semibold text-[#55CFFF] font-mono">
                "{sonaris.tagline}"
              </p>
              <p className="text-sm text-[#EAF4FF]/90 leading-relaxed">
                {sonaris.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#091232] border border-[#826BFF]/25 space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#B9A7FF]">
                  Problem Statement
                </h3>
                <p className="text-xs text-[#EAF4FF]/85 leading-relaxed">{sonaris.problem}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#091232] border border-[#55CFFF]/25 space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#55CFFF]">
                  Proposed Solution
                </h3>
                <p className="text-xs text-[#EAF4FF]/85 leading-relaxed">{sonaris.solution}</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0F1B4A]/60 border border-[#55CFFF]/25 space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#55CFFF]">
                Kripa's Contribution
              </h3>
              <p className="text-xs md:text-sm text-[#EAF4FF] leading-relaxed">{sonaris.myContribution}</p>
            </div>
          </div>
        )}

        {/* ACHIEVEMENTS */}
        {activeSection === 'achievements' && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-xl md:text-2xl font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
              Achievements Gallery — Genuine Milestones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievementsData.map((item) => (
                <div key={item.id} className="p-4 rounded-2xl bg-[#0D1238] border border-[#B9A7FF]/25 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-[#55CFFF] text-[10px]">{item.category} • {item.organization}</span>
                    <span className="font-mono text-[#B9A7FF] text-[10px]">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-sm text-[#EAF4FF] font-['Space_Grotesk']">{item.title}</h3>
                  <p className="text-xs text-[#EAF4FF]/85 leading-relaxed">{item.highlight}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTACT LOUNGE */}
        {activeSection === 'contact' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 md:p-8 rounded-3xl bg-[#0A1642]/60 border border-[#55CFFF]/30 space-y-3">
              <h2 className="text-xl md:text-2xl font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
                "Every great idea begins with a connection."
              </h2>
              <p className="text-xs md:text-sm text-[#B9A7FF] max-w-xl leading-relaxed">
                Have a project, collaboration, or creative idea in mind? Let's build something meaningful together.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="p-4 rounded-2xl bg-[#0D143D] border border-[#55CFFF]/30 hover:border-[#55CFFF] transition-all flex items-center gap-3.5 cursor-pointer"
              >
                <Mail className="w-5 h-5 text-[#55CFFF]" />
                <div>
                  <div className="font-bold text-sm text-[#EAF4FF]">Direct Email</div>
                  <div className="text-xs text-[#B9A7FF] font-mono">{profileData.contact.email}</div>
                </div>
              </a>

              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#0D143D] border border-[#826BFF]/30 hover:border-[#826BFF] transition-all flex items-center gap-3.5 cursor-pointer"
              >
                <GitBranch className="w-5 h-5 text-[#826BFF]" />
                <div>
                  <div className="font-bold text-sm text-[#EAF4FF]">GitHub Profile</div>
                  <div className="text-xs text-[#B9A7FF] font-mono">github.com/{profileData.contact.githubUsername}</div>
                </div>
              </a>

              <button
                onClick={onOpenResume}
                className="p-4 rounded-2xl bg-[#0D143D] border border-[#F0BFFF]/30 hover:border-[#F0BFFF] transition-all flex items-center gap-3.5 text-left cursor-pointer"
              >
                <FileText className="w-5 h-5 text-[#F0BFFF]" />
                <div>
                  <div className="font-bold text-sm text-[#EAF4FF]">View Full Resume</div>
                  <div className="text-xs text-[#B9A7FF]">Printable digital format</div>
                </div>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
