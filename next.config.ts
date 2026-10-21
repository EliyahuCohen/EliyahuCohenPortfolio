import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The previous version of the site was bilingual and served every page under
  // /en or /he (and auto-redirected Hebrew browsers to /he). Those links are
  // cached by browsers and search engines, so send them to the English pages.
  async redirects() {
    return [
      { source: "/:locale(en|he)", destination: "/", permanent: true },
      { source: "/:locale(en|he)/:path*", destination: "/:path*", permanent: true },
      { source: "/projects", destination: "/resume", permanent: true },
    ];
  },
};

export default nextConfig;
