import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { createTravelAgencyJsonLd } from "@/lib/metadata";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Devbhumi Travels | Uttarakhand Tour Packages & Travel Agency",
    template: "%s | Devbhumi Travels",
  },
  description:
    "Uttarakhand's premier travel agency offering customized Char Dham Yatra, adventure treks, honeymoon packages, and wildlife safaris. Book your dream Himalayan vacation today!",
  keywords: [
    "Uttarakhand travel agency",
    "Char Dham Yatra packages",
    "Uttarakhand tour packages",
    "Rishikesh adventure",
    "Kedarnath trip",
    "Mussoorie honeymoon",
    "Jim Corbett safari",
    "Himalayan trekking",
    "Nainital tour",
    "Auli skiing",
  ],
  authors: [{ name: "Devbhumi Travels" }],
  creator: "Devbhumi Travels",
  metadataBase: new URL("https://www.devbhumitravels.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Devbhumi Travels",
    title: "Devbhumi Travels | Uttarakhand Tour Packages & Travel Agency",
    description:
      "Uttarakhand's premier travel agency offering customized Char Dham Yatra, adventure treks, honeymoon packages, and wildlife safaris.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devbhumi Travels | Uttarakhand Tour Packages",
    description:
      "Book your dream Uttarakhand vacation — Char Dham, adventure treks, honeymoon getaways & more!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = createTravelAgencyJsonLd();

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
