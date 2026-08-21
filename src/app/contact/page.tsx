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
  Sparkles,
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
        <Breadcrumbs items={[{ label: "Complimentary Assessment" }]} />

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-[#0B4982] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/80 shadow-xs">
            COMPLIMENTARY STUDENT ASSESSMENT
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Book Your Child&apos;s Complimentary Assessment
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Tell us a little about your child&apos;s learning needs. We&apos;ll review the information and help you find the right 1-on-1 tuition approach for them.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form (8 cols) */}
          <div className="lg:col-span-8">
            <React.Suspense
              fallback={
                <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-12 text-slate-600">
                  <Loader2 className="h-6 w-6 animate-spin text-[#0B4982] mr-2" />
                  <span>Loading assessment form...</span>
                </div>
              }
            >
              <ContactForm />
            </React.Suspense>
          </div>

          {/* Right Column: Information & Process (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* What You'll Get Section */}
            <Card className="border-blue-200/80 bg-blue-50/40 shadow-card overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4.5 w-4.5 text-[#0B4982]" />
                  <h2 className="font-heading font-bold text-base text-slate-900">
                    What You&apos;ll Get
                  </h2>
                </div>

                <div className="space-y-3">
                  {/* Card 1 */}
                  <div className="rounded-xl border border-blue-100 bg-white p-3.5 space-y-1 shadow-2xs">
                    <h3 className="font-heading text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6BB640]" />
                      <span>Understand Learning Needs</span>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Identify your child&apos;s current strengths and areas that may need more attention.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-xl border border-blue-100 bg-white p-3.5 space-y-1 shadow-2xs">
                    <h3 className="font-heading text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6BB640]" />
                      <span>Tutor Guidance</span>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Get guidance on the type of tutor and learning approach that may suit your child.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="rounded-xl border border-blue-100 bg-white p-3.5 space-y-1 shadow-2xs">
                    <h3 className="font-heading text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6BB640]" />
                      <span>Personalized Learning Direction</span>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Understand what your child&apos;s 1-on-1 learning journey could look like.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assessment Process Steps */}
            <Card className="border-slate-200 bg-white shadow-card">
              <CardContent className="p-6 space-y-4">
                <h2 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                  <CalendarCheck className="h-4 w-4 text-[#0B4982]" />
                  <span>Assessment Process</span>
                </h2>

                <ol className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0B4982] text-2xs font-bold text-white shadow-subtle">
                      1
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Submit Your Details</strong>
                      <span>Share your child&apos;s grade, subject and learning needs.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0B4982] text-2xs font-bold text-white shadow-subtle">
                      2
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Tutor Review</strong>
                      <span>Our team reviews the information and considers the most suitable tutor and learning approach.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0B4982] text-2xs font-bold text-white shadow-subtle">
                      3
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Complimentary Assessment</strong>
                      <span>We assess your child&apos;s current learning level and identify areas that may need attention.</span>
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
                  <span>TutoLearner Support</span>
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
