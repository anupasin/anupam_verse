# AnupamVerse

Personal site for an independent AI consultant, builder and writer. Next.js 15
(App Router), TypeScript, Tailwind CSS v4, MDX content. Fully static, deploy-ready
for Vercel.

## Before you point a domain at it

One line left, in [`src/config/site.ts`](src/config/site.ts):

| Field | Currently | Why it matters |
| --- | --- | --- |
| `url` | `https://anupamverse.com` | Canonical URLs, sitemap, robots and Open Graph all resolve against it. Set `NEXT_PUBLIC_SITE_URL` in the Vercel project instead if you'd rather not hard-code it. |

`email` is set to `birupia@gmail.com` and every "get in touch" on the site
resolves to it. It's a `mailto:` in plain HTML, so it is publicly scrapeable —
if that becomes a spam problem, the fix is a contact form, not obfuscation.

## Run it

```bash
npm install
```

```bash
npm run dev
```

`npm run build` produces a fully static export; `npm run typecheck` runs TS alone.

## Adding your photo

Drop a file at **`public/portrait.jpg`**. Nothing else to change — the homepage
picks it up automatically.

`portrait.png`, `portrait.webp`, `portrait.avif` and `anupam.*` all work too; see
[`src/lib/portrait.ts`](src/lib/portrait.ts).

With a photo present, the band under the hero becomes two columns — portrait left,
the three credibility claims stacked right. Without one it falls back to the
three-cell strip, so the page is never showing an empty frame.

Things worth knowing before you pick a shot:

- **It renders in black and white.** That's a Modernist rule, not a style choice
  I made — the system puts every photograph through `.grayscale`. Pick an image
  with good tonal contrast rather than good colour.
- **Portrait orientation, roughly 4:5.** It's cropped with `object-cover` at
  400px wide on desktop and full-width on mobile, so keep your face in the upper
  middle and leave room at the edges.
- **At least 1200px on the short side.** The column renders at 400 CSS px, which
  is 1000+ real pixels on a retina screen.

## Adding content

Drop a `.mdx` file into `content/articles/` or `content/projects/`. No registry
to update — the route, the index entry, the sitemap and the reading time are all
derived from the file.

```yaml
---
title: "Fluent, confident, wrong"
description: "One sentence. Used on the index, in <meta>, and above the article."
date: "2026-07-20"        # ISO. Sorting and display both use this.
tags: ["AI", "Craft"]
featured: true            # articles: no effect yet · projects: shows on the homepage
draft: false              # true = visible in `npm run dev`, excluded from the build
---
```

Projects take two extra fields: `problem` (the one-line problem statement the
card leads with) and optionally `status`, `stack`, `url`, `repo`.

**`draft: true` is the important one.** Draft entries render in development so you
can see the design, and are stripped from the production build — they generate no
route and appear in no index. Use it for work in progress.

`content/projects/` currently holds three real entries — Conscious Chronicles,
Saroj Vidyalaya and Kisan Sathi — all `featured: true`, which is what puts them in
the Selected work band on the homepage.

## One thing to read before publishing

[`content/articles/fluent-confident-wrong.mdx`](content/articles/fluent-confident-wrong.mdx)
is an essay I drafted in your voice, on what twenty years of transcription
teaches about how language models fail. It is the only thing on this site with
words put in your mouth, and it is currently set to publish. Edit it, rewrite it
or delete the file — but read it first.

## Structure

```
src/
  app/                    routes; each page owns its own metadata export
    globals.css           design tokens, base layer, prose styles
  components/
    primitives.tsx        Container, Section, Rule, Kicker, CellGrid, ButtonLink…
    site-header.tsx       nav + mobile menu (client)
    theme-toggle.tsx      light/dark switch + the no-flash <head> script
    content-cards.tsx     ArticleRow, ProjectCard, EmptyState
    mdx.tsx               MDX renderer and the components available in content
  lib/content.ts          file-backed collections, frontmatter validation
  config/site.ts          ⚠️ the two fields above
content/
  articles/*.mdx
  projects/*.mdx
reference/meridian/       the original static design, kept for reference
```

## Design system

Carried over from the Modernist system in `reference/meridian/`: zero corner
radius, 2px dividers doing the organising, everything flush left, one accent used
sparingly, Archivo throughout. `reference/meridian/styles/modernist-readme.md`
still applies — read it before extending the visual language.

Tokens live in `globals.css` as CSS variables, mapped into Tailwind through
`@theme inline` so every utility re-resolves on theme change. **Change a colour
there, not in a component.** The text tones are named by intent — `text-strong`,
`text-body`, `text-muted`, `text-faint`, `text-accent-text` — so no page has to
reach for a raw `color-mix()`.

### Dark mode

Driven by `data-theme` on `<html>`, set before first paint by an inline script,
stored in `localStorage`, defaulting to the OS preference.

Rich Navy at `#1f3d68` is unreadable against a near-black ground, so the dark
theme lifts the accent rather than inverting it: the fill brightens to `#2a5490`
and accent-as-text moves to a light step (`#9dc0ec`) entirely. That's why there
are four accent roles rather than one — `--accent` (fills), `--accent-hover`,
`--accent-text` (accent used as type), `--on-accent` (type on an accent fill).

## What was changed from the brief, and why

Five judgement calls, all reversible:

1. **The wordmark is "Anupam", not "AnupamVerse".** The full name lives in the
   `<title>`, the footer and the domain. `-verse` reads as 2021 and slightly
   undercuts the restraint everything else is aiming for; the short mark keeps the
   surface calm without renaming anything. One string in `site.ts` if you disagree.

2. **"What I won't do" became "Plainly".** A published list of refusals reads as
   integrity from an established firm and as defensiveness from a new one — you'd
   be rejecting clients you don't have yet. The same three commitments are stated
   positively, and "I'll tell you when you don't need AI" does the work the
   negative framing was doing.

3. **Four gated phases became three steps, led by a paid diagnostic.** A solo
   lawyer doesn't want an eval harness and a go/no-go gate; they want to know how
   long, how much, and what they get. The fixed-fee diagnostic is also the best
   qualifier on the site — it filters for people who'll pay for thinking.

4. **Eight services became three outcome clusters.** All eight survive inside
   them. For an unknown independent, a flat list of eight reads as availability
   rather than capability; three things a visitor can hold in their head reads as
   a practice.

5. **Transcription is framed as current practice, not a former career.** An
   earlier draft of this site had it as backstory — "I came to AI from the other
   end", a section called "Why I moved". That was wrong and has been removed
   throughout. The positioning now is that the two halves are one discipline:
   the transcription work is live (currently with Transcription For Everyone),
   the pipeline built for it is the proof, and the systems sold to clients are
   the same thing generalised. "I still do the work I build systems for" is a
   far stronger claim than any amount of past-tense credentialing, and it's the
   thesis of both the homepage and About.

### Two accessibility corrections to the inherited design

- The quietest text tone failed WCAG AA on the light ground (3.35:1). It carries
  dates and metadata — real text, not decoration — so the tonal steps were
  retuned. Every text node on every page now clears AA in both themes.
- The display size is capped at 68px rather than the design's 82px, so the
  homepage's four questions fit above the fold on a laptop.

## Not yet built

- No OG images. Add `opengraph-image.tsx` to `src/app/` when there's a design for it.
- `featured: true` on an article has no effect yet — the homepage takes the three
  most recent. Wire it up when there are enough articles for the distinction to matter.
- Contact is `mailto:` only, by choice. If enquiry volume ever justifies a form,
  it's a route handler and a Resend key.
