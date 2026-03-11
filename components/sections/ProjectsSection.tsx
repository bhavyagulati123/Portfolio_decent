import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { portfolio } from "@/lib/data";
import { colors } from "@/lib/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: "6rem 2rem", background: colors.bg }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel>Work</SectionLabel>
          <SectionTitle>Selected projects</SectionTitle>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "2.5rem" }}>
          {portfolio.projects.map((p, i) => (
            <Reveal key={i} delay={0.1 * (i + 1)}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
