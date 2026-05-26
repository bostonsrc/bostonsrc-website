import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/research-innovation",
  "/publications-projects",
  "/advisory-board",
  "/services",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.bostonsrc.org${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
