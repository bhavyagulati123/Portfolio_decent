import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillItem from "@/components/ui/SkillItem";
import { portfolio } from "@/lib/data";
import { colors, mono } from "@/lib/constants";

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "6rem 2rem", background: colors.surface }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel>Tech Stack</SectionLabel>
          <SectionTitle>Tools & technologies</SectionTitle>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem", marginTop: "2.5rem" }}>
          {Object.entries(portfolio.skills).map(([cat, items], ci) => (
            <Reveal key={cat} delay={0.1 * (ci + 1)}>
              <div>
                <h3 style={{ fontFamily: mono, fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: colors.textTer, marginBottom: "1.2rem", paddingBottom: "0.8rem", borderBottom: `1px solid ${colors.border}` }}>
                  {cat}
                </h3>
                <ul style={{ listStyle: "none" }}>
                  {items.map((item) => (
                    <SkillItem key={item}>{item}</SkillItem>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
