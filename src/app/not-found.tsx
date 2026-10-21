"use client";

import NextError from "next/error";

// Rendered for requests that never matched a locale.
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <NextError statusCode={404} />
      </body>
    </html>
  );
}
