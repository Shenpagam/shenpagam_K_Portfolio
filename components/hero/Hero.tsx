"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ReactIcon,
  NodeIcon,
  MongoIcon,
  WordPressIcon,
  SeoIcon,
  ExpressIcon,
} from "./TechIcons";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 flex flex-col justify-center items-center bg-gradient-to-b from-[#EFF6FE] via-[#EFF6FE]/80 to-[#FFFFFF] overflow-hidden"
      aria-label="Introduction and Overview"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-b from-brand-blue/[0.05] via-brand-green/[0.04] to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      {/* =================================================================
          1. Small Top Professional Badge
         ================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-20 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-brand-navy/[0.08] shadow-sm mb-6 sm:mb-8"
      >
        <span
          className="w-2 h-2 rounded-full bg-brand-green live-indicator"
          aria-hidden="true"
        />
        <span className="text-xs font-semibold tracking-wider uppercase text-brand-navy">
          Full-stack development, modern web & digital work
        </span>
      </motion.div>

      {/* =================================================================
          2. Hero Orbit & Headline Center Container
         ================================================================= */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
        {/* SVG Circular Orbit Ring with Glowing Nodes (Desktop & Tablet) */}
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none select-none">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 900 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main Elliptical Orbit Track */}
            <ellipse
              cx="450"
              cy="260"
              rx="390"
              ry="230"
              stroke="#225DCF"
              strokeOpacity="0.18"
              strokeWidth="1.5"
              strokeDasharray="5 7"
            />

            {/* Orbit Glowing Connection Dots */}
            <circle cx="210" cy="90" r="4.5" fill="#225DCF" fillOpacity="0.7" />
            <circle cx="210" cy="90" r="10" stroke="#225DCF" strokeOpacity="0.2" strokeWidth="1" />

            <circle cx="690" cy="90" r="4.5" fill="#225DCF" fillOpacity="0.7" />
            <circle cx="690" cy="90" r="10" stroke="#225DCF" strokeOpacity="0.2" strokeWidth="1" />

            <circle cx="80" cy="260" r="5" fill="#2DDE98" />
            <circle cx="80" cy="260" r="12" stroke="#2DDE98" strokeOpacity="0.3" strokeWidth="1" />

            <circle cx="820" cy="260" r="5" fill="#2DDE98" />
            <circle cx="820" cy="260" r="12" stroke="#2DDE98" strokeOpacity="0.3" strokeWidth="1" />

            <circle cx="90" cy="390" r="4" fill="#225DCF" fillOpacity="0.6" />
            <circle cx="810" cy="390" r="4" fill="#225DCF" fillOpacity="0.6" />
          </svg>
        </div>

        {/* 6 Precise Floating Tech Cards along Orbit (Desktop / Tablet) */}
        {/* Node 1: Top-Left -> React */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex flex-col items-center gap-1.5 absolute left-[8%] lg:left-[10%] top-[12%] z-20"
        >
          <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_8px_24px_-4px_rgba(37,52,82,0.1)] border border-brand-navy/[0.08] flex items-center justify-center p-3 hover:scale-110 hover:shadow-blueGlow transition-all duration-300 cursor-pointer">
            <ReactIcon className="w-9 h-9" />
          </div>
          <span className="text-[11px] font-bold text-brand-navy tracking-tight">React</span>
        </motion.div>

        {/* Node 2: Middle-Left -> Node.js */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex flex-col items-center gap-1.5 absolute left-[0%] lg:left-[3%] top-[48%] z-20"
        >
          <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_8px_24px_-4px_rgba(37,52,82,0.1)] border border-brand-navy/[0.08] flex items-center justify-center p-3 hover:scale-110 hover:shadow-glow transition-all duration-300 cursor-pointer">
            <NodeIcon className="w-9 h-9" />
          </div>
          <span className="text-[11px] font-bold text-brand-navy tracking-tight">Node.js</span>
        </motion.div>

        {/* Node 3: Bottom-Left -> MongoDB */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:flex flex-col items-center gap-1.5 absolute left-[12%] lg:left-[14%] bottom-[2%] z-20"
        >
          <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_8px_24px_-4px_rgba(37,52,82,0.1)] border border-brand-navy/[0.08] flex items-center justify-center p-3 hover:scale-110 hover:shadow-glow transition-all duration-300 cursor-pointer">
            <MongoIcon className="w-8 h-8" />
          </div>
          <span className="text-[11px] font-bold text-brand-navy tracking-tight">MongoDB</span>
        </motion.div>

        {/* Node 4: Top-Right -> WordPress */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="hidden md:flex flex-col items-center gap-1.5 absolute right-[8%] lg:right-[10%] top-[12%] z-20"
        >
          <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_8px_24px_-4px_rgba(37,52,82,0.1)] border border-brand-navy/[0.08] flex items-center justify-center p-3 hover:scale-110 hover:shadow-blueGlow transition-all duration-300 cursor-pointer">
            <WordPressIcon className="w-9 h-9" />
          </div>
          <span className="text-[11px] font-bold text-brand-navy tracking-tight">WordPress</span>
        </motion.div>

        {/* Node 5: Middle-Right -> SEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="hidden md:flex flex-col items-center gap-1.5 absolute right-[0%] lg:right-[3%] top-[48%] z-20"
        >
          <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_8px_24px_-4px_rgba(37,52,82,0.1)] border border-brand-navy/[0.08] flex items-center justify-center p-3 hover:scale-110 hover:shadow-glow transition-all duration-300 cursor-pointer">
            <SeoIcon className="w-8 h-8" />
          </div>
          <span className="text-[11px] font-bold text-brand-navy tracking-tight">SEO</span>
        </motion.div>

        {/* Node 6: Bottom-Right -> Express.js */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="hidden md:flex flex-col items-center gap-1.5 absolute right-[12%] lg:right-[14%] bottom-[2%] z-20"
        >
          <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_8px_24px_-4px_rgba(37,52,82,0.1)] border border-brand-navy/[0.08] flex items-center justify-center p-3 hover:scale-110 hover:shadow-card transition-all duration-300 cursor-pointer">
            <ExpressIcon className="w-9 h-9" />
          </div>
          <span className="text-[11px] font-bold text-brand-navy tracking-tight">Express.js</span>
        </motion.div>

        {/* ===============================================================
            Central Main Headline & Description & Action Buttons
           =============================================================== */}
        <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center py-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-[3.85rem] text-brand-navy tracking-tight leading-[1.12] mb-5"
          >
            Full-stack web <br />
             developer<br />
               <span className="font-serif italic font-semibold text-brand-blue relative inline-block tracking-tight">
              building modern, practical web experiences.
              {/* Green Curved Brush Stroke SVG Underneath */}
              <svg
                className="absolute -bottom-2.5 left-0 w-full h-3 overflow-visible pointer-events-none"
                viewBox="0 0 280 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 2 8 C 80 2, 200 2, 278 8 C 220 11, 100 11, 2 8 Z"
                  fill="#2DDE98"
                  fillOpacity="0.75"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base text-brand-gray leading-relaxed max-w-lg mb-8 font-normal"
          >
           I build full-stack web applications using the MERN stack, and work with modern tools like Next.js to create responsive, component-based interfaces. I'm also developing experience in WordPress and SEO, adding a practical, discoverability-focused layer to the websites I build.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue hover:bg-brand-blueHover text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-blueGlow transition-all duration-260 ease-out active:scale-[0.98]"
            >
              <span>Explore Projects</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-current fill-none stroke-[2.2]"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-brand-lightBg text-brand-navy hover:text-brand-blue font-semibold text-sm rounded-xl border border-brand-navy/15 hover:border-brand-blue/40 shadow-sm transition-all duration-200 ease-out active:scale-[0.98]"
            >
              <span>Let&apos;s Talk</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-current fill-none stroke-[2.2]"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile Tech Badges Row (Below 768px) */}
      <div className="md:hidden mt-8 flex flex-wrap items-center justify-center gap-2.5 max-w-sm mx-auto px-4 z-20">
        {[
          { label: "React", icon: <ReactIcon className="w-5 h-5" /> },
          { label: "Node.js", icon: <NodeIcon className="w-5 h-5" /> },
          { label: "MongoDB", icon: <MongoIcon className="w-5 h-5" /> },
          { label: "WordPress", icon: <WordPressIcon className="w-5 h-5" /> },
          { label: "SEO", icon: <SeoIcon className="w-5 h-5" /> },
          { label: "Express.js", icon: <ExpressIcon className="w-5 h-5" /> },
        ].map((tech) => (
          <div
            key={tech.label}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white shadow-sm border border-brand-navy/[0.08]"
          >
            {tech.icon}
            <span className="text-xs font-semibold text-brand-navy">{tech.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
