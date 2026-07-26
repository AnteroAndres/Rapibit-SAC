import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${siteConfig.url}/servicios`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${siteConfig.url}/sectores`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${siteConfig.url}/proyectos`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${siteConfig.url}/nosotros`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${siteConfig.url}/contacto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${siteConfig.url}/politica-privacidad`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${siteConfig.url}/libro-reclamaciones`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];
  return routes;
}
