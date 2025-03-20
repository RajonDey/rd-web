// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaOrg from "./SchemaOrg";
import { staticPages } from "@/data/mock-data";
import { Roboto } from "next/font/google";

// Define Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rajondey.com"),
  title: staticPages.home.metaTitle,
  description: staticPages.home.metaDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajondey.com",
    siteName: "Rajon Dey - Personal Website",
    title: staticPages.home.metaTitle,
    description: staticPages.home.metaDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rajon Dey - Personal Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: staticPages.home.metaTitle,
    description: staticPages.home.metaDescription,
    images: ["/og-image.jpg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon-192x192.png" },
      { url: "/icon-512x512.png", sizes: "512x512" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaOrg />
      </head>
      <body
        className={`${roboto.className} flex flex-col min-h-screen bg-background text-text`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
