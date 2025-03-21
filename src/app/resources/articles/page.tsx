"use client"

// src/app/resources/articles/page.tsx
import Link from "next/link";
import { useState } from "react";

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "2024: A Year of Growth",
      slug: "2024-in-memory",
      description:
        "Looking back on a year of challenges, triumphs, and new beginnings. Here’s what I learned in 2024.",
    },
    {
      id: 2,
      title: "2023: Lessons in Resilience",
      slug: "2023-in-memory",
      description:
        "A year of unexpected turns taught me the power of adaptability and hope.",
    },
    {
      id: 3,
      title: "Finding Balance in a Busy Life",
      slug: "finding-balance",
      description:
        "Tips and reflections on maintaining balance amidst a hectic schedule.",
    },
    {
      id: 4,
      title: "The Art of Mindfulness",
      slug: "art-of-mindfulness",
      description:
        "How mindfulness transformed my daily routine and brought clarity to my life.",
    },
    {
      id: 5,
      title: "Creative Outlets for a Happier Life",
      slug: "creative-outlets",
      description:
        "Exploring hobbies that spark joy and creativity in everyday life.",
    },
  ];

  const categories = [
    { name: "Productivity", slug: "productivity" },
    { name: "Positivity", slug: "positivity" },
    { name: "Healthy Lifestyle", slug: "healthy-lifestyle" },
    { name: "Finance", slug: "finance" },
    { name: "Life Philosophy", slug: "life-philosophy" },
    { name: "Personal Growth", slug: "personal-growth" },
    { name: "Mindfulness", slug: "mindfulness" },
    { name: "Creative Projects", slug: "creative-projects" },
    { name: "Resources & Tools", slug: "resources-tools" },
    { name: "Spirituality", slug: "spirituality" },
  ];

  const [visibleArticles, setVisibleArticles] = useState(3);

  const loadMore = () => {
    setVisibleArticles((prev) => prev + 3);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section text-center relative">
        <h1 className="text-5xl sm:text-6xl font-bold text-primary animate-fade-in-up">
          <span className="underline-accent">Articles</span> & Blogs
        </h1>
        <p className="text-xl sm:text-2xl mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText">
          Insights on mindfulness, creativity, and living a meaningful life.
        </p>
      </section>
      <div className="decorative-divider" />

      {/* Navigation Section */}
      <section className="section">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link
            href="/resources/articles"
            className="card p-6 text-center bg-primary text-white"
          >
            <h3 className="text-xl font-bold">Articles & Blogs</h3>
          </Link>
          <Link href="/resources/videos" className="card p-6 text-center">
            <h3 className="text-xl font-bold text-primary">Videos</h3>
          </Link>
          <Link href="/resources/newsletter" className="card p-6 text-center">
            <h3 className="text-xl font-bold text-primary">Newsletter</h3>
          </Link>
        </div>
      </section>

      {/* Articles Section */}
      <section className="section">
        <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
          Recent Posts
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {articles.slice(0, visibleArticles).map((article) => (
            <div key={article.id} className="card p-6">
              <h3 className="text-xl font-bold text-primary">
                {article.title}
              </h3>
              <p className="text-grayText mt-2">{article.description}</p>
              <Link
                href={`/articles/${article.slug}`}
                className="text-accent mt-4 inline-block hover:underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
        {visibleArticles < articles.length && (
          <div className="text-center mt-8">
            <button onClick={loadMore} className="btn-primary">
              Load More
            </button>
          </div>
        )}
      </section>

      {/* Categories Section */}
      <section className="section bg-gray-50 pb-0">
        <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/resources/articles?category=${category.slug}`}
              className="card p-4 text-center"
            >
              <h3 className="text-lg font-bold text-primary">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* New Call to Action */}
      <section className="section bg-gray-50 text-center">
        <div className="decorative-divider" />
        <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wider">
          Let’s Connect
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6 text-grayText">
          Loved these insights? Let’s connect to share ideas and inspiration on
          living a meaningful life.
        </p>
        <Link href="/connect" className="btn-primary">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
