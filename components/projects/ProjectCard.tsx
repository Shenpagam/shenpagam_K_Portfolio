"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectItem } from "@/data/portfolio";

export const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({
  project,
  index,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-3xl bg-white border transition-all duration-300 overflow-hidden ${
        project.category === "Featured"
          ? "border-blue-100 shadow-[0_12px_40px_-10px_rgba(34,93,207,0.12)] hover:shadow-blueGlow"
          : project.category === "Professional"
          ? "border-brand-navy/[0.1] shadow-card bg-white/95"
          : project.category === "Components"
          ? "border-emerald-200/80 shadow-card bg-white/95"
          : "border-brand-navy/[0.08] shadow-sm hover:shadow-soft"
      }`}
    >
      <div className="p-6 sm:p-8">
        {/* Top Badges & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
              project.category === "Professional"
                ? "bg-amber-50 text-amber-800 border border-amber-200"
                : project.category === "Featured"
                ? "bg-brand-blue/10 text-brand-blue border border-brand-blue/20"
                : project.category === "Components"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-brand-lightBg text-brand-navy border border-brand-navy/10"
            }`}
          >
            {project.badge}
          </span>

          <span className="text-xs font-semibold text-brand-gray">
            {project.role}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-brand-navy tracking-tight mb-2">
          {project.title}
        </h3>
        <div className="text-xs sm:text-sm font-semibold text-brand-blue mb-4">
          {project.subtitle}
        </div>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-brand-navy/80 leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Technologies Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-brand-lightBg text-brand-navy text-xs font-semibold border border-brand-navy/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable Case Study Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-6 border-t border-brand-navy/10 space-y-4 mb-6 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-brand-lightBg/70 border border-brand-navy/[0.06]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    Problem / Context
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Solution / Implementation
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-brand-navy/[0.08]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                  Key Features &amp; Architecture:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-navy/85">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand-blue font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-brand-navy/[0.06]">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="text-xs sm:text-sm font-semibold text-brand-blue hover:text-brand-blueHover flex items-center gap-1.5 transition-colors"
          >
            <span>{isExpanded ? "Hide Case Study" : "View Case Study Details"}</span>
            <span className="text-base">{isExpanded ? "↑" : "↓"}</span>
          </button>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-navy hover:bg-brand-blue text-white text-xs font-semibold shadow-sm transition-all duration-200"
              >
                <span>Live Demo</span>
                <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-2" viewBox="0 0 16 16">
                  <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}

            {project.isConfidential && (
              <span className="text-xs font-medium text-brand-gray italic">
                Internal Confidential System
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
