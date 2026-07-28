import Image from "next/image";
import Link from "next/link";
import { findPortrait } from "@/lib/portrait";
import { Cell, CellGrid } from "@/components/primitives";

/**
 * The band directly under the hero, answering "who are you, and why you?"
 *
 * Two shapes, chosen by whether a portrait exists in /public:
 *
 *   with a photo — a two-column band, portrait left, the three claims stacked
 *                  right and separated by rules
 *   without      — the original three-cell modular strip
 *
 * The photo goes here rather than in the hero deliberately. The hero is a
 * single flush-left column of display type, which is the strongest thing on
 * the page and the most Modernist; splitting it into text-and-portrait would
 * weaken both. Here the face sits next to the claims it's meant to support,
 * at the moment the reader is deciding whether to keep going.
 */

const FACTS = [
  {
    title: "Fifteen years in, still practising",
    body: "Medical and legal transcription, editing and quality control — currently with Transcription For Everyone. Not a former career I reference; work I did this week.",
  },
  {
    title: "I build the tools I use",
    body: "The pipeline I run on my own work handles the mechanical layer to a standard I'd sign my name to. Systems I haven't relied on myself, I don't sell.",
  },
  {
    title: "Yours to keep",
    body: "You own the code, the data and the accounts. The engagement ends when you can run it without me.",
  },
];

export function Credibility() {
  const portrait = findPortrait();

  if (!portrait) {
    return (
      <CellGrid columns={3}>
        {FACTS.map((fact) => (
          <Cell key={fact.title}>
            <p className="text-[15px] font-extrabold text-accent-text">{fact.title}</p>
            <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.58] text-body">{fact.body}</p>
          </Cell>
        ))}
      </CellGrid>
    );
  }

  return (
    <div className="grid gap-0.5 border-2 border-divider bg-divider lg:grid-cols-[minmax(0,400px)_1fr]">
      {/* The photograph bleeds to the cell edges — in this system a picture is
          a block in the grid, not something sitting inside a padded card. */}
      <figure className="grayscale bg-bg">
        <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:h-full lg:min-h-[440px]">
          <Image
            src={portrait}
            alt="Anupam"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 400px"
            className="object-cover"
          />
        </div>
      </figure>

      <div className="flex flex-col bg-bg">
        {FACTS.map((fact, index) => (
          <div
            key={fact.title}
            className={`flex-1 p-6 sm:p-8 ${index > 0 ? "border-t border-divider-soft" : ""}`}
          >
            <p className="text-[15px] font-extrabold text-accent-text">{fact.title}</p>
            <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.58] text-body">{fact.body}</p>
          </div>
        ))}

        <div className="border-t border-divider-soft p-6 sm:px-8 sm:py-5">
          <Link
            href="/about"
            className="text-[14px] font-extrabold text-accent-text transition-colors duration-150 hover:text-strong"
          >
            How I got here &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
