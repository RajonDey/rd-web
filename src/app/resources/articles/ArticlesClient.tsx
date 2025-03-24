// src/app/resources/articles/ArticlesClient.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { articles } from "@/data/mock-data";

export default function ArticlesClient() {
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
    <>
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
                href={`/resources/articles/${article.slug}`} // Updated path
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

      {/* Call to Action */}
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
    </>
  );
}
