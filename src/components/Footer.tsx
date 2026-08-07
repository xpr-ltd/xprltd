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
    <footer className="bg-[#0A0E0F] border-t border-white/10 pt-16 pb-12 text-slate-300 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 overflow-hidden rounded-xl bg-white/5 border border-white/10 p-1 flex items-center justify-center">
                <img
                  src="/images/logo_main.png"
                  alt="XPR Technologies Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white">
                  XPR <span className="text-[#10B981]">TECHNOLOGIES</span>
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">
                  RC 8154273 (XTL)
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Xpr Technologies Limited (XTL) is a technology company focused on artificial intelligence research, development, and learning. We build AI and automation tools, software, web solutions, and digital products while empowering schools, individuals, and organisations.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#10B981] uppercase tracking-widest font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Our Courses</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-[#10B981] uppercase tracking-widest font-bold">
              Subscribe to updates
            </h4>
            <p className="text-xs text-slate-400 font-mono">
              Get the latest notes on AI research, youth STEM courses, and digital tools.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-1.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="xprng.ltd@gmail.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#10B981] font-mono"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2.5 rounded-xl bg-[#FFE600] hover:bg-yellow-300 text-[#0A0E0F] font-bold text-xs flex-shrink-0"
                >
                  <FaPaperPlane />
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-[#10B981] font-medium flex items-center gap-1 font-mono">
                  <FaCheckCircle /> Subscribed successfully!
                </div>
              )}
            </form>

            <div className="pt-2 space-y-1 text-xs text-slate-400 font-mono">
              <p>Email: <a href="mailto:xprng.ltd@gmail.com" className="text-[#10B981] hover:underline">xprng.ltd@gmail.com</a></p>
              <p>Port Harcourt, Lagos & Abuja, Nigeria</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-mono">
          <p>© 2026 Xpr Technologies Limited (RC 8154273). All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs text-[#10B981] hover:text-[#FFE600] transition-colors font-bold"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
