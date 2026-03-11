import { useState, useEffect, useRef } from "react";

const portfolio = {
  name: "Bhavya Gulati",
  tagline: "Building software that matters.",
  intro: "Full-Stack Engineer with strong foundations in DSA, scalable web apps, and performant user-facing systems.",
  status: "Available for Backend / Full-Stack roles",
  email: "bhavyagulati@email.com",
  phone: "+91 9311796190",
  links: [
    { label: "GitHub", url: "#" },
    { label: "LinkedIn", url: "#" },
    { label: "LeetCode", url: "#" },
  ],
  about: [
    "I'm a Full-Stack Engineer who believes great code should be invisible — users should only notice how effortlessly things work. From building real-time chat systems to designing AI pipeline editors, I enjoy crafting products that solve real problems.",
    "Currently interning at Hemitaverse, where I've optimized API latency by 30%, shipped 5+ production releases through CI/CD, and built scalable Next.js architectures. I thrive in Agile environments and care deeply about clean architecture and developer experience.",
    "When I'm not shipping features, you'll find me solving DSA problems on LeetCode, exploring generative AI, or contributing to projects that push me to learn something new.",
  ],
  stats: [
    { number: "5+", label: "Production Releases" },
    { number: "30%", label: "Latency Reduced" },
    { number: "7.6", label: "CGPA" },
    { number: "100%", label: "Sprint Delivery" },
  ],
  experience: [
    {
      date: "June 2025 — Present",
      role: "Full-Stack Engineer Intern",
      company: "Hemitaverse (Remote)",
      points: [
        "Delivered 5+ CI/CD-based production releases, reducing deployment downtime and improving release stability.",
        "Designed authentication & authorization middleware using JWT and role-based access control.",
        "Optimized REST API queries and database access patterns, reducing page load latency by 25–30%.",
        "Built scalable frontend architecture using Next.js App Router with dynamic routing and client-specific layouts.",
        "Collaborated in Agile/Scrum sprints with 100% on-time ticket delivery.",
      ],
    },
  ],
  projects: [
    {
      icon: "⚡",
      name: "Visual AI Pipeline Builder",
      desc: "Node-based visual workflow editor for designing AI pipelines using directed acyclic graphs. Features dynamic template variable parsing, reusable BaseNode abstraction, and DFS-based cycle detection.",
      tags: ["React Flow", "Zustand", "FastAPI", "Python"],
      featured: true,
      featureHighlight: { main: "DAG Editor", sub: "DFS Cycle Detection" },
      github: "#",
      live: "#",
    },
    {
      icon: "🍽️",
      name: "One4U — Corporate Canteen Platform",
      desc: "Full-stack platform enabling real-time order tracking with Socket.IO, admin analytics dashboard with Chart.js, and GenAI-based food recommendations.",
      tags: ["React.js", "Node.js", "MongoDB", "Socket.IO"],
      github: "#",
      live: "#",
    },
    {
      icon: "💬",
      name: "Realtime Chat App",
      desc: "Real-time messaging system with WebSockets, online presence indicators, JWT authentication, and Zustand-powered global state management.",
      tags: ["MERN", "Tailwind CSS", "Zustand", "JWT"],
      github: "#",
      live: "#",
    },
    {
      icon: "🫁",
      name: "Pneumobot",
      desc: "Pneumonia detection chatbot using LLMs and Gradio. Features a dynamic scoring system to choose between custom prompts and Google Gemini for diagnostic responses.",
      tags: ["Python", "TensorFlow", "Keras", "Gradio"],
      github: "#",
    },
  ],
  skills: {
    Languages: ["JavaScript (ES6+)", "TypeScript", "Python", "C++", "SQL"],
    "Frameworks & Tools": ["React.js / Next.js", "Node.js / Express.js", "Django / FastAPI", "Socket.IO", "Tailwind CSS"],
    "Databases & Infra": ["MongoDB", "PostgreSQL", "Git / GitHub", "CI/CD", "Vercel / Render"],
  },
  blogs: [
    {
      tag: "Architecture",
      date: "Feb 2026",
      title: "Why DAG Validation Matters in Visual Pipeline Builders",
      excerpt: "How DFS-based cycle detection prevents broken AI workflows and what I learned building a pipeline editor from scratch.",
    },
    {
      tag: "Real-time",
      date: "Jan 2026",
      title: "Scaling WebSockets — Lessons from Building a Chat App",
      excerpt: "Handling concurrent connections, online presence, and state management patterns for real-time applications.",
    },
    {
      tag: "DevOps",
      date: "Dec 2025",
      title: "CI/CD Pipelines That Actually Save Time",
      excerpt: "What I learned shipping 5+ production releases at Hemitaverse — and the mistakes that taught me the most.",
    },
  ],
  education: [
    {
      degree: "B.Tech in Information Technology",
      school: "Maharaja Surajmal Institute of Technology, New Delhi",
      period: "Aug 2022 – June 2026",
      grade: "CGPA: 7.6/10",
    },
    {
      degree: "Class XII (CBSE)",
      school: "Spring Meadows Public School",
      period: "2021",
      grade: "84%",
    },
  ],
  achievements: [
    "Student Organizing Committee Member — 2nd International Conference on AI and Applications, MSIT (Springer).",
    "Completed 6-week hands-on training in Generative AI — built Pneumobot, a pneumonia detection chatbot.",
  ],
};

