import { CalendarDays, MessageCircleMore } from "lucide-react";
import { CALENDLY_URL } from "@/components/BookCallButton";

export const CONTACT_PHONE_HREF = "tel:+15797964824";
export const CONTACT_PHONE_LABEL = "+1 (579) 796-4824";

export function FloatingActions() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="contact-dock fixed inset-x-3 bottom-3 z-40 mx-auto grid max-w-xl grid-cols-2 gap-2 rounded-2xl border border-border bg-popover/95 p-2 shadow-[var(--shadow-dock)] backdrop-blur-xl sm:bottom-5 sm:gap-3 sm:p-3"
    >
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-dock-button group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-gradient-brand px-3 text-center text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 sm:min-h-16 sm:text-base"
        aria-label="Book a strategy call on Calendly, opens in a new tab"
      >
        <CalendarDays size={19} aria-hidden="true" />
        <span>Book a Call</span>
      </a>
      <a
        href={CONTACT_PHONE_HREF}
        className="contact-dock-button group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-3 text-center text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:bg-accent/20 sm:min-h-16 sm:text-base"
        aria-label={`Call or text ProdigyPro at ${CONTACT_PHONE_LABEL}`}
      >
        <MessageCircleMore size={19} aria-hidden="true" />
        <span>Call or Text</span>
      </a>
    </aside>
  );
}