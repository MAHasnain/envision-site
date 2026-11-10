import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Envision Consulting",
  description:
    "IT consulting, cybersecurity and data solutions for a stronger, more secure and intelligent future in France.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
        <body className="font-sans antialiased bg-ink text-white">{children}</body>
    </html>
  );
}