import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export type Review = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};

const defaultReviews: Review[] = [
  { name: "Donaltha Hall", role: "CEO, Epique Realty Team", initials: "DH", quote: "ProdigyPro transformed our real estate marketing completely. A 300% increase in qualified leads and a step‑change in conversion rates." },
  { name: "Marcus Levin", role: "Founder, Lumen SaaS", initials: "ML", quote: "The team operates like an extension of ours. Pipeline doubled in two quarters with measurable, attributable ROAS." },
  { name: "Aïsha Karim", role: "CMO, Northwind Retail", initials: "AK", quote: "Senior thinking, fast execution and reporting we can actually trust. A rare combination in this industry." },
  { name: "Diego Romero", role: "Owner, Casa Romero Group", initials: "DR", quote: "Our local presence went from invisible to dominant. The GMB work alone paid for the entire engagement." },
  { name: "Priya Shah", role: "VP Growth, OrbitFin", initials: "PS", quote: "ProdigyPro's funnel rebuild lifted activation by 62%. They're now our default growth partner." },
  { name: "Ben Carter", role: "Creator, BC Studios", initials: "BC", quote: "They turned my channel into a real business. Revenue is 8x what it was nine months ago." },
];

export function TestimonialSlider({ reviews = defaultReviews }: { reviews?: Review[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, [paused, reviews.length]);

  const go = (n: number) => setIndex((n + reviews.length) % reviews.length);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl pointer-events-none" />

      <div className="relative overflow-hidden rounded-3xl glass">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {reviews.map((r) => (
            <div key={r.name} className="w-full shrink-0 p-8 md:p-14">
              <div className="mx-auto max-w-3xl text-center">
                <Quote className="mx-auto text-primary/70" size={32} />
                <div className="mt-4 flex justify-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="mt-6 font-display text-xl leading-snug md:text-3xl">
                  "{r.quote}"
                </p>
                <div className="mt-8 flex items-center justify-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-white font-bold">
                    {r.initials}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          aria-label="Previous review"
          onClick={() => go(index - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full glass hover:bg-gradient-brand hover:text-white transition"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          aria-label="Next review"
          onClick={() => go(index + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full glass hover:bg-gradient-brand hover:text-white transition"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to review ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-gradient-brand" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
