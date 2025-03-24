// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { staticPages } from "@/data/mock-data";
import SEO from "@/components/SEO";
import { Mail } from "lucide-react";
import HeroSubtitle from "@/components/homepage/HeroSubtitle";

export const metadata: Metadata = {
  title: staticPages.home.metaTitle,
  description: staticPages.home.metaDescription,
  openGraph: {
    ...staticPages.home.openGraph,
    url: "https://rajondey.com",
  },
  twitter: staticPages.home.twitter,
};

export default function Home() {
  return (
    <>
      <SEO
        title={staticPages.home.metaTitle}
        description={staticPages.home.metaDescription}
        url="/"
      />
      <div>
        {/* Hero Section */}
        <section className="section text-center relative flex items-center justify-center">
          {/* Full-Background Video */}
          {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          preload="metadata"
        >
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
          {/* Overlay for Text Readability */}
          {/* <div className="absolute inset-0 bg-black opacity-40 z-10" /> */}
          {/* Hero Content */}
          <div className="relative z-20">
            <h1 className="text-5xl sm:text-6xl font-bold text-primary animate-fade-in-up drop-shadow-md">
              Hey, I’m <span className="underline-accent">Rajon Dey</span>
            </h1>
            <HeroSubtitle />
            <p className="text-lg mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText drop-shadow-md">
              I craft meaningful experiences through web development, music, and
              insights on personal growth.
            </p>
            <div className="mt-8 animate-fade-in-up">
              <Link
                href="/about"
                className="btn-primary bg-primary text-white hover:bg-gray-800 transition"
              >
                Discover My Journey
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="section">
          <div className="decorative-divider" />
          <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
            Explore My World
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/articles?category=life"
              className="card p-6 text-center"
            >
              <h3 className="text-xl font-bold text-primary">Life</h3>
              <p className="text-grayText mt-2">
                Reflections on mindfulness, growth, and living with intention.
              </p>
            </Link>
            <Link href="/web" className="card p-6 text-center">
              <h3 className="text-xl font-bold text-primary">Web</h3>
              <p className="text-grayText mt-2">
                Building the future with code, creativity, and innovation.
              </p>
            </Link>
            <Link href="/music" className="card p-6 text-center">
              <h3 className="text-xl font-bold text-primary">Music</h3>
              <p className="text-grayText mt-2">
                Creating melodies that inspire and connect us.
              </p>
            </Link>
          </div>
        </section>

        {/* Latest Posts Section */}
        <section className="section bg-gray-50">
          <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
            Recent Reflections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary">
                2024: A Year of Growth
              </h3>
              <p className="text-grayText mt-2">
                Looking back on a year of challenges, triumphs, and new
                beginnings. Here’s what I learned in 2024.
              </p>
              <Link
                href="/articles/2024-in-memory"
                className="text-accent mt-4 inline-block hover:underline"
              >
                Read More
              </Link>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary">
                2023: Lessons in Resilience
              </h3>
              <p className="text-grayText mt-2">
                A year of unexpected turns taught me the power of adaptability
                and hope.
              </p>
              <Link
                href="/articles/2023-in-memory"
                className="text-accent mt-4 inline-block hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section">
          <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
            My Creations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 text-center transform lg:-translate-y-6">
              <h3 className="text-xl font-bold text-primary">
                Mindful Moments
              </h3>
              <p className="text-grayText mt-2">
                A platform to inspire mindfulness and intentional living.
              </p>
              <Link
                href="/projects/mindful-moments"
                className="text-accent mt-4 inline-block hover:underline"
              >
                Explore
              </Link>
            </div>
            <div className="card p-6 text-center">
              <h3 className="text-xl font-bold text-primary">CodeCraft</h3>
              <p className="text-grayText mt-2">
                Innovative web solutions for a digital world.
              </p>
              <Link
                href="/projects/code-craft"
                className="text-accent mt-4 inline-block hover:underline"
              >
                Visit Now
              </Link>
            </div>
            <div className="card p-6 text-center transform lg:translate-y-6">
              <h3 className="text-xl font-bold text-primary">Harmony Notes</h3>
              <p className="text-grayText mt-2">
                A musical journey through my original compositions.
              </p>
              <Link
                href="/projects/harmony-notes"
                className="text-accent mt-4 inline-block hover:underline"
              >
                Listen Now
              </Link>
            </div>
          </div>
        </section>

        {/* YouTube Section */}
        <section className="section bg-gray-50">
          <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
            Watch & Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <Image
                src="/placeholder.svg"
                alt="YouTube Video 1"
                width={600}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">
                  Exploring Northeast India
                </h3>
                <p className="text-grayText mt-2">
                  A visual journey through the serene landscapes of Northeast
                  India.
                </p>
                <a
                  href="https://youtube.com/@rajon_dey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent mt-4 inline-block hover:underline"
                >
                  Watch Now
                </a>
              </div>
            </div>
            <div className="card">
              <Image
                src="/placeholder.svg"
                alt="YouTube Video 2"
                width={600}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">
                  JavaScript for Beginners
                </h3>
                <p className="text-grayText mt-2">
                  Learn JavaScript with these simple, practical projects.
                </p>
                <a
                  href="https://youtube.com/@rajon_dey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent mt-4 inline-block hover:underline"
                >
                  Watch Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wider">
            Stay Inspired
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-grayText">
            Join my newsletter for weekly insights on creativity, growth, and
            technology.
          </p>
          <form className="flex justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-secondary rounded-r-lg hover:bg-accent transition"
            >
              <Mail size={20} />
            </button>
          </form>
          <p className="text-sm text-grayText mt-4">
            Your privacy matters. Unsubscribe anytime.
          </p>
        </section>

        {/* Connect with Me Section */}
        <section className="section bg-gray-50 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wider">
            Connect with Me
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-grayText">
            I’d love to hear from you! Whether you have a question, want to
            collaborate, or just want to say hi, let’s connect.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/about" className="btn-primary">
              Learn More About Me
            </Link>
            <Link href="/connect" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
