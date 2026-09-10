import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bot, Braces, Check, DatabaseZap, Gauge, Globe, LineChart, Megaphone,
  MessageSquareMore, Route as RouteIcon, Search, Settings2, Sparkles, Target,
} from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { BookCallButton } from "@/components/BookCallButton";

export const Route = createFileRoute("/services")({
  head: () => buildSeo({
    title: "CRM Automation, GoHighLevel & AI Agents | ProdigyPro",
    description: "Premium CRM automation, GoHighLevel implementation, AI agents, chatbots, funnels and digital growth systems built to capture, nurture and convert more leads.",
    keywords: "CRM automation agency, GoHighLevel expert, AI chatbot agency, AI sales agent, marketing automation, lead nurture automation, sales pipeline automation",
    path: "/services",
  }),
  component: Services,
});

const flagship = [
  {
    icon: DatabaseZap,
    number: "01",
    title: "CRM Automation",
    desc: "A connected customer system that captures every lead, routes every opportunity and keeps follow-up moving without manual admin.",
    points: ["Pipeline architecture", "Lead scoring & routing", "Email and SMS nurture", "Reactivation campaigns"],
    outcome: "Fewer missed leads. Faster response. A pipeline your team can trust.",
  },
  {
    icon: Settings2,
    number: "02",
    title: "GoHighLevel Systems",
    desc: "Strategy, build and optimization for a GoHighLevel workspace tailored to your sales process—not a recycled snapshot.",
    points: ["Account architecture", "Funnels & calendars", "Workflows & triggers", "Dashboards & attribution"],
    outcome: "One operating system for marketing, sales and customer communication.",
  },
  {
    icon: Bot,
    number: "03",
    title: "AI Agents & Chatbots",
    desc: "On-brand AI agents that answer questions, qualify prospects, recover missed calls and book appointments around the clock.",
    points: ["Website & social chat", "AI voice workflows", "Lead qualification", "Human handoff logic"],
    outcome: "A faster first response and a better experience at every hour.",
  },
];

const supporting = [
  { icon: Globe, title: "Conversion Websites", desc: "Fast, persuasive websites designed around your buyer journey and connected to your CRM." },
  { icon: RouteIcon, title: "Sales Funnels", desc: "Focused landing pages, offers and nurture journeys that move prospects toward action." },
  { icon: Megaphone, title: "Paid Growth", desc: "Intent-led search and social campaigns with clean attribution from click to closed deal." },
  { icon: Search, title: "SEO & Local Visibility", desc: "Technical, content and local search systems that build qualified organic demand." },
  { icon: MessageSquareMore, title: "Lifecycle Marketing", desc: "Email and SMS programs for onboarding, retention, reactivation and referrals." },
  { icon: LineChart, title: "Analytics & CRO", desc: "Dashboards, tracking and structured experiments that improve decisions and conversion." },
];

const process = [
  { step: "01", title: "Audit", desc: "We map your offer, lead sources, sales process and the friction costing you revenue." },
  { step: "02", title: "Architect", desc: "We design the CRM, automation logic, messaging and measurement plan around your workflow." },
  { step: "03", title: "Implement", desc: "We build, connect, test and document the system before your team takes it live." },
  { step: "04", title: "Optimize", desc: "We monitor the numbers, refine weak points and expand what produces measurable growth." },
];

function Services() {
  return (
    <>
      <section className="section-frame page-intro text-center">
        <span className="eyebrow">Automation-led growth services</span>
        <h1 className="mx-auto mt-4 max-w-4xl font-display text-5xl font-bold leading-tight md:text-7xl">
          Build the system that <span className="text-gradient">runs your growth.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          We connect acquisition, CRM, follow-up and AI into one revenue engine—so every lead gets the right response and your team can focus on closing.
        </p>
      </section>

      <section className="section-frame pb-24" aria-labelledby="flagship-services">
        <div className="section-heading reveal">
          <div>
            <span className="eyebrow">Core expertise</span>
            <h2 id="flagship-services" className="mt-3 text-4xl font-bold md:text-5xl">Your growth infrastructure.</h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">Strategy and implementation live together. We design the system, build every workflow and make sure it works in the real world.</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {flagship.map((service, index) => (
            <article key={service.title} className="premium-card reveal group p-7 md:p-8" style={{ transitionDelay: `${index * 90}ms` }}>
              <div className="flex items-center justify-between">
                <span className="service-icon"><service.icon size={24} aria-hidden="true" /></span>
                <span className="font-display text-sm text-muted-foreground">{service.number}</span>
              </div>
              <h3 className="mt-8 text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              <ul className="mt-7 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm"><Check size={15} className="text-accent" aria-hidden="true" />{point}</li>
                ))}
              </ul>
              <p className="mt-7 border-t border-border pt-5 text-sm font-semibold text-accent">{service.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band py-24" aria-labelledby="supporting-services">
        <div className="section-frame">
          <div className="text-center reveal">
            <span className="eyebrow">Supporting capabilities</span>
            <h2 id="supporting-services" className="mt-3 text-4xl font-bold md:text-5xl">Everything around the engine.</h2>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            {supporting.map((service) => (
              <article key={service.title} className="service-row reveal">
                <service.icon size={20} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                <div><h3 className="font-bold">{service.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame py-24" aria-labelledby="process-heading">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal">
            <span className="eyebrow">How we work</span>
            <h2 id="process-heading" className="mt-3 text-4xl font-bold md:text-5xl">From bottleneck to operating system.</h2>
            <p className="mt-5 text-muted-foreground">A disciplined process keeps the work commercially grounded and your team clear on what happens next.</p>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {process.map((item) => (
              <li key={item.step} className="bg-background p-6 md:p-8">
                <span className="font-display text-sm font-bold text-accent">{item.step}</span>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-frame pb-12 text-center">
        <div className="cta-panel px-6 py-14 md:px-12 md:py-16">
          <Sparkles className="mx-auto text-accent" aria-hidden="true" />
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold md:text-5xl">Your next lead should never disappear into a spreadsheet.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Book a free 30-minute strategy call. We’ll identify the highest-value automation opportunity in your current process.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <BookCallButton label="Book a Free Strategy Call" />
            <Link to="/contact" className="button-secondary">Send a message</Link>
          </div>
        </div>
      </section>
    </>
  );
}