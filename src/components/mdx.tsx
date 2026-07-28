import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { ComponentPropsWithoutRef } from "react";

/**
 * Components available inside .mdx content. Keep this list small — the point
 * of writing in MDX is that most of an essay is plain markdown.
 */
const components = {
  a: ({ href = "", ...props }: ComponentPropsWithoutRef<"a">) => {
    const internal = href.startsWith("/") || href.startsWith("#");
    if (internal) return <Link href={href} {...props} />;
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
  },

  /** A quiet aside. Used sparingly — the system doesn't like decoration. */
  Note: ({ children }: { children: React.ReactNode }) => (
    <aside className="border-l-2 border-accent-text pl-6 text-muted">{children}</aside>
  ),
};

export function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug],
        },
      }}
    />
  );
}
