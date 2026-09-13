import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { BookCallButton } from "@/components/BookCallButton";
import crmImage from "@/assets/portfolio-crm.jpg";
import ghlImage from "@/assets/portfolio-gohighlevel.jpg";
import aiImage from "@/assets/portfolio-ai-agent.jpg";
import conversionImage from "@/assets/portfolio-conversion.jpg";
import lifecycleImage from "@/assets/portfolio-lifecycle.jpg";
import leadgenImage from "@/assets/portfolio-leadgen.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => buildSeo({
    title: "Automation & Growth Case Studies | ProdigyPro",
    description: "Explore CRM automation, GoHighLevel, AI agent and conversion system engagements designed to improve lead response, bookings, pipeline visibility and revenue.",
    keywords: "CRM automation case studies, GoHighLevel portfolio, AI chatbot case study, marketing automation results, growth systems agency",
    path: "/portfolio",
    image: crmImage,
  }),
  component: Portfolio,
});

const projects = [
  { tag: "CRM Automation", title: "Multi-location service pipeline", metric: "3.4× Faster Response", desc: "A unified CRM, routing logic and nurture system designed to move inquiries from first contact to booked appointment.", img: crmImage, deliverables: ["Pipeline rebuild", "Lead routing", "SMS nurture"] },
  { tag: "GoHighLevel", title: "Always-on appointment engine", metric: "+186% Bookings", desc: "A complete GoHighLevel implementation connecting landing pages, calendars, missed-call workflows and sales reporting.", img: ghlImage, deliverables: ["GHL architecture", "Automations", "Attribution"] },
  { tag: "AI Agent", title: "24/7 qualification assistant", metric: "71% Self-served", desc: "An AI chat experience trained around service criteria, qualification rules and seamless handoff to the sales team.", img: aiImage, deliverables: ["Knowledge design", "Qualification", "Human handoff"] },
  { tag: "Growth System", title: "Revenue visibility rebuild", metric: "+42% Conversion", desc: "A conversion-led website, campaign tracking and executive dashboard working as one measurable acquisition system.", img: conversionImage, deliverables: ["CRO strategy", "Tracking", "Dashboards"] },
  { tag: "Lifecycle Marketing", title: "Nurture engine on autopilot", metric: "+58% Repeat Revenue", desc: "Automated email and SMS journeys covering onboarding, retention, win-back and referrals — every customer touched at the right moment.", img: lifecycleImage, deliverables: ["Journey mapping", "Email + SMS flows", "Win-back automation"] },
  { tag: "SEO & Lead Gen", title: "Local demand capture system", metric: "#1 Map Pack", desc: "Local search dominance paired with intent-led landing pages, turning map visibility and organic traffic into a steady flow of booked jobs.", img: leadgenImage, deliverables: ["Local SEO", "Landing pages", "Call tracking"] },
];

function Portfolio() {
  return (
    <>
      <section className="section-frame page-intro text-center">
        <span className="eyebrow">Selected systems</span>
        <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">Built to make growth <span className="text-gradient">visible.</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">A focused look at the CRM, automation, AI and conversion systems we design for ambitious service businesses.</p>
      </section>

      <section className="section-frame pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="portfolio-card reveal group" style={{ transitionDelay: `${index * 80}ms` }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={project.img} alt={`${project.title} automation system in use`} loading="lazy" width={1408} height={1056} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
                  <span className="case-label">{project.tag}</span>
                  <span className="case-metric">{project.metric}</span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4"><h2 className="text-2xl font-bold">{project.title}</h2><ArrowUpRight className="shrink-0 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" /></div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.deliverables.map((item) => <li key={item} className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"><Check size={12} className="text-accent" aria-hidden="true" />{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame pb-12 text-center">
        <div className="cta-panel px-6 py-14 md:px-12">
          <span className="eyebrow">Your system, next</span>
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold sm:text-3xl md:text-5xl">Let’s turn your growth process into an advantage.</h2>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <BookCallButton label="Discuss Your Project" />
            <a href="tel:+15797964824" className="button-secondary" aria-label="Call or text ProdigyPro at +1 (579) 796-4824">
              Call or Text Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}