import Link from "next/link";

export type CTAButtonVariant =
  | "primary"
  | "secondary"
  | "primaryOnDark"
  | "secondaryOnDark";

type CTAButtonProps = {
  href: string;
  label: string;
  variant?: CTAButtonVariant;
  className?: string;
};

const VARIANT_CLASSES: Record<CTAButtonVariant, string> = {
  primary: "bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-slate-900",
  secondary:
    "border border-slate-300 text-slate-900 hover:bg-slate-100 focus-visible:outline-slate-900",
  primaryOnDark:
    "bg-white text-slate-900 hover:bg-slate-200 focus-visible:outline-white",
  secondaryOnDark:
    "border border-slate-600 text-slate-300 hover:bg-slate-900/40 focus-visible:outline-slate-200",
};

export function CTAButton({
  href,
  label,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const classes = VARIANT_CLASSES[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${classes} ${className}`}
    >
      {label}
    </Link>
  );
}
