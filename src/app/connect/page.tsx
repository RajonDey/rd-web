// src/app/connect/page.tsx
import Link from "next/link";
import { Metadata } from "next";
import {
  ExternalLink,
  Mail,
  Coffee,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import { staticPages } from "@/data/mock-data";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: staticPages.connect.metaTitle,
  description: staticPages.connect.metaDescription,
  openGraph: {
    ...staticPages.connect.openGraph,
    url: "https://rajondey.com/connect",
  },
  twitter: staticPages.connect.twitter,
};

export default function Connect() {
  return (
    <>
      <SEO
        title={staticPages.connect.metaTitle}
        description={staticPages.connect.metaDescription}
        url="/connect"
      />
      <div>
        {/* Hero Section */}
        <section className="section text-center relative">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary animate-fade-in-up">
            Let’s <span className="underline-accent">Connect</span>
          </h1>
          <p className="text-xl sm:text-2xl mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText">
            I’d love to hear from you! Let’s share ideas, inspiration, and
            insights on living a meaningful life.
          </p>
        </section>
        <div className="decorative-divider" />

        {/* Join My Community Section */}
        <section className="section text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wider">
            Join My Community
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-grayText">
            Want to dive deeper into personal growth, mindfulness, and
            creativity? Join my community at{" "}
            <span className="text-primary">join.rajondey.com</span> to connect,
            collaborate, and stay updated.
          </p>
          <a
            href="https://join.rajondey.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-1 mx-auto w-fit"
          >
            Join Now <ExternalLink size={16} />
          </a>
        </section>

        {/* Direct Contact Section */}
        <section className="section bg-gray-50">
          <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
            Reach Out Directly
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Mail size={24} className="text-primary" />
                <h3 className="text-xl font-bold text-primary">Email Me</h3>
              </div>
              <p className="text-grayText">
                Have a question or idea to share? Email me at{" "}
                <a
                  href="mailto:hello@rajondey.com"
                  className="text-accent hover:underline"
                >
                  hello@rajondey.com
                </a>
                . I read and respond to all emails regularly.
              </p>
            </div>
            <div className="card p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Twitter size={24} className="text-primary" />
                <Instagram size={24} className="text-primary" />
                <Facebook size={24} className="text-primary" />
                <h3 className="text-xl font-bold text-primary">Social Media</h3>
              </div>
              <p className="text-grayText">
                Connect with me on social media for quick updates and
                conversations:
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href="https://www.threads.com/@rajjon.dey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1"
                >
                  Thread <ExternalLink size={16} />
                </a>
                <a
                  href="https://instagram.com/rajjon.dey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1"
                >
                  Instagram <ExternalLink size={16} />
                </a>
                <a
                  href="https://www.facebook.com/rajjon.dey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1"
                >
                  Facebook <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Meet in Person Section */}
        <section className="section text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wider">
            Meet in Person
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Coffee size={24} className="text-primary" />
            <p className="text-lg text-grayText">
              Visiting Sylhet, Bangladesh? Let’s meet for a coffee!
            </p>
          </div>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-grayText">
            I’m available on weekends and weekday evenings. Email me at{" "}
            <a
              href="mailto:coffee@rajondey.com"
              className="text-accent hover:underline"
            >
              coffee@rajondey.com
            </a>{" "}
            to arrange a meetup.
          </p>
        </section>

        {/* Call to Action */}
        <section className="section bg-gray-50 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wider">
            Explore More
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-grayText">
            Want to dive deeper into personal growth and mindfulness? Check out
            my resources or return to the homepage.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/resources" className="btn-primary">
              Explore Resources
            </Link>
            <Link href="/" className="btn-secondary">
              Back to Homepage
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
