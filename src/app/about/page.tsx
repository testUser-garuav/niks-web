import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createMetadata, createBreadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { teamMembers, stats } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import Stats from "@/components/Stats";

export const metadata: Metadata = createMetadata({
  title: "About Us — Your Trusted Uttarakhand Travel Partner",
  description:
    "Learn about Devbhumi Travels — Uttarakhand's trusted travel agency with 12+ years of experience. Meet our team and discover why thousands choose us.",
  path: "/about",
});

const features = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Local Expertise",
    description: "Born and raised in Uttarakhand, we know every trail, temple, and hidden gem in the state.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Best Price Guarantee",
    description: "We offer competitive pricing without compromising on quality. No hidden costs, no surprises.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "24/7 Support",
    description: "Our team is available round the clock during your trip to ensure everything goes smoothly.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: "Customized Trips",
    description: "Every itinerary is tailored to your preferences, pace, and budget for a truly personal experience.",
  },
];

export default function AboutPage() {
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "About", url: `${SITE_URL}/about` },
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
              "url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80)",
          }}
        />
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">About Us</h1>
          <p className="mt-4 text-lg text-white/80">
            Your trusted partner for Uttarakhand travel since 2012
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
              Our Story
            </span>
            <h2 className="mt-2 text-3xl font-bold text-text md:text-4xl">
              Rooted in the Himalayas, Driven by Passion
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              Founded in 2012 by Vikrant Rawat, a native of Uttarakhand, Devbhumi
              Travels was born from a deep love for the mountains and a desire to
              share the beauty of this divine land with travelers from around the
              world.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              What started as a small operation organizing local treks has grown
              into one of Uttarakhand&apos;s most trusted travel agencies, serving over
              15,000 happy travelers. Our team of local experts, experienced guides,
              and passionate travel consultants work tirelessly to craft journeys
              that go beyond tourism — creating memories that last a lifetime.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              We believe in responsible tourism that respects the environment,
              supports local communities, and preserves the cultural heritage of
              Uttarakhand for future generations.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="relative h-[400px] overflow-hidden rounded-2xl lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                alt="Himalayan landscape in Uttarakhand"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface-dark py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            subtitle="Why Choose Us"
            title="What Makes Us Different"
            description="We're not just a travel agency — we're your local Uttarakhand family."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-text">{feature.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            subtitle="Our Team"
            title="Meet the Experts"
            description="Passionate locals who make your Uttarakhand journey unforgettable."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-bold text-text">{member.name}</h3>
                    <p className="text-sm font-medium text-secondary">{member.role}</p>
                    <p className="mt-2 text-sm text-text-muted line-clamp-3">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="pb-20">
        <Stats />
      </div>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80"
            alt="Valley landscape"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold md:text-5xl">
            Let&apos;s Plan Your Dream Trip
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Connect with us for a free consultation and customized itinerary.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-secondary-light hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
