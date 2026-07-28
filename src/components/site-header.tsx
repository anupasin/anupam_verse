"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { ButtonLink, Container, cx } from "@/components/primitives";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu on navigation, and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="border-b-2 border-divider">
      <Container className="flex items-center gap-8 py-5">
        <Link
          href="/"
          className="mr-auto text-[22px] font-extrabold tracking-[-0.01em] text-strong"
        >
          {siteConfig.wordmark}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cx(
                "text-sm transition-colors duration-150 hover:text-accent-text",
                isActive(item.href) ? "text-accent-text" : "text-strong",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <ButtonLink href="/contact">Get in touch</ButtonLink>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center border border-divider-soft text-strong transition-colors duration-150 hover:bg-accent-wash"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="size-[18px]"
            >
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t-2 border-divider md:hidden"
        >
          <Container className="flex flex-col py-2">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cx(
                  "border-b border-divider-soft py-4 text-base",
                  isActive(item.href) ? "text-accent-text" : "text-strong",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="py-4 text-base font-extrabold text-accent-text">
              Get in touch
            </Link>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
