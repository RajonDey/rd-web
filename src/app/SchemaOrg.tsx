import Script from "next/script";

const SchemaOrg = () => {
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Rajon Dey",
    jobTitle: "Creative Professional & Thought Leader",
    url: "https://rajondey.com",
    sameAs: [
      "https://www.threads.net/@rajjon.dey",
      "https://x.com/rajjon_dey",
      "https://www.instagram.com/rajjon.dey/",
      "https://www.facebook.com/rajjon.dey",
      "https://medium.com/@rajondeyofficial",
      "https://www.youtube.com/@RD-Insights",
    ],
    description:
      "Rajon Dey shares insights on personal growth, creativity, and mindfulness to inspire meaningful living through life philosophy, music, and creative projects.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sylhet",
      addressCountry: "Bangladesh",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "rajondeyofficial@gmail.com", // Replace with your actual email
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
    author: [
      {
        "@type": "BlogPosting",
        name: "Resources by Rajon Dey",
        url: "https://rajondey.com/resources",
        description:
          "Articles, videos, and newsletters on personal growth, mindfulness, and creativity by Rajon Dey.",
      },
    ],
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
