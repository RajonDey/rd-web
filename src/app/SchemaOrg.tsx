// app/SchemaOrg.tsx
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
      "Rajon Dey shares insights on personal growth, creativity, and meaningful living through his work in web development, music, and life philosophy.",
    worksFor: {
      "@type": "Organization",
      name: "Rajon Dey - Personal Brand",
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
