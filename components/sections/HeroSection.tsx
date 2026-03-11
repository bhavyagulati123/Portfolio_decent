import Reveal from "@/components/Reveal";
import { portfolio } from "@/lib/data";
import { colors, font, mono, serif } from "@/lib/constants";

const sectionStyle = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  paddingTop: 64,
  padding: "6rem 2rem",
  background: colors.bg,
};

export default function HeroSection() {
  return (
    <section style={sectionStyle}>
      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <Reveal>
            <div style={{ fontFamily: mono, fontSize: "0.8rem", fontWeight: 500, color: colors.green, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: colors.green, display: "inline-block", animation: "pulse 2s ease-in-out infinite" }} />
              {portfolio.status}
            </div>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(2.6rem,5.5vw,4rem)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              {portfolio.tagline}
            </h1>
            <p style={{ fontSize: "1.05rem", color: colors.textSec, maxWidth: 480, lineHeight: 1.8, marginBottom: "2rem" }}>
              {portfolio.intro}
            </p>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <a href="#projects" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.8rem", background: colors.accent, color: "#fff", fontFamily: font, fontSize: "0.85rem", fontWeight: 500, border: "none", borderRadius: 6, textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s" }}>
                View Projects ↓
              </a>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.8rem", background: "transparent", color: colors.text, fontFamily: font, fontSize: "0.85rem", fontWeight: 500, border: `1.5px solid ${colors.border}`, borderRadius: 6, textDecoration: "none", transition: "border-color 0.2s" }}>
                Get in Touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ background: "#1E1E1E", borderRadius: 12, width: "100%", maxWidth: 440, boxShadow: "0 20px 60px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06)", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "14px 18px", background: "#282828" }}>
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F57" }} />
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FFBD2E" }} />
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28CA41" }} />
                  <span style={{ marginLeft: "auto", fontFamily: mono, fontSize: "0.7rem", color: "#666" }}>developer.ts</span>
                </div>
                <div style={{ padding: "1.2rem 1.5rem 1.5rem", fontFamily: mono, fontSize: "0.78rem", lineHeight: 1.9, color: "#D4D4D4" }}>
                  <span style={{ color: "#6A9955" }}>{"// Hello World 👋"}</span><br />
                  <span style={{ color: "#C586C0" }}>interface</span>{" "}<span style={{ color: "#4EC9B0" }}>Developer</span>{" {"}<br />
                  {"  "}<span style={{ color: "#9CDCFE" }}>name</span>: <span style={{ color: "#CE9178" }}>&quot;Bhavya Gulati&quot;</span>;<br />
                  {"  "}<span style={{ color: "#9CDCFE" }}>role</span>: <span style={{ color: "#CE9178" }}>&quot;Full-Stack Engineer&quot;</span>;<br />
                  {"  "}<span style={{ color: "#9CDCFE" }}>stack</span>: <span style={{ color: "#CE9178" }}>&quot;MERN + Next.js&quot;</span>;<br />
                  {"  "}<span style={{ color: "#9CDCFE" }}>passion</span>: <span style={{ color: "#CE9178" }}>&quot;Scalable Systems&quot;</span>;<br />
                  {"}"}<br /><br />
                  <span style={{ color: "#C586C0" }}>const</span>{" "}<span style={{ color: "#DCDCAA" }}>build</span>{" = "}<br />
                  {"  "}(<span style={{ color: "#9CDCFE" }}>idea</span>: <span style={{ color: "#4EC9B0" }}>Concept</span>) =&gt;<br />
                  {"    "}<span style={{ color: "#DCDCAA" }}>ship</span>(<span style={{ color: "#DCDCAA" }}>iterate</span>(<span style={{ color: "#DCDCAA" }}>code</span>(<span style={{ color: "#9CDCFE" }}>idea</span>)));
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
