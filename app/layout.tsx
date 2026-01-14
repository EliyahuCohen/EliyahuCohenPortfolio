
import { ReactNode } from 'react';

// This layout serves as a wrapper. The actual HTML/Body tags are in [locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
    return children;
}
