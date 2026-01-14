
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Inter, Heebo } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";
import { Metadata } from 'next';
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageLoader } from "@/components/page-loader";
import { AnimatedBackground } from "@/components/animated-background";
import { CustomCursor } from "@/components/custom-cursor";

const inter = Inter({ subsets: ["latin"] });
const heebo = Heebo({ subsets: ["hebrew"] });

export const metadata: Metadata = {
  title: "Eliyahu Cohen | Portfolio",
  description: "Senior Full-Stack Developer",
  verification: {
    google: "etLGIi0IZrGFwJHWbjMxL-jpyNsO2rnnZftDlQTH8nA",
  },
};

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'he' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const isHebrew = locale === 'he';

  return (
    <html lang={locale} dir={isHebrew ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={isHebrew ? heebo.className : inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PageLoader />
            <AnimatedBackground />
            <CustomCursor />
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
