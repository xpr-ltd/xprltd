"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroFullSwiper from "@/components/HeroFullSwiper";
import MarqueeTicker from "@/components/MarqueeTicker";
import Footer from "@/components/Footer";
import EnrollModal from "@/components/EnrollModal";

/* -------------------------------------------------------------------------
 * Design tokens – Green & Yellow palette for Xpr Nigeria Limited
 * ---------------------------------------------------------------------- */
const THEME_VARS = {
  "--ink": "#0A0E0F",
  "--ink-soft": "#111818",
  "--paper": "#F5F9F6",
  "--paper-soft": "#E6EFEA",
  "--accent": "#10B981",
  "--accent-2": "#059669",
  "--yellow": "#FFE600",
  "--muted-on-dark": "#A3B8B1",
  "--muted-on-light": "#4D665D",
  "--line-on-dark": "rgba(245,249,246,0.12)",
  "--line-on-light": "rgba(10,14,15,0.10)",
} as React.CSSProperties;

/* -------------------------------------------------------------------------
 * Framer Motion variants & viewport config
 * ---------------------------------------------------------------------- */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const viewportOnce = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -10% 0px",
};

/* -------------------------------------------------------------------------
 * Data – Xpr Nigeria Limited Copy & Media
 * ---------------------------------------------------------------------- */
const STATS = [
  { value: "50+", label: "AI & Digital Solutions" },
  { value: "12,000+", label: "Students & Kids Empowered" },
  { value: "45+", label: "Partner Schools & Firms" },
  { value: "99.2%", label: "Satisfaction & Support" },
];

const WORKS = [
  {
    title: "AI for Kids — Practical Guide & Learning Companion",
    description:
      "A foundational book and interactive learning guide authored by Xpr Nigeria Limited, designed to introduce children aged 6–16 to artificial intelligence, machine learning ethics, Scratch programming, and hands-on STEM tinkering.",
    image: "/images/kids_stem.png",
    category: "FEATURED PUBLICATION & EDTECH",
    widthClass: "w-full",
    aspect: "aspect-[16/9]",
  },
];

const SERVICES = [
  {
    image: "/images/hero_banner.png",
    title: "Artificial Intelligence R&D",
    description:
      "We build custom Machine Learning models, localized LLM chatbots, and automated decision engines to solve complex African and global business challenges.",
  },
  {
    image: "/images/ai_lab.png",
    title: "Enterprise Software Engineering",
    description:
      "From high-throughput web applications to secure fintech infrastructure, we engineer scalable, resilient digital products using modern stacks.",
  },
  {
    image: "/images/kids_stem.png",
    title: "Kids STEM & School Academy",
    description:
      "Nurturing young minds aged 6–16 through Scratch coding, robotics labs, Python, and school computer lab curriculum integration.",
  },
  {
    image: "/images/hero_banner.png",
    title: "1-on-1 Career Mentorship",
    description:
      "Diagnostic skill-gap assessments, GitHub portfolio audits, and mock technical interviews to launch students into global engineering roles.",
  },
  {
    image: "/images/ai_lab.png",
    title: "Support & Continuous Maintenance",
    description:
      "Your launch is only the beginning. We provide ongoing performance optimization, security updates, and technical support as products scale.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Diagnose & Audit",
    description:
      "We audit your business challenge, skill gaps, or school facility before proposing a solution. Most projects fail from wrong diagnosis, not wrong code.",
  },
  {
    step: "02",
    title: "Design & Engineer",
    description:
      "AI models, user interfaces, and curriculum systems built together so the end result feels like one unified decision, not separate departments.",
  },
  {
    step: "03",
    title: "Deploy & Scale",
    description:
      "We stay through production deployment, student exhibitions, and continuous mentorship so what was envisioned is what actually thrives.",
  },
];

