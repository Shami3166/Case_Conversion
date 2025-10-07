import CaseConverter from "@/components/CaseConverter";
import FAQ from "@/components/FAQ";

// 🔹 PAGE-SPECIFIC METADATA (overrides global for homepage)
export const metadata = {
  title: "Case Converter – Free Online Text Case Conversion Tool 2025",
  description:
    "Case Converter is a free and simple online tool to change your text to lowercase, uppercase, title case, sentence case, or capitalized case — quickly and easily.",
  keywords:
    "case converter,how to change lower case to upper case,how to make small letters capital in word,what is title case, how to change a sentence from caps to lowercase,how to convert text to sentence case, online case converter, uppercase to lowercase, lowercase to uppercase format, sentence case converter, title case, capitalize text, change text case, text formatter, free text case tool,convert to small case,capital to small case converter,lower case converter,capital to sentence case,title case capitalizations",
  alternates: {
    canonical: "https://caseconverter.vercel.app/",
  },
  openGraph: {
    title: "Case Converter – Free Online Text Case Conversion Tool 2025",
    description:
      "Convert your text instantly to lowercase, uppercase, sentence case, or title case. 100% free, privacy-focused, and works right in your browser.",
    url: "https://caseconverter.vercel.app/",
    images: [
      {
        url: "https://caseconverter.vercel.app/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Case Converter Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Case Converter – Free Online Text Case Converter Tool",
    description:
      "Instantly convert text to lowercase, uppercase, title case, or sentence case. Free, fast, and privacy-safe.",
    images: ["https://caseconverter.vercel.app/og-image.webp"],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12">
      {/* ✅ Hero Section */}
      <section className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          🔠 Free Online Case Converter
        </h1>
        <p className="text-lg text-gray-600">
          Instantly convert your text into{" "}
          <span className="font-semibold">Sentence Case</span>,{" "}
          <span className="font-semibold">lower case</span>,{" "}
          <span className="font-semibold">UPPER CASE</span>,{" "}
          <span className="font-semibold">Capitalize Case</span>, or{" "}
          <span className="font-semibold">Title Case</span>. Simple, fast, and
          free — no login required!
        </p>
      </section>

      {/* ✅ Tool Section */}
      <section className="w-full max-w-4xl mb-12">
        <CaseConverter />
      </section>

      {/* ✅ Details Section */}
      <section className="max-w-3xl text-center text-gray-700 leading-relaxed mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Use Our Case Converter
        </h2>
        <p className="mb-4">
          The Case Converter Tool is a simple, free, and easy-to-use online text
          formatter. It helps you quickly change your text between uppercase,
          lowercase, sentence case, title case, or capitalize case with just one
          click.this tool use every one ., free open source tool— writers,
          students, developers, and professionals — who often need to fix text
          formatting in their daily work. Whether you&apos;re preparing a school
          essay, writing a blog, creating a presentation, or updating content
          for your website, CaseConverter makes it quick and effortless. You
          don&apos;t need to sign up or install anything. Just open the site,
          paste your text, choose the case style you want, and copy your
          converted text instantly. Everything runs directly in your browser,
          which means your data stays private — we never store or share anything
          you type. The tool works on all the devices in computers .laptops,
          mobiles, and all the other devicesr. So even if you&apos;re on the go,
          you can still fix and format your text anytime. No distractions, no
          ads, and no complicated menus — just clean, accurate results every
          time. With CaseConverter, you can easily: Convert uppercase to
          lowercase or lowercase to uppercase- Change text to title case for
          headings- Fix sentence case for emails or essays- Make capitalize case
          for names and titles .CaseConverter saves time, improves readability,
          and gives your content a polished look. It&apos;s your free, reliable
          tool for clean and consistent text formatting — simple, fast, and made
          for everyone.
        </p>
        <p>
          No sign-up, no distractions — just paste your text, choose your
          preferred format, and copy it back instantly. Works on any device!
        </p>
      </section>

      {/* ✅ FAQ Section */}
      <section className="w-full max-w-4xl mb-20">
        <FAQ />
      </section>
    </div>
  );
}
