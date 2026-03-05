import type { Metadata } from "next";
import { Cormorant_Infant, Great_Vibes } from "next/font/google";
import { siteConfig } from "@/site.config";
import "./globals.css";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${cormorant.variable} ${greatVibes.variable}`}>
      <body className="antialiased font-serif">
        {children}
      </body>
    </html>
  );
}
