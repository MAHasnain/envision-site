import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Envision Consulting",
    template: "%s | Envision Consulting",
  },
  description:
    "IT consulting, cybersecurity and data solutions for a stronger, more secure and intelligent future in France.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-ink font-sans text-white antialiased">
        <Navbar />
        <main className="relative isolate">
          <PageBackground />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}