"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "anupamverse-theme";

/**
 * Light/dark switch.
 *
 * Both icons are always rendered and CSS picks the right one from
 * [data-theme], so first paint is correct with no hydration mismatch and no
 * flash. The only state is the label, which starts theme-neutral.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing, storage disabled — the toggle still works for the session.
    }
  }

  const label =
    theme === null
      ? "Switch between light and dark theme"
      : `Switch to ${theme === "dark" ? "light" : "dark"} theme`;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`inline-flex size-9 items-center justify-center border border-divider-soft text-strong transition-colors duration-150 hover:bg-accent-wash ${className ?? ""}`}
    >
      {/* Sun — shown in dark theme, because it's the destination, not the state. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        className="hidden size-[18px] dark:block"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
      {/* Moon — shown in light theme. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-[18px] dark:hidden"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  );
}

/**
 * Runs before first paint to avoid a flash of the wrong theme. Stored choice
 * wins; otherwise follow the OS. Kept as a string so it can be inlined into
 * <head> ahead of any stylesheet.
 */
export const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem(${JSON.stringify(STORAGE_KEY)});
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme =
      stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";
  } catch (e) {
    document.documentElement.dataset.theme = "light";
  }
})();
`;
