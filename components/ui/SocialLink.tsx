"use client";
import { useState } from "react";
import { colors } from "@/lib/constants";
import type { Link } from "@/types";

export default function SocialLink({ label, url }: Link) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 1.2rem",
        border: `1px solid ${hovered ? colors.borderHover : colors.border}`,
        borderRadius: 8,
        textDecoration: "none",
        color: colors.text,
        fontSize: "0.88rem",
        fontWeight: 500,
        background: hovered ? colors.surface : "transparent",
        transition: "all 0.2s",
      }}
    >
      {label}
      <span
        style={{
          color: colors.textTer,
          transform: hovered ? "translateX(3px)" : "none",
          transition: "transform 0.2s",
        }}
      >
        →
      </span>
    </a>
  );
}
