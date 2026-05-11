import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingActions } from "@/components/FloatingActions";
import { useReveal } from "@/hooks/use-reveal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white">
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ProdigyPro Marketing — Premium Digital Growth Agency" },
      { name: "description", content: "Premium Digital Marketing Agency engineering measurable growth — websites, funnels, SEO, lead generation and brand strategy." },
      { name: "author", content: "ProdigyPro Marketing" },
      { property: "og:title", content: "ProdigyPro Marketing — Premium Digital Growth Agency" },
      { property: "og:description", content: "Premium Digital Marketing Agency engineering measurable growth — websites, funnels, SEO, lead generation and brand strategy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ProdigyPro Marketing — Premium Digital Growth Agency" },
      { name: "twitter:description", content: "Premium Digital Marketing Agency engineering measurable growth — websites, funnels, SEO, lead generation and brand strategy." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/lGIustX9erae4WO60xOKYzqRP6w1/social-images/social-1778427595439-Create_a_professional_logo_for__ProdigyPro_Marketing_Agency,__a_web_design_and_funnel_expert_agency.__The_logo_should_be_clean,_modern,_and_incorporate_a_color_palette_of_light_green_and_white.__It_should_feature_a_.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/lGIustX9erae4WO60xOKYzqRP6w1/social-images/social-1778427595439-Create_a_professional_logo_for__ProdigyPro_Marketing_Agency,__a_web_design_and_funnel_expert_agency.__The_logo_should_be_clean,_modern,_and_incorporate_a_color_palette_of_light_green_and_white.__It_should_feature_a_.webp" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useReveal();

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    const id = requestAnimationFrame(() => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.in-view)");
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      els.forEach((el) => io.observe(el));
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="main-content" key={pathname} className="pt-24 animate-fade-in" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingActions />
    </QueryClientProvider>
  );
}
