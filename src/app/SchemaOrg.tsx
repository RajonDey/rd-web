import Script from "next/script";

const SchemaOrg = () => {
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Rajon Dey",
    jobTitle: "Creative Professional & Thought Leader",
    url: "https://rajondey.com",
    image: "https://rajondey.com/rajon.png", // Add your high-quality profile image URL
    description:
      "Rajon Dey shares insights on personal growth, creativity, and mindfulness to inspire meaningful living through life philosophy, music, and creative projects.",
    sameAs: [
      "https://www.threads.net/@rajjon.dey",
      "https://x.com/rajjon_dey",
      "https://www.instagram.com/rajjon.dey/",
      "https://www.facebook.com/rajjon.dey",
      "https://medium.com/@rajondeyofficial",
      "https://www.youtube.com/@RD-Insights",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sylhet",
      addressCountry: "Bangladesh",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "rajondeyofficial@gmail.com",
      url: "https://rajondey.com/connect",
    },
    worksFor: {
      "@type": "Organization",
      name: "Rajon Dey - Personal Brand",
      url: "https://rajondey.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://rajondey.com",
    },
    // --- Added Fields ---
    headline: "Rajon Dey | Life Philosophy, Creativity & Personal Growth", // Short headline/tagline
    // Corrected "author" structure (since you're the author, link to your Person schema)
    author: {
      "@type": "Person",
      name: "Rajon Dey",
      url: "https://rajondey.com",
    },
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(schemaOrgJSONLD)}
    </Script>
  );
};

export default SchemaOrg;
