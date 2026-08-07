"use client";

export default function MarqueeTicker() {
  const items = [
    "ARTIFICIAL INTELLIGENCE RESEARCH",
    "ENTERPRISE SOFTWARE ENGINEERING",
    "KIDS & YOUTH STEM ACADEMY",
    "1-ON-1 TECH CAREER MENTORSHIP",
    "NIGERIA TO GLOBAL TECH HUB",
    "PREDICTIVE DATA PIPELINES",
  ];

  return (
    <div className="py-4 bg-[#0A0E0F] border-y border-white/10 overflow-hidden select-none relative backdrop-blur-md">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-12 text-[11px] font-mono font-bold tracking-[0.25em] text-slate-400 uppercase">
          {items.map((item, idx) => (
            <span key={idx} className="flex items-center gap-12 group cursor-default">
              <span className="group-hover:text-[#10B981] transition-colors duration-200">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]/60 group-hover:bg-[#FFE600] transition-colors" />
            </span>
          ))}
        </div>

        <div className="flex items-center gap-12 text-[11px] font-mono font-bold tracking-[0.25em] text-slate-400 uppercase ml-12">
          {items.map((item, idx) => (
            <span key={`dup-${idx}`} className="flex items-center gap-12 group cursor-default">
              <span className="group-hover:text-[#FFE600] transition-colors duration-200">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] transition-colors" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
