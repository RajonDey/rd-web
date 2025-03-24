// src/app/privacy-policy/page.tsx
import Link from "next/link";
import { Metadata } from "next";
import { staticPages } from "@/data/mock-data";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: staticPages.privacyPolicy.metaTitle,
  description: staticPages.privacyPolicy.metaDescription,
  openGraph: {
    ...staticPages.privacyPolicy.openGraph,
    url: "https://rajondey.com/privacy-policy",
  },
  twitter: staticPages.privacyPolicy.twitter,
};

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title={staticPages.privacyPolicy.metaTitle}
        description={staticPages.privacyPolicy.metaDescription}
        url="/privacy-policy"
      />
      <div>
        {/* Hero Section */}
        <section className="section text-center relative">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary animate-fade-in-up">
            <span className="underline-accent">Privacy</span> Policy
          </h1>
          <p className="text-xl sm:text-2xl mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText">
            Your privacy matters. Learn how I handle your data on rajondey.com.
          </p>
        </section>
        <div className="decorative-divider" />

        {/* Privacy Policy Content */}
        <section className="section max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
          <p className="text-grayText mb-6">
            Welcome to rajondey.com, a personal website operated by Rajon Dey. I
            am committed to protecting your privacy and ensuring that your
            personal information is handled in a safe and responsible manner.
            This Privacy Policy explains how I collect, use, and protect your
            data when you visit my website.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            1. Information I Collect
          </h2>
          <p className="text-grayText mb-4">
            I may collect the following types of information when you visit
            rajondey.com:
          </p>
          <ul className="list-disc list-inside text-grayText mb-6 space-y-2">
            <li>
              <strong>Automatically Collected Information:</strong> I may use
              analytics tools (e.g., Google Analytics) to collect non-personal
              information such as your IP address, browser type, device type,
              and pages visited. This data helps me understand how users
              interact with my website and improve its performance.
            </li>
            <li>
              <strong>Third-Party Links:</strong> My website contains affiliate
              links (e.g., Amazon Associates, ShareASale) and external links
              (e.g., to join.rajondey.com, social media). If you click these
              links, third parties may collect data about you. I am not
              responsible for their privacy practices, so please review their
              privacy policies.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">
            2. How I Use Your Information
          </h2>
          <p className="text-grayText mb-4">
            The information I collect is used for the following purposes:
          </p>
          <ul className="list-disc list-inside text-grayText mb-6 space-y-2">
            <li>
              To analyze website usage and improve content and user experience.
            </li>
            <li>
              To provide affiliate links and recommendations. I may earn a
              commission if you make a purchase through these links, at no extra
              cost to you.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">
            3. Cookies and Tracking
          </h2>
          <p className="text-grayText mb-6">
            My website may use cookies to enhance your browsing experience.
            Cookies are small files stored on your device that help me
            understand how you use my site. You can disable cookies in your
            browser settings, but this may affect the functionality of the
            website.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            4. Data Sharing
          </h2>
          <p className="text-grayText mb-6">
            I do not sell or share your personal information with third parties,
            except as necessary to provide services (e.g., analytics tools) or
            as required by law. If you click on affiliate or external links,
            those third parties may collect and use your data according to their
            own privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            5. Data Security
          </h2>
          <p className="text-grayText mb-6">
            I take reasonable measures to protect your data from unauthorized
            access, but no method of transmission over the internet is 100%
            secure. I cannot guarantee the absolute security of your
            information.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            6. Your Rights
          </h2>
          <p className="text-grayText mb-6">
            Depending on your location, you may have rights regarding your
            personal data, such as the right to access, correct, or delete your
            information. Since I do not collect personal data directly (e.g.,
            through forms), you can contact me at{" "}
            <a
              href="mailto:hello@rajondey.com"
              className="text-accent hover:underline"
            >
              hello@rajondey.com
            </a>{" "}
            with any privacy-related requests.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            7. Changes to This Policy
          </h2>
          <p className="text-grayText mb-6">
            I may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated effective date. Please check
            back periodically to stay informed.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            8. Contact Me
          </h2>
          <p className="text-grayText mb-6">
            If you have any questions about this Privacy Policy, please contact
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
