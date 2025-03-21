// src/app/resources/videos/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Videos() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section text-center relative">
        <h1 className="text-5xl sm:text-6xl font-bold text-primary animate-fade-in-up">
          My <span className="underline-accent">Videos</span>
        </h1>
        <p className="text-xl sm:text-2xl mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText">
          Vlogs, creative projects, and personal stories on my YouTube channel.
        </p>
      </section>
      <div className="decorative-divider" />

      {/* Navigation Section */}
      <section className="section">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link href="/resources/articles" className="card p-6 text-center">
            <h3 className="text-xl font-bold text-primary">Articles & Blogs</h3>
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
      <section className="section">
        <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
          Watch & Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="card">
            <Image
              src="/placeholder.svg"
              alt="Exploring Northeast India"
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
                className="text-accent mt-4 inline-block hover:underline flex items-center gap-1"
              >
                Watch Now <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <div className="card">
            <Image
              src="/placeholder.svg"
              alt="A Day in My Life"
              width={600}
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary">
                A Day in My Life
              </h3>
              <p className="text-grayText mt-2">
                A glimpse into my daily routine, balancing creativity and
                mindfulness.
              </p>
              <a
                href="https://youtube.com/@rajon_dey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent mt-4 inline-block hover:underline flex items-center gap-1"
              >
                Watch Now <ExternalLink size={16} />
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
  );
}
