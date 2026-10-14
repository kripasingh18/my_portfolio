import React, { useState } from 'react';
import { X, Mail, Linkedin, Github, FileText, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { profileData } from '../../../data/profile';

export default function ContactModal({ isOpen, onClose, onOpenResume }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Kripa,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      );
      window.location.href = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
    }, 800);
  };

  return (
    <div className="fixed top-16 right-4 sm:right-6 bottom-10 sm:bottom-12 z-40 w-[calc(100vw-32px)] sm:w-[440px] max-w-lg pointer-events-auto animate-slideInRight flex flex-col glass-drawer rounded-3xl border border-[#55CFFF]/30 shadow-2xl overflow-hidden text-[#EAF4FF]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#55CFFF]/20 bg-[#0A1644]/60">
        <div className="flex items-center gap-3">
          <span className="p-2 rounded-xl bg-[#55CFFF]/20 text-[#55CFFF] border border-[#55CFFF]/40">
            <MessageSquare className="w-4 h-4" />
          </span>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#55CFFF]">
              Room 06 • Lounge
            </div>
            <h2 className="text-base font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
              Contact Lounge
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

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {/* Intro */}
        <div className="p-4 rounded-2xl bg-[#0F1B4C]/60 border border-[#55CFFF]/25 space-y-1.5">
          <h3 className="text-sm font-bold font-['Space_Grotesk'] text-[#EAF4FF] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#55CFFF]" />
            "Every great idea begins with a connection."
          </h3>
          <p className="text-xs text-[#B9A7FF] leading-relaxed">
            Have a project, collaboration, or creative idea in mind? Let's build something meaningful together.
          </p>
        </div>

        {/* Action Links */}
        <div className="space-y-2">
          {/* Email */}
          <a
            href={`mailto:${profileData.contact.email}`}
            className="p-3 rounded-xl bg-[#0D1540]/80 border border-[#55CFFF]/25 hover:border-[#55CFFF] transition-all flex items-center gap-3 group cursor-pointer"
          >
            <span className="p-2 rounded-lg bg-[#55CFFF]/15 text-[#55CFFF] group-hover:scale-105 transition-transform">
              <Mail className="w-4 h-4" />
            </span>
            <div className="text-xs">
              <div className="font-bold text-[#EAF4FF] font-['Space_Grotesk']">Email</div>
              <div className="text-[#B9A7FF] font-mono text-[11px]">{profileData.contact.email}</div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#0D1540]/80 border border-[#826BFF]/25 hover:border-[#826BFF] transition-all flex items-center gap-3 group cursor-pointer"
          >
            <span className="p-2 rounded-lg bg-[#826BFF]/15 text-[#B9A7FF] group-hover:scale-105 transition-transform">
              <Github className="w-4 h-4" />
            </span>
            <div className="text-xs">
              <div className="font-bold text-[#EAF4FF] font-['Space_Grotesk']">GitHub Profile</div>
              <div className="text-[#B9A7FF] font-mono text-[11px]">github.com/{profileData.contact.githubUsername}</div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#0D1540]/80 border border-[#55CFFF]/25 hover:border-[#55CFFF] transition-all flex items-center gap-3 group cursor-pointer"
          >
            <span className="p-2 rounded-lg bg-[#55CFFF]/15 text-[#55CFFF] group-hover:scale-105 transition-transform">
              <Linkedin className="w-4 h-4" />
            </span>
            <div className="text-xs">
              <div className="font-bold text-[#EAF4FF] font-['Space_Grotesk']">LinkedIn</div>
              <div className="text-[#B9A7FF] text-[11px]">Connect professionally</div>
            </div>
          </a>

          {/* View Resume Button */}
          <button
            type="button"
            onClick={() => {
              onClose();
              if (onOpenResume) onOpenResume();
            }}
            className="w-full p-3 rounded-xl bg-[#0D1540]/80 border border-[#F0BFFF]/25 hover:border-[#F0BFFF] transition-all flex items-center gap-3 text-left group cursor-pointer"
          >
            <span className="p-2 rounded-lg bg-[#F0BFFF]/15 text-[#F0BFFF] group-hover:scale-105 transition-transform">
              <FileText className="w-4 h-4" />
            </span>
            <div className="text-xs">
              <div className="font-bold text-[#EAF4FF] font-['Space_Grotesk']">View &amp; Print Resume</div>
              <div className="text-[#B9A7FF] text-[11px]">Academic &amp; technical credentials</div>
            </div>
          </button>
        </div>

        {/* Transmission Form */}
        <div className="p-4 rounded-2xl bg-[#080D2A]/80 border border-white/5 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#55CFFF] flex items-center gap-1.5">
            <Send className="w-3 h-3" />
            Quick Message
          </div>

          {formSubmitted ? (
            <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>Opening your mail app to send your message to {profileData.contact.email}.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded-xl bg-[#060A20] border border-white/10 text-xs text-[#EAF4FF] placeholder-[#B9A7FF]/40 focus:outline-none focus:border-[#55CFFF]"
              />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded-xl bg-[#060A20] border border-white/10 text-xs text-[#EAF4FF] placeholder-[#B9A7FF]/40 focus:outline-none focus:border-[#55CFFF]"
              />
              <textarea
                rows={2}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Message or idea..."
                className="w-full px-3 py-2 rounded-xl bg-[#060A20] border border-white/10 text-xs text-[#EAF4FF] placeholder-[#B9A7FF]/40 focus:outline-none focus:border-[#55CFFF] resize-none"
              />
              <button
                type="submit"
                className="cosmic-btn-primary w-full py-2 text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Transmit Message</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-[#55CFFF]/15 bg-[#0A1644]/60 flex items-center justify-between text-[11px] text-[#B9A7FF]">
        <span>KRIPA • CONTACT</span>
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
