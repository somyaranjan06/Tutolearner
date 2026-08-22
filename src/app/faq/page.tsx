import * as React from "react";
import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
import { siteConfig, getCanonicalUrl } from "@/data/siteConfig";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CTASection } from "@/components/common/CTASection";
import {
  JsonLd,
  generateFaqSchema,
  generateBreadcrumbSchema,
} from "@/components/seo/JsonLd";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "TutoLearner FAQ | Frequently Asked Questions",
  },
  description:
    "Find clear answers to common questions regarding tutoring formats, tutor assignment, curriculum boards, trial evaluations, and scheduling at TutoLearner.",
  alternates: {
    canonical: getCanonicalUrl("/faq"),
  },
  openGraph: {
    title: "TutoLearner FAQ | Frequently Asked Questions",
    description:
      "Find clear answers to common questions regarding tutoring formats, tutor assignment, curriculum boards, trial evaluations, and scheduling.",
    url: getCanonicalUrl("/faq"),
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "TutoLearner FAQs" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TutoLearner FAQ | Frequently Asked Questions",
    description: "Common questions about subjects, faculty, scheduling, and learning formats.",
    images: [siteConfig.ogImage],
  },
};

export default function FAQPage() {
  const faqSchemaData = generateFaqSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: "Home", url: "/" },
      { name: "FAQ", url: "/faq" },
    ],
    siteConfig.url
  );

  return (
    <div className="py-10 sm:py-16">
      {/* Structured Data: FAQPage & Breadcrumbs */}
      <JsonLd data={faqSchemaData} />
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-[#0B4982] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/80 shadow-xs">
            Admissions &amp; Academic Help
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Everything you need to know about our subjects, faculty allocation, session structures, and admissions process.
          </p>
        </div>

        <FAQAccordion items={faqs} defaultOpen="subjects-offered" />

        <CTASection
          title="Have a specific question not covered here?"
          subtitle="Submit a direct consultation enquiry to speak with our academic coordinator."
          primaryBtnText="Submit Consultation Enquiry"
          primaryBtnHref="/contact"
        />
      </div>
    </div>
  );
}
