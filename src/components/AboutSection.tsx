"use client";

import { HiArrowUpRight } from "react-icons/hi2";

interface AboutSectionProps {
  onOpenModal: (type?: string, details?: string) => void;
}

export default function AboutSection({ onOpenModal }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-[#070907] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studiora Badge */}
        <div className="mb-6">
          <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-[#00FF87] tracking-wider uppercase">
            Who we are
          </span>
        </div>

        {/* Studiora Headline & Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              We’re a hands-on studio of AI researchers & developers that joins forces with forward-thinking companies dedicated to their craft. We build & grow performant AI systems & tech talent.
            </h2>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <button
              onClick={() => onOpenModal("consultation", "About Us Partnership")}
              className="px-7 py-4 rounded-full bg-[#FFE600] hover:bg-yellow-300 text-[#070907] font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all hover:scale-105"
            >
              <span>Work with us</span>
              <HiArrowUpRight className="text-lg stroke-[3]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
