const removeImports = require("next-remove-imports")();
const helmet = require("helmet");

/** @type {import('next').NextConfig} */
const nextConfig = removeImports({
  experimental: { esmExternals: true },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
});

module.exports = nextConfig;
