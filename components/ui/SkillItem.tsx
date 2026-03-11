"use client";
import { useState } from "react";
import { colors } from "@/lib/constants";

export default function SkillItem({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.7rem",
        padding: "0.55rem 0",
        fontSize: "0.88rem",
        color: hovered ? colors.text : colors.textSec,
        transition: "color 0.2s",
        cursor: "default",
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: hovered ? colors.green : colors.textTer,
          flexShrink: 0,
          transition: "background 0.2s",
        }}
      />
      {children}
    </li>
  );
}