/* ─── Reveal Hook ─── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 0.7s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Styles ─── */
const font = `'DM Sans', system-ui, -apple-system, sans-serif`;
const serif = `'DM Serif Display', Georgia, serif`;
const mono = `'JetBrains Mono', 'Fira Code', monospace`;

const colors = {
  bg: "#FAFAF8",
  surface: "#FFFFFF",
  text: "#1A1A1A",
  textSec: "#6B6B6B",
  textTer: "#9A9A9A",
  accent: "#2D2D2D",
  accentLight: "#E8E8E4",
  border: "#EBEBEB",
  borderHover: "#D0D0D0",
  tagBg: "#F3F3F0",
  green: "#3A7D44",
};

/* ─── Components ─── */

function Nav({ scrolled }) {
  const [open, setOpen] = useState(false);
  const links = ["about", "projects", "skills", "experience", "blog", "contact"];
  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(250,250,248,0.85)", backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${colors.border}`,
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.04)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href="#" style={{ fontFamily: mono, fontSize: "0.85rem", fontWeight: 600, color: colors.text, textDecoration: "none", letterSpacing: "-0.02em" }}>
          bhavya<span style={{ color: colors.green }}>.</span>gulati
        </a>
        <div style={{ display: "flex", gap: "2rem" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              style={{ fontSize: "0.82rem", color: colors.textSec, textDecoration: "none", fontWeight: 500, fontFamily: font, letterSpacing: "0.02em", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = colors.text)}
              onMouseLeave={(e) => (e.target.style.color = colors.textSec)}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ fontFamily: mono, fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: colors.textTer, marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <span style={{ width: 24, height: 1, background: colors.textTer, display: "inline-block" }} />
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  return <h2 style={{ fontFamily: serif, fontSize: "clamp(2rem,4vw,2.8rem)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "1.5rem", color: colors.text }}>{children}</h2>;
}

function Tag({ children }) {
  return <span style={{ fontFamily: mono, fontSize: "0.68rem", fontWeight: 500, padding: "0.3rem 0.65rem", background: colors.tagBg, borderRadius: 4, color: colors.textSec, letterSpacing: "0.01em" }}>{children}</span>;
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  if (project.featured) {
    return (
      <a
        href={project.live || project.github || "#"}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center",
          border: `1px solid ${hovered ? colors.borderHover : colors.border}`, borderRadius: 12, padding: "2rem",
          background: colors.surface, textDecoration: "none", color: "inherit",
          transform: hovered ? "translateY(-3px)" : "none",
          boxShadow: hovered ? "0 8px 30px rgba(0,0,0,0.04)" : "none",
          transition: "all 0.3s",
        }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: colors.tagBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>{project.icon}</div>
            <span style={{ color: hovered ? colors.text : colors.textTer, transition: "all 0.3s", transform: hovered ? "translate(3px,-3px)" : "none", fontSize: "1.1rem" }}>↗</span>
          </div>
          <div style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: "0.5rem" }}>{project.name}</div>
          <div style={{ fontSize: "0.85rem", color: colors.textSec, lineHeight: 1.7, marginBottom: "1.2rem" }}>{project.desc}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>{project.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        </div>
        <div style={{ background: colors.tagBg, borderRadius: 8, height: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontFamily: mono, fontSize: "0.75rem", color: colors.textTer, textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{project.icon}</div>
            <div>{project.featureHighlight?.main}</div>
            <div style={{ color: colors.green, marginTop: "0.3rem" }}>{project.featureHighlight?.sub}</div>
          </div>
        </div>
      </a>
    );
  }
  return (
    <a
      href={project.live || project.github || "#"}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? colors.borderHover : colors.border}`, borderRadius: 12, padding: "2rem",
        background: colors.surface, textDecoration: "none", color: "inherit", display: "block",
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? "0 8px 30px rgba(0,0,0,0.04)" : "none",
        transition: "all 0.3s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: colors.tagBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>{project.icon}</div>
        <span style={{ color: hovered ? colors.text : colors.textTer, transition: "all 0.3s", transform: hovered ? "translate(3px,-3px)" : "none", fontSize: "1.1rem" }}>↗</span>
      </div>
      <div style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: "0.5rem" }}>{project.name}</div>
      <div style={{ fontSize: "0.85rem", color: colors.textSec, lineHeight: 1.7, marginBottom: "1.2rem" }}>{project.desc}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>{project.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
    </a>
  );
}

/* ─── Main App ─── */
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Load fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const sectionStyle = (bg) => ({ padding: "6rem 2rem", background: bg });
  const container = { maxWidth: 1100, margin: "0 auto" };

  return (
    <div style={{ fontFamily: font, background: colors.bg, color: colors.text, lineHeight: 1.7, WebkitFontSmoothing: "antialiased", minHeight: "100vh" }}>
      <style>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        ::selection { background: #2D2D2D; color: #fff; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes typing { from{width:0} to{width:100%} }
      `}</style>

      <Nav scrolled={scrolled} />

      {/* ═══ HERO ═══ */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 64, ...sectionStyle(colors.bg) }}>
        <div style={container}>
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
                    {"  "}<span style={{ color: "#9CDCFE" }}>name</span>: <span style={{ color: "#CE9178" }}>"Bhavya Gulati"</span>;<br />
                    {"  "}<span style={{ color: "#9CDCFE" }}>role</span>: <span style={{ color: "#CE9178" }}>"Full-Stack Engineer"</span>;<br />
                    {"  "}<span style={{ color: "#9CDCFE" }}>stack</span>: <span style={{ color: "#CE9178" }}>"MERN + Next.js"</span>;<br />
                    {"  "}<span style={{ color: "#9CDCFE" }}>passion</span>: <span style={{ color: "#CE9178" }}>"Scalable Systems"</span>;<br />
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

      {/* ═══ ABOUT ═══ */}
      <section id="about" style={sectionStyle(colors.surface)}>
        <div style={container}>
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
                  <div style={{ fontFamily: mono, fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: colors.textTer, marginBottom: "0.6rem" }}>Achievements</div>
                  {portfolio.achievements.map((a, i) => (
                    <p key={i} style={{ fontSize: "0.84rem", color: colors.textSec, lineHeight: 1.7, marginTop: i > 0 ? "0.5rem" : 0 }}>• {a}</p>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section id="projects" style={sectionStyle(colors.bg)}>
        <div style={container}>
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

      {/* ═══ SKILLS ═══ */}
      <section id="skills" style={sectionStyle(colors.surface)}>
        <div style={container}>
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

      {/* ═══ EXPERIENCE ═══ */}
      <section id="experience" style={sectionStyle(colors.bg)}>
        <div style={container}>
          <Reveal>
            <SectionLabel>Experience</SectionLabel>
            <SectionTitle>Where I've worked</SectionTitle>
          </Reveal>
          <div style={{ marginTop: "2.5rem", position: "relative" }}>
            <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 1, background: colors.border }} />
            {portfolio.experience.map((exp, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)}>
                <TimelineItem exp={exp} isLast={i === portfolio.experience.length - 1} />
              </Reveal>
            ))}
          </div>

          {/* Education */}
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

      {/* ═══ BLOG ═══ */}
      <section id="blog" style={sectionStyle(colors.surface)}>
        <div style={container}>
          <Reveal>
            <SectionLabel>Blog</SectionLabel>
            <SectionTitle>Recent writing</SectionTitle>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", marginTop: "2.5rem" }}>
            {portfolio.blogs.map((b, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)}>
                <BlogCard blog={b} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" style={sectionStyle(colors.bg)}>
        <div style={container}>
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <SectionTitle>Let's connect</SectionTitle>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "start", marginTop: "2.5rem" }}>
            <Reveal delay={0.1}>
              <div style={{ fontSize: "1.05rem", color: colors.textSec, lineHeight: 1.8, marginBottom: "2rem" }}>
                I'm always open to interesting conversations, collaboration opportunities, or discussing full-stack roles. Feel free to reach out.
              </div>
              <div style={{ fontFamily: mono, fontSize: "0.85rem", color: colors.textSec, marginBottom: "0.5rem" }}>{portfolio.phone}</div>
              <a href={`mailto:${portfolio.email}`} style={{ fontFamily: serif, fontSize: "clamp(1.4rem,3vw,2rem)", color: colors.text, textDecoration: "none", borderBottom: `2px solid ${colors.border}`, paddingBottom: 4 }}>
                {portfolio.email}
              </a>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {portfolio.links.map((l) => (
                  <SocialLink key={l.label} label={l.label} url={l.url} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ padding: "2.5rem 2rem", borderTop: `1px solid ${colors.border}`, textAlign: "center", fontSize: "0.78rem", color: colors.textTer }}>
        <div style={container}>Built with care · © 2026 Bhavya Gulati</div>
      </footer>
    </div>
  );
}

/* ─── Small Sub-components ─── */

function SkillItem({ children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "flex", alignItems: "center", gap: "0.7rem", padding: "0.55rem 0", fontSize: "0.88rem", color: hovered ? colors.text : colors.textSec, transition: "color 0.2s", cursor: "default" }}
    >
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: hovered ? colors.green : colors.textTer, flexShrink: 0, transition: "background 0.2s" }} />
      {children}
    </li>
  );
}

