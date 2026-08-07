"use client";

import { HiArrowUpRight } from "react-icons/hi2";

interface CtaSectionProps {
  onOpenModal: (type?: string, details?: string) => void;
}

export default function CtaSection({ onOpenModal }: CtaSectionProps) {
  return (
    <section className="py-24 bg-[#050705] border-t border-white/10 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Giant Studiora Typography */}
        <div className="space-y-2">
          <p className="text-xs font-mono font-bold text-[#00FF87] uppercase tracking-widest">
            PROJECT KICKOFF WITHIN 24 HOURS
          </p>
          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase opacity-90 hover:opacity-100 transition-opacity">
            XPR NIGERIA
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenModal("consultation")}
            className="px-10 py-5 rounded-full bg-[#FFE600] hover:bg-yellow-300 text-[#070907] font-extrabold text-sm sm:text-base shadow-2xl flex items-center gap-2 transition-all hover:scale-105"
          >
            <span>Request a Quote</span>
            <HiArrowUpRight className="text-xl stroke-[3]" />
          </button>

          <button
            onClick={() => onOpenModal("enroll")}
            className="px-10 py-5 rounded-full border border-white/20 hover:border-[#00FF87] bg-white/5 text-white font-bold text-sm sm:text-base backdrop-blur-md transition-all"
          >
            Explore Courses & Bootcamps
          </button>
        </div>

      </div>
    </section>
  );
}
