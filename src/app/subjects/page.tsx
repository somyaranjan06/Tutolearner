import * as React from "react";
import type { Metadata } from "next";
import { subjects } from "@/data/subjects";
import { siteConfig, getCanonicalUrl } from "@/data/siteConfig";
import { SubjectGrid } from "@/components/subjects/SubjectGrid";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CTASection } from "@/components/common/CTASection";
import { JsonLd, generateBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "TutoLearner Subjects | Mathematics, Science, English & Social Science",
  },
  description:
    "Explore our structured curriculum tracks in Mathematics, Science, Social Science, and English led by dedicated subject specialists at TutoLearner.",
  alternates: {
    canonical: getCanonicalUrl("/subjects"),
  },
  openGraph: {
    title: "TutoLearner Subjects | Mathematics, Science, English & Social Science",
    description:
      "Structured learning outcomes, syllabus module breakdowns, and assigned faculty across STEM, Social Sciences, and English.",
    url: getCanonicalUrl("/subjects"),
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "TutoLearner Curriculum Directory" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TutoLearner Subjects | Mathematics, Science, English & Social Science",
    description: "Mathematics, Science, Social Science, and English.",
    images: [siteConfig.ogImage],
  },
};

export default function SubjectsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: "Home", url: "/" },
      { name: "Subjects", url: "/subjects" },
    ],
    siteConfig.url
  );

  return (
    <div className="py-10 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: "Curriculum Subjects" }]} />

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-[#0B4982] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/80 shadow-xs">
            Academic Programs
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Curriculum Directory &amp; Subjects
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Clear learning outcomes, systematic module breakdowns, and assigned faculty for each subject area.
          </p>
        </div>

        <SubjectGrid subjects={subjects} />

        <CTASection
          title="Looking for multi-subject guidance?"
          subtitle="You can select multiple subjects on our enquiry form to combine Mathematics, Science, Social Science, or English."
          primaryBtnText="Submit Multi-Subject Request"
          primaryBtnHref="/contact"
        />
      </div>
    </div>
  );
}
