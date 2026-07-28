import type { MetadataRoute } from "next";
import { getArticles, getProjects } from "@/lib/content";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const staticRoutes = ["", "/services", "/articles", "/projects", "/about", "/contact"].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }),
  );

  const articles = getArticles().map((article) => ({
    url: `${base}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const projects = getProjects().map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articles, ...projects];
}
