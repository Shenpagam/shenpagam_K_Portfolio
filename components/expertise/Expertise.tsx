"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EXPERTISE_DATA } from "@/data/portfolio";

export const Expertise: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(EXPERTISE_DATA[0].id);

  // Reliable IntersectionObserver and viewport scroll-spy
  useEffect(() => {
    const sectionElements = EXPERTISE_DATA.map((cat) =>
      document.getElementById(`expertise-${cat.id}`)
    ).filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    // Viewport IntersectionObserver with reading zone margins
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // Sort by distance to the 120px optimal reading line below navbar
        visibleEntries.sort((a, b) => {
          const aDist = Math.abs(a.boundingClientRect.top - 120);
          const bDist = Math.abs(b.boundingClientRect.top - 120);
          return aDist - bDist;
        });

        const matchedId = visibleEntries[0].target.id.replace("expertise-", "");
        setActiveId(matchedId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-110px 0px -40% 0px",
      threshold: [0, 0.15, 0.3, 0.5, 0.7, 1.0],
    });

    sectionElements.forEach((el) => observer.observe(el));

    // Fallback scroll listener for rapid scroll tracking
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const targetReadingLine = scrollY + 160;

      let currentId = EXPERTISE_DATA[0].id;
      for (const cat of EXPERTISE_DATA) {
        const el = document.getElementById(`expertise-${cat.id}`);
        if (el) {
          const elementTopDoc = el.getBoundingClientRect().top + scrollY;
          if (targetReadingLine >= elementTopDoc) {
            currentId = cat.id;
          }
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveId(id);

    const el = document.getElementById(`expertise-${id}`);
    if (el) {
      const navOffset = 100;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="expertise"
      className="relative py-20 sm:py-28 px-5 sm:px-8 max-w-6xl mx-auto z-20"
      aria-label="Technical Expertise and Capabilities"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
          Technical Expertise
        </div>
        <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight mb-4">
          Practical skills,{" "}
          <span className="font-serif italic font-semibold text-brand-blue">
            applied in production.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-normal">
          A balanced skill set spanning full-stack development, modern web architectures, WordPress, and SEO — built through real projects and practical application.
        </p>
      </div>

      {/* Two-Column Feature Scroll Layout: Left Content + Right Sticky Navigation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* ===============================================================
            LEFT SIDE: Expertise Content & Main Content Cards (Normal Document Flow)
           =============================================================== */}
        <div className="lg:col-span-8 space-y-8 sm:space-y-10">
          {EXPERTISE_DATA.map((cat, idx) => (
            <div
              key={cat.id}
              id={`expertise-${cat.id}`}
              className="scroll-mt-28 bg-white rounded-3xl border border-brand-navy/[0.08] shadow-card p-6 sm:p-9 transition-all duration-300"
            >
              {/* Card Header: Tagline, Level & Title */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-navy/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                      {cat.tagline}
                    </span>
                    <span className="text-brand-navy/20">•</span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        cat.level === "Foundation"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : cat.level === "Active Focus"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-purple-50 text-purple-700 border border-purple-200"
                      }`}
                    >
                      {cat.level}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Technologies Pills */}
                <div className="flex flex-wrap gap-1.5 max-w-md">
                  {cat.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-brand-lightBg text-brand-navy text-xs font-semibold border border-brand-navy/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-brand-navy/80 leading-relaxed my-6 font-normal">
                {cat.description}
              </p>

              {/* Two Columns: What I Do vs What I Can Build */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                {/* What I Do */}
                <div className="p-5 rounded-2xl bg-brand-lightBg/60 border border-brand-navy/[0.06]">
                  <h4 className="font-sans font-bold text-sm text-brand-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-blue" />
                    What I Do
                  </h4>
                  <ul className="space-y-2.5">
                    {cat.whatIDo.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-navy/85">
                        <span className="text-brand-blue font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What I Can Build */}
                <div className="p-5 rounded-2xl bg-white border border-brand-navy/[0.08] shadow-sm">
                  <h4 className="font-sans font-bold text-sm text-brand-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-green" />
                    What I Can Build
                  </h4>
                  <ul className="space-y-2.5">
                    {cat.whatICanBuild.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-navy/85">
                        <span className="text-brand-green font-bold mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===============================================================
            RIGHT SIDE: Sticky Navigation (Right Column on Desktop)
           =============================================================== */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-brand-navy/[0.08] shadow-card p-4 sm:p-5">
            <div className="flex items-center justify-between px-3 py-2 mb-2 border-b border-brand-navy/[0.06]">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60">
                Expertise Navigation
              </span>
              <span className="text-[11px] font-mono text-brand-blue font-semibold">
                {EXPERTISE_DATA.findIndex((c) => c.id === activeId) + 1} / {EXPERTISE_DATA.length}
              </span>
            </div>

            <nav className="space-y-1.5" aria-label="Expertise section navigation">
              {EXPERTISE_DATA.map((cat, idx) => {
                const isActive = activeId === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleNavClick(cat.id)}
                    className={`w-full text-left px-3.5 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                      isActive
                        ? "bg-brand-blue/10 text-brand-blue font-bold shadow-xs border-l-4 border-brand-blue"
                        : "text-brand-navy/75 font-medium hover:bg-brand-lightBg hover:text-brand-navy border-l-4 border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-200 shrink-0 ${
                          isActive ? "bg-brand-blue scale-125" : "bg-brand-navy/20 group-hover:bg-brand-navy/50"
                        }`}
                      />
                      <span className="text-xs sm:text-sm tracking-tight truncate">
                        {cat.title}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono shrink-0 transition-opacity ${
                        isActive ? "text-brand-blue font-bold opacity-100" : "text-brand-navy/40 opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