function TimelineItem({ exp, isLast }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ paddingLeft: "2.5rem", paddingBottom: isLast ? 0 : "2.5rem", position: "relative" }}
    >
      <div style={{
        position: "absolute", left: 0, top: 8, width: 15, height: 15, borderRadius: "50%",
        border: `2px solid ${hovered ? colors.green : colors.border}`,
        background: hovered ? "#E8F5E9" : colors.bg,
        transition: "all 0.2s",
      }} />
      <div style={{ fontFamily: mono, fontSize: "0.72rem", color: colors.textTer, marginBottom: "0.4rem" }}>{exp.date}</div>
      <div style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.15rem" }}>{exp.role}</div>
      <div style={{ color: colors.textSec, fontSize: "0.88rem", marginBottom: "0.6rem" }}>{exp.company}</div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {exp.points.map((p, i) => (
          <li key={i} style={{ fontSize: "0.84rem", color: colors.textSec, lineHeight: 1.7, marginBottom: "0.3rem", paddingLeft: "0.8rem", position: "relative" }}>
            <span style={{ position: "absolute", left: 0, top: "0.55em", width: 4, height: 4, borderRadius: "50%", background: colors.textTer }} />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlogCard({ blog }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? colors.borderHover : colors.border}`, borderRadius: 10, padding: "1.8rem",
        background: colors.bg, textDecoration: "none", color: "inherit", display: "block",
        transform: hovered ? "translateY(-2px)" : "none", transition: "all 0.3s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
        <span style={{ fontFamily: mono, fontSize: "0.65rem", fontWeight: 500, padding: "0.25rem 0.55rem", background: colors.accentLight, borderRadius: 3, color: colors.textSec }}>{blog.tag}</span>
        <span style={{ fontSize: "0.75rem", color: colors.textTer }}>{blog.date}</span>
      </div>
      <div style={{ fontWeight: 600, fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "0.6rem" }}>{blog.title}</div>
      <div style={{ fontSize: "0.82rem", color: colors.textSec, lineHeight: 1.7 }}>{blog.excerpt}</div>
      <div style={{ marginTop: "1rem", fontSize: "0.8rem", fontWeight: 500, color: hovered ? colors.text : colors.textTer, transition: "color 0.2s" }}>Read more →</div>
    </a>
  );
}

function SocialLink({ label, url }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1rem 1.2rem", border: `1px solid ${hovered ? colors.borderHover : colors.border}`,
        borderRadius: 8, textDecoration: "none", color: colors.text,
        fontSize: "0.88rem", fontWeight: 500, background: hovered ? colors.surface : "transparent",
        transition: "all 0.2s",
      }}
    >
      {label}
      <span style={{ color: colors.textTer, transform: hovered ? "translateX(3px)" : "none", transition: "transform 0.2s" }}>→</span>
    </a>
  );
}
