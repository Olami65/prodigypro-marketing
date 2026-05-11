import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Sparkles, Rocket, BarChart3, Globe, Megaphone,
  Target, Youtube, MapPin, Check, Star, ChevronRight,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import ctaBg from "@/assets/cta-bg.jpg";
import workEcommerce from "@/assets/work-ecommerce.jpg";
import workSaas from "@/assets/work-saas.jpg";
import workRealestate from "@/assets/work-realestate.jpg";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { BookCallButton } from "@/components/BookCallButton";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => buildSeo({
    title: "ProdigyPro Marketing — Premium Digital Growth Agency",
    description: "Premium digital marketing agency engineering measurable growth for ambitious brands. Websites, funnels, SEO, lead generation, social media and brand strategy that compound.",
    keywords: "digital marketing agency, premium marketing agency, sales funnels, SEO, lead generation, website development, social media marketing, GMB optimization, YouTube monetization, brand strategy",
    path: "/",
    image: hero,
  }),
  component: Home,
});

const services = [
  { icon: Megaphone, title: "Digital Marketing", desc: "Full‑funnel strategies that compound month over month." },
  { icon: Globe, title: "Website Development", desc: "High‑converting, performance‑obsessed websites." },
  { icon: Target, title: "Sales Funnels", desc: "Engineered journeys that turn clicks into customers." },
  { icon: Sparkles, title: "Social Media", desc: "Brand‑forward content that earns attention and trust." },
  { icon: Rocket, title: "Lead Generation", desc: "Predictable pipelines built on proven frameworks." },
  { icon: Youtube, title: "YouTube Monetization", desc: "Grow your channel into a sustainable revenue engine." },
  { icon: MapPin, title: "GMB & Local SEO", desc: "Dominate the map pack and local intent searches." },
  { icon: BarChart3, title: "Analytics & CRO", desc: "Decisions backed by data, not guesswork." },
];

const stats = [
  { v: "500+", l: "Projects Delivered" },
  { v: "200+", l: "Happy Clients" },
  { v: "300%", l: "Average Growth" },
  { v: "98%", l: "Client Satisfaction" },
];

const work = [
  { tag: "Web Development", title: "E‑commerce Platform Revolution", metric: "+150% Sales", img: workEcommerce },
  { tag: "Digital Marketing", title: "SaaS Growth Campaign", metric: "+400% Leads", img: workSaas },
  { tag: "Sales Funnel", title: "Real Estate Conversion Funnel", metric: "45% Close Rate", img: workRealestate },
];

const why = [
  { title: "Fast Results", desc: "Measurable wins in weeks, not quarters." },
  { title: "Proven Strategies", desc: "Frameworks tested across 200+ brands." },
  { title: "Senior Talent", desc: "No juniors learning on your account." },
  { title: "Always‑On Support", desc: "Dedicated team, transparent reporting." },
];

