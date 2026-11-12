import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

const manrope = Manrope({
  subsets: ["latin"], 
  variable: "--font-manrope",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return {
    title: { default: t("title"), template: "%s | Envision Consulting" },
    description: t("description"),
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang={locale} className={manrope.variable}>
      <body className="bg-ink font-sans text-white antialiased">
        <NextIntlClientProvider>
          <Navbar />
          <main className="relative isolate">
            <PageBackground />
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}