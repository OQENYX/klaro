import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NÄHRO — Ernährung. Erklärt.",
    short_name: "NÄHRO",
    description:
      "Wissenschaftlich fundierte Ernährungsaufklärung — ohne Umwege, ohne Werbung.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2f2f4",
    theme_color: "#111111",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
