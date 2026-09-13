import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import ProfessionalHighlights from "@/components/stats/ProfessionalHighlights";
import About from "@/components/about/About";
import Expertise from "@/components/expertise/Expertise";
import Projects from "@/components/projects/Projects";
import DevelopmentProcess from "@/components/process/DevelopmentProcess";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import BlogPreview from "@/components/blog/BlogPreview";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EFF6FE] via-[#EFF6FE]/40 via-white to-white overflow-x-clip">
      {/* 1. Main Navigation Header */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Interactive Professional Highlights & Credibility */}
      <ProfessionalHighlights />

      {/* 4. About Me (Personal Narrative & Education) */}
      <About />

      {/* 5. Technical Expertise (Interactive Tabs & Bento) */}
      <Expertise />

      {/* 6. Projects Showcase (Professional, Featured & Other Case Studies) */}
      <Projects />

      {/* 7. Development Process (5-Step Workflow) */}
      <DevelopmentProcess />

      {/* 8. Career & Education Timeline */}
      <ExperienceTimeline />

      {/* 9. Blog Notes & Technical Learnings */}
      <BlogPreview />

      {/* 10. Contact Section & Direct Communication */}
      <Contact />

      {/* 11. Minimal Footer */}
      <Footer />
    </main>
  );
}
