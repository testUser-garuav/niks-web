import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import {
  createMetadata,
  createBreadcrumbJsonLd,
  createBlogPostJsonLd,
  SITE_URL,
} from "@/lib/metadata";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
  ]);

  const blogPostJsonLd = createBlogPostJsonLd({
    title: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    image: post.image,
    datePublished: post.date,
    author: post.author,
  });

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd) }}
      />

      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[350px] items-end bg-primary-dark">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="relative w-full pb-12 pt-24 px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 text-sm text-white/70">
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <span>/</span>
              <span className="line-clamp-1">{post.title}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/70">
              <span>By {post.author}</span>
              <span className="h-1 w-1 rounded-full bg-white/50" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="h-1 w-1 rounded-full bg-white/50" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Tags */}
          <div className="mb-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Article Content */}
          <div
            className="prose max-w-none text-text"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-primary/5 p-8 text-center">
            <h3 className="text-2xl font-bold text-text">
              Ready to Experience This?
            </h3>
            <p className="mt-2 text-text-muted">
              Let us help you plan the perfect trip. Get a free customized
              itinerary!
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light"
            >
              Plan My Trip
            </Link>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-text">Related Articles</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group overflow-hidden rounded-xl border border-gray-100 transition-all hover:shadow-lg"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, 300px"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-text group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                      <p className="mt-1 text-sm text-text-muted">{related.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
