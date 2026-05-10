import hero from "@/assets/hero.jpg";

export const SITE_URL = "https://prodigypro-marketing.com";
export const SITE_NAME = "ProdigyPro Marketing";
export const DEFAULT_OG_IMAGE = hero;

type SeoArgs = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  keywords?: string;
};

export function buildSeo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  keywords,
}: SeoArgs) {
  const url = `${SITE_URL}${path}`;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(keywords ? [{ name: "keywords", content: keywords }] : []),
      { name: "author", content: SITE_NAME },
      { name: "robots", content: "index, follow" },

      // Open Graph
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: fullImage },
      { property: "og:image:alt", content: title },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_US" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: fullImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
