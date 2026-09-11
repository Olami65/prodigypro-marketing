import { CalendarDays, MessageCircleMore } from "lucide-react";
import { CALENDLY_URL } from "@/components/BookCallButton";

export const CONTACT_PHONE_HREF = "tel:+15797964824";
export const CONTACT_PHONE_LABEL = "+1 (579) 796-4824";

export function FloatingActions() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="contact-dock fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 sm:bottom-6"
    >
      <div className="flex items-center gap-2 rounded-full border border-border bg-popover/95 p-1.5 shadow-[var(--shadow-dock)] backdrop-blur-xl">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-dock-button inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-4 py-2.5 text-xs font-semibold text-primary-foreground transition hover:-translate-y-0.5 sm:px-5 sm:text-sm"
          aria-label="Book a strategy call on Calendly, opens in a new tab"
        >
          <CalendarDays size={16} aria-hidden="true" />
          <span>Book a Call</span>
        </a>
        <a
          href={CONTACT_PHONE_HREF}
          className="contact-dock-button inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2.5 text-xs font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-accent/20 sm:px-5 sm:text-sm"
          aria-label={`Call or text ProdigyPro at ${CONTACT_PHONE_LABEL}`}
        >
          <MessageCircleMore size={16} aria-hidden="true" />
          <span>Call or Text</span>
        </a>
      </div>
    </aside>

  );
}