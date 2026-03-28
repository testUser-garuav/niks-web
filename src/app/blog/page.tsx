import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createMetadata, createBreadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { blogPosts } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = createMetadata({
  title: "Travel Blog — Uttarakhand Travel Tips & Guides",
  description:
    "Read our expert travel guides on Uttarakhand — best time to visit, Char Dham Yatra tips, top treks, adventure activities, and more.",
  path: "/blog",
});

export default function BlogPage() {
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Banner */}
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center bg-primary-dark">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)",
          }}
        />
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Travel Blog</h1>
          <p className="mt-4 text-lg text-white/80">
            Expert tips, guides, and stories from the heart of Uttarakhand
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-text-muted">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span className="h-1 w-1 rounded-full bg-text-muted" />
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="mt-3 text-xl font-bold text-text group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-text-muted line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                        Read More
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
