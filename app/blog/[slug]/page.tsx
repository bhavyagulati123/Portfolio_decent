import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolio } from "@/lib/data";
import { colors, font, serif, mono } from "@/lib/constants";
import type { Metadata } from "next";

export function generateStaticParams() {
  return portfolio.blogs.map((blog) => ({ slug: blog.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const blog = portfolio.blogs.find((b) => b.slug === slug);
    if (!blog) return { title: "Blog — Bhavya Gulati" };
    return {
      title: `${blog.title} — Bhavya Gulati`,
      description: blog.excerpt,
    };
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = portfolio.blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  return (
    <div style={{ fontFamily: font, background: colors.bg, minHeight: "100vh" }}>
      <header
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "3rem 2rem 0",
        }}
      >
        <Link
          href="/#blog"
          style={{
            fontSize: "0.85rem",
            color: colors.textTer,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            transition: "color 0.2s",
          }}
        >
          ← Back to home
        </Link>
      </header>

      <article
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 2rem 5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.5rem" }}>
          <span
            style={{
              fontFamily: mono,
              fontSize: "0.7rem",
              fontWeight: 500,
              padding: "0.3rem 0.6rem",
              background: colors.accentLight,
              borderRadius: 3,
              color: colors.textSec,
            }}
          >
            {blog.tag}
          </span>
          <span style={{ fontSize: "0.8rem", color: colors.textTer }}>{blog.date}</span>
        </div>

        <h1
          style={{
            fontFamily: serif,
            fontSize: "2.2rem",
            fontWeight: 400,
            lineHeight: 1.3,
            color: colors.text,
            marginBottom: "1rem",
          }}
        >
          {blog.title}
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            color: colors.textSec,
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            paddingBottom: "2rem",
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          {blog.excerpt}
        </p>

        <div>
          {blog.content.map((paragraph, i) => (
            <p
              key={i}
              style={{
                fontSize: "1rem",
                color: colors.text,
                lineHeight: 1.85,
                marginBottom: "1.5rem",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
