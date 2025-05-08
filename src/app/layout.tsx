// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaOrg from "./SchemaOrg";
import { staticPages } from "@/data/mock-data";
import { Roboto } from "next/font/google";
import Script from "next/script";

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
    icon: "/favicon.ico",
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
        {/* Google Tag Manager - Head */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TXRCDV4Z');`}
        </Script>

        {/* ✅ Umami Analytics */}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="7e60ee33-6219-4aec-a246-c6057c6e387d"
          strategy="afterInteractive"
        />

        <SchemaOrg />
      </head>
      <body
        className={`${roboto.className} flex flex-col min-h-screen bg-background text-text`}
      >
        {/* Google Tag Manager - Noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TXRCDV4Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
