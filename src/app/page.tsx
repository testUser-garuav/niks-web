import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import AnimatedSection from "@/components/AnimatedSection";
import { categories, destinations, tourPackages } from "@/lib/data";

export default function Home() {
  const featuredDestinations = destinations.slice(0, 6);
  const featuredPackages = tourPackages.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Stats */}
      <Stats />

      {/* Tourism Categories */}
      <section className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            subtitle="Explore"
            title="Discover Uttarakhand Your Way"
            description="From sacred pilgrimages to thrilling adventures — choose your perfect Uttarakhand experience."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="bg-surface-dark py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            subtitle="Top Destinations"
            title="Popular Places to Visit"
            description="Explore the most breathtaking destinations in the Land of Gods."
          />
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {featuredDestinations.map((dest, i) => (
              <div key={dest.id} className="min-w-[280px] snap-center md:min-w-0">
                <DestinationCard destination={dest} index={i} />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              View All Destinations
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            subtitle="Best Deals"
            title="Featured Tour Packages"
            description="Handpicked travel packages with the best value — all-inclusive, hassle-free experiences."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              View All Packages
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-dark py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Travelers Say"
            description="Real stories from real travelers who explored Uttarakhand with us."
          />
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920&q=80"
            alt="Himalayan mountains"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <AnimatedSection className="relative mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold md:text-5xl">
            Ready to Explore Uttarakhand?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Let us plan your perfect Himalayan getaway. Get in touch today for
            a free customized itinerary!
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-secondary-light hover:shadow-xl"
            >
              Plan My Trip
            </Link>
            <a
              href="tel:+919690908566"
              className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Call Us Now
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
