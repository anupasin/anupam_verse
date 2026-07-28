/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // MDX is compiled in the RSC layer by next-mdx-remote (see src/lib/content.ts),
  // so no MDX webpack plugin is needed here.

  // reference/ holds the original static design, kept for documentation. It is
  // never imported, so keep it out of the serverless file trace.
  outputFileTracingExcludes: {
    "*": ["./reference/**"],
  },
};

export default nextConfig;
