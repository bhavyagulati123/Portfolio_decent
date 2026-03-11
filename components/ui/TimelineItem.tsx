"use client";
import { useState } from "react";
import { colors, mono } from "@/lib/constants";
import type { Experience } from "@/types";

export default function TimelineItem({
  exp,
  isLast,
}: {
  exp: Experience;
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        paddingLeft: "2.5rem",
        paddingBottom: isLast ? 0 : "2.5rem",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 8,
          width: 15,
          height: 15,
          borderRadius: "50%",
          border: `2px solid ${hovered ? colors.green : colors.border}`,
          background: hovered ? "#E8F5E9" : colors.bg,
          transition: "all 0.2s",
        }}
      />
      <div style={{ fontFamily: mono, fontSize: "0.72rem", color: colors.textTer, marginBottom: "0.4rem" }}>
        {exp.date}
      </div>
      <div style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.15rem" }}>{exp.role}</div>
      <div style={{ color: colors.textSec, fontSize: "0.88rem", marginBottom: "0.6rem" }}>{exp.company}</div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {exp.points.map((p, i) => (
          <li
            key={i}
            style={{
              fontSize: "0.84rem",
              color: colors.textSec,
              lineHeight: 1.7,
              marginBottom: "0.3rem",
              paddingLeft: "0.8rem",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "0.55em",
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: colors.textTer,
              }}
            />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
