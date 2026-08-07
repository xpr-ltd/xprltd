"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Where are Xpr Nigeria Limited training hubs located? Are classes available online?",
      a: "We offer both physical hub learning (in Lagos and Abuja) and fully interactive live online classes. Our online bootcamps feature live screen sharing, dedicated mentor breakout rooms, and recorded session replays.",
    },
    {
      q: "What age groups can register for the Young Innovators STEM Academy?",
      a: "Our kids programs are structured for ages 6 to 16. We divide students into age-appropriate cohorts: Explorers (6–9 yrs) for block coding and basic robotics, Creators (10–13 yrs) for Python & Micro:bit, and Innovators (14–16 yrs) for Web Dev & introductory AI.",
    },
    {
      q: "How does Xpr Technologies engage with enterprises for AI & Software R&D?",
      a: "We provide end-to-end AI consulting, architectural scoping, prototype development, and model deployment. You can engage us as an extension of your engineering team or contract us for discrete turn-key R&D deliverables.",
    },
    {
      q: "Do you offer flexible tuition payment plans for bootcamps?",
      a: "Yes! We believe financial constraints should never stop ambition. We offer flexible 2 to 3 installment payment plans for all professional bootcamps and kids STEM academies.",
    },
    {
      q: "What is included in the 1-on-1 Tech Career Counseling service?",
      a: "Our career counseling includes a thorough diagnostic assessment of your current tech skills, a live audit of your CV & GitHub portfolio, 2 mock technical/behavioral interview sessions, and introduction to our partner hiring network in Nigeria and overseas.",
    },
    {
      q: "How can a school partner with Xpr for STEM Curriculum and Lab setup?",
      a: "School administrators can request an onsite audit via our contact form. Our EdTech team will assess your computer facility, customize a STEM curriculum for your students, supply robotics kits, and train your teaching staff.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#070907] relative border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-[#FFE600] uppercase tracking-widest">
            FAQ // GOT QUESTIONS?
          </span>
          <span className="h-px bg-white/10 flex-grow" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-12">
          Frequently asked <span className="text-[#FFE600]">questions</span>.
        </h2>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`studiora-panel overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-[#00FF87]/50 bg-[#0d120e]" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-slate-100 hover:text-[#00FF87] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#00FF87] font-mono text-xs">0{idx + 1}.</span>
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#070907] bg-[#FFE600]" : ""
                    }`}
                  >
                    <HiChevronDown className="text-xs" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 mt-2 animate-fadeIn">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
