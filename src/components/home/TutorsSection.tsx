import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { tutors } from "@/data/tutors";
import { ArrowRight } from "lucide-react";

export function TutorsSection() {
  return (
    <section id="tutors" className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
          <span className="text-2xs sm:text-xs font-bold uppercase tracking-wider text-[#0B4982] block">
            Academic Faculty
          </span>
          <h2 className="font-heading text-2.5xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Meet Our Tutors
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Learn with dedicated tutors through personalized 1-on-1 sessions.
          </p>
        </div>

        {/* 3 Compact Tutor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {tutors.map((tutor) => (
            <div
              key={tutor.slug}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-subtle hover:border-blue-200 hover:shadow-lifted transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Tutor Photo */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-subtle">
                  <Image
                    src={tutor.image}
                    alt={`Portrait of ${tutor.name}`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                </div>

                {/* Name & Subject */}
                <div className="space-y-1">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {tutor.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#0B4982]">
                    {tutor.subjects.join(" & ")}
                  </p>
                </div>
              </div>

              {/* View Profile Action Link */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <Link
                  href={`/tutors/${tutor.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0B4982] transition-colors"
                >
                  <span>View Profile</span>
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
