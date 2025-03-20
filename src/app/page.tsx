// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section text-center relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 pointer-events-none" />
        <h1 className="text-5xl sm:text-6xl font-bold text-primary animate-fade-in-up">
          Hey, I’m <span className="underline-accent">Rajon Dey</span>
        </h1>
        <p className="text-xl sm:text-2xl mt-4 max-w-2xl mx-auto animate-fade-in-up">
          Creative Professional | Thought Leader | Aspiring Musician
        </p>
        <p className="text-lg mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText">
          I craft meaningful experiences through web development, music, and
          insights on personal growth.
        </p>
        <div className="mt-8 animate-fade-in-up">
          <Link href="/about" className="btn-primary">
            Discover My Journey
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="decorative-divider" />
        <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
          Explore My World
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link href="/articles?category=life" className="card p-6 text-center">
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
        <div className="decorative-divider" />
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
              A year of unexpected turns taught me the power of adaptability and
              hope.
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
        <div className="decorative-divider" />
        <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
          My Creations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-6 text-center transform lg:-translate-y-6">
            <h3 className="text-xl font-bold text-primary">Mindful Moments</h3>
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
        <div className="decorative-divider" />
        <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
          Watch & Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <Image
              src="/placeholder.svg" // Placeholder image
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
              src="/placeholder.svg" // Placeholder image
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
        <div className="decorative-divider" />
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

      {/* My Story Section */}
      <section className="section bg-gray-50">
        <div className="decorative-divider" />
        <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
          My Journey
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-grayText">
              I’m Rajon Dey, a creative soul on a mission to inspire. My journey
              began with a curiosity for technology, leading me to master web
              development. Along the way, I discovered the power of music and
              mindfulness to transform lives.
            </p>
            <p className="text-grayText mt-4">
              Through this space, I share my experiences, projects, and thoughts
              on living intentionally. Let’s embark on this journey together.
            </p>
            <Link
              href="/about"
              className="text-accent mt-4 inline-block hover:underline"
            >
              Learn More
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg" // Placeholder image
              alt="Rajon Dey"
              width={400}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
