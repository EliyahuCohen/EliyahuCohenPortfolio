
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";
import { Metadata } from 'next';
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eliyahu Cohen | Portfolio",
  description: "Senior Full-Stack Developer",
  verification: {
    google: "etLGIi0IZrGFwJHWbjMxL-jpyNsO2rnnZftDlQTH8nA",
  },
};

export async function generateStaticParams() {
  return [{ locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== 'en') {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir="ltr" suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
