import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Users, TrendingUp, Heart } from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { BookCallButton } from "@/components/BookCallButton";

export const Route = createFileRoute("/about")({
  head: () => buildSeo({
    title: "About ProdigyPro — Premium Digital Marketing Agency",
    description: "Founded by operators for operators, ProdigyPro is a premium digital marketing agency that engineers measurable growth for 200+ ambitious brands across SaaS, real estate, e‑commerce and the creator economy.",
    keywords: "about ProdigyPro, digital marketing agency story, marketing team, growth agency, premium agency",
    path: "/about",
  }),
  component: About,
});

function About() {
  const values = [
    { icon: Award, title: "Excellence", desc: "We hold the bar absurdly high — and clear it." },
    { icon: TrendingUp, title: "Outcomes", desc: "Measured in pipeline, revenue and retention." },
    { icon: Users, title: "Partnership", desc: "We win when you win. Real skin in the game." },
    { icon: Heart, title: "Craft", desc: "We obsess over the details others overlook." },
  ];

  return (
    <>
      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">About Us</span>
        <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">We engineer <span className="text-gradient">growth</span>, not noise.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
          ProdigyPro Marketing is a premium digital growth agency. We partner with ambitious founders and operators to design, build and scale the systems that move modern businesses forward.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl glass p-8 md:p-10">
            <h2 className="text-3xl font-bold">Our story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Founded by operators who got tired of agencies that overpromised and underdelivered, ProdigyPro was built around a single principle: every dollar spent should be accountable to measurable outcomes.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Today we serve 200+ brands across SaaS, real estate, e‑commerce, local services and creator economy — with a senior team that ships work as if it were our own company on the line.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { v: "2018", l: "Founded" },
              { v: "20+", l: "Senior specialists" },
              { v: "12", l: "Countries served" },
              { v: "$120M+", l: "Revenue influenced" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl glass p-6">
                <div className="font-display text-3xl font-bold text-gradient">{s.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-center text-4xl font-bold md:text-5xl">What we <span className="text-gradient">value</span></h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl glass p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white"><v.icon size={20} /></div>
              <h3 className="mt-5 font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Ready to grow with us?</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <BookCallButton />
          <Link to="/contact" className="inline-flex items-center rounded-full glass px-7 py-3.5 text-sm font-semibold hover:border-primary/40 transition">
            Start the conversation
          </Link>
        </div>
      </section>
    </>
  );
}
