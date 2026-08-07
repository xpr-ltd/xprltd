"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiArrowRight } from "react-icons/hi2";

const SLIDES = [
  {
    id: 1,
    number: "01",
    image: "/images/kids_stem.png",
    tag: "AI4K & MAD-4J",
    badgeColor: "bg-[#10B981]",
    accentColor: "bg-[#10B981]",
    title: "Safe, Ethical AI & STEM for Kids (Ages <10 & 11–15)",
    description:
      "Empowering children under 10 and juniors aged 11–15 with Scratch block coding, mobile app dev, Python logic, and ethical AI tinkering.",
    cta: "Explore Kids STEM",
  },
  {
    id: 2,
    number: "02",
    image: "/images/ai_lab.png",
    tag: "Lyceum DCE Labs",
    badgeColor: "bg-[#FFE600] text-[#0A0E0F]",
    accentColor: "bg-[#FFE600]",
    title: "School Digital Capacity Enhancement & R&D",
    description:
      "Digital capacity enhancement for secondary schools — including hands-on computer lab setup and teacher training (e.g. El-anNexus Academy, PH).",
    cta: "View School Programs",
  },
  {
    id: 3,
    number: "03",
    image: "/images/hero_banner.png",
    tag: "Unbordered Path",
    badgeColor: "bg-[#059669]",
    accentColor: "bg-[#059669]",
    title: "Remote Career Pathways & Professional Training",
    description:
      "Mentorship platform for secondary school leavers and Prompt Engineering masterclasses for working professionals across Nigeria.",
    cta: "Join Next Cohort",
  },
];

interface HeroSwiperProps {
  onOpenModal: (type?: string, details?: string) => void;
}

export default function HeroSwiper({ onOpenModal }: HeroSwiperProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = SLIDES[current];

  return (
    <div className="relative w-full">
      {/* Lisa Chukwu Inspired Hero Card Container */}
      <div className="relative bg-[#111818] rounded-[28px] border border-white/10 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)] group">
        
        {/* Top Accent Line */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${slide.accentColor} transition-colors duration-500 z-30`} />

        {/* Top Right Big Number Badge */}
        <span className="absolute top-4 right-6 font-mono font-extrabold text-3xl sm:text-4xl text-white/20 select-none z-30">
          {slide.number}
        </span>

        {/* Carousel Image Container */}
        <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111818] via-[#111818]/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Floating Category Pill on Image */}
          <div className="absolute bottom-4 left-4 z-20">
            <span className={`text-xs font-mono font-bold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2 ${slide.badgeColor}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {slide.tag}
            </span>
          </div>
        </div>

        {/* Card Content Area */}
        <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
            >
              <h3 className="font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                {slide.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Card Footer: Action Button & Swiper Navigation Controls */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            
            <button
              onClick={() => onOpenModal("enroll", slide.title)}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#10B981] text-white hover:text-[#0A0E0F] font-mono font-bold text-xs rounded-full px-5 py-2.5 transition-all shadow-md group/btn"
            >
              <span>{slide.cta}</span>
              <HiArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
            </button>

            {/* Navigation Dots & Arrows */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === current
                        ? "w-7 bg-[#FFE600]"
                        : "w-2 bg-white/20 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10"
                >
                  <HiChevronLeft className="text-sm" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10"
                >
                  <HiChevronRight className="text-sm" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
