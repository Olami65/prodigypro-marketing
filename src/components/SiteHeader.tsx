import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/components/BookCallButton";
import logo from "@/assets/logo.png";

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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl group">
        <div
          className={`relative flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-primary/30 ${
            scrolled ? "py-2.5" : "py-3.5"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="ProdigyPro Marketing — Home">
            <div className="relative w-11 h-11 rounded-lg bg-gradient-brand p-[2px]">
              <div className="w-full h-full rounded-[7px] bg-background flex items-center justify-center overflow-hidden">
                <img src={logo} alt="ProdigyPro Marketing logo" className="w-9 h-9 object-contain" />
              </div>
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-base font-semibold tracking-tight text-foreground">
                Prodigy<span className="text-gradient">Pro</span>
              </span>
              <span className="text-[10px] mt-1 text-accent uppercase tracking-[0.2em] font-medium">
                Marketing
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-7">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
                activeProps={{ className: "text-foreground" }}
              >
                {({ isActive }) => (
                  <>
                    {n.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-gradient-brand" />
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden lg:flex items-center gap-4 text-muted-foreground border-r border-white/10 pr-6">
              <a
                href="https://www.facebook.com/ProdigyproMarketing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="hover:text-accent transition-colors"
              >
                <Facebook size={16} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/olaitan-expert65"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn profile"
                className="hover:text-accent transition-colors"
              >
                <Linkedin size={16} aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/eric.olami65"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                className="hover:text-accent transition-colors"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a strategy call (opens Calendly in a new tab)"
                className="hidden sm:inline-flex text-sm font-medium text-foreground/90 px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300"
              >
                Book a Call
              </a>
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-xl bg-gradient-brand shadow-[0_0_20px_-5px_oklch(0.55_0.16_162/0.5)] hover:shadow-[0_0_30px_-5px_oklch(0.62_0.24_305/0.6)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Get Started</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>

              <button
                ref={menuButtonRef}
                className="xl:hidden p-2 text-muted-foreground hover:text-accent transition-colors"
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-nav"
              >
                {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
              </button>
            </div>
          </div>

          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>

        {/* Status pill */}
        <div className="hidden md:flex mt-3 px-2 justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <p className="text-[10px] font-medium text-accent uppercase tracking-widest">
              Now accepting new Q3 clients
            </p>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-nav"
            className="xl:hidden mt-3 rounded-2xl glass border border-white/10 animate-fade-up"
          >
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
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-semibold"
              >
                Book a Strategy Call
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white text-center"
              >
                Get Started
              </Link>
              <div className="flex items-center gap-4 pt-3 mt-2 border-t border-border/60 text-muted-foreground">
                <a
                  href="https://www.facebook.com/ProdigyproMarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/olaitan-expert65"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn profile"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/eric.olami65"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram"
                >
                  <Instagram size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
