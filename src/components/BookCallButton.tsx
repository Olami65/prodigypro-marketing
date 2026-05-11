import { ArrowRight, CalendarDays } from "lucide-react";

export const CALENDLY_URL = "https://calendly.com/lollyprince65/30min";

type Props = {
  className?: string;
  label?: string;
  variant?: "primary" | "ghost";
  withIcon?: boolean;
};

export function BookCallButton({
  className = "",
  label = "Book a Strategy Call",
  variant = "primary",
  withIcon = true,
}: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const styles =
    variant === "primary"
      ? "bg-gradient-brand text-white shadow-[var(--shadow-glow)] hover:translate-y-[-2px] hover:shadow-[0_20px_60px_-10px_oklch(0.62_0.24_305/0.6)]"
      : "glass hover:border-primary/40";
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens Calendly in a new tab)`}
      className={`${base} ${styles} group ${className}`}
    >
      {withIcon && <CalendarDays size={16} aria-hidden="true" />}
      {label}
      <ArrowRight size={16} aria-hidden="true" className="group-hover:translate-x-1 transition" />
    </a>
  );
}
