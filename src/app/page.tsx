import * as React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ParentMessaging } from "@/components/home/ParentMessaging";
import { SubjectExplorer } from "@/components/home/SubjectExplorer";
import { TutorsSection } from "@/components/home/TutorsSection";
import { LearningProcess } from "@/components/home/LearningProcess";
import { FAQSection } from "@/components/home/FAQSection";
import { AboutFounder } from "@/components/home/AboutFounder";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd, generateFaqSchema } from "@/components/seo/JsonLd";
import { siteConfig, getCanonicalUrl } from "@/data/siteConfig";
import { faqs } from "@/data/faqs";

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
  const faqSchema = generateFaqSchema(faqs);

  return (
    <div className="flex flex-col min-h-screen">
      {/* FAQPage Structured Data */}
      <JsonLd data={faqSchema} />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Parent-Focused Messaging Section (Every Student Learns Differently) */}
      <ParentMessaging />

      {/* Below-the-fold sections with deferred layout computation for sub-second Hero LCP */}
      <div className="content-auto">
        {/* 3. Subject Explorer */}
        <SubjectExplorer />

        {/* 5. Tutors Section */}
        <TutorsSection />

        {/* 6. How TutoLearner Works (4-Step Process) */}
        <LearningProcess />

        {/* 7. FAQ Section */}
        <FAQSection />

        {/* 10. About the Founder (Somya Ranjan Naik) */}
        <AboutFounder />

        {/* 11. Final CTA */}
        <FinalCTA />
      </div>
    </div>
  );
}
