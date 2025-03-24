// src/app/sitemap.xml/route.ts
import { staticPages, resourceSubPages, articles } from "@/data/mock-data";

export async function GET() {
  const baseUrl = "https://rajondey.com";

  const staticUrls = Object.keys(staticPages).map((key) => {
    const pageKey = key as keyof typeof staticPages;
    return {
      url: `${baseUrl}/${key === "home" ? "" : key}`,
      priority: staticPages[pageKey].priority || 0.8,
      lastmod: new Date().toISOString().split("T")[0],
    };
  });

  const resourceSubPageUrls = Object.keys(resourceSubPages).map((key) => ({
    url: `${baseUrl}/resources/${key}`,
    priority: resourceSubPages[key as keyof typeof resourceSubPages].priority || 0.8,
    lastmod: new Date().toISOString().split("T")[0],
  }));

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/resources/articles/${article.slug}`, // Updated path
    priority: article.priority || 0.7,
    lastmod: article.date,
  }));

  const allUrls = [...staticUrls, ...resourceSubPageUrls, ...articleUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls
        .map(
          (page) => `
            <url>
              <loc>${page.url}</loc>
              <lastmod>${page.lastmod}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>${page.priority}</priority>
            </url>
          `
        )
        .join("")}
    </urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "text/xml" },
  });
}
