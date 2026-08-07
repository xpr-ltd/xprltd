"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

interface AiShowcaseSectionProps {
  onOpenModal: (type?: string, details?: string) => void;
}

export default function AiShowcaseSection({ onOpenModal }: AiShowcaseSectionProps) {
  const [activeDemo, setActiveDemo] = useState<"tutor" | "agri" | "code">("tutor");
  const [userPrompt, setUserPrompt] = useState("Explain Artificial Intelligence simply for a Nigerian high school student.");
  const [aiOutput, setAiOutput] = useState(
    "XprEduAI Output:\nThink of Artificial Intelligence like a skilled traffic controller in Lagos! Instead of directing cars manually, the AI analyzes traffic flow data, learns pattern bottlenecks, and automatically updates signal lights to optimize journey times!"
  );
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSimulateAI = () => {
    setIsGenerating(true);
    setTimeout(() => {
      if (activeDemo === "tutor") {
        setAiOutput(
          `XprEduAI Inference:\nPrompt: "${userPrompt}"\n\nExplanation:\n- AI breaks down complex subjects into relatable local metaphors.\n- Exam Readiness: Generates practice questions aligned with WAEC & JAMB STEM standards!`
        );
      } else if (activeDemo === "agri") {
        setAiOutput(
          `XprAgriVision Computer Vision Output:\n- Image Diagnostics: Cassava Leaf Spot Detection (99.1% Confidence)\n- Treatment Plan: Organic Neem Extract Spray within 48 Hours\n- Forecast Impact: Prevents 85% Crop Yield Loss.`
        );
      } else {
        setAiOutput(
          `XprCodeKids Micro-Robotics Runtime:\n>>> import xpr_robotics\n>>> bot = xpr_robotics.Rover(hub="Lagos_Lab")\n>>> bot.move_forward(speed="FAST")\n>>> print(bot.scan_environment())\n[SUCCESS]: Distance sensor clear (45cm). Route verified!`
        );
      }
      setIsGenerating(false);
    }, 500);
  };

  return (
    <section id="ai-showcase" className="py-24 bg-[#070907] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-[#FFE600] uppercase tracking-widest">
            R&D LAB DEMOS // PROPRIETARY INVENTIONS
          </span>
          <span className="h-px bg-white/10 flex-grow" />
        </div>

        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-3xl">
            Live interactive <span className="text-[#00FF87]">AI & Software</span> innovations.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-mono">
            Test real-time model previews engineered inside Xpr Nigeria Limited's R&D Labs.
          </p>
        </div>

        {/* Selector Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => {
              setActiveDemo("tutor");
              setUserPrompt("Explain Artificial Intelligence simply for a Nigerian high school student.");
              setAiOutput(
                "XprEduAI Output:\nThink of Artificial Intelligence like a skilled traffic controller in Lagos! Instead of directing cars manually, the AI analyzes traffic flow data, learns pattern bottlenecks, and automatically updates signal lights to optimize journey times!"
              );
            }}
            className={`p-6 rounded-2xl border text-left transition-all ${
              activeDemo === "tutor"
                ? "bg-[#0d120e] border-[#00FF87] shadow-lg"
                : "studiora-panel border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-[#00FF87] font-bold">[PROJECT 01]</span>
              <HiArrowUpRight className="text-[#00FF87]" />
            </div>
            <h4 className="text-lg font-extrabold text-white">XprEduAI</h4>
            <p className="text-xs text-slate-400 mt-1">Localized Curriculum AI Tutor</p>
          </button>

          <button
            onClick={() => {
              setActiveDemo("agri");
              setUserPrompt("Scan Cassava Leaf Image for Disease Diagnostics");
              setAiOutput(
                "XprAgriVision Computer Vision Output:\n- Image Diagnostics: Cassava Leaf Spot Detection (99.1% Confidence)\n- Treatment Plan: Organic Neem Extract Spray within 48 Hours\n- Forecast Impact: Prevents 85% Crop Yield Loss."
              );
            }}
            className={`p-6 rounded-2xl border text-left transition-all ${
              activeDemo === "agri"
                ? "bg-[#0d120e] border-[#FFE600] shadow-lg"
                : "studiora-panel border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-[#FFE600] font-bold">[PROJECT 02]</span>
              <HiArrowUpRight className="text-[#FFE600]" />
            </div>
            <h4 className="text-lg font-extrabold text-white">XprAgriVision</h4>
            <p className="text-xs text-slate-400 mt-1">Computer Vision Crop Health</p>
          </button>

          <button
            onClick={() => {
              setActiveDemo("code");
              setUserPrompt("Execute Python Micro-Robotics Navigation Command");
              setAiOutput(
                "XprCodeKids Micro-Robotics Runtime:\n>>> import xpr_robotics\n>>> bot = xpr_robotics.Rover(hub=\"Lagos_Lab\")\n>>> bot.move_forward(speed=\"FAST\")\n>>> print(bot.scan_environment())\n[SUCCESS]: Distance sensor clear (45cm). Route verified!"
              );
            }}
            className={`p-6 rounded-2xl border text-left transition-all ${
              activeDemo === "code"
                ? "bg-[#0d120e] border-[#00FF87] shadow-lg"
                : "studiora-panel border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-[#00FF87] font-bold">[PROJECT 03]</span>
              <HiArrowUpRight className="text-[#00FF87]" />
            </div>
            <h4 className="text-lg font-extrabold text-white">XprCodeKids</h4>
            <p className="text-xs text-slate-400 mt-1">Gamified Python Playground</p>
          </button>
        </div>

        {/* Sandbox Panel */}
        <div className="studiora-panel p-6 sm:p-8 space-y-6 relative border-[#00FF87]/30">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-[#00FF87] font-bold">
              XPR-LAB-SANDBOX // {activeDemo.toUpperCase()}.DEMO
            </span>
            <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-[#00FF87]/10 text-[#00FF87] border border-[#00FF87]/20">
              STATUS: ONLINE
            </span>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-400">INPUT TEST PARAMETER:</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                className="flex-1 bg-[#070907] border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 font-mono focus:outline-none focus:border-[#00FF87]"
              />
              <button
                onClick={handleSimulateAI}
                disabled={isGenerating}
                className="px-6 py-3 rounded-xl bg-[#FFE600] text-[#070907] font-extrabold text-xs flex items-center gap-2 hover:bg-yellow-300 transition-all"
              >
                <FaPlay className="text-[10px]" /> Run Model
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-400">MODEL OUTPUT INFERENCE:</label>
            <div className="p-4 rounded-xl bg-[#070907] border border-white/10 font-mono text-xs text-slate-200 min-h-[130px] whitespace-pre-wrap leading-relaxed">
              {isGenerating ? "Processing Xpr AI Inference..." : aiOutput}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-mono">
              Want Xpr Technologies to engineer custom AI solutions for your company?
            </span>
            <button
              onClick={() => onOpenModal("consultation", "Custom AI Solution Request")}
              className="px-5 py-2.5 rounded-full bg-[#00FF87]/10 text-[#00FF87] hover:bg-[#00FF87]/20 border border-[#00FF87]/30 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>Partner With R&D Lab</span>
              <HiArrowUpRight />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
