import type { ReactNode } from "react";
import { Container } from "@/components/site/Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  surface?: "white" | "slate";
  withDivider?: boolean;
};

export function Section({
  children,
  className = "",
  surface = "white",
  withDivider = false,
}: SectionProps) {
  const hasExplicitBackground = /(^|\s)bg-[^\s]+/.test(className);
  const surfaceClass = hasExplicitBackground ? "" : surface === "slate" ? "bg-slate-50" : "bg-white";
  const dividerClass = withDivider ? "border-t border-slate-200" : "";
  const sectionClassName = `py-12 md:py-16 ${surfaceClass} ${dividerClass} ${className}`.trim();

  return (
    <section className={sectionClassName}>
      <Container>{children}</Container>
    </section>
  );
}
