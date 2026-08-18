"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Subject, Tutor } from "@/types";
import { tutors } from "@/data/tutors";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Calculator,
  Atom,
  Globe2,
  BookOpenCheck,
  ArrowRight,
  CheckCircle2,
  UserCheck,
  Lightbulb,
  Sparkles,
  Layers,
  HelpCircle,
  LucideIcon,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SubjectDetailProps {
  subject: Subject;
}

const iconMap: Record<string, LucideIcon> = {
  Calculator,
  Atom,
  Globe2,
  BookOpenCheck,
};

export function SubjectDetail({ subject }: SubjectDetailProps) {
  const IconComponent = iconMap[subject.icon] || BookOpenCheck;
  const isDualFaculty = subject.slug === "science";

  // Match assigned tutors from tutor database
  const assignedTutors: Tutor[] = tutors.filter((t) =>
    subject.tutor.some(
      (name) => t.name.toLowerCase().includes(name.toLowerCase().split(" ")[0])
    )
  );

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* Navigation Breadcrumb */}
      <Breadcrumbs
        items={[
          { label: "Curriculum Subjects", href: "/subjects" },
          { label: subject.name },
        ]}
      />

      {/* 1 & 2. Subject Hero: Title, Tagline & Introductory Description */}
      <div className="rounded-3xl border border-slate-200 bg-white shadow-card overflow-hidden">
        <div className="bg-[#071F36] px-6 py-10 sm:px-10 sm:py-14 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B4982] text-white shadow-subtle border border-[#125D9E]/40">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <span className="rounded-md bg-[#082949] border border-[#0B4982] px-3 py-1 text-xs font-semibold text-[#BAE0FD]">
                  {subject.targetGrades}
                </span>
                {isDualFaculty && (
                  <span className="rounded-md bg-[#052814] border border-[#6BB640]/40 px-3 py-1 text-2xs font-bold uppercase tracking-wider text-[#7ECB51]">
                    Dual Faculty Track
                  </span>
                )}
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                {subject.name}
              </h1>

              <p className="text-base sm:text-lg text-[#BAE0FD] font-medium leading-relaxed">
                {subject.tagline}
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {subject.description}
              </p>
            </div>

            {/* 9. Enquiry CTA */}
            <div className="shrink-0 pt-2 md:pt-0">
              <Button
                asChild
                size="lg"
                className="w-full md:w-auto bg-[#0B4982] hover:bg-[#083A68] text-white font-semibold shadow-md gap-2 rounded-xl"
              >
                <Link href={`/contact?subject=${subject.slug}`}>
                  <span>Enquire for {subject.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left / Main Content (8 cols) */}
        <div className="lg:col-span-8 space-y-12">
          {/* 3. Tutors Teaching the Subject */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-900">
                <UserCheck className="h-5 w-5 text-[#0B4982]" />
                <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
                  {isDualFaculty ? "Faculty in Charge (Dual Faculty)" : "Faculty in Charge"}
                </h2>
              </div>
              <span className="text-2xs font-bold uppercase tracking-wider text-slate-600">
                {assignedTutors.length} Dedicated {assignedTutors.length === 1 ? "Instructor" : "Instructors"}
              </span>
            </div>

            <div className={`grid grid-cols-1 ${isDualFaculty ? "sm:grid-cols-2" : "sm:grid-cols-1"} gap-4`}>
              {assignedTutors.map((tutor) => (
                <div
                  key={tutor.slug}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-subtle hover:border-blue-200 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-sm">
                      <Image
                        src={tutor.image}
                        alt={`Portrait of ${tutor.name}`}
                        width={64}
                        height={64}
                        sizes="64px"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#365B20] bg-[#F2FAF0] px-2 py-0.5 rounded border border-[#C9EEBD]">
                          <ShieldCheck className="h-2.5 w-2.5" />
                          <span>Verified</span>
                        </span>
                      </div>
                      <h3 className="font-heading text-base font-bold text-slate-900 truncate">
                        {tutor.name}
                      </h3>
                      <p className="text-2xs text-slate-600 line-clamp-1">
                        {tutor.roleTitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-2">
                    {tutor.shortBio}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Button asChild variant="ghost" size="sm" className="text-xs text-[#0B4982] font-semibold p-0 h-auto">
                      <Link href={`/tutors/${tutor.slug}`} className="hover:underline">
                        View Full Profile &rarr;
                      </Link>
                    </Button>

                    <Button asChild size="sm" className="bg-[#0B4982] hover:bg-[#083A68] text-white text-2xs font-semibold px-3 py-1.5 h-8 rounded-lg">
                      <Link href={`/contact?tutor=${tutor.slug}&subject=${subject.slug}`}>
                        <span>Enquire with {tutor.name.split(" ")[0]}</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Why the Subject Matters */}
          <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-slate-900">
              <Lightbulb className="h-5 w-5 text-[#0B4982]" />
              <h2 className="font-heading text-lg sm:text-xl font-bold tracking-tight">
                Why {subject.name} Matters
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {subject.whyItMatters}
            </p>
          </section>

          {/* 5. Learning Approach & Pedagogy */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900">
              <Sparkles className="h-5 w-5 text-[#0B4982]" />
              <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
                Subject Learning Approach
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {subject.learningApproach}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {subject.approachPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-subtle space-y-1.5"
                >
                  <span className="text-2xs font-bold uppercase tracking-wider text-[#0B4982] block">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="font-heading font-bold text-sm text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Key Learning Areas */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-900">
                <Layers className="h-5 w-5 text-[#0B4982]" />
                <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
                  Key Learning Areas &amp; Syllabus Modules
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subject.keyLearningAreas.map((module, idx) => (
                <Card key={idx} className="border-slate-200 bg-white shadow-subtle flex flex-col justify-between">
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#0B4982] text-2xs font-bold text-white">
                        {idx + 1}
                      </span>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                        {module.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {module.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <h4 className="text-2xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Core Topics Covered:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {module.topics.map((topic, topicIdx) => (
                          <li key={topicIdx} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#579631] shrink-0 mt-1.5" />
                            <span className="leading-snug">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Illustrative Curriculum Disclaimer */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-700 block mb-0.5">Curriculum Scope Note:</span>
              {subject.curriculumNote}
            </div>
          </section>

          {/* 7. Suggested Learning Outcomes */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900">
              <CheckCircle2 className="h-5 w-5 text-[#579631]" />
              <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
                Suggested Learning Outcomes
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-3 shadow-subtle">
              <p className="text-xs sm:text-sm text-slate-600 font-medium mb-1">
                Upon completing targeted modules in {subject.name}, students develop:
              </p>
              <div className="space-y-3">
                {subject.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-[#579631] shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-normal">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 8. Subject-Specific FAQ */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900">
              <HelpCircle className="h-5 w-5 text-[#0B4982]" />
              <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
                Frequently Asked Questions about {subject.name}
              </h2>
            </div>

            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="w-full divide-y divide-slate-200/90 rounded-2xl border border-slate-200 bg-white px-6 shadow-subtle"
            >
              {subject.faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-none py-2">
                  <AccordionTrigger className="text-left text-base font-bold text-slate-900 hover:no-underline hover:text-[#0B4982] transition-colors py-4">
                    <span>{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed text-sm sm:text-base pb-5 pt-1 font-normal">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>

        {/* Right Sidebar / Quick Enrolment Card (4 cols) */}
        <div className="lg:col-span-4 space-y-6 sticky top-24">
          <Card className="border-slate-200 bg-white shadow-card">
            <CardContent className="p-6 sm:p-7 space-y-6">
              <div>
                <h3 className="font-heading font-bold text-base text-slate-900 border-b border-slate-200 pb-3">
                  {subject.name} Enrollment Summary
                </h3>
              </div>

              {/* Faculty Summary */}
              <div>
                <h4 className="text-2xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Assigned Instructors
                </h4>
                <div className="space-y-2">
                  {assignedTutors.map((tutor) => (
                    <div
                      key={tutor.slug}
                      className="rounded-xl bg-slate-50 border border-slate-100 p-3 flex items-center justify-between"
                    >
                      <div>
                        <p className="text-xs font-bold text-slate-900">{tutor.name}</p>
                        <p className="text-[11px] text-slate-600">{tutor.roleTitle}</p>
                      </div>
                      <Button asChild variant="ghost" size="sm" className="text-xs text-[#0B4982] p-0 h-auto font-semibold">
                        <Link href={`/tutors/${tutor.slug}`}>
                          Profile &rarr;
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grade Band */}
              <div>
                <h4 className="text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Target Grade Band
                </h4>
                <p className="text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  {subject.targetGrades}
                </p>
              </div>

              {/* Class Formats */}
              <div>
                <h4 className="text-2xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Learning Formats
                </h4>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="rounded-lg bg-slate-50 p-2 border border-slate-100 font-medium">
                    1-on-1 Personalized Mentoring
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2 border border-slate-100 font-medium">
                    Small Focus Batches (4–6 Students)
                  </div>
                </div>
              </div>

              {/* 9. CTA Button */}
              <div className="pt-2 border-t border-slate-200 space-y-2.5">
                <Button
                  asChild
                  size="lg"
                  className="w-full justify-center bg-[#0B4982] hover:bg-[#083A68] text-white font-semibold shadow-card gap-2 rounded-xl"
                >
                  <Link href={`/contact?subject=${subject.slug}`}>
                    <span>Enquire for {subject.name}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-2xs text-center text-slate-600 font-normal">
                  Diagnostic baseline review included
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
