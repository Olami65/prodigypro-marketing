import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, CalendarDays } from "lucide-react";
import logo from "@/assets/logo.png";
import { CALENDLY_URL } from "@/components/BookCallButton";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/60 py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-brand blur-md opacity-50 group-hover:opacity-80 transition" />
            <img src={logo} alt="ProdigyPro Marketing" className="relative h-10 w-10 rounded-full object-cover ring-1 ring-white/20" />
          </div>
          <div className="hidden sm:block">
            <div className="font-display text-base font-bold leading-none tracking-tight">
              Prodigy<span className="text-gradient">Pro</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">Marketing</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative px-3.5 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {({ isActive }) => (
                <>
                  {n.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-brand" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <div className="hidden xl:flex items-center gap-1">
            <a href="https://www.facebook.com/ProdigyproMarketing" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="p-2 text-muted-foreground hover:text-foreground transition">
              <Facebook size={16} aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/olaitan-expert65" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn profile" className="p-2 text-muted-foreground hover:text-foreground transition">
              <Linkedin size={16} aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/eric.olami65" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram" className="p-2 text-muted-foreground hover:text-foreground transition">
              <Instagram size={16} aria-hidden="true" />
            </a>
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a strategy call (opens Calendly in a new tab)"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full glass px-4 py-2.5 text-sm font-semibold hover:border-primary/40 transition"
          >
            <CalendarDays size={14} aria-hidden="true" /> Book a Call
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_oklch(0.62_0.24_305/0.7)] hover:translate-y-[-1px] transition"
          >
            Get Started
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden glass border-t border-border/60 mt-2 animate-fade-up">
          <div className="px-5 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full glass px-5 py-2.5 text-sm font-semibold"
            >
              <CalendarDays size={14} aria-hidden="true" /> Book a Strategy Call
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white text-center"
            >
              Get Started
            </Link>
            <div className="flex items-center gap-3 pt-3 mt-2 border-t border-border/60">
              <a href="https://www.facebook.com/ProdigyproMarketing" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page"><Facebook size={18} aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/olaitan-expert65" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn profile"><Linkedin size={18} aria-hidden="true" /></a>
              <a href="https://www.instagram.com/eric.olami65" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram"><Instagram size={18} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
