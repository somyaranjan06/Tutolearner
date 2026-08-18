import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Calendar, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  className?: string;
}

export function CTASection({
  title = "Ready to make learning clearer and more rewarding?",
  subtitle = "Connect with Somya Ranjan Naik, Shiwangi, or Shreya Tiwari for a diagnostic baseline review and a personalized study roadmap.",
  primaryBtnText = "Enquire for Classes",
  primaryBtnHref = "/contact",
  secondaryBtnText = "Meet the Teaching Team",
  secondaryBtnHref = "/tutors",
  className,
}: CTASectionProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-800 bg-[#071F36] px-6 py-10 sm:px-10 sm:py-14 text-white shadow-lifted relative overflow-hidden",
        className
      )}
    >
      {/* Background radial highlight */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#0B4982]/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#6BB640]/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#082949] border border-[#0B4982] px-3.5 py-1.5 text-2xs font-bold uppercase tracking-wider text-[#BAE0FD]">
          <Sparkles className="h-3.5 w-3.5 text-[#6BB640]" />
          <span>Personalized Tutoring Admissions</span>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>

        {/* Feature bullets */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 font-medium pt-1">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#6BB640] shrink-0" />
            <span>Diagnostic Review Included</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#6BB640] shrink-0" />
            <span>Direct Faculty Mentorship</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#6BB640] shrink-0" />
            <span>No Registration Fees to Enquire</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-3">
          <Button
            asChild
            size="lg"
            className="bg-[#0B4982] hover:bg-[#083A68] text-white font-semibold shadow-md gap-2 py-3.5 px-6 sm:px-8 justify-center rounded-xl"
          >
            <Link href={primaryBtnHref}>
              <Calendar className="h-4 w-4" />
              <span>{primaryBtnText}</span>
            </Link>
          </Button>

          {secondaryBtnText && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold py-3.5 px-6 sm:px-8 justify-center rounded-xl"
            >
              <Link href={secondaryBtnHref}>
                <span>{secondaryBtnText}</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
