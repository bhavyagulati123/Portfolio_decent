"use client";
import { useState } from "react";
import { colors, mono } from "@/lib/constants";
import Tag from "./Tag";
import type { Project } from "@/types";

function LinkButton({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      onClick={(e) => e.stopPropagation()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 36,
        height: 36,
        borderRadius: 8,
        border: `1px solid ${hovered ? colors.borderHover : colors.border}`,
        background: hovered ? colors.tagBg : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: hovered ? colors.text : colors.textTer,
        textDecoration: "none",
        transition: "all 0.2s",
      }}
    >
      {children}
    </a>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  const linkButtons = (
    <div style={{ display: "flex", gap: "0.4rem" }}>
      {project.github && project.github !== "#" && (
        <LinkButton href={project.github} label="View on GitHub">
          <GitHubIcon />
        </LinkButton>
      )}
      {project.live && project.live !== "#" && (
        <LinkButton href={project.live} label="View live site">
          <ExternalLinkIcon />
        </LinkButton>
      )}
    </div>
  );

  if (project.featured) {
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          gridColumn: "1 / -1",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "center",
          border: `1px solid ${hovered ? colors.borderHover : colors.border}`,
          borderRadius: 12,
          padding: "2rem",
          background: colors.surface,
          color: "inherit",
          transform: hovered ? "translateY(-3px)" : "none",
          boxShadow: hovered ? "0 8px 30px rgba(0,0,0,0.04)" : "none",
          transition: "all 0.3s",
        }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: colors.tagBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
              {project.icon}
            </div>
            {linkButtons}
          </div>
          <div style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: "0.5rem" }}>{project.name}</div>
          <div style={{ fontSize: "0.85rem", color: colors.textSec, lineHeight: 1.7, marginBottom: "1.2rem" }}>{project.desc}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>
        <div style={{ background: colors.tagBg, borderRadius: 8, height: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontFamily: mono, fontSize: "0.75rem", color: colors.textTer, textAlign: "center", padding: "1rem" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{project.icon}</div>
            <div>{project.featureHighlight?.main}</div>
            <div style={{ color: colors.green, marginTop: "0.3rem" }}>{project.featureHighlight?.sub}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? colors.borderHover : colors.border}`,
        borderRadius: 12,
        padding: "2rem",
        background: colors.surface,
        color: "inherit",
        display: "block",
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? "0 8px 30px rgba(0,0,0,0.04)" : "none",
        transition: "all 0.3s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: colors.tagBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
          {project.icon}
        </div>
        {linkButtons}
      </div>
      <div style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: "0.5rem" }}>{project.name}</div>
      <div style={{ fontSize: "0.85rem", color: colors.textSec, lineHeight: 1.7, marginBottom: "1.2rem" }}>{project.desc}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>
  );
}
