import type { ReactNode } from "react";

// The <html> element lives in [locale]/layout.tsx so it can carry lang and dir.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
