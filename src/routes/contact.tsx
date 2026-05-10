import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => buildSeo({
    title: "Contact ProdigyPro — Start a Growth Project Today",
    description: "Talk to ProdigyPro Marketing. Call +1 (267) 497‑6688, email support@prodigypro-marketing.com or send us a message — we respond within one business day with next steps.",
    keywords: "contact ProdigyPro, hire digital marketing agency, marketing agency contact, growth agency consultation, book strategy call",
    path: "/contact",
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">Contact</span>
        <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">Let's build something <span className="text-gradient">remarkable</span>.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
          Tell us about your goals — we'll respond within one business day with next steps.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          {/* Left: contact info */}
          <div className="rounded-3xl glass p-8 md:p-10">
            <h2 className="text-2xl font-bold">Reach us directly</h2>
            <p className="mt-2 text-sm text-muted-foreground">Prefer to skip the form? Use any of these.</p>

            <div className="mt-8 space-y-5">
              <a href="tel:+12674976688" className="flex items-start gap-4 group">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white"><Phone size={18} /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                  <div className="font-semibold group-hover:text-primary transition">+1 (267) 497‑6688</div>
                </div>
              </a>
              <a href="mailto:support@prodigypro-marketing.com" className="flex items-start gap-4 group">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white"><Mail size={18} /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="font-semibold group-hover:text-primary transition break-all">support@prodigypro-marketing.com</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white"><MapPin size={18} /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Coverage</div>
                  <div className="font-semibold">Serving clients globally</div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border/60">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Follow us</div>
              <div className="mt-3 flex items-center gap-2">
                <a href="https://www.facebook.com/ProdigyproMarketing" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-gradient-brand hover:text-white transition"><Facebook size={16} /></a>
                <a href="https://www.linkedin.com/in/olaitan-expert65" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-gradient-brand hover:text-white transition"><Linkedin size={16} /></a>
                <a href="https://www.instagram.com/eric.olami65" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-gradient-brand hover:text-white transition"><Instagram size={16} /></a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl glass p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold">Tell us about your project</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Name" type="text" name="name" required />
              <Field label="Email" type="email" name="email" required />
              <Field label="Company" type="text" name="company" />
              <Field label="Phone" type="tel" name="phone" />
            </div>
            <div className="mt-4">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Service</label>
              <select className="mt-1.5 w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary">
                <option>Digital Marketing</option>
                <option>Website Development</option>
                <option>Sales Funnels</option>
                <option>Lead Generation</option>
                <option>SEO & GMB</option>
                <option>YouTube Monetization</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea required rows={5} className="mt-1.5 w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none" placeholder="What are you trying to grow?" />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)]"
            >
              {sent ? "Message sent — we'll be in touch" : "Send Message"} {!sent && <Send size={15} />}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <input {...props} className="mt-1.5 w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
    </label>
  );
}
