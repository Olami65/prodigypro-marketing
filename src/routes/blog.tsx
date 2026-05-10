import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () => buildSeo({
    title: "Growth Journal — Insights, Frameworks & Case Studies | ProdigyPro",
    description: "The ProdigyPro Growth Journal — practical frameworks, teardowns and case studies on conversion, funnels, local SEO, paid media, the creator economy and modern brand building.",
    keywords: "marketing blog, growth marketing blog, CRO playbook, sales funnel guide, local SEO 2026, YouTube monetization tips, brand vs performance marketing",
    path: "/blog",
  }),
  component: Blog,
});

const posts = [
  { title: "The CRO playbook we use to lift conversions 30%+ in 60 days", cat: "Conversion", date: "May 2, 2026", read: "8 min", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop" },
  { title: "How to architect a sales funnel that compounds", cat: "Funnels", date: "Apr 18, 2026", read: "11 min", img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&h=600&fit=crop" },
  { title: "Local SEO in 2026: what actually moves the map pack", cat: "SEO", date: "Apr 6, 2026", read: "9 min", img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=900&h=600&fit=crop" },
  { title: "Creator economy growth: turning a channel into a business", cat: "YouTube", date: "Mar 22, 2026", read: "7 min", img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&h=600&fit=crop" },
  { title: "Brand vs. performance: stop choosing, start integrating", cat: "Strategy", date: "Mar 10, 2026", read: "10 min", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop" },
  { title: "The reporting stack we recommend to every client", cat: "Analytics", date: "Feb 28, 2026", read: "6 min", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop" },
];

function Blog() {
  const [feature, ...rest] = posts;
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">Insights</span>
        <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">The <span className="text-gradient">growth journal</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
          Frameworks, teardowns and case studies from the team.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12">
        <article className="grid overflow-hidden rounded-3xl glass md:grid-cols-2">
          <div className="relative aspect-[16/10] md:aspect-auto">
            <img src={feature.img} alt={feature.title} className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="self-start rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-semibold text-white">{feature.cat}</span>
            <h2 className="mt-5 font-display text-3xl font-bold md:text-4xl">{feature.title}</h2>
            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar size={13} /> {feature.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} /> {feature.read}</span>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary">
              Read article <ArrowRight size={14} />
            </button>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl glass">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute top-4 left-4 rounded-full bg-background/70 px-3 py-1 text-[11px] uppercase tracking-wider backdrop-blur">{p.cat}</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold leading-snug">{p.title}</h3>
                <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {p.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {p.read}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
