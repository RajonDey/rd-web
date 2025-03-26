import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchPost, fetchPosts } from "@/lib/wp-api";
import { WPPost } from "@/types/post";
import SEO from "@/components/SEO";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  let post: WPPost;
  try {
    post = await fetchPost(slug);
  } catch {
    return {
      title: "Article Not Found | Rajon Dey",
      description: "The article you are looking for does not exist.",
    };
  }

  const excerptText = post.excerpt.rendered.replace(/<[^>]+>/g, "");

  return {
    title: `${post.title.rendered} | Rajon Dey`,
    description: excerptText,
    openGraph: {
      title: `${post.title.rendered} | Rajon Dey`,
      description: excerptText,
      url: `https://rajondey.com/resources/articles/${post.slug}`,
      type: "article",
      images: [
        {
          url: post.image || "https://rajondey.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Rajon Dey - ${post.title.rendered}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title.rendered} | Rajon Dey`,
      description: excerptText,
      images: [post.image || "https://rajondey.com/og-image.jpg"],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  let post: WPPost;
  try {
    post = await fetchPost(slug);
  } catch {
    notFound();
  }

  const excerptText = post.excerpt.rendered.replace(/<[^>]+>/g, "");

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title.rendered,
      description: excerptText,
      url: `https://rajondey.com/resources/articles/${post.slug}`,
      datePublished: post.date,
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
      image: post.image || "https://rajondey.com/og-image.jpg",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://rajondey.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Resources",
          item: "https://rajondey.com/resources",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Articles",
          item: "https://rajondey.com/resources/articles",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: post.title.rendered,
          item: `https://rajondey.com/resources/articles/${post.slug}`,
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={`${post.title.rendered} | Rajon Dey`}
        description={excerptText}
        url={`/resources/articles/${post.slug}`}
        structuredData={structuredData}
      />
      <div>
        {/* Breadcrumb Navigation */}
        <section className="section max-w-3xl mx-auto">
          <nav className="text-sm text-grayText mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            &gt;
            <Link href="/resources" className="hover:underline">
              {" "}
              Resources
            </Link>{" "}
            &gt;
            <Link href="/resources/articles" className="hover:underline">
              {" "}
              Articles
            </Link>{" "}
            &gt;
            <span>{post.title.rendered}</span>
          </nav>
        </section>

        {/* Hero Section */}
        <section className="section text-center relative">
          {/* {post.image && (
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title.rendered}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          )} */}
          <h1 className="text-4xl sm:text-5xl font-bold text-primary animate-fade-in-up">
            {post.title.rendered}
          </h1>
          <p className="text-lg sm:text-xl mt-4 max-w-2xl mx-auto animate-fade-in-up text-grayText">
            Published on{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
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
            className="space-y-6 leading-relaxed text-base sm:text-lg font-normal text-grayText 
      [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-primary [&_h2]:mt-8 
      [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-primary 
      [&_p]:leading-relaxed 
      [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-grayText 
      [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-grayText 
      [&_figure]:max-w-full [&_figure]:mx-auto [&_figure]:my-8 
      [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-md [&_img]:shadow-sm 
      [&_figcaption]:text-center [&_figcaption]:text-grayText [&_figcaption]:text-sm [&_figcaption]:mt-2 
      [&_a]:text-accent [&_a]:hover:underline
      [&_iframe]:relative [&_iframe]:w-full [&_iframe]:h-auto [&_iframe]:aspect-video 
      [&_iframe]:max-w-full [&_iframe]:rounded-md [&_iframe]:shadow-sm
      [&_div.wp-video]:w-full [&_div.wp-video]:max-w-full
      [&_video]:w-full [&_video]:h-auto [&_video]:aspect-video 
      [&_video]:max-w-full [&_video]:rounded-md [&_video]:shadow-sm
      [&_ul]:space-y-6 [&_ul_li]:space-y-2 [&_ul_li_br]:hidden
      [&_ul_li_strong]:block [&_ul_li_strong]:text-primary [&_ul_li_strong]:font-semibold
      [&_ul_li_img]:mt-4 [&_ul_li_img]:mb-0"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
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
  const posts = await fetchPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
