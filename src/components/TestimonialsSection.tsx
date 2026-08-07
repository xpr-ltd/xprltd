"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function TestimonialsSection() {
  const [filter, setFilter] = useState<"all" | "bootcamp" | "parents" | "schools">("all");

  const testimonials = [
    {
      id: 1,
      name: "Chidubem Okafor",
      role: "AI Engineer @ FinTech Innovation Hub",
      category: "bootcamp",
      quote:
        "Xpr Technologies completely transformed my career trajectory. Their intensive AI & Machine Learning bootcamp bridged the gap between theory and enterprise production code. Within 2 months of graduation, I landed an AI Engineer role in Lagos!",
      rating: 5,
      tag: "BOOTCAMP GRADUATE",
      tagColor: "text-[#00FF87] border-[#00FF87]/30 bg-[#00FF87]/10",
    },
    {
      id: 2,
      name: "Mrs. Folake Adebayo",
      role: "Parent of 10-Year-Old STEM Student",
      category: "parents",
      quote:
        "Enrolling my son Tobi in the Xpr Young Innovators STEM Academy was the best decision we made. He went from spending hours playing video games to building his own Scratch games and micro-robotics. The instructors are patient and world-class.",
      rating: 5,
      tag: "PARENTS & YOUTH",
      tagColor: "text-[#FFE600] border-[#FFE600]/30 bg-[#FFE600]/10",
    },
    {
      id: 3,
      name: "Dr. Kalu Ndukwe",
      role: "Principal, Crestview International Academy",
      category: "schools",
      quote:
        "Xpr Nigeria Limited helped us establish a state-of-the-art STEM & Robotics laboratory for our secondary students. Their curriculum integration and teacher training workshops elevated our school to one of the top tech-forward institutions in Abuja.",
      rating: 5,
      tag: "SCHOOL PARTNERSHIP",
      tagColor: "text-[#00FF87] border-[#00FF87]/30 bg-[#00FF87]/10",
    },
    {
      id: 4,
      name: "Amina Yusuf",
      role: "Full-Stack Developer @ Global Remote Firm",
      category: "bootcamp",
      quote:
        "The 1-on-1 career counseling and portfolio review sessions at Xpr were game-changing. They audited my GitHub, revamped my technical resume, and taught me how to tackle international coding interviews with confidence.",
      rating: 5,
      tag: "CAREER MENTORSHIP",
      tagColor: "text-[#FFE600] border-[#FFE600]/30 bg-[#FFE600]/10",
    },
    {
      id: 5,
      name: "Emeka Dan-Jumbo",
      role: "CTO, Agrotech Enterprise",
      category: "schools",
      quote:
        "We engaged Xpr Technologies for bespoke AI research and computer vision solution development. Their team delivered an accurate crop disease diagnostic engine on schedule. Truly exceptional engineering standard right here in Nigeria.",
      rating: 5,
      tag: "ENTERPRISE R&D",
      tagColor: "text-[#00FF87] border-[#00FF87]/30 bg-[#00FF87]/10",
    },
    {
      id: 6,
      name: "Blessing & David Sanusi",
      role: "Parents of 12 & 14 Year-Old Coding Duo",
      category: "parents",
      quote:
        "Both of our kids participated in the Xpr Summer Coding Bootcamp. Seeing them present their Python projects at the end-of-program exhibition made us so proud. Xpr is building real tech confidence in Nigerian youth!",
      rating: 5,
      tag: "PARENTS & YOUTH",
      tagColor: "text-[#FFE600] border-[#FFE600]/30 bg-[#FFE600]/10",
    },
  ];

  const filtered =
    filter === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === filter);

  return (
    <section id="testimonials" className="py-24 bg-[#070907] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-[#00FF87] uppercase tracking-widest">
            TESTIMONIALS // REAL IMPACT
          </span>
          <span className="h-px bg-white/10 flex-grow" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-3xl">
            Trusted by <span className="text-[#00FF87]">students</span>, <span className="text-[#FFE600]">parents</span> & <span className="text-[#00FF87]">innovators</span>.
          </h2>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {[
            { id: "all", label: "[ALL REVIEWS]" },
            { id: "bootcamp", label: "[BOOTCAMP ALUMNI]" },
            { id: "parents", label: "[PARENTS & YOUTH]" },
            { id: "schools", label: "[SCHOOLS & ENTERPRISE]" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                filter === tab.id
                  ? "bg-[#00FF87] text-[#070907] shadow-md"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="studiora-panel p-6 flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#FFE600] text-xs">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border ${t.tagColor}`}>
                    {t.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-white">
                    {t.name}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
