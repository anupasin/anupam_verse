import Link from "next/link";
import type { Article, Project } from "@/lib/content";
import { formatDateShort } from "@/lib/content";
import { Arrow, cx } from "@/components/primitives";

/**
 * Article list row.
 *
 * A rule-separated row rather than a card: the system organises with
 * dividers, and rows read well at two items and at forty, which a grid of
 * cards does not.
 */
export function ArticleRow({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group grid grid-cols-[1fr_auto] items-baseline gap-x-7 gap-y-2 border-t-2 border-divider py-7 sm:grid-cols-[120px_1fr_auto]"
    >
      <span className="tnum col-span-2 text-sm text-faint sm:col-span-1">
        {formatDateShort(article.date)}
        <span className="sm:hidden"> · {article.readingMinutes} min</span>
      </span>

      <div>
        <h3 className="text-essay font-extrabold tracking-[-0.01em] text-strong transition-colors duration-150 group-hover:text-accent-text">
          {article.title}
        </h3>
        <p className="mt-2 max-w-[56ch] text-[15px] leading-[1.55] text-muted">
          {article.description}
        </p>
        <p className="tnum mt-2 hidden text-[13px] text-faint sm:block">
          {article.readingMinutes} min read
          {article.draft ? " · Draft (hidden in production)" : ""}
        </p>
      </div>

      <Arrow className="self-center text-xl transition-transform duration-150 group-hover:translate-x-1" />
    </Link>
  );
}

/**
 * Project card.
 *
 * Leads with the problem, not the stack — the stack is the last line, in the
 * quietest tone on the page. That ordering is the whole point of the card.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col bg-bg p-6 transition-colors duration-150 hover:bg-accent-wash sm:p-8"
    >
      <div className="flex items-baseline justify-between gap-4">
        {project.status ? (
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-accent-text">
            {project.status}
          </span>
        ) : (
          <span />
        )}
        {project.draft ? (
          <span className="text-[11px] uppercase tracking-[0.1em] text-faint">
            Draft
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 text-[23px] font-extrabold tracking-[-0.01em] text-strong transition-colors duration-150 group-hover:text-accent-text">
        {project.title}
      </h3>

      <p className="mt-3 max-w-[44ch] text-[15.5px] leading-[1.58] text-body">
        {project.problem}
      </p>

      {project.stack.length > 0 ? (
        <p className="mt-6 pt-5 text-[13px] text-faint border-t border-divider-soft">
          {project.stack.join(" · ")}
        </p>
      ) : null}
    </Link>
  );
}

/**
 * Shown when a collection is empty. Deliberately not "coming soon" — an
 * honest sentence reads better than a promise the site can't keep.
 */
export function EmptyState({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("border-t-2 border-divider py-14", className)}>
      <p className="max-w-[52ch] text-[17px] leading-[1.62] text-muted">{children}</p>
    </div>
  );
}
