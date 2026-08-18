import * as React from "react";
import Link from "next/link";
import { subjects } from "@/data/subjects";
import { ArrowRight, UserCheck } from "lucide-react";

export function SubjectExplorer() {
  return (
    <section id="subjects" className="py-20 sm:py-24 lg:py-32 bg-slate-50/60 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <span className="text-2xs sm:text-xs font-bold uppercase tracking-wider text-[#0B4982] block">
            Curriculum Areas
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Find the right subject. Find the right guidance.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Specialized instruction across four core disciplines, delivered by subject-dedicated educators focused on concept clarity.
          </p>
        </div>

        {/* 4-Subject Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {subjects.map((subject, index) => {
            const isDual = subject.slug === "science";
            const tutorText = isDual
              ? "Somya Ranjan Naik · Shreya Tiwari"
              : subject.tutor[0];

            return (
              <div
                key={subject.slug}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-subtle hover:border-blue-200 hover:shadow-lifted transition-all duration-200"
              >
                <div className="space-y-6">
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                      0{index + 1}
                    </span>
                    <span className="rounded-full bg-blue-50/80 px-3 py-1 text-2xs font-semibold text-[#0B4982] border border-blue-100">
                      {subject.targetGrades}
                    </span>
                  </div>

                  {/* Subject Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="font-heading text-2.5xl sm:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#0B4982] transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium">
                      {subject.tagline}
                    </p>
                  </div>

                  {/* Concise Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {subject.description}
                  </p>

                  {/* Assigned Tutor Attribution Chip */}
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3.5 py-2 border border-slate-200/80 text-xs font-semibold text-slate-800">
                      <UserCheck className="h-3.5 w-3.5 text-[#0B4982] shrink-0" />
                      <span>{tutorText}</span>
                    </div>
                  </div>
                </div>

                {/* Explore Subject CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/subjects/${subject.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-[#0B4982] transition-colors"
                  >
                    <span>Explore {subject.name}</span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#0B4982] group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href={`/contact?subject=${subject.slug}`}
                    className="text-xs font-semibold text-slate-500 hover:text-[#0B4982] transition-colors"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
