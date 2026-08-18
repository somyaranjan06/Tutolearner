"use client";

import * as React from "react";
import { Tutor } from "@/types";
import { TutorCard } from "./TutorCard";
import { cn } from "@/lib/utils";

interface TutorGridProps {
  tutors: Tutor[];
  className?: string;
  showSubjectFilter?: boolean;
}

export function TutorGrid({ tutors, className, showSubjectFilter = false }: TutorGridProps) {
  const [selectedSubject, setSelectedSubject] = React.useState<string>("all");

  const allSubjects = React.useMemo(() => {
    const set = new Set<string>();
    tutors.forEach((t) => t.subjects.forEach((s) => set.add(s)));
    return Array.from(set);
  }, [tutors]);

  const filteredTutors = React.useMemo(() => {
    if (selectedSubject === "all") return tutors;
    return tutors.filter((t) =>
      t.subjects.some((s) => s.toLowerCase() === selectedSubject.toLowerCase())
    );
  }, [tutors, selectedSubject]);

  return (
    <div className={cn("space-y-8", className)}>
      {showSubjectFilter && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedSubject("all")}
            className={cn(
              "rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4982]",
              selectedSubject === "all"
                ? "bg-[#0B4982] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-[#0B4982]"
            )}
          >
            All Tutors ({tutors.length})
          </button>
          {allSubjects.map((subject) => (
            <button
              key={subject}
              type="button"
              onClick={() => setSelectedSubject(subject)}
              className={cn(
                "rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4982]",
                selectedSubject === subject
                  ? "bg-[#0B4982] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-[#0B4982]"
              )}
            >
              {subject}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTutors.map((tutor) => (
          <TutorCard key={tutor.slug} tutor={tutor} />
        ))}
      </div>
    </div>
  );
}
