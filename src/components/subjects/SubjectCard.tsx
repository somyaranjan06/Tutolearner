import * as React from "react";
import Link from "next/link";
import { Subject } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Calculator,
  Atom,
  Globe2,
  BookOpenCheck,
  ArrowRight,
  CheckCircle2,
  LucideIcon,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SubjectCardProps {
  subject: Subject;
  className?: string;
  isCompact?: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  Calculator,
  Atom,
  Globe2,
  BookOpenCheck,
};

export function SubjectCard({
  subject,
  className,
  isCompact = false,
}: SubjectCardProps) {
  const IconComponent = iconMap[subject.icon] || BookOpenCheck;
  const isDualFaculty = subject.slug === "science";

  return (
    <Card
      className={cn(
        "group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-all duration-200 hover:border-blue-200 hover:shadow-lifted",
        className
      )}
    >
      <div>
        {/* Subject Header Plaque */}
        <div className="bg-[#071F36] p-6 sm:p-7 text-white">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B4982] text-white shadow-subtle border border-[#125D9E]/40 group-hover:bg-[#083A68] transition-colors shrink-0">
              <IconComponent className="h-6 w-6 text-white" />
            </div>

            <div className="text-right flex flex-col items-end gap-1">
              <span className="rounded-md bg-[#082949] px-2.5 py-1 text-2xs font-semibold text-[#BAE0FD] border border-[#0B4982]">
                {subject.targetGrades}
              </span>
              {isDualFaculty && (
                <span className="rounded-md bg-[#052814] border border-[#6BB640]/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#7ECB51]">
                  Dual Faculty
                </span>
              )}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#BAE0FD] transition-colors">
              {subject.name}
            </h3>
            <p className="text-xs text-slate-300 mt-1 font-medium line-clamp-1">
              {subject.tagline}
            </p>
          </div>
        </div>

        {/* Card Content */}
        <CardContent className="p-6 sm:p-7 space-y-5">
          {/* Assigned Faculty Section */}
          <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200/70">
            <div className="flex items-center gap-1.5 text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
              <UserCheck className="h-3.5 w-3.5 text-[#0B4982]" />
              <span>{isDualFaculty ? "Assigned Faculty (Collaborative)" : "Lead Instructor"}</span>
            </div>
            <p className="text-sm font-bold text-slate-900">
              {subject.tutor.join(" & ")}
            </p>
            {isDualFaculty && (
              <p className="text-2xs text-slate-600 mt-0.5">
                Physics, Chemistry &amp; Biology specialized instruction
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {subject.description}
          </p>

          {/* Suggested Learning Outcomes */}
          {!isCompact && (
            <div>
              <p className="text-2xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                Key Learning Outcomes
              </p>
              <ul className="space-y-2">
                {subject.learningOutcomes.slice(0, 3).map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-[#6BB640] shrink-0 mt-0.5" />
                    <span className="leading-snug font-normal">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </div>

      {/* Card Footer */}
      <CardFooter className="p-6 sm:p-7 pt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 border-t border-slate-100 mt-2">
        <Button
          asChild
          variant="outline"
          className="flex-1 justify-center border-slate-200 hover:bg-blue-50/60 hover:text-[#0B4982] hover:border-blue-200 text-xs sm:text-sm font-semibold rounded-xl"
        >
          <Link href={`/subjects/${subject.slug}`}>
            <span>View Syllabus</span>
          </Link>
        </Button>

        <Button
          asChild
          className="flex-1 justify-center bg-[#0B4982] hover:bg-[#083A68] text-white text-xs sm:text-sm font-semibold gap-1.5 rounded-xl shadow-subtle"
        >
          <Link href={`/contact?subject=${subject.slug}`}>
            <span>Enquire {subject.name.split(" ")[0]}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