const TESTIMONIALS = [
  {
    name: "Chidubem Okafor",
    role: "AI Engineer @ FinTech Hub",
    quote:
      "Xpr Technologies completely transformed my career trajectory. Their intensive AI bootcamp bridged theory and enterprise code. Within 2 months, I landed an AI Engineer role in Lagos!",
  },
  {
    name: "Mrs. Folake Adebayo",
    role: "Parent of 10-Year-Old STEM Student",
    quote:
      "Enrolling my son in the Xpr Young Innovators STEM Academy was the best decision. He went from playing games to building his own Scratch games and robotics!",
  },
  {
    name: "Dr. Kalu Ndukwe",
    role: "Principal, Crestview International Academy",
    quote:
      "Xpr Nigeria Limited helped us establish a state-of-the-art STEM & Robotics lab. Their curriculum and teacher training elevated our school to top tech status in Abuja.",
  },
  {
    name: "Amina Yusuf",
    role: "Full-Stack Developer @ Global Firm",
    quote:
      "The 1-on-1 career counseling and portfolio review sessions at Xpr were game-changing. They audited my GitHub and taught me how to tackle international coding interviews.",
  },
];

const COURSES = [
  {
    image: "/images/course_ai4k.png",
    title: "AI4K — AI for Kids",
    badge: "AGES <10 // CURRENT 2025",
    excerpt:
      "Safe, ethical AI learning for children under 10. Introduces foundational machine learning logic, computational thinking, and creative tinkering.",
  },
  {
    image: "/images/course_mad4j.png",
    title: "MAD-4J — Mobile App Dev for Juniors",
    badge: "AGES 11–15 // CURRENT 2025",
    excerpt:
      "Hands-on mobile application development training for juniors aged 11–15, empowering students to build and deploy real UI prototypes.",
  },
  {
    image: "/images/course_ai4j.png",
    title: "AI4J — Generative AI for Juniors",
    badge: "AGES 11–15 // CURRENT 2025",
    excerpt:
      "Generative AI learning program empowering juniors aged 11–15 to understand neural networks, prompt design, and responsible AI usage.",
  },
  {
    image: "/images/course_unbordered.png",
    title: "Unbordered Path — Secondary School Career Support",
    badge: "CAREER PLATFORM // 2025",
    excerpt:
      "A remote career support platform and mentorship pathway for secondary school leavers transitioning into tech careers and university.",
  },
  {
    image: "/images/course_lyceum.png",
    title: "Lyceum DCE — Digital Capacity Enhancement",
    badge: "SCHOOL INTEGRATION // PORT HARCOURT",
    excerpt:
      "Digital capacity enhancement for secondary schools, including lab setup and curriculum support with partners like El-anNexus Christian Academy.",
  },
  {
    image: "/images/course_prompt_eng.png",
    title: "Prompt Engineering for Professionals",
    badge: "SPECIAL TRAINING // 2024",
    excerpt:
      "Intensive training program for professionals on how to effectively apply Generative AI workflows and prompt engineering in daily work.",
  },
];

/* -------------------------------------------------------------------------
 * Shared helpers
 * ---------------------------------------------------------------------- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--accent)] font-bold">
      <span aria-hidden className="h-px w-4 bg-[color:var(--accent)]" />
      {children}
    </span>
  );
}

function TerminalFrame({
  path,
  lines,
  className = "",
}: {
  path: string;
  lines: string[];
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[color:var(--line-on-dark)] bg-[color:var(--ink-soft)] shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[color:var(--line-on-dark)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-[11px] text-[color:var(--muted-on-dark)]">
          {path}
        </span>
      </div>
      <div className="px-5 py-4 font-mono text-[13px] leading-[1.9] text-[#D7E0DC]">
        {lines.map((line, i) => (
          <div key={i}>
            <span className="mr-3 select-none text-[color:var(--muted-on-dark)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            {line}
            {i === lines.length - 1 && (
              <span className="ml-1 inline-block h-[1em] w-[7px] translate-y-[2px] animate-pulse bg-[color:var(--accent)]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoplay]);

  function goTo(i: number) {
    setActive(i);
    startAutoplay();
  }

  const current = TESTIMONIALS[active];

  return (
    <div className="mx-auto w-full max-w-[760px] text-center">
      <AnimatePresence mode="wait">
        <motion.figure
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <blockquote className="font-sans text-xl sm:text-3xl font-extrabold leading-[135%] tracking-tight text-[color:var(--paper)]">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex flex-col items-center gap-1">
            <span className="font-extrabold text-white text-base">
              {current.name}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--accent)]">
              {current.role}
            </span>
          </figcaption>
        </motion.figure>
      </AnimatePresence>

      <div className="mt-10 flex items-center justify-center gap-2">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show testimonial from ${t.name}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active
                ? "w-8 bg-[color:var(--yellow)]"
                : "w-3 bg-[color:var(--line-on-dark)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * Main Page Component
 * ---------------------------------------------------------------------- */
