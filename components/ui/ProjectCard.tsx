"use client";
import { useState } from "react";
import { colors, mono } from "@/lib/constants";
import Tag from "./Tag";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
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
          gridColumn: "1 / -1",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "center",
          border: `1px solid ${hovered ? colors.borderHover : colors.border}`,
          borderRadius: 12,
          padding: "2rem",
          background: colors.surface,
          textDecoration: "none",
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
            <span style={{ color: hovered ? colors.text : colors.textTer, transition: "all 0.3s", transform: hovered ? "translate(3px,-3px)" : "none", fontSize: "1.1rem" }}>
              ↗
            </span>
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
        border: `1px solid ${hovered ? colors.borderHover : colors.border}`,
        borderRadius: 12,
        padding: "2rem",
        background: colors.surface,
        textDecoration: "none",
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
        <span style={{ color: hovered ? colors.text : colors.textTer, transition: "all 0.3s", transform: hovered ? "translate(3px,-3px)" : "none", fontSize: "1.1rem" }}>
          ↗
        </span>
      </div>
      <div style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: "0.5rem" }}>{project.name}</div>
      <div style={{ fontSize: "0.85rem", color: colors.textSec, lineHeight: 1.7, marginBottom: "1.2rem" }}>{project.desc}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
    </a>
  );
}
