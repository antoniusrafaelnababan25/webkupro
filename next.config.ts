import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { 
    agentFeedback: true,
    turbopackPluginRuntimeStrategy: "workerThreads", // Solusi untuk build Hostinger
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: { "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" } },
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "bikinwebsite.pro" },
      { protocol: "https", hostname: "static-cdn.siteground.com" },
      { protocol: "https", hostname: "cdn.dribbble.com" },
      { protocol: "https", hostname: "prod-sribu.sniag.upcloudobjects.com" },
    ],
  },
};

export default nextConfig;