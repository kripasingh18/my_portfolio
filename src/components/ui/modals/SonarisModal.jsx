import React, { useState } from 'react';
import { X, Waves, Radio, LineChart, ShieldAlert, Globe2, ExternalLink, GitBranch, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../../../data/projects';

export default function SonarisModal({ isOpen, onClose }) {
  const [activeSection, setActiveSection] = useState('data');
  const sonaris = projectsData.find((p) => p.id === 'sonaris') || projectsData[0];

  if (!isOpen) return null;

  const sectionIcons = {
    data: Radio,
    analysis: LineChart,
    detection: ShieldAlert,
    impact: Globe2,
  };

  const currentSec = sonaris.sections.find((s) => s.id === activeSection) || sonaris.sections[0];

  return (
    <div className="fixed top-16 right-4 sm:right-6 bottom-10 sm:bottom-12 z-40 w-[calc(100vw-32px)] sm:w-[480px] max-w-lg pointer-events-auto animate-slideInRight flex flex-col glass-drawer rounded-3xl border border-[#55CFFF]/30 shadow-2xl overflow-hidden text-[#EAF4FF]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#55CFFF]/20 bg-[#0A1A44]/60">
        <div className="flex items-center gap-3">
          <span className="p-2 rounded-xl bg-[#55CFFF]/20 text-[#55CFFF] border border-[#55CFFF]/40">
            <Waves className="w-4 h-4 animate-pulse" />
          </span>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#55CFFF]">
              Room 04 • Innovation Lab
            </div>
            <h2 className="text-base font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
              Project: SONARIS
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

      {/* Section Tabs (Data, Analysis, Detection, Impact) */}
      <div className="flex border-b border-[#55CFFF]/15 px-5 bg-[#071330]/50 gap-1.5 py-2 overflow-x-auto">
        {sonaris.sections.map((sec) => {
          const Icon = sectionIcons[sec.id] || Radio;
          const active = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                active
                  ? 'bg-[#55CFFF]/20 text-[#55CFFF] border border-[#55CFFF]/40'
                  : 'text-[#B9A7FF]/70 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <Icon className="w-3.5 h-3.5 text-[#55CFFF]" />
              <span>{sec.title}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {/* Executive Overview */}
        <div className="p-4 rounded-2xl bg-[#0D1E4A]/60 border border-[#55CFFF]/25 space-y-2">
          <div className="text-[10px] font-mono text-[#55CFFF] uppercase tracking-wider">
            {sonaris.subtitle}
          </div>
          <p className="text-xs sm:text-sm font-semibold text-[#EAF4FF] font-['Space_Grotesk']">
            "{sonaris.tagline}"
          </p>
          <p className="text-xs text-[#B9A7FF] leading-relaxed">
            {sonaris.summary}
          </p>
        </div>

        {/* Selected Section Telemetry */}
        <div className="p-4 rounded-2xl bg-[#0A163B]/70 border border-[#55CFFF]/20 space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#55CFFF] font-['Space_Grotesk'] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55CFFF] animate-ping" />
              {currentSec.title} Telemetry
            </span>
          </div>
          <p className="text-xs text-[#EAF4FF]/90 leading-relaxed">
            {currentSec.content}
          </p>
          <div className="p-2.5 rounded-xl bg-[#060D24] border border-[#55CFFF]/15 font-mono text-[10px] text-[#55CFFF]">
            {currentSec.metrics}
          </div>
        </div>

        {/* Problem vs Solution Accordion */}
        <div className="space-y-2.5">
          <div className="p-3.5 rounded-xl bg-[#091232]/80 border border-[#826BFF]/20 space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#B9A7FF]">The Problem</div>
            <p className="text-xs text-[#EAF4FF]/85 leading-relaxed">{sonaris.problem}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#091838]/80 border border-[#55CFFF]/25 space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#55CFFF]">Proposed Solution</div>
            <p className="text-xs text-[#EAF4FF]/85 leading-relaxed">{sonaris.solution}</p>
          </div>
        </div>

        {/* Kripa's Contribution */}
        <div className="p-3.5 rounded-xl bg-[#0D1C44]/70 border border-[#55CFFF]/25 space-y-1">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#55CFFF] flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            My Contribution &amp; Architecture
          </div>
          <p className="text-xs text-[#EAF4FF]/90 leading-relaxed">
            {sonaris.myContribution}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-1.5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#B9A7FF]">
            Platform Tech Stack
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {sonaris.techStack.map((t) => (
              <div key={t.name} className="p-2.5 rounded-xl bg-[#070F28] border border-white/5 space-y-0.5">
                <div className="font-bold text-[#EAF4FF] text-[11px] font-mono">{t.name}</div>
                <div className="text-[10px] text-[#B9A7FF]/70 line-clamp-1">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-[#55CFFF]/15 bg-[#071330]/60 flex items-center justify-between text-[11px] text-[#B9A7FF]">
        <span>KRIPA • SONARIS RESEARCH</span>
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
