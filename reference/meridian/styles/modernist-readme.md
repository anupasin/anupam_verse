# Modernist design system

> Imported alongside `modernist.css` from the Claude Design project
> *AI Consultant Website Concepts* (`_ds/modernist-d81a5208-887f-4db4-87f6-246fb5b0eadd/`).
> This is the system's own guidance — follow it when extending the site.

Modernist is flat, architectural and set entirely in Archivo: a near-mono red on white, a visible modular grid, zero corner radius and strong 2px rules. Nothing floats and nothing is decorated — alignment and the strength of the dividers do all the organising, labels sit flush left (even inside buttons), and photography prints in pure black and white.

## How to use this

- Link the one stylesheet from every page — `<link rel="stylesheet" href="styles/modernist.css">` — and take every color, font, spacing, radius and shadow from its variables (`var(--color-*)`, `var(--font-*)`, `var(--space-*)`, `var(--radius-*)`, `var(--shadow-*)`). Never hard-code a hex, a font name or a px value the tokens already carry.
- Build with the classes below rather than inventing parallel ones.
- To change the look, edit the tokens at the top of `modernist.css`.

## Direction

Modular grid layouts — content in equal-width cells, strong horizontal and vertical rhythm, visible structure. Use strong 2px dividers (`var(--color-divider)`) between major sections. Button labels are flush left. Wrap hero and inline images in the `.grayscale` class — they print in pure black and white.

## Color

A light ground (`--color-bg` #f3f2f2) with `--color-text` #201e1d and a single accent (this is a mono scheme: the `--color-accent-2-*` variables carry a machine-derived stand-in kept only so both sets resolve; treat them as one role). Each role carries a 100–900 tonal ramp generated in OKLCH on a shared perceptual lightness scale. Use the light steps (100–300) for tinted fills, hovers and subtle borders, 500 as the role's base, and the dark steps (700–900) for text on tinted fills and for pressed states; prefer ramp steps over ad-hoc `color-mix()`. For elevation use `--shadow-sm/md/lg` rather than ad-hoc box-shadows.

The accent-to-ground pair is tuned to at least 3:1 — enough for icons, large text and interface chrome, not for body copy — so for paragraph-size text in the accent use a deep ramp step (`--color-accent-700`) rather than the accent itself.

## Type

Archivo for headings over Archivo for body text, loaded as `--font-heading` / `--font-body`. Density 1.00× and radius 0px are already baked into the `--space-*` / `--radius-*` scales — use the variables, not raw numbers.

## Icons

Use Lucide icons (https://lucide.dev) throughout.

## Interaction states

Interactive states are themed, never browser defaults: give every interactive element a `:hover` tint and a pressed state from the accent ramp (one step past the base — `--color-accent-600` on a light ground), and style keyboard focus with `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }`.

## Components

| Class | What it is |
| --- | --- |
| `.btn` with `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-icon`, `.btn-block` | Actions — the primary is a solid accent fill |
| `.tag` with `.tag-accent`, `.tag-accent-2`, `.tag-neutral`, `.tag-outline` | Small labels tinted from the ramps |
| `.field` + `label`, `.input`, `.radio` + `.dot`, `.seg` + `.seg-opt` | Form fields and choices on native elements — no script |
| `.card` with `.card-kicker`, `.card-title`, `.card-body`, `.card-meta`; `.elev-sm/md/lg` | Surface-filled content cards; elevation utilities |
| `.nav` + `.nav-brand` | The header bar |
| `.table` | Data tables with themed header and row rules |
| `.dialog-backdrop` + `.dialog` (+ `.dialog-title/-body/-actions`) | A modal at the top elevation |
| `.hr` | A strong 2px horizontal rule |
| `.grayscale` | The image wrapper — every content photograph goes through it |

States are built in: hovers and pressed states come from the accent ramp, keyboard focus is the 2px accent `:focus-visible` ring, `::selection` is an accent tint, and disabled controls drop to 45% opacity. Don't restyle them per page.

## Do

- Let the grid show: equal-width cells, strong horizontal rules between sections, visible structure.
- Keep everything flush left — headings, copy, and the labels inside wide buttons.
- Use the accent sparingly, for the primary action and small emphasis; the system is mostly ink on ground. The one place the accent runs as a field is the poster statement — the closing banner — where type stays display-grade and the accent carries the page.
- Print photographs in black and white with the `.grayscale` wrapper.

## Don't

- Do not round a corner anywhere — `--radius-md` is 0 on purpose.
- Do not center button labels or hero copy.
- Do not soften the rules into hairlines or drop them for whitespace.
- Do not tint or colorize imagery.
