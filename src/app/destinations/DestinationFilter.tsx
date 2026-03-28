"use client";

import { useState } from "react";
import { Destination, TourismCategory } from "@/types";
import DestinationCard from "@/components/DestinationCard";
import { motion, AnimatePresence } from "framer-motion";

const allCategories: { id: TourismCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "pilgrimage", label: "Pilgrimage" },
  { id: "adventure", label: "Adventure" },
  { id: "nature", label: "Nature" },
  { id: "wellness", label: "Wellness" },
  { id: "wildlife", label: "Wildlife" },
  { id: "honeymoon", label: "Honeymoon" },
];

export default function DestinationFilter({
  destinations,
}: {
  destinations: Destination[];
}) {
  const [active, setActive] = useState<TourismCategory | "all">("all");

  const filtered =
    active === "all"
      ? destinations
      : destinations.filter((d) => d.category.includes(active));

  return (
    <>
      {/* Filter Chips */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {allCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              active === cat.id
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "bg-gray-100 text-text-muted hover:bg-gray-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((dest, i) => (
            <motion.div
              key={dest.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <DestinationCard destination={dest} index={i} large />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-text-muted">
          No destinations found in this category.
        </p>
      )}
    </>
  );
}
