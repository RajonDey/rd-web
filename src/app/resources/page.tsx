// src/app/resources/page.tsx
import Link from "next/link";

export default function Resources() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section text-center relative">
        <h1 className="text-5xl sm:text-6xl font-bold text-primary animate-fade-in-up">
          <span className="underline-accent">Resources</span> by Rajon Dey
        </h1>
        <p className="text-xl sm:text-2xl mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText">
          Discover insights, stories, and inspiration on personal growth,
          creativity, and lifestyle.
        </p>
      </section>
      <div className="decorative-divider" />

      {/* Categories Section */}
      <section className="section">
        <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
          Explore My Content
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link href="/resources/articles" className="card p-6 text-center">
            <h3 className="text-xl font-bold text-primary">Articles & Blogs</h3>
            <p className="text-grayText mt-2">
              Read my thoughts on mindfulness, creativity, and living a
              meaningful life.
            </p>
          </Link>
          <Link href="/resources/videos" className="card p-6 text-center">
            <h3 className="text-xl font-bold text-primary">Videos</h3>
            <p className="text-grayText mt-2">
              Watch vlogs, creative projects, and personal stories on my YouTube
              channel.
            </p>
          </Link>
          <Link href="/resources/newsletter" className="card p-6 text-center">
            <h3 className="text-xl font-bold text-primary">Newsletter</h3>
            <p className="text-grayText mt-2">
              Join my biweekly newsletter for insights on personal growth and
              creativity.
            </p>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wider">
          Stay Inspired
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6 text-grayText">
          Dive into my resources to fuel your journey in personal growth and
          creativity.
        </p>
        <Link href="/resources/articles" className="btn-primary">
          Start Exploring
        </Link>
      </section>
    </div>
  );
}
