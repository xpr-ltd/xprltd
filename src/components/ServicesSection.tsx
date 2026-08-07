"use client";

import { HiArrowUpRight } from "react-icons/hi2";

interface ServicesSectionProps {
  onOpenModal: (type?: string, details?: string) => void;
}

export default function ServicesSection({ onOpenModal }: ServicesSectionProps) {
  const serviceList = [
    {
      id: "01",
      title: "Engineering custom AI models & localized LLMs",
      desc: "Building proprietary machine learning, natural language processing, and automated decision engines for African enterprises.",
    },
    {
      id: "02",
      title: "Building scalable Next.js web applications & cloud APIs",
      desc: "Designing fast, secure, and modern digital platforms with clean, performance-focused production code.",
    },
    {
      id: "03",
      title: "Integrating K-12 Scratch, Python & Robotics curriculum",
      desc: "Transforming primary and secondary school education with hands-on STEM lab setup and teacher enablement.",
    },
    {
      id: "04",
      title: "Providing 1-on-1 career pathing & GitHub audits",
      desc: "Diagnostic skill gap assessments, portfolio reviews, and technical interview coaching to unlock global opportunities.",
    },
    {
      id: "05",
      title: "Architecting predictive data science & vision pipelines",
      desc: "Delivering real-time computer vision crop diagnostics, financial forecasting tools, and data infrastructure.",
    },
    {
      id: "06",
      title: "Continuous tech support & institutional consultancy",
      desc: "Reliable guidance, code refactoring, and continuous improvements as your digital products and school programs evolve.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#070907] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studiora Badge & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-[#00FF87] uppercase tracking-widest block mb-2">
              SERVICES THAT SCALE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Services that <span className="text-[#FFE600]">scale tech & talent</span>.
            </h2>
          </div>

          <button
            onClick={() => onOpenModal("consultation", "All Services")}
            className="px-6 py-3 rounded-full border border-white/15 hover:border-[#00FF87] bg-white/5 text-xs font-mono font-bold text-slate-300 hover:text-white transition-all self-start md:self-auto"
          >
            View All Services ↗
          </button>
        </div>

        {/* Studiora Services List */}
        <div className="space-y-4">
          {serviceList.map((s) => (
            <div
              key={s.id}
              onClick={() => onOpenModal("consultation", s.title)}
              className="studiora-panel p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer hover:border-[#00FF87]"
            >
              <div className="flex items-start sm:items-center gap-6 max-w-4xl">
                <span className="text-2xl font-mono font-extrabold text-slate-600 group-hover:text-[#FFE600] transition-colors">
                  {s.id}
                </span>
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#00FF87] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {s.desc}
                  </p>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#00FF87] group-hover:text-[#070907] text-[#00FF87] flex items-center justify-center transition-all flex-shrink-0">
                <HiArrowUpRight className="text-lg" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
