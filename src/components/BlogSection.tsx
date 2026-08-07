"use client";

import { HiArrowUpRight } from "react-icons/hi2";

interface BlogSectionProps {
  onOpenModal: (type?: string, details?: string) => void;
}

export default function BlogSection({ onOpenModal }: BlogSectionProps) {
  const blogs = [
    {
      id: 1,
      title: "Digital design & AI trends that make brands feel premium",
      excerpt:
        "From high-level AI model structure to responsive user interfaces — discover the key architecture techniques agencies use to turn simple products into high-conversion digital assets.",
      date: "AUG 2026",
      readTime: "5 MIN READ",
    },
    {
      id: 2,
      title: "How modern STEM literacy is shaping the next generation of African youth",
      excerpt:
        "Early exposure to Scratch coding, Python logic, and micro-robotics builds logical problem-solving confidence that prepares children for future global technology careers.",
      date: "JUL 2026",
      readTime: "4 MIN READ",
    },
    {
      id: 3,
      title: "Why consistency in software architecture is key to scaling tech startups",
      excerpt:
        "A successful tech enterprise is built through clean code standards, scalable API endpoints, and continuous mentorship. Learn how top studios engineer resilient systems.",
      date: "JUN 2026",
      readTime: "6 MIN READ",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-[#070907] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-[#FFE600] uppercase tracking-widest block mb-2">
              OUR INSIGHTS & JOURNAL
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Latest <span className="text-[#00FF87]">Articles & Insights</span>.
            </h2>
          </div>

          <button
            onClick={() => onOpenModal("consultation", "Blog Insights")}
            className="px-6 py-3 rounded-full border border-white/15 hover:border-[#00FF87] bg-white/5 text-xs font-mono font-bold text-slate-300 hover:text-white transition-all self-start md:self-auto"
          >
            View More Blogs ↗
          </button>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((b) => (
            <div
              key={b.id}
              onClick={() => onOpenModal("consultation", b.title)}
              className="studiora-panel p-6 sm:p-8 flex flex-col justify-between space-y-6 group cursor-pointer hover:border-[#FFE600]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-[#00FF87] font-bold">{b.date}</span>
                  <span>{b.readTime}</span>
                </div>

                <h3 className="text-xl font-extrabold text-white group-hover:text-[#FFE600] transition-colors leading-snug">
                  {b.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {b.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#00FF87] group-hover:text-[#FFE600] transition-colors">
                  Read Article
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#FFE600] group-hover:text-[#070907] text-[#FFE600] flex items-center justify-center transition-all">
                  <HiArrowUpRight />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
