import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | CaseConverter Free Online Text Case Tool",
  description:
    "Read CaseConverter's Privacy Policy to learn how we protect your data. Our tool runs 100% in your browser — no tracking, no storage, and no data collection.",
  keywords:
    "CaseConverter privacy policy, no data collection, browser-based tool, no cookies, user privacy, secure text converter, local text conversion",
  alternates: {
    canonical: "https://caseconverter.vercel.app/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | CaseConverter",
    description:
      "CaseConverter is privacy-first: no data storage, no tracking, no cookies. All text processing happens locally in your browser for maximum security.",
    url: "https://caseconverter.vercel.app/privacy-policy",
    images: [
      {
        url: "https://caseconverter.vercel.app/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Case Converter Tool",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Privacy Policy | CaseConverter",
    description:
      "CaseConverter is privacy-first: no data storage, no tracking, no cookies.",
    images: ["https://caseconverter.vercel.app/og-image.webp"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Introduction */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Welcome to CaseConverter! Your privacy is important to us, and we
              want to be clear about how things work. CaseConverter is a 100%
              frontend tool that runs completely in your browser. We don&apos;t
              use servers, databases, or store anything outside your
              device—everything happens right where you are.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We designed this tool with privacy in mind from the very start.
              Unlike many platforms that collect unnecessary data, our approach
              is simple: if we don&apos;t need it, we won&apos;t ask for it.
              This is the way we protect your data and information. Learn more
              about our tool on our{" "}
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                About page
              </Link>
              .
            </p>
          </CardContent>
        </Card>

        {/* Information We Do Not Collect */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              Information We Do Not Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We want to be very clear about what we <strong>do not</strong>{" "}
              collect. Unlike many online tools and services, we have designed
              CaseConverter to operate without gathering any user information:
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    No Text Storage
                  </h4>
                  <p className="text-gray-700">
                    We do not store, save, or transmit any text you enter into
                    our converter. All processing happens locally in your
                    browser. When you type or paste text into CaseConverter, it
                    exists only in your browser&apos;s memory until you close
                    the page or refresh it. We have no servers where your text
                    could be stored, and no databases to retain your
                    information.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    No Personal Information
                  </h4>
                  <p className="text-gray-700">
                    We do not need you email or any other informatoin because
                    this tool has open source every one use this . We don&apos;t
                    know who you are, where you&apos;re from, or how you use our
                    tool - and we believe that&apos;s exactly how it should be
                    for a simple utility like ours.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    No Cookies or Tracking
                  </h4>
                  <p className="text-gray-700">
                    We do not use cookies, tracking technologies, or analytics
                    services. There are no tracking pixels, no behavioral
                    analytics, and no third-party scripts monitoring your usage.
                    You won&apos;t see cookie consent banners on our site
                    because we simply don&apos;t use them. Your visit to
                    CaseConverter leaves no digital footprint that could be used
                    to identify or track you later.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    No User Accounts or Registration
                  </h4>
                  <p className="text-gray-700">
                    We do not require registration or login, so we don&apos;t
                    have user accounts or profiles. there are not any login or
                    sing up page because we do not have a profile sections and
                    data base. You get full access to all features from your
                    first visit, with no strings attached.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    No Usage Analytics or Monitoring
                  </h4>
                  <p className="text-gray-700">
                    We don&apos;t track which features you use, how often you
                    visit, or what types of text you convert. We don&apos;t know
                    if you&apos;re converting programming code, business
                    documents, or personal notes - and we don&apos;t need to
                    know.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How Our Tool Works */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              How CaseConverter Works - Technical Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Understanding how CaseConverter works technically will help you
              feel confident about your privacy. Here&apos;s the complete
              picture of what happens when you use our tool:
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Local Processing in Your Browser
                  </h4>
                  <p className="text-gray-700">
                    When you enter text into our converter, all processing
                    happens directly in your web browser using JavaScript. The
                    conversion algorithms run entirely on your device, using
                    your computer&apos;s processing power. This is similar to
                    how a calculator app works on your phone - the calculations
                    happen locally, and no data needs to be sent anywhere for
                    processing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    No Data Transmission or External Processing
                  </h4>
                  <p className="text-gray-700">
                    Your text never leaves your device. It is not sent to any
                    server or third-party service. When you click a conversion
                    button, there are no network requests made to external
                    servers. You can verify this yourself by checking your
                    browser&apos;s network tab in developer tools - you&apos;ll
                    see that no data is being transmitted during the conversion
                    process.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Temporary Memory Only - No Persistent Storage
                  </h4>
                  <p className="text-gray-700">
                    Text exists only in your browser&apos;s temporary memory
                    (RAM) while the page is open. Refreshing or closing the page
                    clears all data. We don&apos;t use browser storage methods
                    like Local Storage, Session Storage, or IndexedDB to persist
                    your text. This means there&apos;s no record of your
                    activity left behind in your browser after you&apos;re done
                    using the tool.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Complete Isolation from Other Services
                  </h4>
                  <p className="text-gray-700">
                    The conversion functionality is completely isolated from any
                    external dependencies. We don&apos;t load external fonts,
                    don&apos;t use content delivery networks for our conversion
                    logic, and don&apos;t rely on third-party APIs. Everything
                    needed for the tool to function is loaded initially when you
                    visit the page, and then it operates independently.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why We Choose This Approach */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              Why We Choose This Privacy-First Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              You might wonder why we&apos;ve built CaseConverter this way when
              many other online tools collect various types of data. Here are
              our reasons:
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Respect for User Privacy
                  </h4>
                  <p className="text-gray-700">
                    We believe privacy is a fundamental right, not a premium
                    feature. Many users convert sensitive text - business
                    documents, personal notes, confidential information - and
                    they deserve to do so without privacy concerns.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Easy and Simple to Use
                  </h4>
                  <p className="text-gray-700">
                    By not collecting any data, we&apos;ve made things simple.
                    You don&apos;t need to worry about cookie pop-ups, privacy
                    settings, or managing accounts. The tool stays focused on
                    what really matters—helping you convert your text quickly
                    and easily.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Reduced Security Risks
                  </h4>
                  <p className="text-gray-700">
                    The simplest way to protect user data is to not collect it
                    in the first place. Without user data stored on servers,
                    there&apos;s nothing for hackers to steal, no databases that
                    could be breached, and no privacy incidents that could occur
                    from mismanaged data.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Alignment with Tool Purpose
                  </h4>
                  <p className="text-gray-700">
                    CaseConverter is a utility tool, not a social platform or
                    content service. We don&apos;t need your personal
                    information to make this tool useful. It works just fine
                    without knowing anything about you—so collecting data would
                    only be unnecessary and intrusive. If you have questions
                    about how our tool works, feel free to{" "}
                    <Link
                      href="/contact"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      contact us
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Services */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              Third-Party Services and External Dependencies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our site is hosted on Vercel. Like most hosting providers, they
              may collect basic server logs (such as IP addresses) to keep the
              platform secure and running smoothly. However, these logs are
              completely separate from our tool&apos;s functionality and are not
              linked to your usage of CaseConverter in any way.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do not use any third-party analytics, advertising networks, or
              tracking services on the CaseConverter tool page. The only
              external requests made are for loading the website itself and any
              necessary web fonts - but these occur during page load and are not
              connected to your text conversion activities. We recommend
              reviewing the privacy policies of any websites where you paste
              your converted text.
            </p>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              Data Security and Your Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Because we don&apos;t collect or store your data, there&apos;s no
              risk of data breaches, unauthorized access, or data loss from our
              side. The traditional security concerns associated with online
              services simply don&apos;t apply to CaseConverter.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The security of your text relies entirely on your own device and
              browser security. Remember that while CaseConverter itself
              doesn&apos;t store your text, your computer&apos;s clipboard
              (where copied text is temporarily stored) may be accessible to
              other applications.
            </p>
          </CardContent>
        </Card>

        {/* Changes to This Policy */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              Changes to This Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated &quot;Last
              updated&quot; date. We will never make changes that reduce your
              privacy protections or begin collecting data without making such
              changes extremely clear and obvious.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Since we don&apos;t collect contact information, we cannot notify
              users directly of changes . If we ever were to consider collecting
              data in the future (which we have no plans to do), we would
              provide prominent notice and allow users to opt-out before
              implementing such changes. However, given our tool&apos;s design
              and our philosophical approach to privacy, such a fundamental
              change is highly unlikely.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Feel free to reach out to us anytime through our{" "}
              <Link className="hover:underline text-blue-600 " href="/contact">
                Contact
              </Link>{" "}
              page—we&apos;ll be glad to help and explain how we keep your
              privacy safe.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your trust means everything to us. That&apos;s why we keep things
              fully transparent. If you&apos;re a developer or just curious, you
              can even look at our source code to see exactly how the tool
              works. All the processing happens right in your browser—nothing is
              ever stored or sent to us. Learn more about our mission and values
              on our{" "}
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                About page
              </Link>
              .
            </p>
          </CardContent>
        </Card>

        {/* Additional Links Section */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold text-blue-800 text-lg mb-4">
              Learn More About CaseConverter
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-blue-300 cursor-pointer text-blue-700 hover:bg-blue-100"
                >
                  About Our Tool
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-green-300 cursor-pointer text-green-700 hover:bg-green-100"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-green-800 text-lg mb-2">
              Privacy Summary
            </h3>
            <p className="text-green-700">
              <strong>CaseConverter is privacy-friendly by design:</strong> No
              data collection, no cookies, no tracking. Your text stays entirely
              on your device and is never stored or transmitted anywhere.
              We&apos;ve built a tool that respects your privacy because we
              believe you shouldn&apos;t have to sacrifice privacy for
              convenience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
