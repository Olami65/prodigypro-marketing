import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MessageCircle, X, CalendarDays } from "lucide-react";
import { CALENDLY_URL } from "@/components/BookCallButton";

export function FloatingActions() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <div
        id="floating-actions-menu"
        role="menu"
        aria-hidden={!open}
        className={`flex flex-col items-end gap-2.5 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
        }`}
      >
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          role="menuitem"
          tabIndex={open ? 0 : -1}
          aria-label="Book a strategy call (opens Calendly in a new tab)"
          className="group flex items-center gap-2.5 rounded-full glass pl-4 pr-3 py-2.5 text-sm font-medium shadow-[var(--shadow-card)] hover:bg-gradient-brand hover:text-white transition"
        >
          <span className="hidden sm:inline">Book Strategy Call</span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-white">
            <CalendarDays size={16} aria-hidden="true" />
          </span>
        </a>
        <a
          href="tel:+12674976688"
          role="menuitem"
          tabIndex={open ? 0 : -1}
          aria-label="Call +1 (267) 497-6688"
          className="group flex items-center gap-2.5 rounded-full glass pl-4 pr-3 py-2.5 text-sm font-medium shadow-[var(--shadow-card)] hover:bg-gradient-brand hover:text-white transition"
        >
          <span className="hidden sm:inline">+1 (267) 497‑6688</span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-white">
            <Phone size={16} aria-hidden="true" />
          </span>
        </a>
        <a
          href="mailto:support@prodigypro-marketing.com"
          role="menuitem"
          tabIndex={open ? 0 : -1}
          aria-label="Email support@prodigypro-marketing.com"
          className="group flex items-center gap-2.5 rounded-full glass pl-4 pr-3 py-2.5 text-sm font-medium shadow-[var(--shadow-card)] hover:bg-gradient-brand hover:text-white transition"
        >
          <span className="hidden sm:inline">Email Support</span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-white">
            <Mail size={16} aria-hidden="true" />
          </span>
        </a>
      </div>

      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        aria-controls="floating-actions-menu"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-white shadow-[var(--shadow-glow)] animate-pulse-ring hover:scale-105 transition"
      >
        {open ? <X size={22} aria-hidden="true" /> : <MessageCircle size={22} aria-hidden="true" />}
      </button>
    </div>
  );
}
