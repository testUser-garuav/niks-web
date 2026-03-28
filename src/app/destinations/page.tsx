import { Metadata } from "next";
import { createMetadata, createBreadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { destinations } from "@/lib/data";
import DestinationCard from "@/components/DestinationCard";
import SectionHeading from "@/components/SectionHeading";
import DestinationFilter from "./DestinationFilter";

export const metadata: Metadata = createMetadata({
  title: "Destinations in Uttarakhand — Top Places to Visit",
  description:
    "Explore the best destinations in Uttarakhand — from Rishikesh and Haridwar to Kedarnath, Mussoorie, Nainital, and Valley of Flowers. Plan your trip today!",
  path: "/destinations",
});

export default function DestinationsPage() {
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Destinations", url: `${SITE_URL}/destinations` },
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
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Our Destinations
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Discover the most beautiful places in the Land of Gods
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <DestinationFilter destinations={destinations} />
        </div>
      </section>
    </>
  );
}
