import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { brand } from "@/content/brand";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hxrmaterials.com"),
  title: {
    default: `${brand.name} | ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description: brand.technicalPositioning,
  openGraph: {
    title: `${brand.name} | ${brand.tagline}`,
    description: brand.technicalPositioning,
    url: "https://www.hxrmaterials.com",
    siteName: brand.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-white font-sans text-slate-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
