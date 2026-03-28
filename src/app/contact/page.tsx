import { Metadata } from "next";
import { Suspense } from "react";
import { createMetadata, createBreadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { COMPANY_INFO } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = createMetadata({
  title: "Contact Us — Get a Free Travel Quote",
  description:
    "Contact Devbhumi Travels for customized Uttarakhand tour packages. Call us, WhatsApp, or fill the form for a free travel quote.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Contact", url: `${SITE_URL}/contact` },
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
              "url(https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3?w=1920&q=80)",
          }}
        />
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Contact Us</h1>
          <p className="mt-4 text-lg text-white/80">
            We&apos;d love to help you plan your Uttarakhand adventure
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-3 sm:p-8">
            <h2 className="text-2xl font-bold text-text">Send Us an Inquiry</h2>
            <p className="mt-2 text-text-muted">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="mt-6">
              <Suspense fallback={<div className="py-8 text-center text-text-muted">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-primary p-6 text-white sm:p-8">
              <h3 className="text-xl font-bold">Get in Touch</h3>
              <p className="mt-2 text-sm text-white/70">
                Reach out to us directly or visit our office.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Office Address</p>
                    <p className="mt-1 text-sm text-white/70">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="mt-1 block text-sm text-white/70 hover:text-white">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="mt-1 block text-sm text-white/70 hover:text-white">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="mt-1 text-sm text-white/70">{COMPANY_INFO.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.8484095763!2d78.0321!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDehradun%2C+Uttarakhand!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Devbhumi Travels Office Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
