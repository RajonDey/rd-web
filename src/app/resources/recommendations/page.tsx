// src/app/resources/recommendations/page.tsx
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Recommendations() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section text-center relative">
        <h1 className="text-5xl sm:text-6xl font-bold text-primary animate-fade-in-up">
          <span className="underline-accent">Recommendations</span>
        </h1>
        <p className="text-xl sm:text-2xl mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText">
          Curated tools, books, and apps to support your personal growth and
          mindfulness journey.
        </p>
      </section>
      <div className="decorative-divider" />

      {/* Navigation Section */}
      <section className="section">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Link href="/resources/articles" className="card p-6 text-center">
            <h3 className="text-xl font-bold text-primary">Articles & Blogs</h3>
          </Link>
          <Link href="/resources/videos" className="card p-6 text-center">
            <h3 className="text-xl font-bold text-primary">Videos</h3>
          </Link>
          <Link href="/resources/newsletter" className="card p-6 text-center">
            <h3 className="text-xl font-bold text-primary">Newsletter</h3>
          </Link>
          <Link
            href="/resources/recommendations"
            className="card p-6 text-center bg-primary text-white"
          >
            <h3 className="text-xl font-bold">Recommendations</h3>
          </Link>
        </div>
      </section>

      {/* Affiliate Niches Section */}
      <section className="section">
        <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
          My Top Picks
        </h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Personal Development */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Personal Development
            </h3>
            <div className="space-y-6">
              <div className="card p-6">
                <h4 className="text-xl font-bold text-primary">Books</h4>
                <p className="text-grayText mt-2">
                  Discover transformative books like <em>Atomic Habits</em> by
                  James Clear and <em>The Power of Now</em> by Eckhart Tolle.
                </p>
                <a
                  href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=youraffiliateid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent mt-4 inline-block hover:underline flex items-center gap-1"
                >
                  Shop on Amazon <ExternalLink size={16} />
                </a>
              </div>
              <div className="card p-6">
                <h4 className="text-xl font-bold text-primary">Courses</h4>
                <p className="text-grayText mt-2">
                  Enroll in courses like &quot;The Science of Well-Being&quot; on Coursera
                  to enhance your personal growth.
                </p>
                <a
                  href="https://www.shareasale.com/r.cfm?b=123456&u=youraffiliateid&m=7890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent mt-4 inline-block hover:underline flex items-center gap-1"
                >
                  Explore Courses <ExternalLink size={16} />
                </a>
              </div>
              <div className="card p-6">
                <h4 className="text-xl font-bold text-primary">Tools</h4>
                <p className="text-grayText mt-2">
                  Use tools like Notion for goal tracking and habit building.
                </p>
                <a
                  href="https://www.shareasale.com/r.cfm?b=654321&u=youraffiliateid&m=9876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent mt-4 inline-block hover:underline flex items-center gap-1"
                >
                  Get Notion <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Mindfulness & Productivity */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Mindfulness & Productivity
            </h3>
            <div className="space-y-6">
              <div className="card p-6">
                <h4 className="text-xl font-bold text-primary">Apps</h4>
                <p className="text-grayText mt-2">
                  Try mindfulness apps like Headspace and Calm for daily
                  meditation and stress relief.
                </p>
                <a
                  href="https://www.shareasale.com/r.cfm?b=111222&u=youraffiliateid&m=3333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent mt-4 inline-block hover:underline flex items-center gap-1"
                >
                  Try Headspace <ExternalLink size={16} />
                </a>
                <a
                  href="https://www.shareasale.com/r.cfm?b=444555&u=youraffiliateid&m=6666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent mt-2 inline-block hover:underline flex items-center gap-1"
                >
                  Try Calm <ExternalLink size={16} />
                </a>
              </div>
              <div className="card p-6">
                <h4 className="text-xl font-bold text-primary">Journals</h4>
                <p className="text-grayText mt-2">
                  Use guided journals like The Five Minute Journal to cultivate
                  gratitude and mindfulness.
                </p>
                <a
                  href="https://www.amazon.com/Five-Minute-Journal-Gratitude-Mindfulness/dp/0991846206?tag=youraffiliateid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent mt-4 inline-block hover:underline flex items-center gap-1"
                >
                  Shop on Amazon <ExternalLink size={16} />
                </a>
              </div>
              <div className="card p-6">
                <h4 className="text-xl font-bold text-primary">
                  Productivity Tools
                </h4>
                <p className="text-grayText mt-2">
                  Boost your productivity with tools like Todoist for task
                  management.
                </p>
                <a
                  href="https://www.shareasale.com/r.cfm?b=777888&u=youraffiliateid&m=9999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent mt-4 inline-block hover:underline flex items-center gap-1"
                >
                  Get Todoist <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Platforms Section */}
      <section className="section bg-gray-50">
        <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
          Affiliate Platforms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary">
              Amazon Associates
            </h3>
            <p className="text-grayText mt-2">
              Perfect for books, journals, and mindfulness tools. Find my
              favorite recommendations on Amazon.
            </p>
            <a
              href="https://www.amazon.com?tag=youraffiliateid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent mt-4 inline-block hover:underline flex items-center gap-1"
            >
              Visit Amazon <ExternalLink size={16} />
            </a>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary">ShareASale</h3>
            <p className="text-grayText mt-2">
              Great for apps like Headspace, Calm, and productivity tools.
              Explore my top picks.
            </p>
            <a
              href="https://www.shareasale.com/r.cfm?b=000000&u=youraffiliateid&m=1111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent mt-4 inline-block hover:underline flex items-center gap-1"
            >
              Visit ShareASale <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="section text-center">
        <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wider">
          Affiliate Disclosure
        </h2>
        <p className="text-grayText max-w-2xl mx-auto">
          Some of the links on this page are affiliate links, which means I may
          earn a small commission at no extra cost to you if you make a
          purchase. I only recommend products and services I truly believe in to
          support your personal growth journey. Thank you for your support!
        </p>
      </section>

      {/* Call to Action */}
      <section className="section bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wider">
          Let’s Connect
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6 text-grayText">
          Found something you love? Let’s connect to share ideas and inspiration
          on living a meaningful life.
        </p>
        <Link href="/connect" className="btn-primary">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
