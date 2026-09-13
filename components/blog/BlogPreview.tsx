"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BLOG_TOPICS } from "@/data/portfolio";

export const BlogPreview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Web Development", "MERN Stack", "Next.js", "WordPress", "SEO & Digital"];

  const filteredTopics =
    selectedCategory === "All"
      ? BLOG_TOPICS
      : BLOG_TOPICS.filter((t) => t.category === selectedCategory);

  return (
    <section
      id="blog"
      className="relative py-20 sm:py-28 px-5 sm:px-8 max-w-6xl mx-auto z-20"
      aria-label="Blog Notes and Technical Learnings"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
          Technical Notes
        </div>
        <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight mb-4">
          Learning, building &amp;{" "}
          <span className="font-serif italic font-semibold text-brand-blue">
            documenting.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-normal">
          This is where I document practical lessons from projects across MERN, Next.js, WordPress, and SEO. These upcoming notes capture real engineering tradeoffs and solutions.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-brand-navy text-white shadow-sm"
                : "bg-white text-brand-navy/80 hover:bg-brand-lightBg hover:text-brand-blue border border-brand-navy/[0.08]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.map((topic, idx) => (
          <motion.article
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="p-6 rounded-3xl bg-white border border-brand-navy/[0.08] shadow-card flex flex-col justify-between hover:border-brand-blue/30 hover:shadow-soft transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-lightBg text-brand-blue border border-brand-blue/15">
                  {topic.category}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-gray px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/80">
                  {topic.status}
                </span>
              </div>

              <h3 className="font-sans font-bold text-lg text-brand-navy mb-2 tracking-tight line-clamp-2">
                {topic.title}
              </h3>

              <p className="text-xs text-brand-gray leading-relaxed mb-4">
                {topic.summary}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-medium text-brand-gray pt-3 border-t border-brand-navy/[0.06]">
              <span>{topic.readTime}</span>
              <span className="text-brand-blue font-semibold">Article in Progress →</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
