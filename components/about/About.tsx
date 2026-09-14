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
                  <div className="text-[11px] text-brand-gray font-medium">Software Developer</div>
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
              I’m a Software Developer with hands-on experience contributing to real-world web applications, digital platforms, AI-powered solutions, and WordPress websites. I enjoy turning ideas and requirements into practical, responsive, and user-friendly digital experiences.
            </p>
            <p>
              Currently, I’m working as a Software Developer Intern at AAA Techno Park, Sivakasi, where I contribute to live projects across frontend and backend development, WordPress, SEO, analytics, AI chatbots, and RAG-related solutions.
            </p>
            <p>
              My internship experience includes contributing to marketing websites such as Medronix and Vaidhya AI using WordPress, Elementor, Elementor Pro, Rank Math SEO, Yoast SEO, Contact Form 7, and WP Mail SMTP. I have also contributed to Vaidhya’s Health Camp Management platform, including frontend development for an Indian Map-based analytics module and improvements related to AI chatbot usability and response accuracy.
            </p>
            <p>
              I have also contributed to the Employee Productivity Dashboard (EPD), working across frontend and backend development for data-processing and related platform workflows. These experiences have helped me understand how software is developed, tested, improved, and delivered in a real project environment.
            </p>
            <p>
              Alongside my professional experience, I have a foundation in full-stack web development using JavaScript, React.js, Node.js, Express.js, MongoDB, REST APIs, Git, and GitHub, with growing experience in Next.js, WordPress, SEO, AI chatbots, and RAG-related technologies.
            </p>
            <p>
              I’m interested in building useful software, learning modern technologies, solving practical problems, and continuously improving as a developer.
            </p>
          </div>

          {/* Facts & Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-brand-navy/10">
            {/* Fact 1 */}
            <div className="p-4 rounded-2xl bg-white border border-brand-navy/[0.07] shadow-sm">
              <div className="text-[11px] font-bold uppercase tracking-wider text-brand-blue mb-1">POSTGRADUATE</div>
              <div className="font-bold text-base text-brand-navy">Master of Computer Applications</div>
              <div className="text-xs text-brand-gray mt-0.5">Kalasalingam Academy · 2024–2026 · CGPA 8.93</div>
            </div>

            {/* Fact 2 */}
            <div className="p-4 rounded-2xl bg-white border border-brand-navy/[0.07] shadow-sm">
              <div className="text-[11px] font-bold uppercase tracking-wider text-brand-blue mb-1">UNDERGRADUATE</div>
              <div className="font-bold text-base text-brand-navy">B.Com in Computer Applications</div>
              <div className="text-xs text-brand-gray mt-0.5">Kalasalingam Academy · 2021–2024 · CGPA 9.16</div>
            </div>

            {/* Fact 3 */}
            <div className="p-4 rounded-2xl bg-white border border-brand-navy/[0.07] shadow-sm">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">CURRENT EXPERIENCE</div>
              <div className="font-bold text-base text-brand-navy">Software Developer Intern</div>
              <div className="text-xs text-brand-gray mt-0.5">AAA Techno Park · May 2026–Present</div>
            </div>

            {/* Fact 4 */}
            <div className="p-4 rounded-2xl bg-white border border-brand-navy/[0.07] shadow-sm">
              <div className="text-[11px] font-bold uppercase tracking-wider text-purple-700 mb-1">CURRENT FOCUS</div>
              <div className="font-bold text-base text-brand-navy">AI, RAG, WordPress &amp; SEO</div>
              <div className="text-xs text-brand-gray mt-0.5">Practical web, AI &amp; digital solutions</div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
