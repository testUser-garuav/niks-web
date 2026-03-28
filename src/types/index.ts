export type TourismCategory =
  | "pilgrimage"
  | "adventure"
  | "nature"
  | "wellness"
  | "wildlife"
  | "honeymoon";

export type PackageCategory =
  | "char-dham"
  | "weekend-getaway"
  | "adventure-trek"
  | "honeymoon"
  | "pilgrimage"
  | "family";

export interface Destination {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  altitude?: string;
  bestTime: string;
  category: TourismCategory[];
}

export interface TourPackage {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  duration: string;
  price: number;
  originalPrice?: number;
  destinations: string[];
  highlights: string[];
  category: PackageCategory;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  packageName: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface CategoryInfo {
  id: TourismCategory;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}
