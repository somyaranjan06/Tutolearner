import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { tutors } from "@/data/tutors";
import { subjects } from "@/data/subjects";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/tutors`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/subjects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/methodology`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Dynamic Tutor pages
  const tutorRoutes: MetadataRoute.Sitemap = tutors.map((tutor) => ({
    url: `${siteConfig.url}/tutors/${tutor.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Subject pages
  const subjectRoutes: MetadataRoute.Sitemap = subjects.map((subject) => ({
    url: `${siteConfig.url}/subjects/${subject.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...tutorRoutes, ...subjectRoutes];
}
