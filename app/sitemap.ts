import type { MetadataRoute } from "next";
import { servicePages } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.bellaskilte.dk";
  const core = [
    "",
    "/kontakt",
    "/om-bella-skilte-print-a-s",
    "/privatlivspolitik",
    "/cookiepolitik",
    "/handelsbetingelser"
  ].map((path) => ({ url: `${base}${path}`, changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.8 }));
  const services = servicePages.map((item) => ({
    url: `${base}/${item.section}/${item.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));
  return [...core, ...services];
}
