import { Metadata } from "next";
import { createMetadata, createBreadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { tourPackages } from "@/lib/data";
import PackageFilter from "./PackageFilter";

export const metadata: Metadata = createMetadata({
  title: "Tour Packages — Affordable Uttarakhand Travel Packages",
  description:
    "Browse our curated Uttarakhand tour packages — Char Dham Yatra, adventure treks, honeymoon getaways, wildlife safaris, and family vacations at best prices.",
  path: "/packages",
});

export default function PackagesPage() {
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Packages", url: `${SITE_URL}/packages` },
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
              "url(https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920&q=80)",
          }}
        />
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Tour Packages
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Handcrafted travel experiences for every budget and interest
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <PackageFilter packages={tourPackages} />
        </div>
      </section>
    </>
  );
}
