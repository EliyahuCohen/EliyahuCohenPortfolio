import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The previous version of the site was bilingual and served every page under
  // /en or /he (and auto-redirected Hebrew browsers to /he). Those links are
  // cached by browsers and search engines, so send them to the English pages.
  async redirects() {
    return [
      // The old site had no real "/" (it redirected to /en), so Google indexed
      // /projects as the main page for the name. Send it to the landing page,
      // not /resume, so the search result opens the home page.
      { source: "/projects", destination: "/", permanent: true },
      { source: "/:locale(en|he)/projects", destination: "/", permanent: true },
      { source: "/:locale(en|he)", destination: "/", permanent: true },
      { source: "/:locale(en|he)/:path*", destination: "/:path*", permanent: true },
      // The CV PDF was renamed; keep the old indexed link working.
      { source: "/EliyahuCohenResume.pdf", destination: "/Eliyahu-Cohen-CV.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
