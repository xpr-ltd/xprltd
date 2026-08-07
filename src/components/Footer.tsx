"use client";

import { useState } from "react";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#042E25] border-t border-emerald-900/80 pt-16 pb-12 text-slate-200 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-emerald-900/60">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3.5 group">
              <img
                src="/images/logo_main.png"
                alt="XPR Technologies Logo"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white">
                  XPR <span className="text-[#10B981]">TECHNOLOGIES</span>
                </span>
                <span className="text-xs font-mono text-[#10B981] font-bold">
                  RC 8154273
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-sm font-normal">
              Empowering the next generation to imagine, build, and change the world with technology and purpose.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#10B981] uppercase tracking-widest font-extrabold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-mono font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Our Courses</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#10B981] uppercase tracking-widest font-extrabold">
              Contact & Location
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-mono">
              <li>
                <span className="text-emerald-100 font-bold block">Location:</span>
                <span>Port Harcourt, Rivers State, Nigeria</span>
              </li>
              <li className="pt-1">
                <span className="text-emerald-100 font-bold block">Mobile:</span>
                <a href="tel:+2347074214278" className="text-[#10B981] font-bold hover:underline">
                  +234 707 421 4278
                </a>
              </li>
              <li className="pt-1">
                <span className="text-emerald-100 font-bold block">Email:</span>
                <a href="mailto:xprng.ltd@gmail.com" className="text-[#10B981] font-bold hover:underline">
                  xprng.ltd@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 font-mono font-medium">
          <p>© 2026 Xpr Technologies Limited (RC 8154273). All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs text-[#10B981] hover:text-white transition-colors font-bold"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
