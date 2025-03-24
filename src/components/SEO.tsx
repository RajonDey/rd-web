// src/components/SEO.tsx
import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  structuredData?: object; 
}

export default function SEO({
  title,
  description,
  url,
  structuredData,
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://rajondey.com${url}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://rajondey.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Rajon Dey - Articles" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://rajondey.com/og-image.jpg" />
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}
