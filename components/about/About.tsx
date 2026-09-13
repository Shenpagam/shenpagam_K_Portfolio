"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 px-5 sm:px-8 max-w-6xl mx-auto z-20"
      aria-label="About Shenpagam K"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        {/* ===============================================================
            Left Column: Real Portrait Image & Personal Monogram Badge (Sticky)
           =============================================================== */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center lg:items-start"
          >
            {/* Section Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-semibold uppercase tracking-wider text-brand-blue mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              About Me
            </div>

            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight mb-6 text-center lg:text-left">
              Background &amp;{" "}
              <span className="font-serif italic font-semibold text-brand-blue">
                direction.
              </span>
            </h2>

            {/* Profile Image Card */}
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden shadow-card border-2 border-white bg-white group">
              <Image
                src="/profile.jpg"
                alt="Shenpagam K, full-stack web developer"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                priority
              />
              {/* Subtle Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-60" />

              {/* Bottom floating badge on image */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-md flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-brand-navy">Shenpagam K</div>
                  <div className="text-[11px] text-brand-gray font-medium">Full-Stack Web Developer</div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-xs">
                  SK
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===============================================================
            Right Column: Professional Narrative & Facts Grid
           =============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 flex flex-col"
        >
          <div className="space-y-4 text-base sm:text-lg text-brand-navy/85 leading-relaxed font-normal">
            <p>
              I&apos;m Shenpagam K, a MCA graduate and Full-Stack Web Developer with a strong foundation in the MERN Stack, modern web development, WordPress, and SEO.
            </p>
            <p>
              My development journey is built around MongoDB, Express.js, React, and Node.js, through which I have developed practical web applications ranging from restaurant billing systems and task management platforms to API-driven applications. My technical foundation was further strengthened through a MERN Stack Development internship, where I contributed to full-stack features in a live development environment.
            </p>
            <p>
              Alongside MERN Stack development, I work with Next.js, Tailwind CSS, and modern component-based development to create responsive and user-focused web experiences. I also have experience in WordPress development, including website structure, page development, customization, and content management.
            </p>
            <p>
              Additionally, I apply on-page SEO and technical SEO principles, including meta optimization, content structure, responsive design, and website performance considerations, helping create websites that are not only functional but also easier for search engines and users to discover.
            </p>
            <p>
              Beyond personal projects, I have contributed to professional workflow and application management systems, with experience in requirement analysis, application planning, and practical problem-solving.
            </p>
            <p>
              I am currently seeking opportunities as a Full-Stack Developer or Web Developer, where I can contribute my technical skills, continue learning, and build modern, scalable digital solutions.
            </p>
          </div>

          {/* Facts & Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-brand-navy/10">
            {/* Fact 1 */}
            <div className="p-4 rounded-2xl bg-white border border-brand-navy/[0.07] shadow-sm">
              <div className="text-[11px] font-bold uppercase tracking-wider text-brand-blue mb-1">Postgraduate</div>
              <div className="font-bold text-base text-brand-navy">Master of Computer Applications</div>
              <div className="text-xs text-brand-gray mt-0.5">Kalasalingam Academy · 2024–2026 · CGPA 8.93</div>
            </div>

            {/* Fact 2 */}
            <div className="p-4 rounded-2xl bg-white border border-brand-navy/[0.07] shadow-sm">
              <div className="text-[11px] font-bold uppercase tracking-wider text-brand-blue mb-1">Undergraduate</div>
              <div className="font-bold text-base text-brand-navy">B.Com in Computer Applications</div>
              <div className="text-xs text-brand-gray mt-0.5">Kalasalingam Academy · 2021–2024 · CGPA 9.16</div>
            </div>

            {/* Fact 3 */}
            <div className="p-4 rounded-2xl bg-white border border-brand-navy/[0.07] shadow-sm">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">Experience</div>
              <div className="font-bold text-base text-brand-navy">MERN Developer Intern</div>
              <div className="text-xs text-brand-gray mt-0.5">Live Stream Technologies · 3 Months Experience</div>
            </div>

            {/* Fact 4 */}
            <div className="p-4 rounded-2xl bg-white border border-brand-navy/[0.07] shadow-sm">
              <div className="text-[11px] font-bold uppercase tracking-wider text-purple-700 mb-1">Active Expansion</div>
              <div className="font-bold text-base text-brand-navy">Next.js, WordPress &amp; SEO</div>
              <div className="text-xs text-brand-gray mt-0.5">Modern web applications, CMS &amp; discoverability</div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
