"use client";

import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Devbhumi%20Travels!%20I%20am%20interested%20in%20your%20tour%20packages.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-shadow hover:shadow-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.915 15.915 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.098-1.924 2.01-3.172 2.276-.856.18-1.972.324-5.73-1.232-4.808-1.99-7.906-6.872-8.144-7.192-.23-.32-1.924-2.56-1.924-4.884 0-2.324 1.218-3.466 1.65-3.94.39-.426.916-.596 1.218-.596.152 0 .288.008.41.014.39.018.584.042.842.65.32.758 1.098 2.68 1.192 2.876.096.196.19.456.064.728-.118.278-.216.452-.424.694-.206.244-.43.544-.612.73-.208.212-.424.442-.182.868.242.424 1.076 1.774 2.31 2.874 1.59 1.416 2.93 1.854 3.348 2.062.322.16.706.13.96-.146.322-.352.72-.936 1.124-1.512.288-.41.65-.462.998-.318.352.136 2.234 1.054 2.618 1.244.384.192.64.288.736.446.094.16.094.912-.296 2.01z" />
      </svg>
      {/* Pulse ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-20" />
    </motion.a>
  );
}
