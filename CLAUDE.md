# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # run ESLint
```

## Architecture

Next.js 15 App Router, TypeScript, React 19. All styling is inline CSS — no CSS modules, no Tailwind.

### File layout

```
app/
  layout.tsx        # Root layout: loads fonts via next/font/google, sets metadata
  page.tsx          # Home page: composes all section components + Nav + footer
  globals.css       # CSS reset, ::selection, scroll-behavior, @keyframes pulse
lib/
  data.ts           # Single source of truth — all portfolio content (edit here)
  constants.ts      # colors object, font/serif/mono CSS variable strings
types/
  index.ts          # TypeScript interfaces: Project, Experience, Blog, Education, etc.
components/
  Nav.tsx           # Fixed nav with scroll shadow — "use client" (scroll state)
  Reveal.tsx        # Scroll-triggered fade-in via IntersectionObserver — "use client"
  ui/               # Primitive UI components
    SectionLabel    # Monospace uppercase label with decorative line
    SectionTitle    # Serif h2 for section headings
    Tag             # Tech tag pill (monospace, tagBg background)
    ProjectCard     # Featured (spans 2 cols) and regular card variants — "use client"
    SkillItem       # List item with green dot on hover — "use client"
    TimelineItem    # Experience entry with timeline dot — "use client"
    BlogCard        # Blog preview card — "use client"
    SocialLink      # Social/contact link row — "use client"
  sections/         # One file per page section (server components)
    HeroSection, AboutSection, ProjectsSection, SkillsSection,
    ExperienceSection, BlogSection, ContactSection
```

### Key conventions

- **Content changes**: edit `lib/data.ts` only — sections pull data directly from there.
- **"use client" rule**: any component using `useState`/`useEffect` needs the directive. Section components are server components; they can import client components freely.
- **Fonts**: loaded via `next/font/google` in `layout.tsx` with CSS variables `--font-sans`, `--font-serif`, `--font-mono`. Referenced in `lib/constants.ts` as `font`, `serif`, `mono`.
- **Colors**: always use the `colors` object from `lib/constants.ts` — never hardcode hex values in components.
- **Inline styles only**: all spacing, layout, and typography is done with inline style objects using the design tokens from `lib/constants.ts`.
