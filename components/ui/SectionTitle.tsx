import { colors, serif } from "@/lib/constants";

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: serif,
        fontSize: "clamp(2rem,4vw,2.8rem)",
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
        marginBottom: "1.5rem",
        color: colors.text,
      }}
    >
      {children}
    </h2>
  );
}
