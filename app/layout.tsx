import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | BTRB",
    default: "Behaviour Therapy Regulatory Board of Sri Lanka (BTRB)",
  },
  description: "Propelling the field of Behaviour Therapy in Sri Lanka. The official regulatory body for behaviour therapists.",
  openGraph: {
    type: "website",
    locale: "en_LK",
    siteName: "BTRB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          raleway.variable,
          openSans.variable,
          "antialiased min-h-screen flex flex-col"
        )}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
