"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "@/data/portfolio";

export const ExperienceTimeline: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto z-20"
      aria-label="Experience and Education Timeline"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
          Career &amp; Education
        </div>
        <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight mb-4">
          Experience &amp;{" "}
          <span className="font-serif italic font-semibold text-brand-blue">
            academic foundation.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-normal">
          Industry internship experience, advanced postgraduate computer application studies, and specialized full-stack certifications.
        </p>
      </div>

      {/* Visual Timeline Cards */}
      <div className="space-y-6 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-0.5 before:-translate-x-1/2 before:bg-brand-navy/10 before:z-0">
        {EXPERIENCE_DATA.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative z-10 flex flex-col md:flex-row items-start ${
                isEven ? "md:flex-row-reverse" : ""
              } gap-6 md:gap-12`}
            >
              {/* Timeline Center Dot Indicator */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-brand-blue shadow-sm z-20 mt-6" />

              {/* Card Container */}
              <div className="w-full md:w-1/2 pl-14 md:pl-0">
                <div
                  className={`p-6 sm:p-7 rounded-3xl bg-white border border-brand-navy/[0.08] shadow-card hover:shadow-soft transition-all duration-300 ${
                    item.type === "work"
                      ? "border-emerald-200/80 bg-gradient-to-br from-white to-emerald-50/20"
                      : item.type === "education"
                      ? "border-blue-100"
                      : "border-purple-100"
                  }`}
                >
                  {/* Tag & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        item.type === "work"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : item.type === "education"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-purple-50 text-purple-700 border border-purple-200"
                      }`}
                    >
                      {item.type === "work"
                        ? "Industry Experience"
                        : item.type === "education"
                        ? "Education"
                        : "Certification"}
                    </span>
                    <span className="text-xs font-bold text-brand-navy/70">
                      {item.duration}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="font-sans font-bold text-xl text-brand-navy mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-sm font-semibold text-brand-blue mb-1">
                    {item.organization}
                  </div>
                  {item.grade && (
                    <div className="text-xs font-bold text-emerald-700 mb-3">
                      {item.grade}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed mb-4 font-normal">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-brand-navy/[0.06]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-brand-lightBg text-brand-navy text-[11px] font-medium border border-brand-navy/[0.05]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
