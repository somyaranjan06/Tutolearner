import * as React from "react";
import Link from "next/link";
import { subjects } from "@/data/subjects";
import { ArrowRight } from "lucide-react";

export function SubjectExplorer() {
  return (
    <section id="subjects" className="py-14 sm:py-16 lg:py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
          <span className="text-2xs sm:text-xs font-bold uppercase tracking-wider text-[#0B4982] block">
            Curriculum Areas
          </span>
          <h2 className="font-heading text-2.5xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Explore Our Subjects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Personalized 1-on-1 support across core school subjects.
          </p>
        </div>

        {/* 4-Subject Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {subjects.map((subject) => (
            <div
              key={subject.slug}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-subtle hover:border-blue-200 hover:shadow-lifted transition-all duration-200"
            >
              <div className="space-y-3">
                <h3 className="font-heading text-xl font-bold text-slate-900 tracking-tight group-hover:text-[#0B4982] transition-colors">
                  {subject.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {subject.previewDescription || subject.tagline}
                </p>
              </div>

              {/* Explore Subject Link */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={`/subjects/${subject.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0B4982] transition-colors"
                >
                  <span>Explore Subject</span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-[#0B4982] group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
