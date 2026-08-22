import * as React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ParentMessaging } from "@/components/home/ParentMessaging";
import { AboutFounder } from "@/components/home/AboutFounder";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig, getCanonicalUrl } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "TutoLearner | Personalized 1-on-1 Online Tutoring",
  description:
    "Personalized 1-on-1 online tutoring with dedicated educators and quality learning designed around you.",
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
  openGraph: {
    title: "TutoLearner | Personalized 1-on-1 Online Tutoring",
    description:
      "Personalized 1-on-1 online tutoring with dedicated educators and quality learning designed around you.",
    url: getCanonicalUrl("/"),
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "TutoLearner" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TutoLearner | Personalized 1-on-1 Online Tutoring",
    description:
      "Personalized 1-on-1 online tutoring with dedicated educators and quality learning designed around you.",
    images: [siteConfig.ogImage],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Parent-Focused Messaging Section (Every Student Learns Differently) */}
      <ParentMessaging />

      {/* 3. Founder / Trust Section (Somya Ranjan Naik) */}
      <AboutFounder />

      {/* 4. Final CTA */}
      <FinalCTA />
    </div>
  );
}
