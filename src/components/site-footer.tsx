import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/primitives";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-divider">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[15px] font-extrabold text-strong">{siteConfig.name}</p>
          <p className="mt-1 max-w-[40ch] text-[13px] leading-relaxed text-muted">
            {siteConfig.author.role}. Practical AI for people who work with information.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-[13px]">
          <nav aria-label="Footer" className="flex flex-col gap-2">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted transition-colors duration-150 hover:text-strong"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-muted transition-colors duration-150 hover:text-strong"
            >
              Contact
            </Link>
          </nav>

          {siteConfig.social.length > 0 ? (
            <nav aria-label="Elsewhere" className="flex flex-col gap-2">
              {siteConfig.social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors duration-150 hover:text-strong"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          ) : null}
        </div>
      </Container>

      <Container className="pb-10">
        <p className="text-[13px] text-faint">
          &copy; {new Date().getFullYear()} {siteConfig.author.name}. Built with Next.js,
          hosted on Vercel.
        </p>
      </Container>
    </footer>
  );
}
