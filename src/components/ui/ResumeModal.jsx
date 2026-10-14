import React from 'react';
import { X, Printer, Mail, Github, MapPin, Award, BookOpen, Code2 } from 'lucide-react';
import { profileData } from '../../data/profile';
import { projectsData } from '../../data/projects';
import { achievementsData } from '../../data/achievements';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#070B24]/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[88vh] flex flex-col bg-[#0B0F33]/95 border border-[#55CFFF]/35 rounded-3xl overflow-hidden text-[#EAF4FF] shadow-2xl">
        {/* Controls Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#55CFFF]/20 bg-[#070D28] text-xs">
          <div className="flex items-center gap-2 text-[#55CFFF] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#55CFFF] animate-pulse"></span>
            <span>KRIPA_SINGH_RESUME.PDF</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="cosmic-btn-secondary text-xs py-1 px-3 flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/10 text-[#B9A7FF] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-[#EAF4FF]">
          {/* Header */}
          <div className="border-b border-white/10 pb-5 space-y-2">
            <h1 className="text-2xl font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
              {profileData.name}
            </h1>
            <div className="text-xs font-mono text-[#55CFFF]">
              {profileData.title}
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-[#B9A7FF] font-mono pt-1">
              <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-[#55CFFF]" /> {profileData.contact.email}</span>
              <span className="flex items-center gap-1"><Github className="w-3 h-3 text-[#55CFFF]" /> github.com/{profileData.contact.githubUsername}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#55CFFF]" /> {profileData.contact.location}</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#55CFFF] flex items-center gap-1.5 border-b border-white/5 pb-1">
              <BookOpen className="w-3.5 h-3.5" />
              Education
            </div>
            <div className="flex justify-between items-baseline text-xs">
              <div>
                <div className="font-bold text-[#EAF4FF]">{profileData.education.degree}</div>
                <div className="text-[#B9A7FF]">{profileData.education.focus}</div>
              </div>
              <div className="font-mono text-[#55CFFF] text-[11px]">{profileData.education.period}</div>
            </div>
          </div>

          {/* Core Technical Skills */}
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#55CFFF] flex items-center gap-1.5 border-b border-white/5 pb-1">
              <Code2 className="w-3.5 h-3.5" />
              Technical Skills
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-[#0F1640] border border-white/5">
                <span className="text-[#55CFFF] font-semibold">Programming:</span> <span className="text-[#B9A7FF]">C, Java, Python</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0F1640] border border-white/5">
                <span className="text-[#55CFFF] font-semibold">Web Development:</span> <span className="text-[#B9A7FF]">HTML5, CSS3, JavaScript, React</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0F1640] border border-white/5">
                <span className="text-[#55CFFF] font-semibold">Tools:</span> <span className="text-[#B9A7FF]">Git, GitHub, VS Code</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0F1640] border border-white/5">
                <span className="text-[#55CFFF] font-semibold">Design:</span> <span className="text-[#B9A7FF]">Photoshop, Illustrator, Premiere Pro</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#55CFFF] flex items-center gap-1.5 border-b border-white/5 pb-1">
              <Award className="w-3.5 h-3.5" />
              Featured Projects
            </div>
            {projectsData.slice(0, 2).map((p) => (
              <div key={p.id} className="p-3.5 rounded-xl bg-[#0F1640] border border-white/5 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#EAF4FF]">{p.title} — {p.subtitle}</span>
                  <span className="text-[10px] font-mono text-[#55CFFF]">{p.badge}</span>
                </div>
                <p className="text-xs text-[#B9A7FF] leading-relaxed">{p.summary}</p>
                <div className="text-[11px] text-[#EAF4FF]">
                  <span className="text-[#55CFFF] font-semibold">Role:</span> {p.myContribution}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#55CFFF] flex items-center gap-1.5 border-b border-white/5 pb-1">
              <Award className="w-3.5 h-3.5" />
              Honors &amp; Milestones
            </div>
            {achievementsData.slice(0, 3).map((a) => (
              <div key={a.id} className="flex justify-between items-start text-xs">
                <div>
                  <span className="font-semibold text-[#EAF4FF]">{a.title}</span> — <span className="text-[#B9A7FF]">{a.organization}</span>
                </div>
                <span className="font-mono text-[#55CFFF] text-[11px] ml-2 flex-shrink-0">{a.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#55CFFF]/15 bg-[#070D28] flex items-center justify-between text-xs text-[#B9A7FF]">
          <span>KRIPA SINGH • CSE STUDENT</span>
          <button
            onClick={onClose}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
}
