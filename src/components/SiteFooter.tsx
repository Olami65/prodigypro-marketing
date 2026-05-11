import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, CalendarDays } from "lucide-react";
import logo from "@/assets/logo.png";
import { CALENDLY_URL } from "@/components/BookCallButton";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="ProdigyPro" className="h-10 w-10 rounded-full ring-1 ring-white/20" />
              <div>
                <div className="font-display font-bold">Prodigy<span className="text-gradient">Pro</span></div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">Marketing</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              A premium digital marketing agency engineering measurable growth for ambitious brands worldwide.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a href="https://www.facebook.com/ProdigyproMarketing" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-gradient-brand hover:text-white transition">
                <Facebook size={15} />
              </a>
              <a href="https://www.linkedin.com/in/olaitan-expert65" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-gradient-brand hover:text-white transition">
                <Linkedin size={15} />
              </a>
              <a href="https://www.instagram.com/eric.olami65" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-gradient-brand hover:text-white transition">
                <Instagram size={15} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase">Company</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
              <li><Link to="/testimonials" className="hover:text-foreground">Testimonials</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-foreground"
                  aria-label="Book a strategy call (opens Calendly in a new tab)"
                >
                  <CalendarDays size={13} aria-hidden="true" /> Book a Call
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>Digital Marketing</li>
              <li>Web Development</li>
              <li>Sales Funnels</li>
              <li>Lead Generation</li>
              <li>SEO & GMB</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 text-primary" />
                <a href="tel:+12674976688" className="hover:text-foreground">+1 (267) 497‑6688</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 text-primary" />
                <a href="mailto:support@prodigypro-marketing.com" className="hover:text-foreground break-all">support@prodigypro-marketing.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 text-primary" />
                <span>Serving clients globally</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ProdigyPro Marketing. All rights reserved.</p>
          <p>Crafted for brands that demand more.</p>
        </div>
      </div>
    </footer>
  );
}
