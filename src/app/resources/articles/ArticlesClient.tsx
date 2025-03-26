"use client";

import Link from "next/link";
import { useState } from "react";
import { WPPost } from "@/types/post";
import he from "he";
// import Image from "next/image";

interface ArticlesClientProps {
  initialPosts: WPPost[];
  totalPosts: number;
}

export default function ArticlesClient({
  initialPosts,
  totalPosts,
}: ArticlesClientProps) {
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

  const [visiblePosts, setVisiblePosts] = useState<WPPost[]>(initialPosts);
  const [visibleCount, setVisibleCount] = useState(initialPosts.length);

  const loadMore = async () => {
    const newCount = visibleCount + 3;
    setVisibleCount(newCount);

    // Since we're fetching all posts on the server side, we can slice from initialPosts
    // In a real-world scenario, you might fetch more posts from the API here
    const allPosts = await fetch("/api/posts").then((res) => res.json());
    const newPosts = allPosts.slice(0, newCount);
    setVisiblePosts(newPosts);
  };

  return (
    <>
      {/* Articles Section */}
      {/* Navigation Section */}
      <section className="section">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link
            href="/resources/articles"
            className="card p-6 text-center bg-primary text-white"
          >
            <h3 className="text-xl font-bold text-white">Articles & Blogs</h3>
          </Link>
          <Link href="/resources/videos" className="card p-6 text-center">
            <h3 className="text-xl font-bold text-primary">Videos</h3>
          </Link>
          <Link href="/resources/newsletter" className="card p-6 text-center">
            <h3 className="text-xl font-bold">Newsletter</h3>
          </Link>
        </div>
      </section>
      <section className="section">
        <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wider">
          Recent Posts
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {visiblePosts.map((post) => (
            <div key={post.id} className="card p-6">
              {/* {post.image && (
                <Image
                  src={post.image || "/development-blog-placeholder.png"}
                  alt={post.title.rendered}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority
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
                    (post.excerpt.rendered.replace(/<[^>]+>/g, "").length > 150
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
          ))}
        </div>
        {visibleCount < totalPosts && (
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
