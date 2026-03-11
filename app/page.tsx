import Nav from "@/components/Nav";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import { colors, font } from "@/lib/constants";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: font,
        background: colors.bg,
        color: colors.text,
        lineHeight: 1.7,
        minHeight: "100vh",
      }}
    >
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <BlogSection />
        <ContactSection />
      </main>
      <footer
        style={{
          padding: "2.5rem 2rem",
          borderTop: `1px solid ${colors.border}`,
          textAlign: "center",
          fontSize: "0.78rem",
          color: colors.textTer,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          Built with care · © 2026 Bhavya Gulati
        </div>
      </footer>
    </div>
  );
}
