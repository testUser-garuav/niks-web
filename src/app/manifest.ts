import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Devbhumi Travels — Uttarakhand Tour Packages",
    short_name: "Devbhumi Travels",
    description: "Uttarakhand's premier travel agency offering customized tour packages.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a5632",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
