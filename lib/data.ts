import type { Project, Experience, Blog, Education, Link, Stat } from "@/types";

export const portfolio = {
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
  ] satisfies Link[],
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
  ] satisfies Stat[],
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
  ] satisfies Experience[],
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
  ] satisfies Project[],
  skills: {
    Languages: ["JavaScript (ES6+)", "TypeScript", "Python", "C++", "SQL"],
    "Frameworks & Tools": ["React.js / Next.js", "Node.js / Express.js", "Django / FastAPI", "Socket.IO", "Tailwind CSS"],
    "Databases & Infra": ["MongoDB", "PostgreSQL", "Git / GitHub", "CI/CD", "Vercel / Render"],
  } as Record<string, string[]>,
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
  ] satisfies Blog[],
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
  ] satisfies Education[],
  achievements: [
    "Student Organizing Committee Member — 2nd International Conference on AI and Applications, MSIT (Springer).",
    "Completed 6-week hands-on training in Generative AI — built Pneumobot, a pneumonia detection chatbot.",
  ],
};
