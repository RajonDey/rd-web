// src/app/about/page.tsx
// import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { staticPages } from "@/data/mock-data";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: staticPages.about.metaTitle,
  description: staticPages.about.metaDescription,
  openGraph: {
    ...staticPages.about.openGraph,
    url: "https://rajondey.com/about",
  },
  twitter: staticPages.about.twitter,
};

export default function About() {
  return (
    <>
      <SEO
        title={staticPages.about.metaTitle}
        description={staticPages.about.metaDescription}
        url="/about"
      />
      <div>
        {/* Hero Section */}
        <section className="section text-center relative">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary animate-fade-in-up">
            About <span className="underline-accent">Rajon Dey</span>
          </h1>
          <p className="text-xl sm:text-2xl mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText">
            Software Developer | Digital Creator | Music Lover
          </p>
        </section>

        {/* Introduction Section */}
        <section className="section bg-gray-50">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wider">
                My Story
              </h2>
              <p className="text-grayText">
                I’m Rajon Dey, a Software Developer with a passion for crafting
                meaningful, professional websites that elevate the online
                presence of individuals and businesses. My journey began with a
                degree in Business Administration, but my curiosity for
                technology led me to web development—a field where I’ve been
                thriving since 2015.
              </p>
              <p className="text-grayText mt-4">
                Beyond coding, I’m a Digital Creator, sharing insights through
                articles, videos, and photography. I’m also deeply connected to
                music, finding solace and inspiration through my guitar. Whether
                I’m coding, creating, or strumming melodies, I aim to inspire
                and connect with others through my work and passions.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/rajon.png" 
                alt="Rajon Dey"
                width={400}
                height={300}
                className="w-full h-72 object-cover rounded-lg shadow-sm"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section">
          <div className="decorative-divider" />
          <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
            Journey & Milestones
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <span className="text-2xl">👨‍🎓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">
                  Education & Training
                </h3>
                <p className="text-grayText">
                  Graduated with a degree in Business Administration from
                  Leading University in 2017. Later, I honed my skills through
                  Web Development training at Sylhet IT Academy, setting the
                  foundation for my tech career.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <span className="text-2xl">🧑‍💼</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Career Path</h3>
                <p className="text-grayText">
                  Began coding and freelancing in web development in 2015. Since
                  2019, I’ve been serving as Module Lead for the frontend team
                  at SJ Innovation LLC, where I lead projects and innovate in
                  the digital space.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <span className="text-2xl">🎬</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Creations</h3>
                <p className="text-grayText">
                  I create diverse digital content—articles, videos, and
                  photos—exploring web technology, the rhythm of music, and the
                  essence of life. My work aims to inspire and educate others.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">
                  Current Focus
                </h3>
                <p className="text-grayText">
                  I’m currently focused on my role at SJ Innovation LLC,
                  developing side projects, learning guitar, creating digital
                  content, and curating a biweekly newsletter to share insights
                  and updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Passions & Lifestyle Section */}
        <section className="section bg-gray-50">
          <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
            Passions & Lifestyle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary">
                🎸 Music & Guitar
              </h3>
              <p className="text-grayText mt-2">
                Music is my sanctuary. My guitar helps me stay creative and
                focused, calming my mind and bringing clarity when I need it
                most. I’m passionate about creating melodies that inspire.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary">
                🧑‍💻 Tech Exploration
              </h3>
              <p className="text-grayText mt-2">
                Beyond my profession, I love diving into cutting-edge
                technologies. Coding and exploring the web’s mysteries is a
                cherished hobby that keeps me learning and growing.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary">
                🌟 Diverse Interests
              </h3>
              <p className="text-grayText mt-2">
                I enjoy driving, traveling, reading, investing, gardening, and
                cooking. Photography and videography are creative outlets where
                I capture life’s beautiful moments.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary">
                🏸 Active Lifestyle
              </h3>
              <p className="text-grayText mt-2">
                I stay active with sports like badminton, cricket, table tennis,
                and chess. I also practice regular exercise, meditation, and
                yoga to maintain overall well-being.
              </p>
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="section">
          <h2 className="text-3xl font-bold text-primary mb-8 uppercase tracking-wider text-center">
            Let’s Connect
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <span className="text-2xl">📨</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-primary">Email</h3>
                <p className="text-grayText">
                  For discussions or inquiries, email me at{" "}
                  <a
                    href="mailto:hello@rajondey.com"
                    className="text-accent hover:underline"
                  >
                    hello@rajondey.com
                  </a>
                  . I read and respond to all emails regularly.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <span className="text-2xl">🐦</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-primary">Social Media</h3>
                <p className="text-grayText">
                  Have a quick query or opinion? Tweet me at{" "}
                  <a
                    href="https://twitter.com/rajjon_dey"
                    className="text-accent hover:underline"
                  >
                    @rajjon_dey
                  </a>{" "}
                  or send a DM on{" "}
                  <a
                    href="https://instagram.com/rajjon.dey"
                    className="text-accent hover:underline"
                  >
                    Instagram
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://www.facebook.com/rajjon.dey"
                    className="text-accent hover:underline"
                  >
                    Facebook
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <span className="text-2xl">☕️</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-primary">
                  Meet in Person
                </h3>
                <p className="text-grayText">
                  Visiting Sylhet, Bangladesh? Let’s meet for a coffee! I’m
                  available on weekends and weekday evenings. Email me at{" "}
                  <a
                    href="mailto:coffee@rajondey.com"
                    className="text-accent hover:underline"
                  >
                    coffee@rajondey.com
                  </a>{" "}
                  to arrange.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
