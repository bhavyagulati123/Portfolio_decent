import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";
import { portfolio } from "@/lib/data";
import { colors, mono } from "@/lib/constants";

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "6rem 2rem", background: colors.bg }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
          <SectionTitle>Where I&apos;ve worked</SectionTitle>
        </Reveal>
        <div style={{ marginTop: "2.5rem", position: "relative" }}>
          <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 1, background: colors.border }} />
          {portfolio.experience.map((exp, i) => (
            <Reveal key={i} delay={0.1 * (i + 1)}>
              <TimelineItem exp={exp} isLast={i === portfolio.experience.length - 1} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div style={{ marginTop: "4rem" }}>
            <SectionLabel>Education</SectionLabel>
            <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
              {portfolio.education.map((edu, i) => (
                <div key={i} style={{ padding: "1.5rem", border: `1px solid ${colors.border}`, borderRadius: 10, background: colors.surface }}>
                  <div style={{ fontWeight: 600, fontSize: "1rem" }}>{edu.degree}</div>
                  <div style={{ fontSize: "0.88rem", color: colors.textSec }}>{edu.school}</div>
                  <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.4rem" }}>
                    <span style={{ fontFamily: mono, fontSize: "0.72rem", color: colors.textTer }}>{edu.period}</span>
                    <span style={{ fontFamily: mono, fontSize: "0.72rem", color: colors.green, fontWeight: 500 }}>{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
