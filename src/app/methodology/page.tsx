import * as React from "react";
import type { Metadata } from "next";
import { methodologyPrinciples, learningProcessSteps } from "@/data/methodology";
import { siteConfig, getCanonicalUrl } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CTASection } from "@/components/common/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd, generateBreadcrumbSchema } from "@/components/seo/JsonLd";
import {
  BrainCircuit,
  Target,
  HelpCircle,
  Sparkles,
  LineChart,
  LucideIcon,
  CheckCircle2,
  Compass,
  SearchCheck,
  DraftingCompass,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "TutoLearner Methodology | How We Teach",
  },
  description:
    "Explore our 5-principle learning philosophy and 4-step student roadmap designed for concept clarity, diagnostic reviews, and personalized learning.",
  alternates: {
    canonical: getCanonicalUrl("/methodology"),
  },
  openGraph: {
    title: "TutoLearner Methodology | How We Teach",
    description:
      "Structured concept mastery in STEM, Social Science, and English. Learn about our 5 core principles and diagnostic baseline process.",
    url: getCanonicalUrl("/methodology"),
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "TutoLearner Teaching Method" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TutoLearner Methodology | How We Teach",
    description: "Structured concept mastery in STEM, Social Science, and English.",
    images: [siteConfig.ogImage],
  },
};

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Target,
  HelpCircle,
  Sparkles,
  LineChart,
  Compass,
  SearchCheck,
  DraftingCompass,
  TrendingUp,
};

export default function MethodologyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: "Home", url: "/" },
      { name: "Methodology", url: "/methodology" },
    ],
    siteConfig.url
  );

  return (
    <div className="py-10 sm:py-16">
      <JsonLd data={breadcrumbSchema} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        <Breadcrumbs items={[{ label: "Teaching Method" }]} />

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-[#0B4982] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/80 shadow-xs">
            Educational Framework
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Our Structured Teaching Methodology
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We replace rote memorization and passive lectures with an active, diagnostic-driven learning cycle tailored to each student&apos;s current proficiency level.
          </p>
        </div>

        {/* 5 Core Principles Grid */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="font-heading text-2xl font-bold text-slate-900">
              The 5 Core Learning Principles
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Applied consistently across Mathematics, Science, Social Science, and English.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {methodologyPrinciples.map((pillar) => {
              const IconComp = iconMap[pillar.iconName] || BrainCircuit;

              return (
                <div
                  key={pillar.number}
                  className="group relative rounded-2xl border border-slate-200/90 bg-white p-7 shadow-subtle hover:border-blue-200 hover:shadow-card transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading text-2xl font-extrabold text-slate-300 group-hover:text-[#0B4982] transition-colors">
                        {pillar.number}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0B4982]">
                        <IconComp className="h-5 w-5" />
                      </div>
                    </div>

                    <span className="text-2xs font-bold uppercase tracking-wider text-[#0B4982] block mb-1.5">
                      {pillar.subtitle}
                    </span>

                    <h3 className="font-heading text-lg font-bold text-slate-900 tracking-tight mb-2.5">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#6BB640] shrink-0" />
                    <span>Applied across all subjects</span>
                  </div>
                </div>
              );
            })}

            {/* Integrity Box */}
            <div className="rounded-2xl border border-slate-800 bg-[#071F36] text-white p-7 flex flex-col justify-between shadow-card">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#082949] border border-[#0B4982] text-2xs font-bold text-[#7ECB51] uppercase tracking-wider mb-4">
                  <ShieldCheck className="h-3 w-3 text-[#6BB640]" />
                  <span>Pedagogical Integrity</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white tracking-tight mb-2">
                  No False Claims or Guarantees
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Academic improvement comes from consistent, structured effort. We provide transparent milestones and diagnostic clarity rather than marketing gimmicks.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-2xs text-slate-400">
                Direct faculty mentorship by Somya, Shiwangi &amp; Shreya
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Process Section */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="font-heading text-2xl font-bold text-slate-900">
              The 4-Step Learning Roadmap
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              How students advance from introductory consultation to consistent concept mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningProcessSteps.map((step) => {
              const StepIcon = iconMap[step.iconName] || Compass;

              return (
                <Card key={step.step} className="border-slate-200 bg-white shadow-subtle flex flex-col justify-between hover:border-blue-200 transition-colors">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0B4982] text-white font-mono text-xs font-bold">
                        {step.step}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#0B4982]">
                        <StepIcon className="h-4.5 w-4.5" />
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-base text-slate-900">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <CTASection
          title="Experience our structured teaching method"
          subtitle="Submit an enquiry to schedule an introductory diagnostic baseline session with our lead faculty."
          primaryBtnText="Enquire Now"
          primaryBtnHref="/contact"
        />
      </div>
    </div>
  );
}
