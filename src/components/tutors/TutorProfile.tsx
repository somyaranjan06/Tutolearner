import * as React from "react";
import Link from "next/link";
import { Tutor } from "@/types";
import { TutorHero } from "./TutorHero";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Sparkles,
  Layers,
  CheckCircle2,
  Info,
  ArrowRight,
  ListChecks,
} from "lucide-react";

interface TutorProfileProps {
  tutor: Tutor;
}

export function TutorProfile({ tutor }: TutorProfileProps) {
  const firstName = tutor.name.split(" ")[0];

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: "Teaching Faculty", href: "/tutors" },
          { label: tutor.name },
        ]}
      />

      {/* 1. Profile Hero with Photograph, Name, Role & CTA */}
      <TutorHero tutor={tutor} />

      {/* Main Profile Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left / Main Content (8 cols) */}
        <div className="lg:col-span-8 space-y-10">
          {/* 5. Short Introduction */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900">
              <GraduationCap className="h-5 w-5 text-[#0B4982]" />
              <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
                Faculty Introduction &amp; Overview
              </h2>
            </div>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              {tutor.shortBio}
            </p>
          </section>

          {/* 6. Teaching Approach & Methodology */}
          <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-slate-900">
              <Sparkles className="h-5 w-5 text-[#0B4982]" />
              <h2 className="font-heading text-lg sm:text-xl font-bold tracking-tight">
                Teaching Approach &amp; Pedagogy
              </h2>
            </div>

            {tutor.pedagogyPoints && tutor.pedagogyPoints.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {tutor.pedagogyPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-start rounded-xl border border-slate-200 bg-white p-4 shadow-subtle space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#579631] shrink-0" />
                      <h3 className="font-heading font-bold text-sm text-slate-900">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-6">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {tutor.methodologyFocus.map((focus, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-3.5 text-xs sm:text-sm text-slate-800 shadow-subtle"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#579631] shrink-0 mt-0.5" />
                    <span className="leading-snug">{focus}</span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 7. Subjects / Classes Taught & Syllabus Breakdown */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-slate-900">
              <Layers className="h-5 w-5 text-[#0B4982]" />
              <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
                Subjects &amp; Curriculum Breakdown
              </h2>
            </div>

            <div className="space-y-6">
              {tutor.syllabusTopicsCovered.map((group, idx) => (
                <Card key={idx} className="border-slate-200 bg-white shadow-subtle overflow-hidden">
                  <div className="bg-[#071F36] px-5 py-3.5 text-white flex items-center justify-between">
                    <span className="font-heading font-bold text-sm sm:text-base">
                      {group.subject} Syllabus Units
                    </span>
                    <span className="text-2xs font-semibold uppercase tracking-wider text-[#BAE0FD]">
                      Lead Instruction
                    </span>
                  </div>
                  <CardContent className="p-5 sm:p-6">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                      {group.topics.map((topic, topicIdx) => (
                        <li key={topicIdx} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0B4982] shrink-0 mt-2" />
                          <span className="leading-relaxed">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 8. What Your Child Can Expect */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900">
              <ListChecks className="h-5 w-5 text-[#0B4982]" />
              <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
                What Your Child Can Expect
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-3 shadow-subtle">
              <p className="text-xs sm:text-sm text-slate-600 font-medium mb-1">
                Every session with {tutor.name} follows a disciplined, student-centered structure:
              </p>
              <div className="space-y-3">
                {tutor.whatStudentsCanExpect.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-[#579631] shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Verification & Transparency Disclosure */}
          <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
              <Info className="h-4 w-4 text-slate-600" />
              <span>Academic Transparency &amp; Credential Disclosure</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {tutor.credentialStatus}
            </p>
          </section>
        </div>

        {/* Right Sidebar / Quick Enrolment Card (4 cols) */}
        <div className="lg:col-span-4 space-y-6 sticky top-24">
          <Card className="border-slate-200 bg-white shadow-card">
            <CardContent className="p-6 sm:p-7 space-y-6">
              <div>
                <h2 className="font-heading font-bold text-base text-slate-900 border-b border-slate-200 pb-3">
                  Teaching Schedule &amp; Format
                </h2>
              </div>

              {/* Curriculum Levels */}
              <div>
                <p className="text-2xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Curriculum Levels Covered
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {tutor.curriculumLevels.map((lvl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#579631] shrink-0 mt-0.5" />
                      <span className="leading-snug">{lvl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Format Options */}
              <div>
                <p className="text-2xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Format Options
                </p>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {tutor.sessionFormats.map((fmt, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg bg-slate-50 p-2.5 border border-slate-100 font-medium"
                    >
                      {fmt}
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability Note */}
              <div>
                <p className="text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Admissions Note
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tutor.availabilityNote}
                </p>
              </div>

              {/* 9. CTA to Enquire */}
              <div className="pt-2 border-t border-slate-200 space-y-2.5">
                <Button
                  asChild
                  size="lg"
                  className="w-full justify-center bg-[#0B4982] hover:bg-[#083A68] text-white font-semibold shadow-card gap-2 rounded-xl"
                >
                  <Link href={`/contact?tutor=${tutor.slug}`}>
                    <span>Enquire with {firstName}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-2xs text-center text-slate-600 font-normal">
                  No registration fees required to enquire
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
