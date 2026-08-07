"use client";

import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX, HiChevronRight } from "react-icons/hi";

interface NavbarProps {
  onOpenModal: (type?: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Courses", href: "#courses" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3.5 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm"
            : "py-5 bg-white/80 backdrop-blur-md border-b border-gray-100/40"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3.5 group">
              <img
                src="/images/logo_main.png"
                alt="XPR Technologies Logo"
                className="h-11 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-[#064E3B] group-hover:text-[#059669] transition-colors">
                  XPR <span className="text-[#059669]">TECHNOLOGIES</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-emerald-50/60 rounded-full px-5 py-2 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#064E3B] hover:text-[#059669] hover:bg-white rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="mailto:xprng.ltd@gmail.com?subject=Work%20With%20Us%20Inquiry%20-%20Xpr%20Technologies"
                className="px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#064E3B] hover:text-[#059669] rounded-full transition-all duration-200 bg-emerald-50 hover:bg-emerald-100 inline-flex items-center justify-center"
              >
                Work With Us
              </a>
              <button
                onClick={() => onOpenModal("enroll")}
                className="px-5 py-2.5 text-xs font-mono font-extrabold uppercase tracking-wider text-white bg-[#059669] hover:bg-[#047857] rounded-full shadow-md transition-all hover:scale-105"
              >
                Explore Courses ↗
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => onOpenModal("enroll")}
                className="px-3.5 py-1.5 text-[11px] font-mono font-extrabold text-white bg-[#059669] rounded-full"
              >
                Courses
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#064E3B] hover:text-[#059669] rounded-xl bg-emerald-50 border border-emerald-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0E0F]/95 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8 animate-fadeIn">
          <div className="space-y-4">
            <p className="text-xs font-mono text-[#10B981] uppercase tracking-widest font-bold">
              NAVIGATION
            </p>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-extrabold text-white hover:text-[#10B981] py-3 border-b border-white/10 flex items-center justify-between"
                >
                  {link.name}
                  <HiChevronRight className="text-[#10B981]" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <a
              href="mailto:xprng.ltd@gmail.com?subject=Work%20With%20Us%20Inquiry%20-%20Xpr%20Technologies"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full border border-white/20 text-white font-extrabold text-xs flex items-center justify-center bg-white/5 font-mono"
            >
              Work With Us
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal("enroll");
              }}
              className="w-full py-3.5 rounded-full bg-[#FFE600] text-[#0A0E0F] font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 font-mono"
            >
              <span>Explore Courses & Bootcamps</span>
              <span>↗</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
