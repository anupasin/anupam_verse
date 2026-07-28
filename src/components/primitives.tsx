import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * The small vocabulary every page is built from. Each of these encodes one
 * rule of the Modernist system so pages don't have to re-state it: the 1180px
 * measure, the 2px rule, the flush-left kicker, the modular cell grid.
 */

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/* -------------------------------------------------------------------------- */

/** The 1180px measure the whole design is set on. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-[1180px] px-6 sm:px-10 lg:px-[72px]", className)}>
      {children}
    </div>
  );
}

/** Vertical rhythm between major sections. */
export function Section({
  id,
  className,
  children,
  labelledBy,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx("py-14 sm:py-20 lg:py-24", className)}
    >
      {children}
    </section>
  );
}

/** The strong 2px horizontal rule that does the organising in this system. */
export function Rule({ className }: { className?: string }) {
  return <hr className={cx("h-0.5 border-0 bg-divider", className)} />;
}

export function Kicker({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cx(
        "block text-[13px] font-semibold uppercase tracking-[0.08em] text-accent-text",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  id,
  kicker,
  title,
  lede,
  className,
}: {
  id?: string;
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {kicker ? <Kicker className="mb-3">{kicker}</Kicker> : null}
      <h2 id={id} className="max-w-[20ch] text-title text-strong">
        {title}
      </h2>
      {lede ? (
        <p className="mt-5 max-w-[58ch] text-[17px] leading-[1.62] text-body">{lede}</p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

/**
 * The modular grid: equal cells separated by the divider showing through a
 * 2px gap, boxed by a 2px border. The gap trick is what gives the system its
 * drawn-with-a-ruler look.
 */
export function CellGrid({
  columns = 2,
  className,
  children,
}: {
  columns?: 2 | 3;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "grid gap-0.5 border-2 border-divider bg-divider",
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Cell({
  tone = "bg",
  className,
  children,
}: {
  tone?: "bg" | "surface";
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "p-6 sm:p-8",
        tone === "surface" ? "bg-surface" : "bg-bg",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

type ButtonVariant = "primary" | "secondary" | "ghost" | "invert";

const buttonBase =
  "inline-flex items-center gap-2 border font-extrabold text-sm leading-tight " +
  "px-4 py-2.5 transition-colors duration-150 cursor-pointer";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-accent text-on-accent hover:bg-accent-hover",
  secondary:
    "border-divider text-strong hover:bg-accent-wash",
  ghost:
    "border-transparent px-1.5 text-accent-text hover:bg-accent-wash",
  // Reversed out of the accent field in the closing banner. The standard ghost
  // hover is an accent tint, which is invisible there — tint with the ground.
  invert:
    "border-on-accent text-on-accent hover:bg-[color-mix(in_srgb,var(--on-accent)_16%,transparent)]",
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">) {
  const classes = cx(buttonBase, buttonVariants[variant], className);
  const external = href.startsWith("http") || href.startsWith("mailto:");

  if (external) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

/** A small right-pointing mark. Used on list rows, never as decoration. */
export function Arrow({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cx("font-extrabold text-accent-text", className)}>
      &rarr;
    </span>
  );
}
