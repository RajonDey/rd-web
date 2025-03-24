// src/app/resources/articles/[slug]/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/mock-data";
import SEO from "@/components/SEO";

// Update the interface to reflect that params is a Promise
interface ArticlePageProps {
  params: Promise<{ slug: string }>; // params is a Promise that resolves to { slug: string }
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  // Await the params to get the slug
  const { slug } = await params;

  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Rajon Dey",
      description: "The article you are looking for does not exist.",
    };
  }

  return {
    title: `${article.title} | Rajon Dey`,
    description: article.description,
    openGraph: {
      title: `${article.title} | Rajon Dey`,
      description: article.description,
      url: `https://rajondey.com/resources/articles/${article.slug}`,
      type: "article",
      images: [
        {
          url: "https://rajondey.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Rajon Dey - ${article.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Rajon Dey`,
      description: article.description,
      images: ["https://rajondey.com/og-image.jpg"],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  // Await the params to get the slug
  const { slug } = await params;

  console.log("Params:", { slug });
  const article = articles.find((article) => article.slug === slug);
  console.log("Found article:", article);

  if (!article) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    url: `https://rajondey.com/resources/articles/${article.slug}`,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: "Rajon Dey",
      url: "https://rajondey.com",
    },
    publisher: {
      "@type": "Person",
      name: "Rajon Dey",
      url: "https://rajondey.com",
    },
  };

  const mockContent = `
    <p>This is a placeholder for the full article content. In the future, this will be fetched from the WordPress REST API.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <h2>Key Takeaways</h2>
    <ul>
      <li>Takeaway 1: Focus on mindfulness daily.</li>
      <li>Takeaway 2: Creativity sparks joy.</li>
      <li>Takeaway 3: Balance is key to a meaningful life.</li>
    </ul>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  `;

  return (
    <>
      <SEO
        title={`${article.title} | Rajon Dey`}
        description={article.description}
        url={`/resources/articles/${article.slug}`}
        structuredData={structuredData}
      />
      <div>
        {/* Hero Section */}
        <section className="section text-center relative">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary animate-fade-in-up">
            {article.title}
          </h1>
          <p className="text-lg sm:text-xl mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText">
            Published on{" "}
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </section>
        <div className="decorative-divider" />

        {/* Article Content */}
        <section className="section max-w-3xl mx-auto">
          <div
            className="prose prose-lg text-grayText"
            dangerouslySetInnerHTML={{ __html: mockContent }}
          />
        </section>

        {/* Call to Action */}
        <section className="section bg-gray-50 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wider">
            Let’s Connect
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-grayText">
            Enjoyed this article? Let’s connect to share ideas and inspiration
            on living a meaningful life.
          </p>
          <Link href="/connect" className="btn-primary">
            Get in Touch
          </Link>
        </section>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
