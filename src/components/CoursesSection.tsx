"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCheckCircle, FaStar, FaClock, FaChild } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

interface CoursesSectionProps {
  onOpenModal: (type?: string, details?: string) => void;
}

export default function CoursesSection({ onOpenModal }: CoursesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const courses = [
    {
      id: 1,
      title: "Young Innovators STEM & Robotics Academy",
      category: "kids",
      target: "Ages 6–16 (Children & Youth)",
      duration: "8 Weeks (Saturdays or After-School)",
      badge: "KIDS STEM SPECIAL",
      badgeColor: "text-[#070907] border-[#FFE600] bg-[#FFE600]",
      image: "/images/kids_stem.png",
      rating: "4.9 / 5.0 (420+ Parents)",
      curriculum: [
        "Scratch Block-Based Game Design",
        "Python Programming Fundamentals for Kids",
        "Micro:bit Hardware Tinkering & Robotics",
        "Introduction to AI & Responsible Tech",
      ],
      price: "Flexible Payment Installments",
    },
    {
      id: 2,
      title: "Enterprise AI & Machine Learning Engineering",
      category: "ai",
      target: "Developers & Data Analysts",
      duration: "14 Weeks (Intensive Bootcamp)",
      badge: "HIGH DEMAND",
      badgeColor: "text-[#070907] border-[#00FF87] bg-[#00FF87]",
      image: "/images/hero_banner.png",
      rating: "5.0 / 5.0 (180+ Graduates)",
      curriculum: [
        "Python, NumPy, Pandas & PyTorch Frameworks",
        "Building & Fine-Tuning Large Language Models",
        "Computer Vision & Deep Neural Networks",
        "Deploying AI APIs to Production Cloud",
      ],
      price: "Live Capstone Project Included",
    },
    {
      id: 3,
      title: "Full-Stack Web & Cloud Systems Masterclass",
      category: "fullstack",
      target: "Beginners & Career Changers",
      duration: "16 Weeks (Online & Onsite Hybrid)",
      badge: "POPULAR PATHWAY",
      badgeColor: "text-[#070907] border-[#FFE600] bg-[#FFE600]",
      image: "/images/ai_lab.png",
      rating: "4.9 / 5.0 (310+ Graduates)",
      curriculum: [
        "HTML5, CSS3, Modern JavaScript & TypeScript",
        "Next.js App Router & Tailwind CSS Mastery",
        "Node.js, PostgreSQL & REST/GraphQL APIs",
        "1-on-1 Portfolio & Interview Mentorship",
      ],
      price: "Job Placement Support Included",
    },
    {
      id: 4,
      title: "School Educators Tech Pedagogy & STEM Masterclass",
      category: "corporate",
      target: "Teachers & School Principals",
      duration: "3 Weeks (Workshops)",
      badge: "INSTITUTIONAL",
      badgeColor: "text-[#070907] border-[#00FF87] bg-[#00FF87]",
      image: "/images/kids_stem.png",
      rating: "4.9 / 5.0 (20+ Schools)",
      curriculum: [
        "Designing Modern School Computer Labs",
        "Teaching Python & Robotics to K-12 Students",
        "Leveraging AI Tools for Lesson Planning",
        "Continuous Teacher Assessment Support",
      ],
      price: "Group Discounts for School Staff",
    },
    {
      id: 5,
      title: "Python Data Science & Predictive Analytics",
      category: "ai",
      target: "Undergraduates & Analysts",
      duration: "10 Weeks",
      badge: "IN-DEMAND",
      badgeColor: "text-[#070907] border-[#00FF87] bg-[#00FF87]",
      image: "/images/hero_banner.png",
      rating: "4.8 / 5.0 (210+ Alumni)",
      curriculum: [
        "Exploratory Data Analysis & Visualization",
        "Statistical Modeling & Scikit-Learn",
        "Automated Business Data Pipelines",
        "Real-World Nigerian Economic Datasets",
      ],
      price: "Hands-on Project Portfolio",
    },
    {
      id: 6,
      title: "1-on-1 Tech Career Counseling & Mentorship",
      category: "corporate",
      target: "Individuals & Career Switchers",
      duration: "4 Personalized Coaching Sessions",
      badge: "PERSONALIZED",
      badgeColor: "text-[#070907] border-[#FFE600] bg-[#FFE600]",
      image: "/images/ai_lab.png",
      rating: "5.0 / 5.0 (150+ Clients)",
      curriculum: [
        "Diagnostic Skill-Gap Assessment",
        "CV, LinkedIn & GitHub Portfolio Audit",
        "Mock Technical & Behavioral Interviews",
        "Direct Matchmaking with Partner Firms",
      ],
      price: "1-on-1 Mentor Allocation",
    },
  ];

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <section id="courses" className="py-24 bg-[#070907] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-[#00FF87] uppercase tracking-widest">
            COURSES & BOOTCAMPS // SKILL BUILDING
          </span>
          <span className="h-px bg-white/10 flex-grow" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-3xl">
            Personalized <span className="text-[#00FF87]">Learning Paths</span> for kids, students & professionals.
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {[
            { id: "all", label: "[ALL PROGRAMS]" },
            { id: "kids", label: "[KIDS & YOUTH STEM]" },
            { id: "ai", label: "[AI & MACHINE LEARNING]" },
            { id: "fullstack", label: "[FULL-STACK ENGINEERING]" },
            { id: "corporate", label: "[SCHOOLS & CAREER COUNSELING]" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                activeCategory === tab.id
                  ? "bg-[#FFE600] text-[#070907] shadow-md"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="studiora-panel overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070907] via-black/30 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-md border shadow-sm ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5 text-[11px] text-[#FFE600] font-mono font-extrabold">
                  <FaStar /> {course.rating}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-[#FFE600] transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 text-[11px] text-slate-300 font-mono">
                    <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      <FaChild className="text-[#00FF87]" /> {course.target}
                    </span>
                    <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      <FaClock className="text-[#FFE600]" /> {course.duration}
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <p className="text-[10px] font-mono text-[#00FF87] uppercase tracking-widest font-bold">
                      CURRICULUM HIGHLIGHTS:
                    </p>
                    {course.curriculum.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <FaCheckCircle className="text-[#00FF87] text-xs mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 font-semibold">STATUS: <strong className="text-[#00FF87]">OPEN</strong></span>
                    <span className="text-[#FFE600] font-extrabold">{course.price}</span>
                  </div>

                  <button
                    onClick={() => onOpenModal("enroll", course.title)}
                    className="w-full py-3 rounded-full bg-[#FFE600] hover:bg-yellow-300 text-[#070907] font-extrabold text-xs shadow-md flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Apply / Lock Spot</span>
                    <HiArrowUpRight className="text-base" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
