import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tutor } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface TutorCardProps {
  tutor: Tutor;
  className?: string;
  isCompact?: boolean;
}

export function TutorCard({ tutor, className, isCompact = false }: TutorCardProps) {
  const firstName = tutor.name.split(" ")[0];

  return (
    <Card
      className={cn(
        "group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-all duration-200 hover:border-blue-200 hover:shadow-lifted",
        className
      )}
    >
      <div>
        {/* Tutor Visual Header Plaque */}
        <div className="relative bg-[#071F36] p-6 sm:p-7 text-white">
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-md">
              <Image
                src={tutor.image}
                alt={`Portrait of ${tutor.name}`}
                width={80}
                height={80}
                sizes="80px"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>

            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 text-2xs font-bold uppercase tracking-wider text-[#7ECB51] bg-[#052814] border border-[#6BB640]/40 px-2 py-0.5 rounded">
                  <ShieldCheck className="h-3 w-3" />
                  <span>Verified Faculty</span>
                </span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#BAE0FD] transition-colors truncate">
                {tutor.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-1 font-medium">
                {tutor.roleTitle}
              </p>
            </div>
          </div>

          {/* Subjects Badges */}
          <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
            {tutor.subjects.map((subject) => (
              <span
                key={subject}
                className="inline-flex items-center rounded-md bg-[#082949] px-2.5 py-1 text-xs font-semibold text-[#BAE0FD] border border-[#0B4982]"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        {/* Card Body - Clean, concise, easy to scan */}
        <CardContent className="p-6 sm:p-7 space-y-4">
          {/* One-Line Teaching Description */}
          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            {tutor.cardDescription || tutor.shortBio}
          </p>

          {/* Best For Short Line */}
          {tutor.bestFor && (
            <div className="rounded-xl bg-blue-50/70 p-3 sm:p-3.5 border border-blue-200/80 text-xs sm:text-sm text-slate-800 leading-snug">
              <strong className="font-bold text-[#0B4982]">Best for: </strong>
              <span>{tutor.bestFor.replace(/^Best for:\s*/i, "")}</span>
            </div>
          )}
        </CardContent>
      </div>

      {/* Card Footer Actions */}
      <CardFooter className="p-6 sm:p-7 pt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 border-t border-slate-100 mt-2">
        <Button
          asChild
          variant="outline"
          className="flex-1 justify-center border-slate-200 hover:bg-blue-50/60 hover:text-[#0B4982] hover:border-blue-200 text-xs sm:text-sm font-semibold rounded-xl"
        >
          <Link href={`/tutors/${tutor.slug}`}>
            <span>View Profile</span>
          </Link>
        </Button>

        <Button
          asChild
          className="flex-1 justify-center bg-[#0B4982] hover:bg-[#083A68] text-white text-xs sm:text-sm font-semibold gap-1.5 rounded-xl shadow-subtle hover:shadow-md"
        >
          <Link href={`/contact?tutor=${tutor.slug}`}>
            <span>Enquire with {firstName}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
