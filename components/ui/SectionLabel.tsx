import { colors, mono } from "@/lib/constants";

export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: mono,
        fontSize: "0.72rem",
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: colors.textTer,
        marginBottom: "1.2rem",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      <span
        style={{
          width: 24,
          height: 1,
          background: colors.textTer,
          display: "inline-block",
        }}
      />
      {children}
    </div>
  );
}
