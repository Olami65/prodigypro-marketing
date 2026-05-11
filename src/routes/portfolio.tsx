import { createFileRoute, Link } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import workEcommerce from "@/assets/work-ecommerce.jpg";
import workSaas from "@/assets/work-saas.jpg";
import workRealestate from "@/assets/work-realestate.jpg";
import workRestaurant from "@/assets/work-restaurant.jpg";
import workFintech from "@/assets/work-fintech.jpg";
import workYoutube from "@/assets/work-youtube.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => buildSeo({
    title: "Portfolio & Case Studies — ProdigyPro Marketing",
    description: "Selected case studies and measurable outcomes from ProdigyPro engagements: +150% e‑commerce sales, +400% SaaS leads, 45% real estate close rates, +200% local foot traffic and more.",
    keywords: "marketing case studies, digital marketing portfolio, growth case studies, SaaS marketing results, real estate funnel results, e-commerce growth case study",
    path: "/portfolio",
    image: workEcommerce,
  }),
  component: Portfolio,
});

const projects = [
  { tag: "Web Development", title: "E‑commerce Platform Revolution", metric: "+150% Sales", desc: "Complete e‑commerce transformation with re‑platform, CRO and paid acquisition.", img: workEcommerce },
  { tag: "Digital Marketing", title: "SaaS Growth Campaign", metric: "+400% Leads", desc: "Multi‑channel campaign across paid, content and lifecycle.", img: workSaas },
  { tag: "Sales Funnel", title: "Real Estate Conversion Funnel", metric: "45% Close Rate", desc: "High‑converting luxury real estate funnel and nurture sequence.", img: workRealestate },
  { tag: "Local SEO & GMB", title: "Restaurant Chain Transformation", metric: "+200% Foot Traffic", desc: "Local SEO and GMB optimization across 24 locations.", img: workRestaurant },
  { tag: "Brand & Web", title: "Fintech Brand Launch", metric: "0 → 25k Users", desc: "End‑to‑end brand identity, web and acquisition for a fintech launch.", img: workFintech },
  { tag: "YouTube", title: "Creator Monetization System", metric: "+8x Channel Revenue", desc: "Channel strategy, packaging and monetization for a creator scaling past 1M subs.", img: workYoutube },
];

function Portfolio() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">Portfolio</span>
        <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">Work we're <span className="text-gradient">proud</span> of.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
          A snapshot of recent engagements across SaaS, real estate, e‑commerce, local services and the creator economy.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal hover-lift group overflow-hidden rounded-2xl glass"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-background/70 px-3 py-1 text-[11px] uppercase tracking-wider backdrop-blur">{p.tag}</span>
                <span className="absolute top-4 right-4 rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-semibold text-white">{p.metric}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Your story could be next.</h2>
        <Link to="/contact" className="mt-6 inline-flex rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-white">Start a project</Link>
      </section>
    </>
  );
}
