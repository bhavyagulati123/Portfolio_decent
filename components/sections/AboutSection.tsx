import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import { portfolio } from "@/lib/data";
import { colors, mono, serif } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "6rem 2rem", background: colors.surface }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "4rem", alignItems: "start" }}>
          <Reveal>
            <SectionLabel>About</SectionLabel>
            <SectionTitle>A bit about me</SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "2rem" }}>
              {portfolio.stats.map((s, i) => (
                <div key={i} style={{ padding: "1.2rem", border: `1px solid ${colors.border}`, borderRadius: 8 }}>
                  <div style={{ fontFamily: serif, fontSize: "1.8rem", color: colors.text, lineHeight: 1 }}>{s.number}</div>
                  <div style={{ fontSize: "0.78rem", color: colors.textTer, marginTop: "0.3rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ color: colors.textSec, fontSize: "0.95rem" }}>
              {portfolio.about.map((p, i) => (
                <p key={i} style={{ marginTop: i > 0 ? "1rem" : 0 }}>{p}</p>
              ))}
            </div>
            {portfolio.achievements.length > 0 && (
              <div style={{ marginTop: "1.5rem", padding: "1.2rem", background: colors.tagBg, borderRadius: 8 }}>
                <div style={{ fontFamily: mono, fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: colors.textTer, marginBottom: "0.6rem" }}>
                  Achievements
                </div>
                {portfolio.achievements.map((a, i) => (
                  <p key={i} style={{ fontSize: "0.84rem", color: colors.textSec, lineHeight: 1.7, marginTop: i > 0 ? "0.5rem" : 0 }}>
                    • {a}
                  </p>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
