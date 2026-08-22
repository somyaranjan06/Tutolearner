import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tutor } from "@/types";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TutorHeroProps {
  tutor: Tutor;
}

export function TutorHero({ tutor }: TutorHeroProps) {
  const firstName = tutor.name.split(" ")[0];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-card overflow-hidden">
      <div className="bg-[#071F36] px-6 py-10 sm:px-10 sm:py-14 text-white">
        <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8">
          {/* Tutor Photograph with priority for LCP */}
          <div className="relative h-28 w-28 sm:h-36 sm:w-36 shrink-0 overflow-hidden rounded-2xl border-2 border-slate-700 bg-slate-800 shadow-lifted">
            <Image
              src={tutor.image}
              alt={`Portrait of ${tutor.name}`}
              width={144}
              height={144}
              sizes="(max-width: 640px) 112px, 144px"
              priority
              className="h-full w-full object-cover"
            />
          </div>

          {/* Profile Overview */}
          <div className="space-y-3 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-md bg-[#052814] border border-[#6BB640]/40 px-3 py-1 text-2xs font-bold uppercase tracking-wider text-[#7ECB51]">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Verified Faculty Member</span>
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Academic Collective
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-4.5xl font-extrabold tracking-tight text-white">
              {tutor.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium leading-snug">
              {tutor.roleTitle}
            </p>

            {/* Subjects Taught Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-2xs font-bold uppercase tracking-wider text-slate-400 mr-1">
                Subjects Taught:
              </span>
              {tutor.subjects.map((subj) => (
                <span
                  key={subj}
                  className="rounded-lg bg-[#082949] px-3 py-1 text-xs font-semibold text-[#BAE0FD] border border-[#0B4982] shadow-subtle"
                >
                  {subj}
                </span>
              ))}
            </div>

            {/* Positioning Sentence */}
            {tutor.positioningSentence && (
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed pt-1 max-w-2xl">
                {tutor.positioningSentence}
              </p>
            )}
          </div>

          {/* Direct CTA Action */}
          <div className="pt-4 md:pt-0 shrink-0 flex flex-col sm:flex-row md:flex-col gap-2.5">
            <Button
              asChild
              size="lg"
              className="w-full md:w-auto bg-[#0B4982] hover:bg-[#083A68] text-white font-semibold shadow-md gap-2 rounded-xl"
            >
              <Link href={`/contact?tutor=${tutor.slug}`}>
                <Calendar className="h-4 w-4" />
                <span>Enquire with {firstName}</span>
              </Link>
            </Button>

            {tutor.linkedin && (
              <a
                href={tutor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#0A66C2] text-white border border-white/20 text-xs font-semibold transition-all duration-150 shadow-xs"
                aria-label={`${tutor.name} on LinkedIn`}
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
                </svg>
                <span>Connect on LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
