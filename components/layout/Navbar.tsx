"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND_DATA, NAV_ITEMS, type NavItem } from "@/data/portfolio";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  // Global ScrollSpy: Update active navigation tab dynamically as user scrolls
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    // Viewport IntersectionObserver
    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (window.scrollY < 80) {
        setActiveSection("home");
        return;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        const lastItem = sectionIds[sectionIds.length - 1];
        setActiveSection(lastItem);
        return;
      }

      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        visibleEntries.sort((a, b) => {
          const aDist = Math.abs(a.boundingClientRect.top - 120);
          const bDist = Math.abs(b.boundingClientRect.top - 120);
          return aDist - bDist;
        });

        const activeId = visibleEntries[0].target.id;
        setActiveSection(activeId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-100px 0px -40% 0px",
      threshold: [0, 0.15, 0.3, 0.5, 0.7, 1.0],
    });

    sectionElements.forEach((el) => observer.observe(el));

    // Fallback scroll listener for continuous, smooth updates across all scroll modes
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      if (scrollY < 80) {
        setActiveSection("home");
        return;
      }

      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
        const lastItem = sectionIds[sectionIds.length - 1];
        setActiveSection(lastItem);
        return;
      }

      const readingLine = scrollY + 160;
      let currentSection = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const elementTopDoc = el.getBoundingClientRect().top + scrollY;
          if (readingLine >= elementTopDoc) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobile = useCallback(() => setIsMobileOpen((prev) => !prev), []);
  const closeMobile = useCallback(() => setIsMobileOpen(false), []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    closeMobile();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300" role="banner">
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-brand-navy/10 shadow-soft py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* ===============================================================
              CHANGE 1 — LEFT: Uploaded Official Personal Logo + Name + Live Availability
             =============================================================== */}
          <Link
            href="/"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3.5 group rounded-xl focus-visible:ring-2 focus-visible:ring-brand-blue p-1"
            aria-label={`${BRAND_DATA.name} - Homepage`}
          >
            {/* Official Personal Logo */}
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-105 bg-brand-navy shrink-0">
              <Image
                src="/logo.jpg"
                alt="Shenpagam K Logo"
                fill
                sizes="44px"
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-sans font-bold text-[1.05rem] text-brand-navy tracking-tight group-hover:text-brand-blue transition-colors leading-tight">
                {BRAND_DATA.name}
              </span>

              <div className="flex items-center gap-1.5 mt-0.5" title={BRAND_DATA.statusText}>
                <span className="w-2 h-2 rounded-full bg-brand-green live-indicator" aria-hidden="true" />
                <span className="text-[11.5px] font-medium text-brand-gray tracking-normal">
                  {BRAND_DATA.statusText}
                </span>
              </div>
            </div>
          </Link>

          {/* ===============================================================
              CENTER: Tabs Variant 2 Style Navigation Menu UI (Unchanged)
             =============================================================== */}
          <nav className="hidden lg:flex items-center" aria-label="Main Navigation">
            <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-brand-navy/[0.08] shadow-sm">
              <ul className="flex items-center gap-1 list-none m-0 p-0">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id} className="relative">
                      <a
                        href={item.href}
                        onClick={() => handleNavClick(item.id)}
                        className={`relative z-10 px-4 py-2 text-[0.875rem] font-semibold transition-colors duration-200 block rounded-full select-none ${
                          isActive
                            ? "text-white"
                            : "text-brand-navy/75 hover:text-brand-navy hover:bg-brand-navy/[0.04]"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </a>

                      {/* Variant 2 Active Solid Blue Rounded Pill Indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="variant2ActivePill"
                          className="absolute inset-0 bg-brand-blue rounded-full shadow-sm z-0"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* ===============================================================
              RIGHT: CTA Button (Let's Talk ↗) (Unchanged)
             =============================================================== */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-navy hover:bg-brand-blue text-white font-medium text-[0.925rem] rounded-xl shadow-sm hover:shadow-blueGlow transition-all duration-260 ease-out active:scale-[0.98]"
              aria-label="Let's Talk - Contact Shenpagam K"
            >
              <span>Let&apos;s Talk</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-current fill-none stroke-[2.2]"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* ===============================================================
              MOBILE: Hamburger Toggle Button
             =============================================================== */}
          <button
            type="button"
            onClick={toggleMobile}
            className="lg:hidden p-2.5 rounded-xl bg-white border border-brand-navy/10 text-brand-navy hover:bg-brand-lightBg focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors"
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-5 h-4 flex flex-col justify-between" aria-hidden="true">
              <span
                className={`h-0.5 w-full bg-brand-navy rounded-full transition-all duration-300 origin-center ${
                  isMobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-brand-navy rounded-full transition-all duration-200 ${
                  isMobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-brand-navy rounded-full transition-all duration-300 origin-center ${
                  isMobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ===============================================================
          Mobile Drawer & Backdrop
         =============================================================== */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              className="lg:hidden fixed inset-0 bg-brand-navy/30 backdrop-blur-sm z-40"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden fixed top-20 left-4 right-4 max-w-md mx-auto bg-white rounded-2xl border border-brand-navy/10 shadow-card p-5 z-50 overflow-hidden"
              role="dialog"
              aria-modal="true"
            >
              <ul className="flex flex-col gap-1.5 list-none">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        onClick={() => handleNavClick(item.id)}
                        className={`flex items-center justify-between px-4 py-3 rounded-full text-base font-semibold transition-colors ${
                          isActive
                            ? "bg-brand-blue text-white"
                            : "text-brand-navy hover:bg-brand-lightBg hover:text-brand-blue"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-white text-brand-blue font-bold">
                            Active
                          </span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="h-px bg-brand-navy/10 my-4" />

              <a
                href="#contact"
                onClick={closeMobile}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand-navy hover:bg-brand-blue text-white font-semibold rounded-xl shadow-sm transition-colors text-center"
              >
                <span>Let&apos;s Talk</span>
                <svg className="w-4 h-4 stroke-current fill-none stroke-[2.2]" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
