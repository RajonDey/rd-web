// src/app/resources/recommendations/RecommendationsClient.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function RecommendationsClient() {
  // Data-driven structure for affiliate niches and subcategories
  const affiliateNiches = [
    {
      name: "Personal Development",
      slug: "personal-development",
      subcategories: [
        {
          title: "Books",
          description:
            "Discover transformative books like <em>Atomic Habits</em> by James Clear and <em>The Power of Now</em> by Eckhart Tolle.",
          link: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=youraffiliateid",
          linkText: "Shop on Amazon",
        },
        {
          title: "Courses",
          description:
            "Enroll in courses like 'The Science of Well-Being' on Coursera to enhance your personal growth.",
          link: "https://www.shareasale.com/r.cfm?b=123456&u=youraffiliateid&m=7890",
          linkText: "Explore Courses",
        },
        {
          title: "Tools",
          description:
            "Use tools like Notion for goal tracking and habit building.",
          link: "https://www.shareasale.com/r.cfm?b=654321&u=youraffiliateid&m=9876",
          linkText: "Get Notion",
        },
      ],
    },
    {
      name: "Mindfulness & Productivity",
      slug: "mindfulness-productivity",
      subcategories: [
        {
          title: "Apps",
          description:
            "Try mindfulness apps like Headspace and Calm for daily meditation and stress relief.",
          links: [
            {
              text: "Try Headspace",
              url: "https://www.shareasale.com/r.cfm?b=111222&u=youraffiliateid&m=3333",
            },
            {
              text: "Try Calm",
              url: "https://www.shareasale.com/r.cfm?b=444555&u=youraffiliateid&m=6666",
            },
          ],
        },
        {
          title: "Journals",
          description:
            "Use guided journals like The Five Minute Journal to cultivate gratitude and mindfulness.",
          link: "https://www.amazon.com/Five-Minute-Journal-Gratitude-Mindfulness/dp/0991846206?tag=youraffiliateid",
          linkText: "Shop on Amazon",
        },
        {
          title: "Productivity Tools",
          description:
            "Boost your productivity with tools like Todoist for task management.",
          link: "https://www.shareasale.com/r.cfm?b=777888&u=youraffiliateid&m=9999",
          linkText: "Get Todoist",
        },
      ],
    },
  ];

  // State for active niche filter
  const [activeNiche, setActiveNiche] = useState<string | null>(null);

  // Filter niches based on active selection
  const displayedNiches = activeNiche
    ? affiliateNiches.filter((niche) => niche.slug === activeNiche)
    : affiliateNiches;

  return (
    <>
      {/* Niche Navigation Tabs */}
      <section className="section">
        <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
          My Top Picks
        </h2>
        <div className="flex justify-center flex-wrap gap-4 mb-8 max-w-6xl mx-auto">
          <button
            onClick={() => setActiveNiche(null)}
            className={`px-4 py-2 rounded-lg ${
              activeNiche === null
                ? "bg-primary text-white"
                : "bg-gray-200 text-primary"
            }`}
          >
            All
          </button>
          {affiliateNiches.map((niche) => (
            <button
              key={niche.slug}
              onClick={() => setActiveNiche(niche.slug)}
              className={`px-4 py-2 rounded-lg ${
                activeNiche === niche.slug
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-primary"
              }`}
            >
              {niche.name}
            </button>
          ))}
        </div>

        {/* Affiliate Niches Section */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {displayedNiches.map((niche) => (
            <div key={niche.slug}>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {niche.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {niche.subcategories.map((subcategory, index) => (
                  <div key={index} className="card p-6">
                    <h4 className="text-xl font-bold text-primary">
                      {subcategory.title}
                    </h4>
                    <p
                      className="text-grayText mt-2"
                      dangerouslySetInnerHTML={{
                        __html: subcategory.description,
                      }}
                    />
                    {subcategory.link && (
                      <a
                        href={subcategory.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent mt-4 inline-block hover:underline flex items-center gap-1"
                      >
                        {subcategory.linkText} <ExternalLink size={16} />
                      </a>
                    )}
                    {subcategory.links && (
                      <div className="mt-4 space-y-2">
                        {subcategory.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent inline-block hover:underline flex items-center gap-1"
                          >
                            {link.text} <ExternalLink size={16} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
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
    </>
  );
}
