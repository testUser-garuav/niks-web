"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      <span
        className={`text-sm font-semibold uppercase tracking-widest ${
          light ? "text-secondary-light" : "text-secondary"
        }`}
      >
        {subtitle}
      </span>
      <h2
        className={`mt-2 text-3xl font-bold md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-text"
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-secondary" />
      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg ${
            light ? "text-white/80" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
