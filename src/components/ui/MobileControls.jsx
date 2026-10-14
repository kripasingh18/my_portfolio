import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

export default function MobileControls({ onMoveStart, onMoveEnd }) {
  return (
    <div className="fixed bottom-12 right-6 z-30 flex flex-col items-center gap-1 md:hidden pointer-events-auto select-none opacity-80 hover:opacity-100 transition-opacity">
      {/* Up Button */}
      <button
        type="button"
        onTouchStart={(e) => { e.preventDefault(); onMoveStart('up'); }}
        onTouchEnd={(e) => { e.preventDefault(); onMoveEnd('up'); }}
        onMouseDown={() => onMoveStart('up')}
        onMouseUp={() => onMoveEnd('up')}
        className="w-12 h-12 rounded-2xl bg-[#101A4B]/80 border border-[#55CFFF]/40 text-[#55CFFF] flex items-center justify-center active:bg-[#55CFFF]/40 active:scale-95 transition-transform backdrop-blur-md shadow-lg"
        aria-label="Move Forward"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Left, Down, Right Buttons */}
      <div className="flex gap-1">
        <button
          type="button"
          onTouchStart={(e) => { e.preventDefault(); onMoveStart('left'); }}
          onTouchEnd={(e) => { e.preventDefault(); onMoveEnd('left'); }}
          onMouseDown={() => onMoveStart('left')}
          onMouseUp={() => onMoveEnd('left')}
          className="w-12 h-12 rounded-2xl bg-[#101A4B]/80 border border-[#55CFFF]/40 text-[#55CFFF] flex items-center justify-center active:bg-[#55CFFF]/40 active:scale-95 transition-transform backdrop-blur-md shadow-lg"
          aria-label="Move Left"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onTouchStart={(e) => { e.preventDefault(); onMoveStart('down'); }}
          onTouchEnd={(e) => { e.preventDefault(); onMoveEnd('down'); }}
          onMouseDown={() => onMoveStart('down')}
          onMouseUp={() => onMoveEnd('down')}
          className="w-12 h-12 rounded-2xl bg-[#101A4B]/80 border border-[#55CFFF]/40 text-[#55CFFF] flex items-center justify-center active:bg-[#55CFFF]/40 active:scale-95 transition-transform backdrop-blur-md shadow-lg"
          aria-label="Move Backward"
        >
          <ArrowDown className="w-5 h-5" />
        </button>

        <button
          type="button"
          onTouchStart={(e) => { e.preventDefault(); onMoveStart('right'); }}
          onTouchEnd={(e) => { e.preventDefault(); onMoveEnd('right'); }}
          onMouseDown={() => onMoveStart('right')}
          onMouseUp={() => onMoveEnd('right')}
          className="w-12 h-12 rounded-2xl bg-[#101A4B]/80 border border-[#55CFFF]/40 text-[#55CFFF] flex items-center justify-center active:bg-[#55CFFF]/40 active:scale-95 transition-transform backdrop-blur-md shadow-lg"
          aria-label="Move Right"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
