// src/app/terms/page.tsx
import Link from "next/link";
import { Metadata } from "next";
import { staticPages } from "@/data/mock-data";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: staticPages.terms.metaTitle,
  description: staticPages.terms.metaDescription,
  openGraph: {
    ...staticPages.terms.openGraph,
    url: "https://rajondey.com/terms",
  },
  twitter: staticPages.terms.twitter,
};

export default function TermsOfUse() {
  return (
    <>
      <SEO
        title={staticPages.privacyPolicy.metaTitle}
        description={staticPages.privacyPolicy.metaDescription}
        url="/terms"
      />

      <div>
        {/* Hero Section */}
        <section className="section text-center relative">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary animate-fade-in-up">
            <span className="underline-accent">Terms</span> of Use
          </h1>
          <p className="text-xl sm:text-2xl mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText">
            Understand the rules for using rajondey.com and its content.
          </p>
        </section>
        <div className="decorative-divider" />

        {/* Terms of Use Content */}
        <section className="section max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
          <p className="text-grayText mb-6">
            Welcome to rajondey.com, a personal website operated by Rajon Dey.
            By accessing or using this website, you agree to be bound by these
            Terms of Use. If you do not agree with these terms, please do not
            use this website.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            1. Use of the Website
          </h2>
          <p className="text-grayText mb-4">
            You may use this website for personal, non-commercial purposes only.
            You agree not to:
          </p>
          <ul className="list-disc list-inside text-grayText mb-6 space-y-2">
            <li>Use the website for any unlawful or prohibited purpose.</li>
            <li>Copy, modify, or distribute any content without permission.</li>
            <li>
              Attempt to interfere with the website’s functionality or security.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">
            2. Intellectual Property
          </h2>
          <p className="text-grayText mb-6">
            All content on rajondey.com, including text, images, and designs, is
            the property of Rajon Dey or used with permission. You may not
            reproduce, distribute, or create derivative works from this content
            without my written consent.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            3. Affiliate Links and Third-Party Content
          </h2>
          <p className="text-grayText mb-6">
            This website contains affiliate links (e.g., Amazon Associates,
            ShareASale) and external links (e.g., to join.rajondey.com, social
            media). I may earn a commission if you make a purchase through
            affiliate links, at no extra cost to you. I am not responsible for
            the content, products, or services provided by third-party websites.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            4. Disclaimer of Warranties
          </h2>
          <p className="text-grayText mb-6">
            This website is provided “as is” without warranties of any kind,
            express or implied. I do not guarantee that the website will be
            error-free, secure, or uninterrupted. Use the website at your own
            risk.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            5. Limitation of Liability
          </h2>
          <p className="text-grayText mb-6">
            Rajon Dey shall not be liable for any direct, indirect, incidental,
            or consequential damages arising from your use of this website,
            including but not limited to damages for loss of data, profits, or
            business opportunities.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            6. Changes to These Terms
          </h2>
          <p className="text-grayText mb-6">
            I may update these Terms of Use from time to time. Any changes will
            be posted on this page with an updated effective date. Your
            continued use of the website after such changes constitutes your
            acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            7. Governing Law
          </h2>
          <p className="text-grayText mb-6">
            These Terms of Use are governed by the laws of Bangladesh. Any
            disputes arising from these terms will be resolved in the courts of
            Sylhet, Bangladesh.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            8. Contact Me
          </h2>
          <p className="text-grayText mb-6">
            If you have any questions about these Terms of Use, please contact
            me at{" "}
            <a
              href="mailto:hello@rajondey.com"
              className="text-accent hover:underline"
            >
              hello@rajondey.com
            </a>
            .
          </p>

          <p className="text-grayText italic">Effective Date: March 24, 2025</p>
        </section>

        {/* Call to Action */}
        <section className="section bg-gray-50 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wider">
            Back to Home
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-grayText">
            Return to the homepage to explore more about personal growth and
            mindfulness.
          </p>
          <Link href="/" className="btn-primary">
            Go to Homepage
          </Link>
        </section>
      </div>
    </>
  );
}
