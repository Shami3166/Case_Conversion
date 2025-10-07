import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

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
    "Case Converter is a free and simple online tool to change your text to lowercase, uppercase, title case, sentence case, or capitalized case — quickly and easily.",
  keywords:
    "case converter, online case converter, uppercase to lowercase, lowercase to uppercase format, sentence case converter, title case, capitalize text, change text case, text formatter, free text case tool",
  robots: "index, follow",
  openGraph: {
    title: "Case Converter – Free Online Text Case Conversion Tool 2025",
    description:
      "Convert your text instantly to lowercase, uppercase, sentence case, or title case. 100% free, privacy-focused, and works right in your browser.",
    images: [
      {
        url: "https://caseconverter.vercel.app/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Case Converter Tool",
      },
    ],
    url: "https://caseconverter.vercel.app/",
    type: "website",
    siteName: "Case Converter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Converter – Free Online Text Case Converter Tool",
    description:
      "Instantly convert text to lowercase, uppercase, title case, or sentence case. Free, fast, and privacy-safe.",
    images: ["https://caseconverter.vercel.app/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
