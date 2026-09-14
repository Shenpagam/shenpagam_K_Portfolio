"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { BRAND_DATA } from "@/data/portfolio";

export const Contact: React.FC = () => {
  const [state, handleSubmit, reset] = useForm("mgaegygv");

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 px-5 sm:px-8 max-w-6xl mx-auto z-20"
      aria-label="Contact Shenpagam K"
    >
      <div className="bg-white rounded-3xl border border-brand-navy/[0.08] shadow-[0_20px_60px_-15px_rgba(37,52,82,0.09)] p-8 sm:p-12 lg:p-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* ===============================================================
              Left Column: Value Proposition & Direct Contact Links
             =============================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-semibold uppercase tracking-wider text-brand-blue mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                Get In Touch
              </div>

              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] text-brand-navy tracking-tight leading-[1.15] mb-5">
                Let&apos;s build{" "}
                <span className="font-serif italic font-semibold text-brand-blue">
                  something meaningful.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-brand-gray leading-relaxed mb-8 font-normal">
                I am open to full-stack development roles, web engineering opportunities, freelance client projects, WordPress solutions, and SEO-focused website work.
              </p>

              {/* Direct Links */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${BRAND_DATA.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-brand-lightBg hover:bg-brand-blue/10 border border-brand-navy/[0.06] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-brand-blue flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-brand-gray">Direct Email</div>
                      <div className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                        {BRAND_DATA.email}
                      </div>
                    </div>
                  </div>
                  <span className="text-brand-blue font-bold">↗</span>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${BRAND_DATA.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-brand-lightBg hover:bg-brand-blue/10 border border-brand-navy/[0.06] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-brand-blue flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-brand-gray">Phone</div>
                      <div className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                        {BRAND_DATA.phone}
                      </div>
                    </div>
                  </div>
                  <span className="text-brand-blue font-bold">↗</span>
                </a>

                {/* GitHub */}
                <a
                  href={BRAND_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-brand-lightBg hover:bg-brand-blue/10 border border-brand-navy/[0.06] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-brand-navy flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-brand-gray">GitHub Profile</div>
                      <div className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                        github.com/Shenpagam
                      </div>
                    </div>
                  </div>
                  <span className="text-brand-blue font-bold">↗</span>
                </a>
              </div>
            </div>

            {/* Live Availability Status Indicator */}
            <div className="pt-6 mt-8 border-t border-brand-navy/[0.08] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green live-indicator" />
              <span className="text-xs font-semibold text-brand-navy">
                {BRAND_DATA.statusText}
              </span>
            </div>
          </div>

          {/* ===============================================================
              Right Column: Interactive Contact Form
             =============================================================== */}
          <div className="lg:col-span-7 bg-brand-lightBg/50 p-6 sm:p-8 rounded-3xl border border-brand-navy/[0.06]">
            <h3 className="font-sans font-bold text-xl text-brand-navy mb-6">
              Send a Direct Message
            </h3>

            {state.succeeded ? (
              <div className="py-10 px-4 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
                  <svg className="w-8 h-8 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-brand-navy">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-brand-gray max-w-md leading-relaxed">
                  Thank you for reaching out. Your message has been sent directly to Shenpagam. I will review it and get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => reset()}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-blue text-white text-xs font-semibold shadow-sm transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-navy/15 text-brand-navy placeholder:text-brand-gray/60 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-xs text-red-500 mt-1 font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-navy/15 text-brand-navy placeholder:text-brand-gray/60 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-xs text-red-500 mt-1 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="Full-Stack Opportunity / Web Project"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brand-navy/15 text-brand-navy placeholder:text-brand-gray/60 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                    className="text-xs text-red-500 mt-1 font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brand-navy/15 text-brand-navy placeholder:text-brand-gray/60 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all resize-none"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-xs text-red-500 mt-1 font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-navy hover:bg-brand-blue disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-md hover:shadow-blueGlow transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>{state.submitting ? "Sending..." : "Send Message"}</span>
                  {state.submitting ? (
                    <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 16 16">
                      <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>

                <ValidationError
                  errors={state.errors}
                  className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-medium border border-red-200 text-center"
                />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

