/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // MDX is compiled at request/build time by next-mdx-remote in the RSC layer
  // (see src/lib/content.ts), so no MDX webpack plugin is needed here.
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
