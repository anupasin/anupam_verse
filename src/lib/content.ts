import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * File-backed content collections.
 *
 * Adding an article or a project is dropping a .mdx file into content/ — no
 * registry to update, no build step to run. Frontmatter is validated loosely
 * here so a malformed file fails at build with a useful message rather than
 * rendering `undefined` into the page.
 *
 * `draft: true` entries are visible in `next dev` and excluded from the
 * production build, so work-in-progress can be previewed without shipping.
 */

const CONTENT_ROOT = path.join(process.cwd(), "content");
const isDev = process.env.NODE_ENV === "development";

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  draft: boolean;
  featured: boolean;
  readingMinutes: number;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  /** The one-line problem statement. The system leads with this, not the stack. */
  problem: string;
  description: string;
  date: string;
  /** Free text: "In production", "Prototype", "Archived" … */
  status: string;
  stack: string[];
  url?: string;
  repo?: string;
  draft: boolean;
  featured: boolean;
  body: string;
};

function readCollection(dir: string) {
  const full = path.join(CONTENT_ROOT, dir);
  if (!fs.existsSync(full)) return [];

  return fs
    .readdirSync(full)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(full, file), "utf8");
      const { data, content } = matter(raw);
      return { slug: file.replace(/\.mdx$/, ""), data, body: content };
    });
}

function requireString(value: unknown, field: string, slug: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(
      `content/${slug}.mdx is missing required frontmatter field "${field}".`,
    );
  }
  return value;
}

function toStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === "string") : [];
}

/** ~220wpm, rounded up, floored at 1. Close enough to be useful, quiet enough not to lie. */
function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

function byDateDesc<T extends { date: string }>(a: T, b: T) {
  return b.date.localeCompare(a.date);
}

function visible<T extends { draft: boolean }>(entry: T) {
  return isDev || !entry.draft;
}

export function getArticles(): Article[] {
  return readCollection("articles")
    .map(({ slug, data, body }) => ({
      slug,
      title: requireString(data.title, "title", `articles/${slug}`),
      description: requireString(data.description, "description", `articles/${slug}`),
      date: requireString(data.date, "date", `articles/${slug}`),
      tags: toStringArray(data.tags),
      draft: data.draft === true,
      featured: data.featured === true,
      readingMinutes: readingMinutes(body),
      body,
    }))
    .filter(visible)
    .sort(byDateDesc);
}

export function getArticle(slug: string): Article | undefined {
  return getArticles().find((article) => article.slug === slug);
}

export function getProjects(): Project[] {
  return readCollection("projects")
    .map(({ slug, data, body }) => ({
      slug,
      title: requireString(data.title, "title", `projects/${slug}`),
      problem: requireString(data.problem, "problem", `projects/${slug}`),
      description: requireString(data.description, "description", `projects/${slug}`),
      date: requireString(data.date, "date", `projects/${slug}`),
      status: typeof data.status === "string" ? data.status : "",
      stack: toStringArray(data.stack),
      url: typeof data.url === "string" ? data.url : undefined,
      repo: typeof data.repo === "string" ? data.repo : undefined,
      draft: data.draft === true,
      featured: data.featured === true,
      body,
    }))
    .filter(visible)
    .sort(byDateDesc);
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}

/** Rendered as "12 March 2026" — unambiguous, and it never reads as American. */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** The short form used in list rows, where the full date is too much furniture. */
export function formatDateShort(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
