import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SocialLink from "@/components/ui/SocialLink";
import ContactForm from "@/components/ui/ContactForm";
import { portfolio } from "@/lib/data";
import { colors, mono, serif } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: "6rem 2rem", background: colors.bg }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <SectionTitle>Get in touch</SectionTitle>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "start", marginTop: "2.5rem" }}>
          <Reveal delay={0.1}>
            <div style={{ fontSize: "1.05rem", color: colors.textSec, lineHeight: 1.8, marginBottom: "2rem" }}>
              I&apos;m always open to interesting conversations, collaboration opportunities, or discussing full-stack roles. Feel free to reach out.
            </div>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontFamily: mono, fontSize: "0.85rem", color: colors.textSec, marginBottom: "0.5rem" }}>
                {portfolio.phone}
              </div>
              <a
                href={`mailto:${portfolio.email}`}
                style={{ fontFamily: serif, fontSize: "clamp(1.2rem,2.5vw,1.6rem)", color: colors.text, textDecoration: "none", borderBottom: `2px solid ${colors.border}`, paddingBottom: 4 }}
              >
                {portfolio.email}
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {portfolio.links.map((l) => (
                <SocialLink key={l.label} label={l.label} url={l.url} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
