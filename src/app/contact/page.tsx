import * as React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Clock,
  MapPin,
  ShieldCheck,
  CalendarCheck,
  PhoneCall,
  Loader2,
} from "lucide-react";
import { siteConfig, getCanonicalUrl } from "@/data/siteConfig";
import { JsonLd, generateBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "Contact TutoLearner | Enquiries & Learning Support",
  },
  description:
    "Submit an enquiry for personalized academic tutoring in Mathematics, Science, Social Science, or English with our dedicated faculty at TutoLearner.",
  alternates: {
    canonical: getCanonicalUrl("/contact"),
  },
  openGraph: {
    title: "Contact TutoLearner | Enquiries & Learning Support",
    description:
      "Direct enquiry for Mathematics, Science, Social Science, and English tutoring. Small batches & 1-on-1 personalized guidance.",
    url: getCanonicalUrl("/contact"),
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "TutoLearner Admissions Desk" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact TutoLearner | Enquiries & Learning Support",
    description: "Connect with our teaching faculty for structured academic tutoring.",
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: "Home", url: "/" },
      { name: "Contact", url: "/contact" },
    ],
    siteConfig.url
  );

  return (
    <div className="py-10 sm:py-16 bg-slate-50/40">
      <JsonLd data={breadcrumbSchema} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumbs items={[{ label: "Admissions & Enquiry" }]} />

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-[#0B4982] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/80 shadow-xs">
            Admissions Desk
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Begin Your Child&apos;s Academic Mentorship
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Submit the enquiry form below. Our academic coordinator will review your grade level and subject goals with Somya Ranjan Naik, Shiwangi, or Shreya Tiwari and contact you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form (8 cols) */}
          <div className="lg:col-span-8">
            <React.Suspense
              fallback={
                <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-12 text-slate-600">
                  <Loader2 className="h-6 w-6 animate-spin text-[#0B4982] mr-2" />
                  <span>Loading admissions form...</span>
                </div>
              }
            >
              <ContactForm />
            </React.Suspense>
          </div>

          {/* Right Column: Information & Process (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Consultation Process Steps */}
            <Card className="border-slate-200 bg-white shadow-card">
              <CardContent className="p-6 space-y-4">
                <h2 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                  <CalendarCheck className="h-4 w-4 text-[#0B4982]" />
                  <span>Admissions Consultation Process</span>
                </h2>

                <ol className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0B4982] text-2xs font-bold text-white shadow-subtle">
                      1
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Form Submission:</strong>
                      <span>Select student grade, subject requirements, and preferred tutor.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0B4982] text-2xs font-bold text-white shadow-subtle">
                      2
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Faculty Review:</strong>
                      <span>Coordinator confirms schedule availability with the assigned tutor.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0B4982] text-2xs font-bold text-white shadow-subtle">
                      3
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Diagnostic Baseline:</strong>
                      <span>Initial evaluation session to assess concepts and outline a study roadmap.</span>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Direct Office Info */}
            <Card className="border-slate-200 bg-white shadow-card">
              <CardContent className="p-6 space-y-4">
                <h2 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-[#0B4982]" />
                  <span>Admissions Office &amp; Hours</span>
                </h2>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <PhoneCall className="h-4 w-4 text-[#0B4982] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800 block text-2xs uppercase tracking-wider">
                        Phone / WhatsApp:
                      </span>
                      <a
                        href={siteConfig.socialLinks.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 hover:text-[#0B4982] font-medium underline-offset-2 hover:underline"
                      >
                        {siteConfig.contactPhone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <Mail className="h-4 w-4 text-[#0B4982] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800 block text-2xs uppercase tracking-wider">
                        Email Enquiries:
                      </span>
                      <span>{siteConfig.contactEmail}</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <Clock className="h-4 w-4 text-[#0B4982] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800 block text-2xs uppercase tracking-wider">
                        Consultation Timings:
                      </span>
                      <span>{siteConfig.academicHours}</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <MapPin className="h-4 w-4 text-[#0B4982] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800 block text-2xs uppercase tracking-wider">
                        Location:
                      </span>
                      <span>{siteConfig.locationNote}</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Zero Pressure Guarantee */}
            <div className="rounded-2xl border border-[#C9EEBD] bg-[#F2FAF0] p-5 space-y-2 text-xs text-[#2E4D1D] shadow-subtle">
              <div className="flex items-center gap-2 font-bold text-[#365B20]">
                <ShieldCheck className="h-4 w-4 text-[#6BB640]" />
                <span>Zero Pressure Academic Fit Policy</span>
              </div>
              <p className="leading-relaxed text-[#2E4D1D] font-normal">
                We believe in genuine academic fit. If our teaching pace is not optimal for the student, we provide transparent guidance on alternative learning resources without registration obligations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
