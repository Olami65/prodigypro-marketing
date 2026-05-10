import { createFileRoute, Link } from "@tanstack/react-router";
import { Megaphone, Globe, Target, Sparkles, Rocket, Youtube, MapPin, BarChart3, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ProdigyPro Marketing" },
      { name: "description", content: "Digital marketing, web development, sales funnels, lead generation, SEO, GMB and YouTube monetization." },
      { property: "og:title", content: "Services — ProdigyPro Marketing" },
      { property: "og:description", content: "Full‑stack digital growth services." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Megaphone, title: "Digital Marketing", desc: "Cross‑channel strategy, paid media, content and brand — built to compound.", points: ["Paid Search & Social", "Content Strategy", "Email & Lifecycle"] },
  { icon: Globe, title: "Website Development", desc: "Performance‑first sites engineered for conversion and longevity.", points: ["Design & UX", "Headless / CMS", "Speed & SEO"] },
  { icon: Target, title: "Sales Funnels", desc: "Engineered customer journeys that convert at every step.", points: ["Funnel Architecture", "Copywriting", "A/B Testing"] },
  { icon: Sparkles, title: "Social Media", desc: "Brand‑forward content systems that build attention and trust.", points: ["Content Production", "Community", "Influencer"] },
  { icon: Rocket, title: "Lead Generation", desc: "Predictable pipelines built on proven outbound and inbound playbooks.", points: ["ICP & Offer", "Outbound", "Lead Magnets"] },
  { icon: Youtube, title: "YouTube Monetization", desc: "Channel strategy and content systems that scale watch time and revenue.", points: ["Strategy", "Production", "Monetization"] },
  { icon: MapPin, title: "GMB & Local SEO", desc: "Win the map pack and high‑intent local searches in your market.", points: ["GMB Optimization", "Citations", "Reviews"] },
  { icon: BarChart3, title: "Analytics & CRO", desc: "Decisions backed by data — instrumentation, dashboards and tests.", points: ["GA4 / Tagging", "Dashboards", "CRO Sprints"] },
];

function Services() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">Services</span>
        <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">Everything you need to <span className="text-gradient">grow</span>.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
          Modular services that combine into the engagement your business actually needs. No bloat, no fluff — just the work that moves metrics.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl glass p-7 transition hover:border-primary/40">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-[var(--shadow-glow)]">
                  <s.icon size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check size={13} className="text-primary" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Not sure where to start?</h2>
        <p className="mt-3 text-muted-foreground">Book a free 30‑minute strategy call and we'll map a plan together.</p>
        <Link to="/contact" className="mt-6 inline-flex rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-white">Book strategy call</Link>
      </section>
    </>
  );
}
