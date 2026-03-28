import type { Metadata } from "next";

export const SITE_URL = "https://www.devbhumitravels.com";
export const SITE_NAME = "Devbhumi Travels";

interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function createMetadata({ title, description, path, image }: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}/og-image.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function createTravelAgencyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: SITE_NAME,
    description:
      "Premier travel agency in Uttarakhand offering customized tour packages for Char Dham Yatra, adventure treks, honeymoon trips, and wildlife safaris.",
    url: SITE_URL,
    telephone: "+91-9876543210",
    email: "info@devbhumitravels.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mall Road, Near Clock Tower",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      postalCode: "248001",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "State",
      name: "Uttarakhand",
    },
    priceRange: "$$",
  };
}

export function createBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createBlogPostJsonLd(post: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: post.url,
    image: post.image,
    datePublished: post.datePublished,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
