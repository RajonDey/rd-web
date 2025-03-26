// src/app/projects/page.tsx

import Image from "next/image";
import { Metadata } from "next";
import { staticPages } from "@/data/mock-data";
import SEO from "@/components/SEO";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: staticPages.projects.metaTitle,
  description: staticPages.projects.metaDescription,
  openGraph: {
    ...staticPages.projects.openGraph,
    url: "https://rajondey.com/projects",
  },
  twitter: staticPages.projects.twitter,
};

export default function Projects() {
  return (
    <>
      <SEO
        title={staticPages.projects.metaTitle}
        description={staticPages.projects.metaDescription}
        url="/projects"
      />
      <div>
        {/* Hero Section */}
        <section className="section text-center relative">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary animate-fade-in-up">
            My <span className="underline-accent">Projects</span>
          </h1>
          <p className="text-xl sm:text-2xl mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText">
            A collection of ideas I’ve brought to life through creativity and
            code.
          </p>
        </section>

        {/* Projects Section */}
        <section className="section bg-gray-50">
          <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase">
            My Creations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* InspireXcellence */}
            <div className="card p-6 text-center hover:shadow-lg transition-shadow">
              <Image
                src="/project-logos/inspirexcellence.png"
                alt="InspireXcellence Logo"
                width={100}
                height={100}
                className="mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-primary">
                InspireXcellence
              </h3>
              <p className="text-grayText mt-2">
                Inspiring individuals to achieve personal growth, health,
                wealth, and happiness.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.youtube.com/@InspireXcellences/shorts"
                  className="text-accent mt-4 hover:underline flex gap-1 items-center justify-center"
                  target="_blank"
                >
                  Watch to get Inspire <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Giftlawn */}
            <div className="card p-6 text-center hover:shadow-lg">
              <Image
                src="/project-logos/giftlawn.png"
                alt="Giftlawn Logo"
                width={100}
                height={100}
                className="mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-primary">Giftlawn</h3>
              <p className="text-grayText mt-2">
                Making it easy to find the perfect gift for every occasion.
              </p>
              <div className="mt-4">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent inline-block hover:underline"
                >
                  Visit Giftlawn
                </a>
              </div>
              <p className="text-sm text-red-500 mt-2">Discontinued</p>
            </div>

            {/* CodeByRajon */}
            <div className="card p-6 text-center hover:shadow-lg">
              <Image
                src="/project-logos/codebyrajon.png"
                alt="CodeByRajon Logo"
                width={100}
                height={100}
                className="mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-primary">CodeByRajon</h3>
              <p className="text-grayText mt-2">My development portfolio!</p>
              <div className="mt-4">
                <a
                  href="https://portfolio.rajondey.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent mt-4 hover:underline flex gap-1 items-center justify-center"
                >
                  Visit My Portfolio <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Devlife */}
            <div className="card p-6 text-center hover:shadow-lg">
              <Image
                src="/project-logos/devlife.png"
                alt="Devlife Logo"
                width={100}
                height={100}
                className="mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-primary">Devlife</h3>
              <p className="text-grayText mt-2">
                A shop for developer clothes!
              </p>
              <div className="mt-4">
                <a
                  href="https://devlfe.creator-spring.com/"
                  className="text-accent mt-4 hover:underline flex gap-1 items-center justify-center"
                  target="_blank"
                >
                  Shop <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Next One (Coming Soon) */}
            <div className="card p-6 text-center hover:shadow-lg transition-shadow flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold text-primary">Next One!</h3>
              <p className="text-grayText mt-2">Coming soon...</p>
              <p className="text-sm text-gray-500 mt-2">In Development</p>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="section text-center">
          <p className="text-lg max-w-2xl mx-auto text-grayText">
            I’m a perpetual creator, dedicated to shaping fresh ideas that leave
            a sketch on the world.
          </p>
        </section>
      </div>
    </>
  );
}
