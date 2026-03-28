"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/types";

export default function DestinationCard({
  destination,
  index = 0,
  large = false,
}: {
  destination: Destination;
  index?: number;
  large?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href="/destinations" className="group block">
        <div
          className={`relative overflow-hidden rounded-2xl ${
            large ? "h-80 md:h-96" : "h-64 md:h-72"
          }`}
        >
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes={large ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : "(max-width: 640px) 80vw, 300px"}
          />
          <div className="gradient-overlay absolute inset-0" />

          {/* Category Tags */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {destination.category.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium capitalize text-white backdrop-blur-sm"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-xl font-bold text-white md:text-2xl">{destination.name}</h3>
            <p className="mt-1 text-sm text-white/80">{destination.tagline}</p>
            {large && (
              <div className="mt-3 flex items-center gap-4 text-xs text-white/70">
                {destination.altitude && (
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {destination.altitude}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {destination.bestTime}
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
