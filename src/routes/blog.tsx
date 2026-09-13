import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import { buildSeo } from "@/lib/seo";
import { posts } from "@/lib/posts";
import BookCallButton from "@/components/BookCallButton";

export const Route = createFileRoute("/blog")({
  head: () => buildSeo({
    title: "Blog — CRM Automation, GoHighLevel & AI Agent Insights | ProdigyPro",
    description:
      "Practical guides on CRM automation, GoHighLevel setups and AI agents that book appointments on autopilot. Field-tested playbooks from the ProdigyPro team.",
    keywords:
      "CRM automation blog, GoHighLevel guides, AI agents for business, marketing automation articles, lead follow-up automation",
    path: "/blog",
  }),
  component: Blog,
});

function Blog() {
  const [feature, ...rest] = posts;
  return (
    <>
      <section className="page-intro mx-auto max-w-5xl px-5 py-20 text-center">
        <span className="eyebrow">Insights</span>
        <h1 className="section-heading mt-3 font-display text-5xl font-bold md:text-6xl">
          The <span className="text-gradient">automation journal</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
          Field-tested playbooks on CRM automation, GoHighLevel and AI agents — written from real client builds, not theory.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12">
        <article className="premium-card grid overflow-hidden md:grid-cols-2">
          <Link
            to="/blog/$slug"
            params={{ slug: feature.slug }}
            className="relative block aspect-[16/10] md:aspect-auto"
            aria-label={`Read: ${feature.title}`}
          >
            <img src={feature.img} alt={feature.title} className="absolute inset-0 h-full w-full object-cover" />
          </Link>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="self-start rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-semibold text-white">{feature.category}</span>
            <h2 className="mt-5 font-display text-3xl font-bold md:text-4xl">{feature.title}</h2>
            <p className="mt-4 text-sm text-muted-foreground">{feature.excerpt}</p>
            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar size={13} /> {feature.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} /> {feature.read} read</span>
            </div>
            <Link
              to="/blog/$slug"
              params={{ slug: feature.slug }}
              className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary transition hover:gap-3"
            >
              Read article <ArrowRight size={14} />
            </Link>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="premium-card group block overflow-hidden"
              aria-label={`Read: ${p.title}`}
            >
              <article>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[11px] uppercase tracking-wider backdrop-blur">{p.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {p.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {p.read} read</span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
                    Read article <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24">
        <div className="cta-panel p-8 text-center md:p-12">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Rather have this <span className="text-gradient">built for you?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We design, build and manage CRM automation, GoHighLevel systems and AI agents end to end.
          </p>
          <div className="mt-6 flex justify-center">
            <BookCallButton />
          </div>
        </div>
      </section>
    </>
  );
}