const faqs = [
  { q: "How quickly will I see results?", a: "Most clients see initial improvements in 30–60 days, with significant outcomes within 3–6 months depending on the channel." },
  { q: "Do you work with businesses of all sizes?", a: "Yes — from venture‑backed startups to established enterprises. Engagements are scoped to your stage." },
  { q: "What's included in your services?", a: "SEO, paid media, social, content, web, funnels, lead gen, YouTube and GMB — bundled to your goals." },
  { q: "How do you measure success?", a: "We align on KPIs upfront — pipeline, ROAS, CAC, conversion rates — and report on them transparently." },
  { q: "What's your minimum project budget?", a: "Engagements typically start at $1,000. Custom retainers scale from there." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* animated background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[oklch(0.55_0.16_162/0.25)] blur-3xl animate-blob" />
          <div className="absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.62_0.24_305/0.25)] blur-3xl animate-blob delay-300" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 md:py-20 lg:grid-cols-[1.1fr_1fr]">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide animate-fade-up">
              <Sparkles size={14} className="text-primary animate-pulse" />
              Premium Digital Growth Agency
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl animate-fade-up delay-100">
              Growth, <span className="text-gradient animate-gradient bg-clip-text" style={{ backgroundImage: "var(--gradient-text)" }}>engineered</span><br/> for ambitious brands.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg animate-fade-up delay-200">
              We design, build and scale the digital systems that move your business forward — websites, funnels, content and acquisition that compound.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up delay-300">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:translate-y-[-2px] hover:shadow-[0_20px_60px_-10px_oklch(0.62_0.24_305/0.6)] transition group">
                Start a Project <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:border-primary/40 hover:-translate-y-[2px] transition">
                Explore Services
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground animate-fade-up delay-500">
              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span>Trusted by 200+ growing brands</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-brand opacity-30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] glass p-2 shadow-[var(--shadow-soft)] animate-float">
              <img src={hero} alt="Digital marketing dashboard" width={1600} height={1200} className="w-full rounded-[1.4rem] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block glass rounded-2xl px-5 py-4 shadow-[var(--shadow-card)]">
              <div className="text-2xl font-bold text-gradient">+312%</div>
              <div className="text-xs text-muted-foreground mt-1">avg. revenue lift</div>
            </div>
            <div className="absolute -top-4 -right-4 hidden md:block glass rounded-2xl px-5 py-4 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-2 text-sm font-semibold"><Rocket size={16} className="text-primary" /> Live Pipeline</div>
              <div className="text-xs text-muted-foreground mt-1">24 qualified leads today</div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mx-auto max-w-7xl px-5 pb-16">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl glass md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="bg-background/30 px-6 py-8 text-center">
                <div className="font-display text-3xl font-bold text-gradient md:text-4xl">{s.v}</div>
                <div className="mt-1.5 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-col items-center text-center reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Services</span>
          <h2 className="mt-3 max-w-2xl text-4xl font-bold md:text-5xl">Complete digital solutions, <span className="text-gradient">end‑to‑end</span>.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">From strategy to execution — every channel, every stage.</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative rounded-2xl glass p-6 transition hover:border-primary/40 hover-lift"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-[var(--shadow-glow)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <s.icon size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition">
                Learn more <ChevronRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Selected Work</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Outcomes that <span className="text-gradient">speak</span>.</h2>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            View full portfolio <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {work.map((w, i) => (
            <article
              key={w.title}
              className="reveal hover-lift group overflow-hidden rounded-2xl glass"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={w.img} alt={w.title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-background/70 px-3 py-1 text-[11px] uppercase tracking-wider backdrop-blur">{w.tag}</span>
                <span className="absolute top-4 right-4 rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-semibold text-white animate-pulse-ring">{w.metric}</span>
              </div>
              <div className="p-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{w.title}</h3>
                <ChevronRight size={16} className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Why ProdigyPro</span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">A partner, not a <span className="text-gradient">vendor</span>.</h2>
            <p className="mt-5 text-muted-foreground">We embed with your team, learn your business and deliver work that moves the needle — measured, reported and continuously optimized.</p>
            <ul className="mt-8 space-y-3">
              {["Dedicated senior team", "Transparent monthly reporting", "Data‑driven, ROI‑first", "No long lock‑ins"].map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-brand text-white"><Check size={13} /></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {why.map((w, i) => (
              <div key={w.title} className={`rounded-2xl glass p-6 ${i % 2 ? "sm:translate-y-6" : ""}`}>
                <div className="font-display text-3xl font-bold text-gradient">0{i + 1}</div>
                <h3 className="mt-4 font-semibold">{w.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SLIDESHOW */}
      <section className="mx-auto max-w-5xl px-5 py-20 reveal">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Client Stories</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">What partners <span className="text-gradient">say</span></h2>
        </div>
        <TestimonialSlider />
        <div className="mt-8 text-center">
          <Link to="/testimonials" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
            Read more reviews <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">FAQ</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Frequently asked <span className="text-gradient">questions</span></h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl glass p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-semibold">
                {f.q}
                <ChevronRight size={18} className="shrink-0 transition group-open:rotate-90 text-primary" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-10">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={ctaBg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
          <div className="relative px-6 py-16 md:px-16 md:py-20 text-center">
            <h2 className="font-display text-4xl font-bold md:text-5xl">Ready to transform your <span className="text-gradient">business</span>?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Let's design a custom growth strategy that delivers real, measurable results.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <BookCallButton />
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold hover:border-primary/40 transition">
                Send a message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
