"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";

const SLIDES = [
  {
    id: 1,
    image: "/images/hero_ai_academy.png",
    tag: "KIDS & YOUTH AI ACADEMY",
    badge: "AGES <10 & 11–15 PROGRAM",
    headlineLine1: "BUILDING AI SYSTEMS",
    headlineLine2: "& YOUNG INNOVATORS.",
    subtitle:
      "Xpr Technologies Limited (XTL) balances AI research & enterprise tools with safe, fun, and ethical STEM programs for children under 10 (AI4K) and juniors aged 11–15 (MAD-4J & AI4J).",
  },
  {
    id: 2,
    image: "/images/hero_school_labs.png",
    tag: "ETHICAL PRACTICE & CAPACITY BUILDING",
    badge: "LYCEUM DCE & SCHOOL LABS",
    headlineLine1: "DIGITAL CAPACITY",
    headlineLine2: "& ETHICAL AI R&D.",
    subtitle:
      "“We work with care, experimentation, ethical practice, and simple solutions that meet real needs” — enhancing digital capacity for secondary schools like El-anNexus Christian Academy in Port Harcourt.",
  },
  {
    id: 3,
    image: "/images/hero_global_hub.png",
    tag: "NIGERIA TO GLOBAL INNOVATION HUB",
    badge: " UNBORDERED PATHWAYS",
    headlineLine1: "BRIDGING PRACTICAL R&D",
    headlineLine2: "WITH CAREER PATHWAYS.",
    subtitle:
      "Empowering secondary school leavers with the Unbordered Path platform and upskilling working professionals with advanced Prompt Engineering masterclasses.",
  },
];

interface HeroFullSwiperProps {
  onOpenModal: (type?: string, details?: string) => void;
}

export default function HeroFullSwiper({ onOpenModal }: HeroFullSwiperProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = SLIDES[current];

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0A0E0F] pt-32 pb-24 border-b border-white/10">

      {/* FULL BLEED BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slide.image}
              alt={slide.headlineLine1}
              fill
              priority
              className="object-cover"
            />

            {/* Dark Layered Vignette Overlays for Maximum Legibility & Clean Visuals */}
            <div className="absolute inset-0 bg-[#0A0E0F]/75 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E0F] via-transparent to-[#0A0E0F]/80" />
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(60% 50% at 20% 20%, rgba(16,185,129,0.25), transparent), radial-gradient(40% 40% at 85% 15%, rgba(255,230,0,0.18), transparent)",
              }}
              aria-hidden
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CLEAN & UNCLUTTERED HERO CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-10 flex-grow flex flex-col justify-center">

        {/* Top Badges & Eyebrow */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="px-3.5 py-1 rounded-full bg-[#FFE600] text-[#0A0E0F] font-mono text-[11px] font-extrabold uppercase shadow-lg">
            {slide.badge}
          </span>
        </div>

        {/* Dynamic Animated Text */}
        <div className="max-w-[840px] space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-4"
            >
              <span className="text-xs font-mono font-bold tracking-widest text-[#10B981] uppercase block">
                {slide.tag}
              </span>

              <h1 className="font-extrabold text-[10vw] sm:text-[6vw] lg:text-[4.6vw] uppercase leading-[0.94] tracking-tight text-white">
                {slide.headlineLine1}
                <br />
                <span className="text-[#FFE600]">{slide.headlineLine2}</span>
              </h1>

              <p className="max-w-[640px] text-base sm:text-lg leading-[170%] text-slate-300 font-normal pt-2">
                {slide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#courses"
              className="px-8 py-4 rounded-full bg-[#FFE600] hover:bg-yellow-300 text-[#0A0E0F] font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-2xl transition-all hover:scale-105"
            >
              <span>Explore Courses & Engagements</span>
              <HiArrowRight className="text-base" />
            </a>
            <a
              href="mailto:xprng.ltd@gmail.com?subject=Work%20With%20Us%20Inquiry%20-%20Xpr%20Technologies"
              className="px-8 py-4 rounded-full border border-white/25 text-white font-extrabold text-xs sm:text-sm hover:border-[#10B981] transition-all bg-white/10 backdrop-blur-md inline-flex items-center justify-center"
            >
              Work With Us
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
