import { colors, mono } from "@/lib/constants";

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: mono,
        fontSize: "0.68rem",
        fontWeight: 500,
        padding: "0.3rem 0.65rem",
        background: colors.tagBg,
        borderRadius: 4,
        color: colors.textSec,
        letterSpacing: "0.01em",
      }}
    >
      {children}
    </span>
  );
}
