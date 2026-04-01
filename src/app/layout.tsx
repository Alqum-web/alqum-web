import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    default: "Alqum - Ship Compliant Hardware Faster",
    template: "%s | Alqum",
  },
  description:
    "Alqum automates compliance inside your CAD workflow. Stop losing engineering hours to compliance paperwork.",
  metadataBase: new URL("https://www.alqum.com"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Alqum - Ship Compliant Hardware Faster",
    description:
      "Alqum automates compliance inside your CAD workflow. Stop losing engineering hours to compliance paperwork.",
    url: "https://www.alqum.com",
    siteName: "Alqum",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alqum - Ship Compliant Hardware Faster",
    description:
      "Alqum automates compliance inside your CAD workflow.",
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
      </body>
    </html>
  );
}
