"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/portfolio";

// High-fidelity custom SVG icons for each step
const STEP_ICONS: Record<string, React.ReactNode> = {
  "01": (
    <svg className="w-6 h-6 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 7.5v.008M10.5 10.5v3" />
    </svg>
  ),
  "02": (
    <svg className="w-6 h-6 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15M4.5 9h15m-15 6h15M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6z" />
    </svg>
  ),
  "03": (
    <svg className="w-6 h-6 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  "04": (
    <svg className="w-6 h-6 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  "05": (
    <svg className="w-6 h-6 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m-.12 4.8a6 6 0 01-7.38-5.84h4.8m2.58-5.84A14.98 14.98 0 008.41 9.63m5.96 5.96L8.41 9.63m0 0A14.98 14.98 0 012.25 3.47a14.98 14.98 0 0112.12 6.16" />
      <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor" />
    </svg>
  ),
};

const STEP_COLORS: Record<string, { bg: string; text: string; ring: string; badge: string }> = {
  "01": {
    bg: "bg-brand-navy",
    text: "text-white",
    ring: "ring-brand-navy/15",
    badge: "bg-brand-navy text-white",
  },
  "02": {
    bg: "bg-brand-blue",
    text: "text-white",
    ring: "ring-brand-blue/20",
    badge: "bg-brand-blue text-white",
  },
  "03": {
    bg: "bg-[#1d4ed8]",
    text: "text-white",
    ring: "ring-blue-600/20",
    badge: "bg-[#1d4ed8] text-white",
  },
  "04": {
    bg: "bg-[#059669]",
    text: "text-white",
    ring: "ring-emerald-600/20",
    badge: "bg-[#059669] text-white",
  },
  "05": {
    bg: "bg-[#d97706]",
    text: "text-white",
    ring: "ring-amber-500/20",
    badge: "bg-[#d97706] text-white",
  },
};

