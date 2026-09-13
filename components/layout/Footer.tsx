import React from "react";
import Link from "next/link";
import { BRAND_DATA, NAV_ITEMS } from "@/data/portfolio";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-navy/10 bg-white py-12 sm:py-16" role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-brand-navy/10">
          {/* Brand Identity & SK Monogram */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-navy to-brand-navyDark text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-sm border border-brand-navy/20">
              {BRAND_DATA.initials}
            </div>
            <div>
              <div className="font-bold text-base text-brand-navy">{BRAND_DATA.name}</div>
              <div className="text-xs text-brand-gray">{BRAND_DATA.role} — MERN, Next.js, WordPress &amp; SEO</div>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs sm:text-sm font-medium text-brand-navy/80">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="hover:text-brand-blue transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BRAND_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-blue transition-colors font-semibold"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Copyright & Mission Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-gray">
          <div>
            © {new Date().getFullYear()} {BRAND_DATA.name}. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            Built with curiosity and modern web technologies.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
