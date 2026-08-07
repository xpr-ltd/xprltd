"use client";

import { HiArrowUpRight } from "react-icons/hi2";

interface HeroProps {
  onOpenModal: (type?: string, details?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative pt-36 sm:pt-48 pb-20 overflow-hidden bg-[#070907] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Studiora Top Badge Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0d110e] border border-white/15 text-xs font-mono font-bold text-[#00FF87] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00FF87] animate-ping" />
          <span>Project will kickoff within 24 hours</span>
        </div>

        {/* Studiora Giant Title & Sub-headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono font-extrabold text-[#FFE600] uppercase tracking-widest block">
              // SOLUTIONS & CAPACITY BUILDING
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-tight leading-[1.02]">
              Xpr Nigeria Limited is a leading <span className="text-[#00FF87]">AI & Technology</span> consultancy.
            </h1>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              We position and redefine how businesses and individuals build technology. From high-level artificial intelligence R&D to hands-on youth STEM bootcamps, we are establishing Nigeria as a global technology hub.
            </p>

            {/* Studiora Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenModal("enroll")}
                className="px-6 py-3.5 rounded-full bg-[#FFE600] hover:bg-yellow-300 text-[#070907] font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>SEE ALL COURSES & SERVICES (17+)</span>
                <HiArrowUpRight className="text-base stroke-[3]" />
              </button>

              <button
                onClick={() => onOpenModal("consultation")}
                className="px-6 py-3.5 rounded-full border border-white/20 hover:border-[#00FF87] bg-white/5 text-white font-bold text-xs sm:text-sm backdrop-blur-md transition-all"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
