import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, Check, Clock } from "lucide-react";

import { buildSeo } from "@/lib/seo";
import { getPost, posts } from "@/lib/posts";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { BookCallButton } from "@/components/BookCallButton";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    const seo = buildSeo({
      title: post.metaTitle,
      description: post.metaDescription,
      keywords: post.keywords,
      path: `/blog/${params.slug}`,
      image: post.img,
      type: "article",
    });
    return {
      ...seo,
      meta: [
        ...seo.meta,
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.category },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            image: post.img.startsWith("http") ? post.img : `${SITE_URL}${post.img}`,
            author: { "@type": "Organization", name: SITE_NAME },
            publisher: { "@type": "Organization", name: SITE_NAME },
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
          }),
        },
      ],
    };
  },
  component: BlogPost,
  notFoundComponent: PostNotFound,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <article className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-primary">
          <ArrowLeft size={14} /> Back to the journal
        </Link>

        <span className="mt-8 inline-block rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-semibold text-white">
          {post.category}
        </span>
        <h1 className="mt-5 font-display text-3xl font-bold leading-tight md:text-5xl">{post.title}</h1>
        <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock size={14} /> {post.read} read</span>
          <span>By {SITE_NAME}</span>
        </div>

        <div className="premium-card mt-10 overflow-hidden">
          <img src={post.img} alt={post.title} className="aspect-[16/9] w-full object-cover" />
        </div>

        <p className="mt-10 text-lg leading-relaxed text-muted-foreground">{post.intro}</p>

        {post.sections.map((s) => (
          <section key={s.heading} className="mt-12">
            <h2 className="font-display text-2xl font-bold md:text-3xl">{s.heading}</h2>
            {s.body.map((para, i) => (
              <p key={i} className="mt-4 leading-relaxed text-muted-foreground">{para}</p>
            ))}
          </section>
        ))}

        <div className="premium-card mt-12 p-6 md:p-8">
          <h2 className="font-display text-xl font-bold">Key takeaways</h2>
          <ul className="mt-4 space-y-3">
            {post.takeaways.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white">
                  <Check size={12} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="cta-panel mt-12 p-8 text-center">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Want this running in <span className="text-gradient">your business?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Book a free strategy call and we'll map exactly how this applies to you.
          </p>
          <div className="mt-6 flex justify-center">
            <BookCallButton />
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <h2 className="font-display text-2xl font-bold md:text-3xl">Keep reading</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="premium-card group flex flex-col overflow-hidden sm:flex-row"
              aria-label={`Read: ${p.title}`}
            >
              <div className="relative aspect-[16/10] sm:aspect-auto sm:w-2/5">
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <span className="text-[11px] uppercase tracking-wider text-primary">{p.category}</span>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
                  Read article <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function PostNotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-32 text-center">
      <h1 className="font-display text-4xl font-bold">Article not found</h1>
      <p className="mt-4 text-muted-foreground">This article may have been moved or removed.</p>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        <ArrowLeft size={14} /> Browse all articles
      </Link>
    </section>
  );
}
