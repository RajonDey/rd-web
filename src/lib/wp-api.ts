import { WPPost } from "@/types/post";

const WP_API_URL =
  process.env.NEXT_PUBLIC_WP_API_URL ||
  "https://admin.rajondey.com/wp-json/wp/v2";

export async function fetchPosts(): Promise<WPPost[]> {
  const posts: WPPost[] = [];
  let page = 1;
  const perPage = 100; // Max allowed by WordPress API

  while (true) {
    const res = await fetch(
      `${WP_API_URL}/posts?per_page=${perPage}&page=${page}&_embed`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );
    if (!res.ok) {
      console.error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
      break; // Stop fetching if there's an error
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) break; // Stop if no more posts

    posts.push(...data);

    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
    if (page >= totalPages) break;
    page++;
  }

  return Promise.all(
    posts.map(async (post: WPPost) => ({
      ...post,
      image:
        post.featured_media &&
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
          ? post._embedded["wp:featuredmedia"][0].source_url
          : "/placeholder-image.png", // Use a placeholder image if none exists
    }))
  );
}

export async function fetchPost(slug: string): Promise<WPPost> {
  const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok)
    throw new Error(`Failed to fetch post: ${res.status} ${res.statusText}`);
  const posts = await res.json();
  if (!posts.length) throw new Error("Post not found");

  const post = posts[0];
  return {
    ...post,
    image:
      post.featured_media &&
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
        ? post._embedded["wp:featuredmedia"][0].source_url
        : "/placeholder-image.png",
  };
}
