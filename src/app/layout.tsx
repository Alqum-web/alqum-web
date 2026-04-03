import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alqum - AI Agents for Design Compliance",
    template: "%s | Alqum",
  },
  description:
    "Alqum brings compliance into your CAD workflow using AI agents. Built for design and manufacturing teams.",
  metadataBase: new URL("https://www.alqum.com"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Alqum - AI Agents for Design Compliance",
    description:
      "Alqum brings compliance into your CAD workflow using AI agents. Built for design and manufacturing teams.",
    url: "https://www.alqum.com",
    siteName: "Alqum",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alqum - AI Agents for Design Compliance",
    description:
      "Alqum brings compliance into your CAD workflow using AI agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
