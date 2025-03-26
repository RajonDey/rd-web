// src/app/resources/videos/page.tsx
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";
import { resourceSubPages } from "@/data/mock-data";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: resourceSubPages.videos.metaTitle,
  description: resourceSubPages.videos.metaDescription,
  openGraph: {
    ...resourceSubPages.videos.openGraph,
    url: "https://rajondey.com/resources/videos",
  },
  twitter: resourceSubPages.videos.twitter,
};

export default function Videos() {
  return (
    <>
      <SEO
        title={resourceSubPages.videos.metaTitle}
        description={resourceSubPages.videos.metaDescription}
        url="/resources/videos"
      />
      <div>
        {/* Hero Section */}
        <section className="section text-center relative">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary animate-fade-in-up">
            My <span className="underline-accent">Videos</span>
          </h1>
          <p className="text-xl sm:text-2xl mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText">
            Vlogs, creative projects, and personal stories on my YouTube
            channel.
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
            <Link
              href="/resources/videos"
              className="card p-6 text-center bg-primary text-white"
            >
              <h3 className="text-xl font-bold">Videos</h3>
            </Link>
            <Link href="/resources/newsletter" className="card p-6 text-center">
              <h3 className="text-xl font-bold text-primary">Newsletter</h3>
            </Link>
          </div>
        </section>

        {/* Videos Section */}
        <section className="section bg-gray-50">
          <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
            Watch & Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <div className="relative w-full pt-[56.25%] rounded-t-md overflow-hidden">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/68td39cRhow?si=7nofoQoHQhI0X8yR&amp;controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">
                  #7UsefulJSProjects
                </h3>
                <p className="text-grayText mt-2">
                  ToDo App using JavaScript with Firebase Realtime Database
                </p>
                <a
                  href="https://www.youtube.com/@rajon_dey/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent mt-4 inline-block hover:underline"
                >
                  Watch More on YouTube
                </a>
              </div>
            </div>
            <div className="card">
              <div className="relative w-full pt-[56.25%] rounded-t-md overflow-hidden">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/5Q2Iot1LCNg?si=Fm5KBB7MLddbJJad&amp;controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">
                  #7UsefulJSProjects
                </h3>
                <p className="text-grayText mt-2">
                  Lyric Search App using API with JavaScript
                </p>
                <a
                  href="https://www.youtube.com/@rajon_dey/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent mt-4 inline-block hover:underline"
                >
                  Watch More on YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section bg-gray-50 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wider">
            Enjoyed the Videos?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-grayText">
            Subscribe to my YouTube channel for more vlogs and personal stories.
          </p>
          <a
            href="https://youtube.com/@rajon_dey"
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
