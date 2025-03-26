import Link from "next/link";
import { Metadata } from "next";
import { staticPages } from "@/data/mock-data";
import { fetchPosts } from "@/lib/wp-api"; // Import the fetchPosts function
import { WPPost } from "@/types/post"; // Import the WPPost type
import SEO from "@/components/SEO";
import { ExternalLink } from "lucide-react";
import HeroSubtitle from "@/components/homepage/HeroSubtitle";
import he from "he";

export const metadata: Metadata = {
  title: staticPages.home.metaTitle,
  description: staticPages.home.metaDescription,
  openGraph: {
    ...staticPages.home.openGraph,
    url: "https://rajondey.com",
  },
  twitter: staticPages.home.twitter,
};

export default async function Home() {
  // Fetch the latest posts
  const posts: WPPost[] = await fetchPosts();
  // Sort posts by date (newest first) and take the top 2
  const latestPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

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
            <a
              href="https://development.rajondey.com/"
              className="card p-6 text-center"
              target="_blank"
            >
              <h3 className="text-xl font-bold text-primary flex gap-2 items-center justify-center">
                Web <ExternalLink size={16} />
              </h3>
              <p className="text-grayText mt-2">
                Building the future with code, creativity, and innovation.
              </p>
            </a>
            <Link href="/resources/articles" className="card p-6 text-center">
              <h3 className="text-xl font-bold text-primary">Life</h3>
              <p className="text-grayText mt-2">
                Reflections on mindfulness, growth, and living with intention.
              </p>
            </Link>
            <a
              href="https://music.rajondey.com/"
              className="card p-6 text-center"
              target="_blank"
            >
              <h3 className="text-xl font-bold text-primary flex gap-2 items-center justify-center">
                Music <ExternalLink size={16} />
              </h3>
              <p className="text-grayText mt-2">
                Creating melodies that inspire and connect us.
              </p>
            </a>
          </div>
        </section>

        {/* Latest Posts Section */}
        <section className="section bg-gray-50">
          <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
            Recent Reflections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestPosts.length > 0 ? (
              latestPosts.map((post) => (
                <div key={post.id} className="card p-6">
                  {/* {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title.rendered}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover rounded-md mb-4"
                      loading="lazy"
                    />
                  )} */}
                  <h3 className="text-xl font-bold text-primary">
                    {post.title.rendered}
                  </h3>
                  <p className="text-grayText mt-2">
                    {
                      he
                        .decode(
                          post.excerpt.rendered
                            .replace(/<[^>]+>/g, "") // Remove HTML tags
                            .replace(/\[\s*\.{3}\s*\]/g, "") // Remove "[…]" or similar "read more" indicators
                        )
                        .trim() // Remove leading/trailing whitespace
                        .slice(0, 150) + // Optional: Limit to 150 characters for consistency
                        (post.excerpt.rendered.replace(/<[^>]+>/g, "").length >
                        150
                          ? "..."
                          : "") // Add ellipsis if truncated
                    }
                  </p>
                  <Link
                    href={`/resources/articles/${post.slug}`}
                    className="text-accent mt-4 inline-block hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-grayText text-center col-span-2">
                No recent posts available.
              </p>
            )}
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
                InspireXcellence
              </h3>
              <p className="text-grayText mt-2">
                Inspiring individuals to achieve personal growth, health,
                wealth, and happiness.
              </p>
              <a
                href="https://www.youtube.com/@InspireXcellences/shorts"
                className="text-accent mt-4 hover:underline flex gap-1 items-center justify-center"
                target="_blank"
              >
                Watch to get Inspire <ExternalLink size={16} />
              </a>
            </div>
            <div className="card p-6 text-center">
              <h3 className="text-xl font-bold text-primary">Devlife</h3>
              <p className="text-grayText mt-2">
                A shop for developer clothes by a developer!
              </p>
              <a
                href="https://devlfe.creator-spring.com/"
                className="text-accent mt-4 hover:underline flex gap-1 items-center justify-center"
                target="_blank"
              >
                Shop <ExternalLink size={16} />
              </a>
            </div>
            <div className="card p-6 text-center transform lg:translate-y-6">
              <h3 className="text-xl font-bold text-primary">Giftlawn</h3>
              <p className="text-grayText mt-2">
                Making it easy to find the perfect gift for every occasion.
              </p>
              <p className="text-sm text-red-500 mt-2">Discontinued</p>
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

        {/* Newsletter Section */}
        <section className="section text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wider">
            Stay Inspired
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-grayText">
            Join my newsletter for weekly insights on creativity, growth, and
            technology.
          </p>
          <div className="flex justify-center items-center max-w-md mx-auto">
            <iframe
              src="https://embeds.beehiiv.com/e61a1ad0-5452-4864-b06d-cd3438873253?slim=true"
              data-test-id="beehiiv-embed"
              height="52"
              frameBorder="0"
              scrolling="no"
              className="w-full"
              style={{
                margin: 0,
                borderRadius: "0px !important",
                backgroundColor: "transparent",
              }}
            />
          </div>
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
