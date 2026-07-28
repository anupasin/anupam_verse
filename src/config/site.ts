/**
 * Single source of truth for everything that is "about the site" rather than
 * "about a page". Change it here, not in a component.
 */

export const siteConfig = {
  name: "AnupamVerse",

  /** The wordmark in the header. Deliberately shorter than `name` — see README. */
  wordmark: "Anupam",

  /** Used in <title> templates and structured data. */
  title: "AnupamVerse — Precision language work, and the systems behind it",

  description:
    "I turn messy information into something usable — sometimes by hand, sometimes by building the system that does it. Medical and legal transcription, editorial work, and the AI systems behind both.",

  /**
   * ⚠️ SET THIS BEFORE DEPLOYING.
   * Used for canonical URLs, the sitemap, robots.txt and Open Graph tags.
   * On Vercel you can leave it and set NEXT_PUBLIC_SITE_URL instead.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://anupamverse.com",

  /** Every "get in touch" on the site resolves to this one address. */
  email: "birupia@gmail.com",

  author: {
    name: "Anupam Singh",
    /** Shown under the name in the footer and on About. */
    role: "Transcriptionist, writer, and builder of AI systems",
  },

  /** Add or remove freely; the footer renders whatever is here. */
  social: [
    // { label: "GitHub",   href: "https://github.com/…" },
    // { label: "LinkedIn", href: "https://linkedin.com/in/…" },
    // { label: "X",        href: "https://x.com/…" },
  ] as { label: string; href: string }[],

  nav: [
    { label: "Services", href: "/services" },
    { label: "Articles", href: "/articles" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** `mailto:` with a subject that makes the inbox sortable from day one. */
export function mailtoHref(subject = "Enquiry via AnupamVerse") {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`;
}
