"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TourPackage } from "@/types";
import { COMPANY_INFO } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "char-dham": "bg-orange-500",
  "pilgrimage": "bg-purple-500",
  "weekend-getaway": "bg-blue-500",
  "adventure-trek": "bg-green-500",
  "honeymoon": "bg-pink-500",
  "family": "bg-teal-500",
};

export default function PackageCard({
  pkg,
  index = 0,
}: {
  pkg: TourPackage;
  index?: number;
}) {
  const discount = pkg.originalPrice
    ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
              categoryColors[pkg.category] || "bg-primary"
            }`}
          >
            {pkg.category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </span>
          {discount > 0 && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-text backdrop-blur-sm">
          {pkg.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-text">{pkg.name}</h3>
        <p className="mt-2 text-sm text-text-muted line-clamp-2">{pkg.description}</p>

        {/* Highlights */}
        <ul className="mt-4 space-y-1.5">
          {pkg.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-text-muted">
              <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {h}
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="mt-5 flex items-end justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-text-muted">Starting from</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">
                ₹{pkg.price.toLocaleString("en-IN")}
              </span>
              {pkg.originalPrice && (
                <span className="text-sm text-text-muted line-through">
                  ₹{pkg.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <p className="text-xs text-text-muted">per person</p>
          </div>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Hi! I'm interested in the *${pkg.name}* package (₹${pkg.price.toLocaleString("en-IN")}). Please share more details.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-green-600 hover:shadow-lg"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}
