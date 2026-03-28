import Link from "next/link";
import { COMPANY_INFO, navLinks, tourPackages } from "@/lib/data";

export default function Footer() {
  const popularPackages = tourPackages.filter((p) => p.featured);

  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M12 2L2 22h20L12 2zm0 4l7 14H5l7-14z" />
                </svg>
              </div>
              <span className="text-xl font-bold">{COMPANY_INFO.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {COMPANY_INFO.tagline}. We specialize in creating unforgettable
              travel experiences across the beautiful state of Uttarakhand.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {Object.entries(COMPANY_INFO.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm capitalize transition-colors hover:bg-secondary"
                  aria-label={name}
                >
                  {name[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="mt-1 h-0.5 w-10 rounded-full bg-secondary" />
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-secondary-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Packages */}
          <div>
            <h3 className="text-lg font-semibold">Popular Packages</h3>
            <div className="mt-1 h-0.5 w-10 rounded-full bg-secondary" />
            <ul className="mt-4 space-y-3">
              {popularPackages.map((pkg) => (
                <li key={pkg.id}>
                  <Link
                    href={`/packages`}
                    className="text-sm text-white/70 transition-colors hover:text-secondary-light"
                  >
                    {pkg.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/packages"
                  className="text-sm font-medium text-secondary-light hover:text-secondary"
                >
                  View All Packages →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="mt-1 h-0.5 w-10 rounded-full bg-secondary" />
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-white/70">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm text-white/70 hover:text-secondary-light">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-white/70 hover:text-secondary-light">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-white/70">{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-sm text-white/50 hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm text-white/50 hover:text-white/70">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
