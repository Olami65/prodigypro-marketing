import { useState } from "react";
import { Phone, Mail, MessageCircle, X } from "lucide-react";

export function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <div
        className={`flex flex-col items-end gap-2.5 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
        }`}
      >
        <a
          href="tel:+12674976688"
          className="group flex items-center gap-2.5 rounded-full glass pl-4 pr-3 py-2.5 text-sm font-medium shadow-[var(--shadow-card)] hover:bg-gradient-brand hover:text-white transition"
        >
          <span className="hidden sm:inline">+1 (267) 497‑6688</span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-white">
            <Phone size={16} />
          </span>
        </a>
        <a
          href="mailto:support@prodigypro-marketing.com"
          className="group flex items-center gap-2.5 rounded-full glass pl-4 pr-3 py-2.5 text-sm font-medium shadow-[var(--shadow-card)] hover:bg-gradient-brand hover:text-white transition"
        >
          <span className="hidden sm:inline">Email Support</span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-white">
            <Mail size={16} />
          </span>
        </a>
      </div>

      <button
        onClick={() => setOpen(!open)}
        aria-label="Contact options"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-white shadow-[var(--shadow-glow)] animate-pulse-ring hover:scale-105 transition"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
