"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion, Variants } from "framer-motion";

interface HighlightCard {
  id: string;
  title: string;
  description: string;
  accent: "blue" | "green";
  icon: React.ReactNode;
}

const HIGHLIGHT_CARDS: HighlightCard[] = [
  {
    id: "projects-built",
    title: "Projects Built",
    description: "Building practical web applications and digital experiences.",
    accent: "blue",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5h7.5M8.25 14.25h4.5" />
      </svg>
    ),
  },
  {
    id: "skill-evolution",
    title: "Skill Evolution",
    description: "Continuously learning and improving with modern technologies.",
    accent: "green",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5 8.25-8.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h5.25v5.25" />
      </svg>
    ),
  },
  {
    id: "clean-code",
    title: "Clean Code",
    description: "Writing structured, maintainable, and scalable solutions.",
    accent: "blue",
    icon: (
      <svg className="w-10 h-5 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    id: "performance-first",
    title: "Performance First",
    description: "Focusing on speed, efficiency, and better user experiences.",
    accent: "green",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    description: "Creating seamless experiences across every screen size.",
    accent: "blue",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    id: "seo-optimized",
    title: "SEO Optimized",
    description: "Building websites with structure, visibility, and discoverability in mind.",
    accent: "green",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
      </svg>
    ),
  },
];

export const ProfessionalHighlights: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="highlights"
      ref={containerRef}
      className="relative py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20"
      aria-label="Professional Principles & Highlights"
    >
      {/* Single Horizontal Row on Desktop (lg:grid-cols-6) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4"
      >
        {HIGHLIGHT_CARDS.map((card) => {
          const isGreen = card.accent === "green";

          return (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative bg-white rounded-2xl p-5 border border-brand-navy/[0.08] shadow-[0_4px_20px_-8px_rgba(37,52,82,0.04)] hover:shadow-[0_16px_36px_-12px_rgba(37,52,82,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
            >
              {/* Subtle top/bottom accent indicator */}
              <div
                className={`absolute top-0 left-4 right-4 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isGreen ? "bg-brand-green" : "bg-brand-blue"
                }`}
              />

              <div>
                {/* Top Row: Minimal Icon (without numerical index) */}
                <div className="flex items-center justify-start mb-4">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isGreen
                        ? "bg-emerald-50 text-emerald-700 group-hover:bg-brand-green group-hover:text-brand-navy"
                        : "bg-blue-50 text-brand-blue group-hover:bg-brand-blue group-hover:text-white"
                    }`}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {card.icon}
                    </div>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-sans font-bold text-base text-brand-navy mb-2 tracking-tight transition-colors duration-200 group-hover:text-brand-navy">
                  {card.title}
                </h3>

                {/* Supporting Description */}
                <p className="text-xs sm:text-sm text-brand-gray leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Bottom Subtle Micro Accent */}
              <div className="mt-4 pt-3 border-t border-brand-navy/[0.04] flex items-center justify-end text-xs text-brand-gray/50">
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isGreen
                      ? "bg-brand-navy/20 group-hover:bg-brand-green group-hover:scale-125"
                      : "bg-brand-navy/20 group-hover:bg-brand-blue group-hover:scale-125"
                  }`}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProfessionalHighlights;


