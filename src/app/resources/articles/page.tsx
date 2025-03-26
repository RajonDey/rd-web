import { Metadata } from "next";
import { resourceSubPages } from "@/data/mock-data";
import { fetchPosts } from "@/lib/wp-api";
import SEO from "@/components/SEO";
import ArticlesClient from "./ArticlesClient";


export const metadata: Metadata = {
  title: resourceSubPages.articles.metaTitle,
  description: resourceSubPages.articles.metaDescription,
  openGraph: {
    ...resourceSubPages.articles.openGraph,
    url: "https://rajondey.com/resources/articles",
  },
  twitter: resourceSubPages.articles.twitter,
};

export default async function Articles() {
  // Fetch all posts on the server side
  const allPosts = await fetchPosts();
  const initialPosts = allPosts.slice(0, 3); // Initial set of posts (first 3)
  const totalPosts = allPosts.length;

  // Structured data for ArticleList (for SEO)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Articles by Rajon Dey",
    description:
      "Read Rajon Dey's articles on personal growth, mindfulness, and creativity to inspire a meaningful life.",
    url: "https://rajondey.com/resources/articles",
    publisher: {
      "@type": "Person",
      name: "Rajon Dey",
      url: "https://rajondey.com",
    },
  };

  return (
    <>
      <SEO
        title={resourceSubPages.articles.metaTitle}
        description={resourceSubPages.articles.metaDescription}
        url="/resources/articles"
        structuredData={structuredData}
      />
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

        {/* Pass the initial posts and total posts to the Client Component */}
        <ArticlesClient initialPosts={initialPosts} totalPosts={totalPosts} />
      </div>
    </>
  );
}
