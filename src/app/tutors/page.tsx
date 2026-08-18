import * as React from "react";
import type { Metadata } from "next";
import { tutors } from "@/data/tutors";
import { siteConfig, getCanonicalUrl } from "@/data/siteConfig";
import { TutorGrid } from "@/components/tutors/TutorGrid";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CTASection } from "@/components/common/CTASection";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Academic Faculty | Somya Ranjan Naik, Shiwangi, Shreya Tiwari",
  description:
    "Meet our 3 dedicated educators: Somya Ranjan Naik (Maths & Science), Shiwangi (Social Science), and Shreya Tiwari (Science & English). First-principles pedagogy & diagnostic reviews.",
  alternates: {
    canonical: getCanonicalUrl("/tutors"),
  },
  openGraph: {
    title: "Teaching Faculty Directory | TutoLearner Academy",
    description:
      "Meet Somya Ranjan Naik, Shiwangi, and Shreya Tiwari. Specialized academic instruction across STEM, Humanities, and English.",
    url: getCanonicalUrl("/tutors"),
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "TutoLearner Faculty Roster" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teaching Faculty Directory | TutoLearner Academy",
    description: "Somya Ranjan Naik, Shiwangi, and Shreya Tiwari.",
    images: [siteConfig.ogImage],
  },
};

export default function TutorsPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: "Teaching Faculty" }]} />

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-[#0B4982] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/80 shadow-xs">
            Teaching Collective
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Our Dedicated 3-Tutor Faculty
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Focused, accountable mentorship from verified subject-matter educators. Filter by subject or explore individual faculty profiles.
          </p>
        </div>

        <TutorGrid tutors={tutors} showSubjectFilter={true} />

        {/* Faculty Standards Box */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base mb-2">
            <ShieldCheck className="h-5 w-5 text-[#0B4982]" />
            <span>Academic Standards &amp; Faculty Policy</span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl font-normal">
            Our teaching collective is intentionally limited to 3 specialized educators to maintain pedagogical accountability, direct personal communication, and high-touch student monitoring without outsourcing teaching responsibilities.
          </p>
        </div>

        <CTASection
          title="Interested in working with a specific tutor?"
          subtitle="Submit an enquiry specifying your grade level and preferred tutor to schedule an initial diagnostic session."
          primaryBtnText="Submit Faculty Enquiry"
          primaryBtnHref="/contact"
        />
      </div>
    </div>
  );
}
