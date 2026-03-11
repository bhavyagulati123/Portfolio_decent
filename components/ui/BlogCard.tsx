"use client";
import { useState } from "react";
import { colors, mono } from "@/lib/constants";
import type { Blog } from "@/types";

export default function BlogCard({ blog }: { blog: Blog }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? colors.borderHover : colors.border}`,
        borderRadius: 10,
        padding: "1.8rem",
        background: colors.bg,
        textDecoration: "none",
        color: "inherit",
        display: "block",
        transform: hovered ? "translateY(-2px)" : "none",
        transition: "all 0.3s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
        <span
          style={{
            fontFamily: mono,
            fontSize: "0.65rem",
            fontWeight: 500,
            padding: "0.25rem 0.55rem",
            background: colors.accentLight,
            borderRadius: 3,
            color: colors.textSec,
          }}
        >
          {blog.tag}
        </span>
        <span style={{ fontSize: "0.75rem", color: colors.textTer }}>{blog.date}</span>
      </div>
      <div style={{ fontWeight: 600, fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "0.6rem" }}>
        {blog.title}
      </div>
      <div style={{ fontSize: "0.82rem", color: colors.textSec, lineHeight: 1.7 }}>{blog.excerpt}</div>
      <div
        style={{
          marginTop: "1rem",
          fontSize: "0.8rem",
          fontWeight: 500,
          color: hovered ? colors.text : colors.textTer,
          transition: "color 0.2s",
        }}
      >
        Read more →
      </div>
    </a>
  );
}
