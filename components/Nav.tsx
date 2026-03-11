"use client";
import { useState, useEffect } from "react";
import { colors, font, mono } from "@/lib/constants";

const navLinks = ["about", "projects", "skills", "experience", "blog", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(250,250,248,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${colors.border}`,
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.04)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: mono,
            fontSize: "0.85rem",
            fontWeight: 600,
            color: colors.text,
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          bhavya<span style={{ color: colors.green }}>.</span>gulati
        </a>
        <div style={{ display: "flex", gap: "2rem" }}>
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              style={{
                fontSize: "0.82rem",
                color: colors.textSec,
                textDecoration: "none",
                fontWeight: 500,
                fontFamily: font,
                letterSpacing: "0.02em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = colors.text)}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = colors.textSec)}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
