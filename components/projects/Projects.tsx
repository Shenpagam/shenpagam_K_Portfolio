"use client";

import React, { useState } from "react";
import { PROJECTS_DATA, type ProjectItem } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"All" | "Featured" | "Professional" | "Components" | "Other">("All");

  const filteredProjects =
    filter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 px-5 sm:px-8 max-w-6xl mx-auto z-20"
      aria-label="Selected Projects and Case Studies"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
          Featured Work
        </div>
        <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight mb-4">
          Selected projects,{" "}
          <span className="font-serif italic font-semibold text-brand-blue">
            built with purpose.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-normal">
          A mix of professional workflow systems and personal full-stack applications — built, tested, and shipped.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {(["All", "Featured", "Professional", "Components", "Other"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              filter === tab
                ? "bg-brand-navy text-white shadow-md"
                : "bg-white text-brand-navy/80 hover:bg-brand-lightBg hover:text-brand-blue border border-brand-navy/[0.08]"
            }`}
          >
            {tab === "All"
              ? "All Projects"
              : tab === "Featured"
              ? "Featured Personal"
              : tab === "Professional"
              ? "Professional / Internal"
              : tab === "Components"
              ? "Reusable Components"
              : "Other Projects"}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
