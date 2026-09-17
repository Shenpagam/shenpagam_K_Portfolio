"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROCESS_STEPS } from "@/data/portfolio";
import {
  Check,
  Search,
  Layers,
  Code2,
  Gauge,
  Rocket,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// Icons tailored to each development step
const STEP_ICONS: Record<string, React.ReactNode> = {
  "01": <Search className="w-5 h-5 stroke-[2]" />,
  "02": <Layers className="w-5 h-5 stroke-[2]" />,
  "03": <Code2 className="w-5 h-5 stroke-[2]" />,
  "04": <Gauge className="w-5 h-5 stroke-[2]" />,
  "05": <Rocket className="w-5 h-5 stroke-[2]" />,
};

// Subtle themed color accents for each stage
const STEP_THEMES: Record<
  string,
  {
    badge: string;
    iconBg: string;
    iconColor: string;
    border: string;
    glow: string;
    accent: string;
  }
> = {
  "01": {
    badge: "bg-blue-50 text-brand-blue border-brand-blue/20",
    iconBg: "bg-brand-blue/10 text-brand-blue",
    iconColor: "text-brand-blue",
    border: "border-brand-blue/30",
    glow: "rgba(34, 93, 207, 0.15)",
    accent: "from-blue-600 to-indigo-600",
  },
  "02": {
    badge: "bg-sky-50 text-sky-600 border-sky-600/20",
    iconBg: "bg-sky-500/10 text-sky-600",
    iconColor: "text-sky-600",
    border: "border-sky-500/30",
    glow: "rgba(14, 165, 233, 0.15)",
    accent: "from-sky-500 to-blue-600",
  },
  "03": {
    badge: "bg-indigo-50 text-indigo-600 border-indigo-600/20",
    iconBg: "bg-indigo-500/10 text-indigo-600",
    iconColor: "text-indigo-600",
    border: "border-indigo-500/30",
    glow: "rgba(99, 102, 241, 0.15)",
    accent: "from-indigo-600 to-violet-600",
  },
  "04": {
    badge: "bg-emerald-50 text-emerald-600 border-emerald-600/20",
    iconBg: "bg-emerald-500/10 text-emerald-600",
    iconColor: "text-emerald-600",
    border: "border-emerald-500/30",
    glow: "rgba(16, 185, 129, 0.15)",
    accent: "from-emerald-500 to-teal-600",
  },
  "05": {
    badge: "bg-amber-50 text-amber-600 border-amber-600/20",
    iconBg: "bg-amber-500/10 text-amber-600",
    iconColor: "text-amber-600",
    border: "border-amber-500/30",
    glow: "rgba(245, 158, 11, 0.15)",
    accent: "from-amber-500 to-orange-600",
  },
};

export const DevelopmentProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = PROCESS_STEPS[activeStepIndex] || PROCESS_STEPS[0];
  const activeTheme = STEP_THEMES[activeStep.step] || STEP_THEMES["01"];

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1));
  };

  return (
    <section
      id="process"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20 overflow-hidden scroll-mt-24"
      aria-label="Development Process & Methodology"
    >
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-5xl h-80 bg-gradient-to-r from-brand-blue/[0.04] via-brand-green/[0.05] to-brand-blue/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
          Work Methodology
        </div>
        <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight mb-4">
          How I approach{" "}
          <span className="font-serif italic font-semibold text-brand-blue">
            building projects.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-normal">
          A disciplined, step-by-step development process from requirements to production deployment.
        </p>
      </div>

      {/* =================================================================
          STEPPER NAVIGATION BAR (Directly inspired by Modern Stepper UX)
         ================================================================= */}
      <div className="mb-12 max-w-5xl mx-auto">
        {/* Desktop Stepper Track */}
        <div className="hidden md:block relative">
          {/* Base Guide Rail */}
          <div className="absolute top-8 left-[10%] right-[10%] h-1 bg-slate-200/80 rounded-full -z-0" />

          {/* Active Filled Progress Rail */}
          <div
            className="absolute top-8 left-[10%] h-1 bg-gradient-to-r from-brand-blue via-[#225DCF] to-brand-green rounded-full transition-all duration-500 ease-out -z-0"
            style={{
              width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 80}%`,
            }}
          />

          {/* Stepper Interactive Nodes */}
          <div className="relative z-10 grid grid-cols-5 gap-2">
            {PROCESS_STEPS.map((item, idx) => {
              const isCompleted = idx < activeStepIndex;
              const isActive = idx === activeStepIndex;

              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className="group flex flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-xl p-2 transition-all duration-200 cursor-pointer"
                  aria-label={`Step ${item.step}: ${item.title}`}
                >
                  {/* Circle Badge Node */}
                  <div className="relative mb-3 flex items-center justify-center">
                    {/* Node Shape */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        isCompleted
                          ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                          : isActive
                          ? "bg-brand-blue text-white ring-4 ring-brand-blue/25 shadow-lg shadow-brand-blue/30 scale-110"
                          : "bg-white text-slate-400 border-2 border-slate-200 group-hover:border-brand-blue/40 group-hover:text-brand-navy shadow-sm"
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        <span>{item.step}</span>
                      )}
                    </div>

                    {/* Active Pulsing Ring */}
                    {isActive && (
                      <span className="absolute -inset-1 rounded-full border border-brand-blue/40 animate-ping pointer-events-none" />
                    )}
                  </div>

                  {/* Step Title */}
                  <span
                    className={`font-sans text-sm font-bold tracking-tight transition-colors duration-200 ${
                      isActive
                        ? "text-brand-navy"
                        : isCompleted
                        ? "text-brand-navy/90"
                        : "text-slate-400 group-hover:text-brand-navy/80"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Support Text / Tagline */}
                  <span
                    className={`text-[11px] leading-tight line-clamp-1 max-w-[130px] mt-0.5 transition-colors duration-200 ${
                      isActive
                        ? "text-brand-blue font-medium"
                        : "text-slate-400 group-hover:text-slate-500"
                    }`}
                  >
                    {item.tagline.split("&")[0].trim()}
                  </span>

                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Horizontal Stepper Pill Bar */}
        <div className="block md:hidden">
          <div className="flex items-center justify-between gap-1 overflow-x-auto pb-2 scrollbar-none">
            {PROCESS_STEPS.map((item, idx) => {
              const isCompleted = idx < activeStepIndex;
              const isActive = idx === activeStepIndex;

              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex-1 min-w-[62px] py-2 px-1 rounded-xl text-center border flex flex-col items-center gap-1 transition-all ${
                    isActive
                      ? "bg-brand-blue text-white border-brand-blue shadow-md"
                      : isCompleted
                      ? "bg-blue-50/70 text-brand-blue border-brand-blue/20"
                      : "bg-white text-slate-400 border-slate-200"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                      isActive
                        ? "bg-white text-brand-blue"
                        : isCompleted
                        ? "bg-brand-blue text-white"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> : item.step}
                  </div>
                  <span className="text-[11px] font-bold tracking-tight truncate max-w-full">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =================================================================
          INTERACTIVE SPOTLIGHT SHOWCASE CARD (Active Stage Details)
         ================================================================= */}
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 12, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.99 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border border-brand-navy/[0.08] shadow-[0_12px_40px_-12px_rgba(37,52,82,0.08)] relative overflow-hidden"
          >
            {/* Top Right Decorative Watermark Step Number */}
            <div className="absolute top-2 right-6 sm:right-10 text-[7rem] sm:text-[9rem] font-black text-slate-100/70 select-none pointer-events-none -z-0 leading-none">
              {activeStep.step}
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Stage Identity & Narrative Description */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${activeTheme.badge}`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      STAGE {activeStep.step} OF 05
                    </span>

                    <span className="text-xs font-semibold text-slate-400">
                      • {activeStep.tagline}
                    </span>
                  </div>

                  {/* Main Title with Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${activeTheme.iconBg}`}
                    >
                      {STEP_ICONS[activeStep.step]}
                    </div>
                    <div>
                      <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-brand-navy tracking-tight">
                        {activeStep.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-brand-blue">
                        {activeStep.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4 max-w-xl">
                    {activeStep.description}
                  </p>
                </div>

                {/* Navigation Controls Bar */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand-navy hover:border-slate-300 transition-all cursor-pointer shadow-xs"
                      aria-label="Previous step"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Previous
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-blue text-white text-xs font-semibold hover:bg-brand-blueHover shadow-sm shadow-brand-blue/25 transition-all cursor-pointer"
                      aria-label="Next step"
                    >
                      Next Step
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex items-center gap-1.5">
                    {PROCESS_STEPS.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveStepIndex(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === activeStepIndex
                            ? "w-6 bg-brand-blue"
                            : "w-2 bg-slate-200 hover:bg-slate-300"
                        }`}
                        aria-label={`Jump to step ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Deliverables & Concrete Artifacts Panel */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-50/90 to-blue-50/40 rounded-2xl p-5 sm:p-6 border border-slate-200/70">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-green" />
                    Key Deliverables
                  </span>
                  <span className="text-[11px] font-semibold text-brand-blue bg-white px-2 py-0.5 rounded-md border border-brand-blue/15 shadow-2xs">
                    Phase Output
                  </span>
                </div>

                <div className="space-y-2.5">
                  {activeStep.deliverables.map((deliverable, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs hover:border-brand-blue/30 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-sans text-xs sm:text-sm font-semibold text-brand-navy">
                        {deliverable}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quality Assurance Note */}
                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11.5px] text-slate-500">
                  <span>Standard Quality Check</span>
                  <span className="font-medium text-brand-navy">100% Verified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
