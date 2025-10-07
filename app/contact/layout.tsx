import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | CaseConverter Free Online Tool",
  description:
    "Get in touch with CaseConverter! Have questions, feedback, or collaboration ideas? Contact us easily via email or our online form.",
  keywords:
    "contact CaseConverter, Case Converter support, get in touch, case change converter, case support manager, case support status text case converter help, online text tool contact",
  alternates: {
    canonical: "https://case-conversion.vercel.app/contact",
  },
  openGraph: {
    title: "Contact | CaseConverter",
    description:
      "Have questions or feedback? Contact CaseConverter easily via email or form. We usually reply within 24 hours.",
    url: "https://case-conversion.vercel.app/contact",
    images: [
      {
        url: "https://case-conversion.vercel.app/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Case Converter Tool",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | CaseConverter",
    description:
      "Have questions or feedback? Contact CaseConverter easily via email or form.",
    images: ["https://case-conversion.vercel.app/og-image.webp"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
