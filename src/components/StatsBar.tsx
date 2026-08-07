"use client";

import { FaBrain, FaGraduationCap, FaBuilding, FaAward } from "react-icons/fa";

export default function StatsBar() {
  const stats = [
    {
      icon: FaBrain,
      number: "30+",
      label: "AI & Digital Solutions",
      sub: "Deployed locally & globally",
      color: "text-[#059669]",
    },
    {
      icon: FaGraduationCap,
      number: "1,500+",
      label: "Students & Kids Empowered",
      sub: "Through hands-on training",
      color: "text-[#059669]",
    },
    {
      icon: FaBuilding,
      number: "20+",
      label: "Partner Schools & Firms",
      sub: "EdTech & R&D collaboration",
      color: "text-[#059669]",
    },
    {
      icon: FaAward,
      number: "99.2%",
      label: "Satisfaction & Support",
      sub: "Continuous career counseling",
      color: "text-[#FFE600]",
    },
  ];

  return (
    <section className="py-12 bg-[#070907] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="studiora-panel p-6 flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl bg-white/5 ${stat.color} text-xl border border-white/5`}>
                    <Icon />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                    IMPACT 0{idx + 1}
                  </span>
                </div>

                <div>
                  <h4 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {stat.number}
                  </h4>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-200 mt-1">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-mono">
                    {stat.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
