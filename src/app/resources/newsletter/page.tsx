// src/app/resources/newsletter/page.tsx
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";
import { resourceSubPages } from "@/data/mock-data";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: resourceSubPages.newsletter.metaTitle,
  description: resourceSubPages.newsletter.metaDescription,
  openGraph: {
    ...resourceSubPages.newsletter.openGraph,
    url: "https://rajondey.com/resources/newsletter",
  },
  twitter: resourceSubPages.newsletter.twitter,
};

export default function Newsletter() {
  return (
    <>
      <SEO
        title={resourceSubPages.newsletter.metaTitle}
        description={resourceSubPages.newsletter.metaDescription}
        url="/resources/newsletter"
      />
      <div>
        {/* Hero Section */}
        <section className="section text-center relative">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary animate-fade-in-up">
            My <span className="underline-accent">Newsletter</span>
          </h1>
          <p className="text-xl sm:text-2xl mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText">
            Biweekly insights on personal growth and creativity.
          </p>
        </section>
        <div className="decorative-divider" />

        {/* Navigation Section */}
        <section className="section">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/resources/articles" className="card p-6 text-center">
              <h3 className="text-xl font-bold text-primary">
                Articles & Blogs
              </h3>
            </Link>
            <Link href="/resources/videos" className="card p-6 text-center">
              <h3 className="text-xl font-bold text-primary">Videos</h3>
            </Link>
            <Link
              href="/resources/newsletter"
              className="card p-6 text-center bg-primary text-white"
            >
              <h3 className="text-xl font-bold">Newsletter</h3>
            </Link>
          </div>
        </section>

        {/* Redirect Section */}
        <section className="section text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wider">
            Join My Newsletter
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-grayText">
            Subscribe to my biweekly newsletter for insights on personal growth,
            creativity, and living a meaningful life. You’ll be redirected to my
            Beehiive page to sign up.
          </p>
          <a
            href="https://rd-lifenotes.beehiiv.com/subscribe" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center gap-1 mx-auto w-fit"
          >
            Subscribe Now <ExternalLink size={16} />
          </a>
        </section>
      </div>
    </>
  );
}
