"use client";

import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

interface WorkShowcaseProps {
  onOpenModal: (type?: string, details?: string) => void;
}

export default function WorkShowcase({ onOpenModal }: WorkShowcaseProps) {
  const projects = [
    {
      id: 1,
      title: "AI for Kids — Practical Guide & Learning Companion",
      desc: "A foundational book and interactive learning guide authored by Xpr Nigeria Limited, designed to introduce children aged 6–16 to artificial intelligence, machine learning ethics, Scratch programming, and hands-on STEM tinkering.",
      image: "/images/kids_stem.png",
      tag: "FEATURED PUBLICATION & EDTECH",
      linkText: "Get Book / Access Course",
    },
  ];

  return (
    <section id="work" className="py-24 bg-[color:var(--paper-soft)] border-b border-[color:var(--line-on-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-[color:var(--accent-2)] uppercase tracking-widest block mb-2">
              FEATURED PUBLICATION & PROJECT
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[color:var(--ink)] tracking-tight">
              Featured <span className="text-[color:var(--accent-2)]">Project</span>.
            </h2>
          </div>

          <a
            href="https://akidsguide.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-[color:var(--line-on-light)] hover:border-[color:var(--accent-2)] bg-[color:var(--paper)] text-xs font-mono font-bold text-[color:var(--ink)] transition-all self-start md:self-auto inline-flex items-center gap-2"
          >
            <span>Explore Publication</span> ↗
          </a>
        </div>

        {/* Single Featured Card */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((p) => (
            <a
              key={p.id}
              href="https://akidsguide.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[color:var(--paper)] p-8 sm:p-12 rounded-3xl border border-[color:var(--line-on-light)] flex flex-col lg:flex-row items-center gap-10 group cursor-pointer hover:shadow-xl transition-all block"
            >
              <div className="relative h-80 lg:h-96 w-full lg:w-1/2 rounded-2xl overflow-hidden border border-[color:var(--line-on-light)] flex-shrink-0">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-md bg-[#0A0E0F] text-[color:var(--accent)] border border-white/10 text-xs font-mono font-bold">
                    {p.tag}
                  </span>
                </div>
              </div>

              <div className="space-y-6 flex-grow">
                <div className="inline-block px-3 py-1 rounded-full bg-[color:var(--yellow)]/20 text-[#0A0E0F] border border-[color:var(--yellow)]/50 text-xs font-mono font-extrabold">
                  ★ AUTHORITATIVE XPR PUBLICATION
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-[color:var(--ink)] group-hover:text-[color:var(--accent-2)] transition-colors leading-tight">
                  {p.title}
                </h3>

                <p className="text-base sm:text-lg text-[color:var(--muted-on-light)] leading-relaxed font-normal">
                  {p.desc}
                </p>

                <div className="pt-6 border-t border-[color:var(--line-on-light)] flex items-center justify-between">
                  <span className="text-sm font-mono font-bold text-[color:var(--accent-2)] group-hover:text-[color:var(--ink)] transition-colors">
                    Explore Publication ↗
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[color:var(--accent-2)] text-white group-hover:bg-[#FFE600] group-hover:text-[#0A0E0F] flex items-center justify-center transition-all">
                    <HiArrowUpRight className="text-xl stroke-[2]" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
