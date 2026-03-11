"use client";
import { useState } from "react";
import { colors, font, mono } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("https://formsubmit.co/ajax/bhavyagulati651@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div
        style={{
          padding: "2.5rem",
          border: `1px solid ${colors.border}`,
          borderRadius: 12,
          background: colors.surface,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "1.5rem", marginBottom: "0.8rem" }}>Thanks!</div>
        <div style={{ fontSize: "0.9rem", color: colors.textSec, lineHeight: 1.7, marginBottom: "1.5rem" }}>
          Your message has been sent. I&apos;ll get back to you soon.
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          style={{
            padding: "0.65rem 1.5rem",
            fontFamily: font,
            fontSize: "0.85rem",
            fontWeight: 500,
            color: colors.text,
            background: "transparent",
            border: `1px solid ${colors.border}`,
            borderRadius: 8,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.borderHover; e.currentTarget.style.background = colors.bg; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.background = "transparent"; }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div>
        <label
          htmlFor="name"
          style={{
            display: "block",
            fontFamily: mono,
            fontSize: "0.72rem",
            fontWeight: 500,
            color: colors.textTer,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "0.4rem",
          }}
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            fontFamily: font,
            fontSize: "0.9rem",
            color: colors.text,
            background: colors.bg,
            border: `1px solid ${colors.border}`,
            borderRadius: 8,
            outline: "none",
            transition: "border-color 0.2s",
            boxSizing: "border-box",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = colors.borderHover)}
          onBlur={(e) => (e.currentTarget.style.borderColor = colors.border)}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          style={{
            display: "block",
            fontFamily: mono,
            fontSize: "0.72rem",
            fontWeight: 500,
            color: colors.textTer,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "0.4rem",
          }}
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            fontFamily: font,
            fontSize: "0.9rem",
            color: colors.text,
            background: colors.bg,
            border: `1px solid ${colors.border}`,
            borderRadius: 8,
            outline: "none",
            transition: "border-color 0.2s",
            boxSizing: "border-box",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = colors.borderHover)}
          onBlur={(e) => (e.currentTarget.style.borderColor = colors.border)}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          style={{
            display: "block",
            fontFamily: mono,
            fontSize: "0.72rem",
            fontWeight: 500,
            color: colors.textTer,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "0.4rem",
          }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Your message..."
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            fontFamily: font,
            fontSize: "0.9rem",
            color: colors.text,
            background: colors.bg,
            border: `1px solid ${colors.border}`,
            borderRadius: 8,
            outline: "none",
            resize: "vertical",
            transition: "border-color 0.2s",
            boxSizing: "border-box",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = colors.borderHover)}
          onBlur={(e) => (e.currentTarget.style.borderColor = colors.border)}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        style={{
          padding: "0.8rem 2rem",
          fontFamily: font,
          fontSize: "0.88rem",
          fontWeight: 500,
          color: colors.bg,
          background: colors.text,
          border: "none",
          borderRadius: 8,
          cursor: sending ? "not-allowed" : "pointer",
          alignSelf: "flex-start",
          transition: "opacity 0.2s",
          opacity: sending ? 0.6 : 1,
        }}
        onMouseEnter={(e) => { if (!sending) e.currentTarget.style.opacity = "0.85"; }}
        onMouseLeave={(e) => { if (!sending) e.currentTarget.style.opacity = "1"; }}
      >
        {sending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
