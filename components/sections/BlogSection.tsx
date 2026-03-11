import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import BlogCard from "@/components/ui/BlogCard";
import { portfolio } from "@/lib/data";
import { colors } from "@/lib/constants";

export default function BlogSection() {
  return (
    <section id="blog" style={{ padding: "6rem 2rem", background: colors.surface }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel>Blog</SectionLabel>
          <SectionTitle>Recent writing</SectionTitle>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", marginTop: "2.5rem" }}>
          {portfolio.blogs.map((b, i) => (
            <Reveal key={i} delay={0.1 * (i + 1)}>
              <BlogCard blog={b} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
