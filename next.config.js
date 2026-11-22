module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { minimumCacheTTL: 60 * 60 * 24 * 30 }, // optimized images are reused, not re-generated
  async headers() {
    return [
      {
        // Customer assets: cached a day, then served stale while revalidating (safe if a file is replaced).
        source: "/cards/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
};
