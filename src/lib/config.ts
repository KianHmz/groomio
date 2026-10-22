const env = import.meta.env;

export const siteConfig = {
  name: env.VITE_SITE_NAME ?? "Groomio",
  description: env.VITE_SITE_DESCRIPTION ?? "",
  url: env.VITE_SITE_URL ?? "http://localhost:5173",
  ogImage: env.VITE_OG_IMAGE ?? `${env.VITE_SITE_URL}/og.png`,
  links: {
    github: env.VITE_GITHUB_URL ?? "",
  },
  author: env.VITE_AUTHOR ?? "",
  keywords: (env.VITE_KEYWORDS ?? "")
    .split(",")
    .map((k: string) => k.trim())
    .filter(Boolean),
};
