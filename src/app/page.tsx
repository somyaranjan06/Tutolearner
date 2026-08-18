import * as React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { PositioningStrip } from "@/components/home/PositioningStrip";
import { EditorialBrandSection } from "@/components/home/EditorialBrandSection";
import { SubjectExplorer } from "@/components/home/SubjectExplorer";
import { TutorsSection } from "@/components/home/TutorsSection";
import { LearningProcess } from "@/components/home/LearningProcess";
import { LearningResources } from "@/components/home/LearningResources";
import { TeachingPhilosophy } from "@/components/home/TeachingPhilosophy";
import { FAQSection } from "@/components/home/FAQSection";
import { AboutFounder } from "@/components/home/AboutFounder";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd, generateFaqSchema } from "@/components/seo/JsonLd";
import { siteConfig, getCanonicalUrl } from "@/data/siteConfig";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "TutoLearner | Personalized Learning & Online Tutoring",
  description:
    "TutoLearner connects students with personalized academic guidance, subject-focused tutoring, and learning resources designed around how they learn in Mathematics, Science, Social Science, and English.",
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
  openGraph: {
    title: "TutoLearner | Personalized Learning & Online Tutoring",
    description:
      "Subject-focused academic guidance in Mathematics, Science, Social Science, and English led by Somya Ranjan Naik, Shiwangi, and Shreya Tiwari.",
    url: getCanonicalUrl("/"),
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "TutoLearner" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TutoLearner | Personalized Learning & Online Tutoring",
    description: "Utilize Resources. Deliver Excellence.",
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

      {/* 2. Positioning Strip */}
      <PositioningStrip />

      {/* Below-the-fold sections with deferred layout computation for sub-second Hero LCP */}
      <div className="content-auto">
        {/* 3. Editorial Brand Section (Not every student learns the same way) */}
        <EditorialBrandSection />

        {/* 4. Subject Explorer */}
        <SubjectExplorer />

        {/* 5. Tutors Section */}
        <TutorsSection />

        {/* 6. How TutoLearner Works (4-Step Process) */}
        <LearningProcess />

        {/* 7. Learning Resources (Coming Soon) */}
        <LearningResources />

        {/* 8. Teaching Philosophy (Brand Manifesto) */}
        <TeachingPhilosophy />

        {/* 9. FAQ Section */}
        <FAQSection />

        {/* 10. About the Founder (Somya Ranjan Naik) */}
        <AboutFounder />

        {/* 11. Final CTA */}
        <FinalCTA />
      </div>
    </div>
  );
}
