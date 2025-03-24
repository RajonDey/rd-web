// src/app/resources/recommendations/page.tsx
import { Metadata } from "next";
import { resourceSubPages } from "@/data/mock-data";
import SEO from "@/components/SEO";
import RecommendationsClient from "./RecommendationsClient"; // New Client Component

export const metadata: Metadata = {
  title: resourceSubPages.recommendations.metaTitle,
  description: resourceSubPages.recommendations.metaDescription,
  openGraph: {
    ...resourceSubPages.recommendations.openGraph,
    url: "https://rajondey.com/resources/recommendations",
  },
  twitter: resourceSubPages.recommendations.twitter,
};

export default function Recommendations() {
  return (
    <>
      <SEO
        title={resourceSubPages.recommendations.metaTitle}
        description={resourceSubPages.recommendations.metaDescription}
        url="/resources/recommendations"
      />
      <div>
        {/* Hero Section */}
        <section className="section text-center relative">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary animate-fade-in-up">
            <span className="underline-accent">Recommendations</span>
          </h1>
          <p className="text-xl sm:text-2xl mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText">
            Curated tools, books, and apps to support your personal growth and
            mindfulness journey.
          </p>
        </section>
        <div className="decorative-divider" />

        {/* Pass the content to the Client Component */}
        <RecommendationsClient />
      </div>
    </>
  );
}