export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string>("enroll");
  const [modalDetails, setModalDetails] = useState<string>("");

  const handleOpenModal = (type: string = "enroll", details: string = "") => {
    setModalType(type);
    setModalDetails(details);
    setModalOpen(true);
  };

  return (
    <div style={THEME_VARS} className="bg-[color:var(--paper)] text-[color:var(--ink)]">
      
      {/* Top Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* ===================== FULL-SCREEN HERO SWIPER ===================== */}
      <HeroFullSwiper onOpenModal={handleOpenModal} />

      {/* Minimalist Marquee Banner */}
      <MarqueeTicker />

      {/* ===================== WHO WE ARE & GOALS ===================== */}
      <section id="about" className="bg-[color:var(--paper)] px-6 py-24 md:px-10 md:py-32 border-b border-[color:var(--line-on-light)]">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="md:col-span-5"
            >
              <Eyebrow>Who we are // RC 8154273</Eyebrow>
              <h2 className="mt-5 font-extrabold text-3xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
                AI Research, Development & Digital Capacity Enhancement.
              </h2>
              <p className="mt-6 text-sm font-mono text-[color:var(--accent-2)] font-bold">
                OUR APPROACH: &ldquo;We work with care, experimentation, ethical practice, and simple solutions that meet real needs.&rdquo;
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-10 md:col-span-7"
            >
              <p className="max-w-[580px] text-base sm:text-lg leading-[170%] text-[color:var(--muted-on-light)] font-normal">
                Xpr Technologies Limited (XTL) is focused on artificial intelligence research, software engineering, and digital learning. We build AI automation tools, web solutions, and digital products, while providing specialized training, school capacity enhancement, and business consultancy.
              </p>

              {/* Company Goals Grid */}
              <div className="border-t border-[color:var(--line-on-light)] pt-8">
                <p className="text-xs font-mono font-bold text-[color:var(--accent-2)] uppercase tracking-widest mb-6">
                  OUR CORE STRATEGIC GOALS
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-[color:var(--paper-soft)] border border-[color:var(--line-on-light)] space-y-2">
                    <span className="text-xs font-mono font-bold text-[color:var(--accent-2)]">GOAL 01</span>
                    <h4 className="font-extrabold text-sm text-[color:var(--ink)]">Build AI & Digital Capacity</h4>
                    <p className="text-xs text-[color:var(--muted-on-light)]">Build strong AI research and digital innovation capacity across Nigeria.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[color:var(--paper-soft)] border border-[color:var(--line-on-light)] space-y-2">
                    <span className="text-xs font-mono font-bold text-[color:var(--accent-2)]">GOAL 02</span>
                    <h4 className="font-extrabold text-sm text-[color:var(--ink)]">Original R&D Solutions</h4>
                    <p className="text-xs text-[color:var(--muted-on-light)]">Create useful solutions through original research & development and strategic partnerships.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[color:var(--paper-soft)] border border-[color:var(--line-on-light)] space-y-2">
                    <span className="text-xs font-mono font-bold text-[color:var(--accent-2)]">GOAL 03</span>
                    <h4 className="font-extrabold text-sm text-[color:var(--ink)]">Future-Ready Skills</h4>
                    <p className="text-xs text-[color:var(--muted-on-light)]">Train individuals and students with future-ready skills in AI, software engineering, and digital tools.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[color:var(--paper-soft)] border border-[color:var(--line-on-light)] space-y-2">
                    <span className="text-xs font-mono font-bold text-[color:var(--accent-2)]">GOAL 04</span>
                    <h4 className="font-extrabold text-sm text-[color:var(--ink)]">Global Innovation Hub</h4>
                    <p className="text-xs text-[color:var(--muted-on-light)]">Help Nigeria grow into a global research hub for practical technology innovation.</p>
                  </div>
                </div>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="grid grid-cols-2 gap-8 border-t border-[color:var(--line-on-light)] pt-10 sm:grid-cols-4"
              >
                {STATS.map((stat) => (
                  <motion.div key={stat.label} variants={fadeInUp}>
                    <p className="font-extrabold text-3xl sm:text-4xl tracking-tight text-[color:var(--ink)]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-[color:var(--muted-on-light)] font-mono uppercase">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== SELECTED WORKS ===================== */}
      <section id="work" className="bg-[color:var(--paper-soft)] px-6 py-24 md:px-10 md:py-32 border-b border-[color:var(--line-on-light)]">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <Eyebrow>Selected work & solutions</Eyebrow>
              <h2 className="mt-5 max-w-[560px] font-extrabold text-3xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
                Real projects, real impact for African brands.
              </h2>
            </div>
            <button
              onClick={() => handleOpenModal("consultation", "Selected Work Archive")}
              className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--ink)] underline decoration-[color:var(--line-on-light)] underline-offset-8 hover:decoration-[color:var(--accent)] font-bold text-left"
            >
              View full archive (17+) →
            </button>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-10 md:flex-row md:flex-wrap md:items-start md:justify-between md:gap-y-14"
          >
            {WORKS.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                onClick={() => handleOpenModal("consultation", item.title)}
                className={`group relative w-full ${item.widthClass} cursor-pointer`}
              >
                <div className={`relative mb-5 w-full overflow-hidden rounded-2xl bg-[#0A0E0F] ${item.aspect} border border-[color:var(--line-on-light)]`}>
                  <motion.div variants={imageReveal} className="relative h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </motion.div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md bg-[#0A0E0F]/90 text-[color:var(--accent)] border border-white/10 text-[10px] font-mono font-bold">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[color:var(--paper)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 13 13 1M13 1H4M13 1v9" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="max-w-[538px]">
                  <h3 className="mb-2 font-extrabold text-2xl tracking-tight text-[color:var(--ink)] group-hover:text-[color:var(--accent-2)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-[160%] text-[color:var(--muted-on-light)]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== DIGITAL INFRASTRUCTURE CTA ===================== */}
      <section className="relative overflow-hidden bg-[color:var(--ink)] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 md:grid-cols-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="md:col-span-7"
          >
            <Eyebrow>Digital infrastructure & R&D</Eyebrow>
            <h2 className="mt-5 font-extrabold text-3xl sm:text-5xl tracking-tight text-[color:var(--paper)]">
              We build the system once, so your team never has to guess twice.
            </h2>
            <p className="mt-6 max-w-[520px] text-base leading-[170%] text-[color:var(--muted-on-dark)]">
              From responsive web apps and AI decision engines to K-12 school STEM labs, we deliver end-to-end technology solutions that grow with your business. Code standards, AI pipelines, and curriculum documented and handed off cleanly.
            </p>
            <a
              href="mailto:contact@xprtechnologies.com?subject=Digital%20Infrastructure%20%26%20Service%20Inquiry%20-%20Xpr%20Technologies"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[color:var(--accent)] hover:bg-[#00FF87] hover:text-[#070907] px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-white font-extrabold transition-all hover:scale-105"
            >
              Explore our services ↗
            </a>
          </motion.div>

          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="md:col-span-5"
          >
            <TerminalFrame
              path="~/xpr/tokens.css"
              lines={[
                "--ink: #0A0E0F;",
                "--paper: #F5F9F6;",
                "--accent: #10B981;",
                "--yellow: #FFE600;",
                "--status: KICKOFF_24H;",
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* ===================== SERVICES (WHAT WE DO) ===================== */}
      <section id="services" className="bg-[color:var(--paper)] px-6 py-24 md:px-10 md:py-32 border-b border-[color:var(--line-on-light)]">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-16 max-w-[600px]"
          >
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-5 font-extrabold text-3xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
              Five disciplines, one accountable team.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-[color:var(--line-on-light)] sm:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((service, i) => (
              <a
                key={service.title}
                href={`mailto:contact@xprtechnologies.com?subject=${encodeURIComponent("Book Service: " + service.title)}`}
                className="group flex flex-col justify-between gap-5 bg-[color:var(--paper)] p-8 transition-all hover:bg-[color:var(--paper-soft)] cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-[color:var(--paper-soft)] border border-[color:var(--line-on-light)]">
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-mono text-xs text-[color:var(--muted-on-light)] font-bold">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-xl tracking-tight text-[color:var(--ink)] group-hover:text-[color:var(--accent-2)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-[160%] text-[color:var(--muted-on-light)]">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[color:var(--line-on-light)] flex items-center justify-between text-xs font-mono font-bold text-[color:var(--accent-2)]">
                  <span>BOOK SERVICE</span>
                  <span>↗</span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section id="testimonials" className="bg-[color:var(--ink)] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-16 text-center"
          >
            <Eyebrow>What clients say</Eyebrow>
          </motion.div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ===================== PROCESS (HOW WE WORK) ===================== */}
      <section className="bg-[color:var(--paper-soft)] px-6 py-24 md:px-10 md:py-32 border-b border-[color:var(--line-on-light)]">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-16 max-w-[600px]"
          >
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-5 font-extrabold text-3xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
              Three steps, every time — that&rsquo;s the point.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8"
          >
            {PROCESS.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="border-t border-[color:var(--line-on-light)] pt-6"
              >
                <span className="font-mono text-sm text-[color:var(--accent-2)] font-bold">
                  {step.step}
                </span>
                <h3 className="mt-4 font-extrabold text-2xl tracking-tight text-[color:var(--ink)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-[160%] text-[color:var(--muted-on-light)]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== COURSES & ENGAGEMENTS ===================== */}
      <section id="courses" className="bg-[color:var(--paper)] px-6 py-24 md:px-10 md:py-32 border-b border-[color:var(--line-on-light)]">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <Eyebrow>Training & Learning Programs</Eyebrow>
              <h2 className="mt-5 font-extrabold text-3xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
                Our Courses & Digital Engagements.
              </h2>
            </div>
            <button
              onClick={() => handleOpenModal("enroll", "General Course Catalog")}
              className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--ink)] underline decoration-[color:var(--line-on-light)] underline-offset-8 hover:decoration-[color:var(--accent)] font-bold text-left"
            >
              Enroll in a course →
            </button>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {COURSES.map((course) => (
              <motion.div
                key={course.title}
                variants={fadeInUp}
                onClick={() => handleOpenModal("enroll", course.title)}
                className="group relative cursor-pointer bg-[color:var(--paper-soft)] p-6 rounded-3xl border border-[color:var(--line-on-light)] flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div>
                  <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#0A0E0F] border border-[color:var(--line-on-light)]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-md bg-[#0A0E0F]/90 text-[color:var(--yellow)] border border-white/10 text-[10px] font-mono font-bold">
                        {course.badge}
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-2 font-extrabold text-xl tracking-tight text-[color:var(--ink)] group-hover:text-[color:var(--accent-2)] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-[160%] text-[color:var(--muted-on-light)]">
                    {course.excerpt}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-[color:var(--line-on-light)] flex items-center justify-between font-mono text-xs font-bold text-[color:var(--accent-2)]">
                  <span>ENROLL NOW</span>
                  <span>↗</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal */}
      <EnrollModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
        initialDetails={modalDetails}
      />
    </div>
  );
}
