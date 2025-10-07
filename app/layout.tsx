import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script"; // Import Script component

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Case Converter – Free Online Text Case Conversion Tool 2025",
    template: "%s | Case Converter",
  },
  icons: {
    icon: [{ url: "/icon.jpeg", type: "image/jpeg" }],
  },
  description:
    "Case Converter is a free and simple online tool to change your text to lowercase, uppercase, title case, sentence case, or capitalized case — quickly .",
  keywords:
    "case converter, online case converter, uppercase to lowercase, lowercase to uppercase format, sentence case converter, title case, capitalize text, change text case, text formatter, free text case tool",
  robots: "index, follow",
  openGraph: {
    title: "Case Converter – Free Online Text Case Conversion Tool 2025",
    description:
      "Convert your text instantly to lowercase, uppercase, sentence case, or title case. 100% free, privacy-focused, and works right in your browser.",
    images: [
      {
        url: "https://case-conversion.vercel.app/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Case Converter Tool",
      },
    ],
    url: "https://case-conversion.vercel.app/",
    type: "website",
    siteName: "Case Converter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Converter – Free Online Text Case Converter Tool",
    description:
      "Instantly convert text to lowercase, uppercase, title case, or sentence case. Free, fast, and privacy-safe.",
    images: ["https://case-conversion.vercel.app/og-image.webp"],
  },
  other: {
    "google-site-verification": "H2FseLCWxQsqB1-lBh4VEpO3wXwWfCdjG7c3-OdlqBU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="H2FseLCWxQsqB1-lBh4VEpO3wXwWfCdjG7c3-OdlqBU"
        />
      </head>
      <body className={inter.className}>
        {/* Google Analytics with Next.js Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KNY5ST6KX4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KNY5ST6KX4');
          `}
        </Script>

        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
