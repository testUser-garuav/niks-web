"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { tourPackages, COMPANY_INFO } from "@/lib/data";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preSelectedPackage = searchParams.get("package") || "";

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    package: preSelectedPackage,
    travelDate: "",
    travelers: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const selectedPkg = tourPackages.find((p) => p.slug === formState.package);
    const lines = [
      `Hi Devbhumi Travels! I'd like to enquire about a trip.`,
      ``,
      `*Name:* ${formState.name}`,
      `*Phone:* ${formState.phone}`,
      selectedPkg ? `*Package:* ${selectedPkg.name}` : "",
      formState.travelDate ? `*Travel Date:* ${formState.travelDate}` : "",
      formState.travelers ? `*Travelers:* ${formState.travelers}` : "",
      formState.message ? `*Message:* ${formState.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(lines)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="package" className="mb-1.5 block text-sm font-medium text-text">
            Interested Package
          </label>
          <select
            id="package"
            name="package"
            value={formState.package}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select a package</option>
            {tourPackages.map((pkg) => (
              <option key={pkg.slug} value={pkg.slug}>
                {pkg.name} — ₹{pkg.price.toLocaleString("en-IN")}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="travelDate" className="mb-1.5 block text-sm font-medium text-text">
            Travel Date
          </label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            value={formState.travelDate}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="travelers" className="mb-1.5 block text-sm font-medium text-text">
            Number of Travelers
          </label>
          <input
            type="number"
            id="travelers"
            name="travelers"
            value={formState.travelers}
            onChange={handleChange}
            min="1"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="2"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
            Message
          </label>
          <input
            type="text"
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Any special requirements..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-500 py-4 text-lg font-semibold text-white transition-all hover:bg-green-600 hover:shadow-lg"
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.915 15.915 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.098-1.924 2.01-3.172 2.276-.856.18-1.972.324-5.73-1.232-4.808-1.99-7.906-6.872-8.144-7.192-.23-.32-1.924-2.56-1.924-4.884 0-2.324 1.218-3.466 1.65-3.94.39-.426.916-.596 1.218-.596.152 0 .288.008.41.014.39.018.584.042.842.65.32.758 1.098 2.68 1.192 2.876.096.196.19.456.064.728-.118.278-.216.452-.424.694-.206.244-.43.544-.612.73-.208.212-.424.442-.182.868.242.424 1.076 1.774 2.31 2.874 1.59 1.416 2.93 1.854 3.348 2.062.322.16.706.13.96-.146.322-.352.72-.936 1.124-1.512.288-.41.65-.462.998-.318.352.136 2.234 1.054 2.618 1.244.384.192.64.288.736.446.094.16.094.912-.296 2.01z" />
        </svg>
        Send Inquiry via WhatsApp
      </button>

      <p className="text-center text-xs text-text-muted">
        This will open WhatsApp with your inquiry details pre-filled
      </p>
    </motion.form>
  );
}
