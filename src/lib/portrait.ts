import fs from "node:fs";
import path from "node:path";

/**
 * Finds the portrait in /public, if there is one.
 *
 * The homepage composition changes depending on the answer: with a photo it's
 * a two-column band, without one it falls back to the three-cell strip. That
 * way the page is never showing an empty frame or a broken image — it just
 * shows the version of itself that the available material supports.
 *
 * Any of these filenames works, so whatever you export from your phone or
 * camera roll can be dropped in without renaming it to something exact.
 */
const CANDIDATES = [
  "portrait.jpg",
  "portrait.jpeg",
  "portrait.png",
  "portrait.webp",
  "portrait.avif",
  "anupam.jpg",
  "anupam.jpeg",
  "anupam.png",
  "anupam.webp",
];

export function findPortrait(): string | null {
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) return null;

  for (const name of CANDIDATES) {
    if (fs.existsSync(path.join(publicDir, name))) return `/${name}`;
  }
  return null;
}
