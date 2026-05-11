import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { BookCallButton } from "@/components/BookCallButton";

export const Route = createFileRoute("/testimonials")({
  head: () => buildSeo({
    title: "Client Testimonials & Reviews — ProdigyPro Marketing",
    description: "Real words from real clients. Hear from founders, CMOs and operators across SaaS, real estate, retail, fintech and creator brands on what it's like to work with ProdigyPro.",
    keywords: "ProdigyPro reviews, marketing agency testimonials, client reviews, digital marketing testimonials, agency case study reviews",
    path: "/testimonials",
  }),
  component: Testimonials,
});

const reviews = [
  { name: "Donaltha Hall", role: "CEO, Epique Realty Team", quote: "ProdigyPro transformed our real estate marketing completely. 300% more qualified leads and a step‑change in conversion." },
  { name: "Marcus Levin", role: "Founder, Lumen SaaS", quote: "The team operates like an extension of ours. Pipeline doubled in two quarters with measurable ROAS." },
  { name: "Aïsha Karim", role: "CMO, Northwind Retail", quote: "Senior thinking, fast execution and reporting we can actually trust. A rare combination." },
  { name: "Diego Romero", role: "Owner, Casa Romero Group", quote: "Our local presence went from invisible to dominant. The GMB work alone paid for the entire engagement." },
  { name: "Priya Shah", role: "VP Growth, OrbitFin", quote: "ProdigyPro's funnel rebuild lifted activation by 62%. They're now our default growth partner." },
  { name: "Ben Carter", role: "Creator, BC Studios", quote: "They turned my channel into a real business. Revenue is 8x what it was 9 months ago." },
];

function Testimonials() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">Testimonials</span>
        <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">Real words from <span className="text-gradient">real clients</span>.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
          We're proud of the long‑term partnerships we've built. Here's what some of them have to say.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className="reveal hover-lift relative rounded-2xl glass p-7"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote size={28} className="text-primary/60" />
              <p className="mt-4 text-sm leading-relaxed">{r.quote}</p>
              <div className="mt-5 flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, j) => <Star key={j} size={13} fill="currentColor" />)}
              </div>
              <div className="mt-4 border-t border-border/60 pt-4">
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Become our next success story.</h2>
        <div className="mt-6"><BookCallButton /></div>
      </section>
    </>
  );
}
