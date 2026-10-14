import React, { useState } from 'react';
import { X, Palette, Sparkles, Layers } from 'lucide-react';
import { artworksData, artworkCategories } from '../../../data/artworks';

export default function ArtStudioModal({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [previewArt, setPreviewArt] = useState(null);

  if (!isOpen) return null;

  const filteredArtworks =
    selectedCategory === 'All'
      ? artworksData
      : artworksData.filter((art) => art.category === selectedCategory);

  return (
    <div className="fixed top-16 right-4 sm:right-6 bottom-10 sm:bottom-12 z-40 w-[calc(100vw-32px)] sm:w-[460px] max-w-lg pointer-events-auto animate-slideInRight flex flex-col glass-drawer rounded-3xl border border-[#F0BFFF]/30 shadow-2xl overflow-hidden text-[#EAF4FF]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#F0BFFF]/20 bg-[#16103A]/60">
        <div className="flex items-center gap-3">
          <span className="p-2 rounded-xl bg-[#F0BFFF]/20 text-[#F0BFFF] border border-[#F0BFFF]/40">
            <Palette className="w-4 h-4" />
          </span>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#F0BFFF]">
              Room 03 • Creative
            </div>
            <h2 className="text-base font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
              Art Studio
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
      <div className="flex border-b border-[#F0BFFF]/15 px-5 bg-[#0C0A28]/50 gap-1.5 py-2 overflow-x-auto">
        {artworkCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setSelectedCategory(cat); setPreviewArt(null); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#F0BFFF]/20 text-[#F0BFFF] border border-[#F0BFFF]/40'
                : 'text-[#B9A7FF]/70 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
        {previewArt ? (
          /* Single Artwork Detailed View */
          <div className="space-y-4 animate-fadeIn">
            <button
              onClick={() => setPreviewArt(null)}
              className="text-xs text-[#55CFFF] hover:underline flex items-center gap-1 font-mono cursor-pointer"
            >
              ← Back to gallery list
            </button>
            <div className="p-4 rounded-2xl bg-[#141242]/70 border border-[#F0BFFF]/30 space-y-3">
              <div className="flex items-center justify-between text-[11px] text-[#B9A7FF]">
                <span className="font-mono text-[#55CFFF]">{previewArt.category}</span>
                <span>{previewArt.year}</span>
              </div>
              <h3 className="text-lg font-bold font-['Space_Grotesk'] text-[#EAF4FF]">
                {previewArt.title}
              </h3>
              <p className="text-xs text-[#EAF4FF]/90 leading-relaxed">
                {previewArt.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                {previewArt.tools.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-[#090C28] text-[#B9A7FF] border border-white/10 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Artwork Cards List */
          <div className="space-y-2.5">
            {filteredArtworks.map((art) => (
              <div
                key={art.id}
                onClick={() => setPreviewArt(art)}
                className="p-3.5 rounded-2xl bg-[#101440]/60 hover:bg-[#141A4E]/80 border border-[#F0BFFF]/20 hover:border-[#F0BFFF]/50 transition-all cursor-pointer group space-y-1.5"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#B9A7FF]">
                  <span className="text-[#55CFFF]">{art.category}</span>
                  <span>{art.year}</span>
                </div>
                <div className="font-bold text-xs text-[#EAF4FF] group-hover:text-[#F0BFFF] transition-colors font-['Space_Grotesk']">
                  {art.title}
                </div>
                <p className="text-[11px] text-[#B9A7FF]/80 line-clamp-2 leading-relaxed">
                  {art.description}
                </p>
                <div className="flex flex-wrap gap-1 pt-1 text-[9px] text-[#B9A7FF]/60 font-mono">
                  {art.tools.slice(0, 2).join(' • ')}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-[#F0BFFF]/15 bg-[#0C0A28]/60 flex items-center justify-between text-[11px] text-[#B9A7FF]">
        <span>KRIPA • ART &amp; DESIGN</span>
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
