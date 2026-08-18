import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { tutors } from "@/data/tutors";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function TutorsSection() {
  return (
    <section id="tutors" className="py-20 sm:py-24 lg:py-32 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <span className="text-2xs sm:text-xs font-bold uppercase tracking-wider text-[#0B4982] block">
            Academic Faculty
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Meet the people behind the learning.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Different perspectives. Different strengths. One goal — helping students learn with clarity.
          </p>
        </div>

        {/* 3 Tutors Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {tutors.map((tutor) => {
            const isFounder = tutor.slug === "somya-ranjan-naik";
            const roleBadge = isFounder
              ? "Founder, TutoLearner"
              : "Academic Faculty";

            return (
              <div
                key={tutor.slug}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-subtle hover:border-blue-200 hover:shadow-lifted transition-all duration-200"
              >
                <div className="space-y-6">
                  {/* Tutor Portrait Image & Tag */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-subtle">
                    <Image
                      src={tutor.image}
                      alt={`Portrait of ${tutor.name}`}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-[#071F36]/90 backdrop-blur-xs px-3 py-1 text-2xs font-bold text-white border border-slate-700/80">
                        {roleBadge}
                      </span>
                    </div>
                  </div>

                  {/* Name & Subjects */}
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                      {tutor.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0B4982]">
                      {tutor.subjects.join(" · ")}
                    </p>
                  </div>

                  {/* Short Bio */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {tutor.shortBio}
                  </p>

                  {/* Key Strengths */}
                  <div className="space-y-2 pt-1">
                    {tutor.methodologyFocus.slice(0, 2).map((focus, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#6BB640] shrink-0 mt-0.5" />
                        <span className="leading-snug">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/tutors/${tutor.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-[#0B4982] transition-colors"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#0B4982] group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href={`/contact?tutor=${tutor.slug}`}
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
