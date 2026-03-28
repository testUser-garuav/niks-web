"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CategoryInfo } from "@/types";

export default function CategoryCard({ category, index }: { category: CategoryInfo; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="group relative h-64 overflow-hidden rounded-2xl cursor-pointer"
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all group-hover:from-black/90" />
      <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center text-white">
        <span className="mb-2 text-3xl">{category.icon}</span>
        <h3 className="text-xl font-bold">{category.name}</h3>
        <p className="mt-2 text-sm text-white/70 line-clamp-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
          {category.description}
        </p>
      </div>
    </motion.div>
  );
}
