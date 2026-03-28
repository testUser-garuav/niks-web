"use client";

import { useState } from "react";
import { TourPackage, PackageCategory } from "@/types";
import PackageCard from "@/components/PackageCard";
import { motion, AnimatePresence } from "framer-motion";

const allCategories: { id: PackageCategory | "all"; label: string }[] = [
  { id: "all", label: "All Packages" },
  { id: "char-dham", label: "Char Dham" },
  { id: "pilgrimage", label: "Pilgrimage" },
  { id: "adventure-trek", label: "Adventure & Treks" },
  { id: "weekend-getaway", label: "Weekend Getaway" },
  { id: "honeymoon", label: "Honeymoon" },
  { id: "family", label: "Family" },
];

export default function PackageFilter({
  packages,
}: {
  packages: TourPackage[];
}) {
  const [active, setActive] = useState<PackageCategory | "all">("all");

  const filtered =
    active === "all"
      ? packages
      : packages.filter((p) => p.category === active);

  return (
    <>
      {/* Filter Tabs */}
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
      <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <PackageCard pkg={pkg} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-text-muted">
          No packages found in this category.
        </p>
      )}
    </>
  );
}