export const DevelopmentProcess: React.FC = () => {
  return (
    <section
      id="process"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20 overflow-hidden"
      aria-label="Development Process & Methodology"
    >
      {/* Background Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl h-56 bg-gradient-to-r from-brand-blue/[0.03] via-brand-green/[0.04] to-brand-blue/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
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
          DESKTOP: Horizontal Curved Flowing Journey Roadmap
         ================================================================= */}
      <div className="hidden lg:block relative min-h-[580px]">
        {/* Continuous Flowing Sine-Wave Road Track SVG */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none z-0">
          <svg
            className="w-full h-[220px] overflow-visible"
            viewBox="0 0 1200 220"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Outer Soft Road Glow Ribbon */}
            <path
              d="M 0 110 C 60 110, 80 40, 140 40 C 200 40, 320 180, 380 180 C 440 180, 560 40, 620 40 C 680 40, 800 180, 860 180 C 920 180, 1040 40, 1100 40 C 1140 40, 1170 110, 1200 110"
              stroke="#225DCF"
              strokeOpacity="0.12"
              strokeWidth="42"
              strokeLinecap="round"
            />
            {/* Inner Road Surface */}
            <path
              d="M 0 110 C 60 110, 80 40, 140 40 C 200 40, 320 180, 380 180 C 440 180, 560 40, 620 40 C 680 40, 800 180, 860 180 C 920 180, 1040 40, 1100 40 C 1140 40, 1170 110, 1200 110"
              stroke="#FFFFFF"
              strokeWidth="28"
              strokeLinecap="round"
            />
            {/* Road Boundary Outline */}
            <path
              d="M 0 110 C 60 110, 80 40, 140 40 C 200 40, 320 180, 380 180 C 440 180, 560 40, 620 40 C 680 40, 800 180, 860 180 C 920 180, 1040 40, 1100 40 C 1140 40, 1170 110, 1200 110"
              stroke="#225DCF"
              strokeOpacity="0.25"
              strokeWidth="30"
              strokeLinecap="round"
            />
            {/* Road Fill Surface */}
            <path
              d="M 0 110 C 60 110, 80 40, 140 40 C 200 40, 320 180, 380 180 C 440 180, 560 40, 620 40 C 680 40, 800 180, 860 180 C 920 180, 1040 40, 1100 40 C 1140 40, 1170 110, 1200 110"
              stroke="#EFF6FE"
              strokeWidth="26"
              strokeLinecap="round"
            />
            {/* Center Dashed White Guide Line */}
            <path
              d="M 0 110 C 60 110, 80 40, 140 40 C 200 40, 320 180, 380 180 C 440 180, 560 40, 620 40 C 680 40, 800 180, 860 180 C 920 180, 1040 40, 1100 40 C 1140 40, 1170 110, 1200 110"
              stroke="#225DCF"
              strokeOpacity="0.45"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 5 Process Stations Across the Flowing Path */}
        <div className="grid grid-cols-5 gap-4 relative z-10 h-full">
          {PROCESS_STEPS.map((item, idx) => {
            const isTop = idx % 2 === 0; // Steps 01, 03, 05 are on TOP crests; 02, 04 are in BOTTOM troughs
            const styling = STEP_COLORS[item.step] || STEP_COLORS["01"];

            return (
              <div
                key={item.step}
                className="flex flex-col items-center justify-between h-full group"
              >
                {/* TOP CONTENT SLOT (Active for 01, 03, 05) */}
                <div className="h-[230px] flex flex-col justify-end w-full px-1">
                  {isTop ? (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-white rounded-2xl p-4 sm:p-5 border border-brand-navy/[0.08] shadow-[0_8px_24px_-10px_rgba(37,52,82,0.08)] hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-xs font-bold text-brand-blue">
                            STEP {item.step}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                        </div>
                        <h3 className="font-sans font-bold text-base text-brand-navy mb-0.5 tracking-tight">
                          {item.title}
                        </h3>
                        <div className="text-[11px] font-semibold text-brand-blue mb-2">
                          {item.tagline}
                        </div>
                        <p className="text-[11.5px] text-brand-gray leading-relaxed mb-3">
                          {item.description}
                        </p>
                      </div>

                      {/* Deliverables tags */}
                      <div className="pt-2 border-t border-brand-navy/[0.06] flex flex-wrap gap-1">
                        {item.deliverables.map((deliv, i) => (
                          <span
                            key={i}
                            className="text-[9.5px] font-medium px-1.5 py-0.5 bg-brand-lightBg text-brand-navy/80 rounded border border-brand-navy/[0.05]"
                          >
                            {deliv}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="h-full" />
                  )}
                </div>

                {/* Center Path Spacer (Preserves exact vertical positioning and card separation) */}
                <div className="h-[72px] my-3 pointer-events-none" aria-hidden="true" />

                {/* BOTTOM CONTENT SLOT (Active for 02, 04) */}
                <div className="h-[230px] flex flex-col justify-start w-full px-1">
                  {!isTop ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-white rounded-2xl p-4 sm:p-5 border border-brand-navy/[0.08] shadow-[0_8px_24px_-10px_rgba(37,52,82,0.08)] hover:shadow-card hover:translate-y-1 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-xs font-bold text-brand-blue">
                            STEP {item.step}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                        </div>
                        <h3 className="font-sans font-bold text-base text-brand-navy mb-0.5 tracking-tight">
                          {item.title}
                        </h3>
                        <div className="text-[11px] font-semibold text-brand-blue mb-2">
                          {item.tagline}
                        </div>
                        <p className="text-[11.5px] text-brand-gray leading-relaxed mb-3">
                          {item.description}
                        </p>
                      </div>

                      {/* Deliverables tags */}
                      <div className="pt-2 border-t border-brand-navy/[0.06] flex flex-wrap gap-1">
                        {item.deliverables.map((deliv, i) => (
                          <span
                            key={i}
                            className="text-[9.5px] font-medium px-1.5 py-0.5 bg-brand-lightBg text-brand-navy/80 rounded border border-brand-navy/[0.05]"
                          >
                            {deliv}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =================================================================
          MOBILE & TABLET: Clean Vertical Journey Roadmap Timeline
         ================================================================= */}
      <div className="lg:hidden relative pl-6 sm:pl-8 space-y-8">
        {/* Vertical Connecting Guide Track */}
        <div className="absolute top-4 bottom-4 left-[27px] sm:left-[35px] w-0.5 bg-gradient-to-b from-brand-blue via-brand-green to-brand-blue/30 -z-0" />

        {PROCESS_STEPS.map((item, idx) => {
          const styling = STEP_COLORS[item.step] || STEP_COLORS["01"];

          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative flex items-start gap-4 sm:gap-6 group"
            >
              {/* Circular Node Marker */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${styling.bg} ${styling.text} border-2 border-white shadow-md flex items-center justify-center shrink-0 z-10`}
              >
                {STEP_ICONS[item.step]}
              </div>

              {/* Step Content Card */}
              <div className="flex-1 bg-white rounded-2xl p-5 sm:p-6 border border-brand-navy/[0.08] shadow-sm hover:shadow-card transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-brand-blue">
                    STEP {item.step}
                  </span>
                  <span className="text-xs font-bold text-brand-blue/70">
                    {item.tagline}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-lg text-brand-navy mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-gray leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Deliverables */}
                <div className="pt-3 border-t border-brand-navy/[0.06] flex flex-wrap gap-1.5">
                  {item.deliverables.map((deliv, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs font-medium px-2 py-0.5 bg-brand-lightBg text-brand-navy/85 rounded-md border border-brand-navy/[0.05] flex items-center gap-1"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-green" />
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DevelopmentProcess;

