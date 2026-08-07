"use client";

import { useState } from "react";
import { 
  HiX, 
  HiSparkles, 
  HiCheckCircle, 
  HiMail, 
  HiPhone, 
  HiAcademicCap,
  HiBriefcase
} from "react-icons/hi";
import { FaGraduationCap, FaRocket, FaHandshake, FaUserCheck } from "react-icons/fa";

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  initialDetails?: string;
}

export default function EnrollModal({
  isOpen,
  onClose,
  initialType = "enroll",
  initialDetails = "",
}: EnrollModalProps) {
  const [formType, setFormType] = useState<string>(initialType);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("student");
  const [selectedCourse, setSelectedCourse] = useState(initialDetails || "Enterprise AI & Machine Learning");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0b100d] border border-emerald-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden glow-pill-green">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <HiX size={20} />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-3xl flex items-center justify-center mx-auto">
              <HiCheckCircle />
            </div>

            <h3 className="text-2xl font-extrabold text-white">
              Application Received! 🎉
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-yellow-400">{fullName}</strong>. An Xpr Technologies advisor will contact you via WhatsApp/Email within 12 hours with your personalized onboarding guide.
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-yellow-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/20 transition-all"
            >
              Done / Return to Site
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold mb-2">
                <HiSparkles /> Xpr Nigeria Limited Hub
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                {formType === "consultation" ? "Book AI & Tech Strategy Call" : "Apply for Xpr Programs"}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill out the form below to lock in your cohort registration or schedule your enterprise consultation.
              </p>
            </div>

            {/* Type Switcher */}
            <div className="grid grid-cols-2 gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setFormType("enroll")}
                className={`py-2 rounded-lg text-xs font-bold transition-all ${
                  formType === "enroll"
                    ? "bg-yellow-400 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                🎓 Course Enrollment
              </button>
              <button
                type="button"
                onClick={() => setFormType("consultation")}
                className={`py-2 rounded-lg text-xs font-bold transition-all ${
                  formType === "consultation"
                    ? "bg-emerald-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                🤝 R&D / Consultancy
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1 block">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Oluwaseun Adeleke"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1 block">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1 block">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1 block">I am applying as:</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-[#121914] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                >
                  <option value="student">Student / Individual Professional</option>
                  <option value="parent">Parent registering a child for STEM</option>
                  <option value="school">School Principal / Administrator</option>
                  <option value="enterprise">Enterprise Client / Corporate Org</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1 block">
                  {formType === "consultation" ? "Service / Topic of Interest" : "Select Program"}
                </label>
                <input
                  type="text"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  placeholder="e.g. AI & ML Bootcamp, Kids STEM, R&D..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1 block">Additional Notes / Message (Optional)</label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your learning goals or business requirements..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-2 transition-all mt-2"
              >
                <FaRocket /> Submit Request & Lock Spot
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
