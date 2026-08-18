import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-slate-100">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-1/3 -z-10 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Messaging (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Brand Positioning Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/60 px-3.5 py-1 text-2xs font-semibold uppercase tracking-wider text-slate-800 mx-auto lg:mx-0 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-[#6BB640]" />
              <span className="font-bold text-[#0B4982]">Personalized Learning, Your Way.</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                Learning should work for the learner.
              </h1>
              <p className="mx-auto lg:mx-0 max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
                TutoLearner connects students with personalized academic guidance, subject-focused tutoring, and learning resources designed around how they learn.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-[#0B4982] hover:bg-[#083A68] text-white font-semibold shadow-subtle gap-2 text-sm sm:text-base py-3.5 px-7 rounded-xl transition-all duration-200"
              >
                <Link href="/tutors">
                  <span>Find Your Tutor</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-200 bg-white hover:bg-blue-50/60 hover:text-[#0B4982] hover:border-blue-200 text-slate-800 font-semibold text-sm sm:text-base py-3.5 px-7 rounded-xl transition-all duration-200"
              >
                <Link href="/subjects">
                  <span>Explore Subjects</span>
                </Link>
              </Button>
            </div>

            {/* Supporting Micro-Note */}
            <div className="pt-2 text-xs sm:text-sm text-slate-600 font-medium">
              Mathematics · Science · Social Science · English
            </div>
          </div>

          {/* Right Column: Conceptual Learning Diagram Visual (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl border border-slate-800 bg-[#071F36] p-6 sm:p-8 text-white shadow-lifted">
              {/* Header inside diagram */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <span className="text-2xs font-bold uppercase tracking-wider text-slate-400">
                  The Learning Architecture
                </span>
                <span className="text-2xs font-semibold text-[#7ECB51] bg-[#082949] border border-[#0B4982] px-2.5 py-0.5 rounded-full">
                  Adaptive Model
                </span>
              </div>

              {/* Conceptual Relational Steps */}
              <div className="space-y-3">
                {/* Step 1: The Learner */}
                <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-700 text-xs font-mono font-bold text-white">
                      01
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white">The Student</p>
                      <p className="text-[11px] text-slate-400">Unique pace, questions &amp; learning style</p>
                    </div>
                  </div>
                  <span className="text-2xs text-slate-400 font-mono">Learner</span>
                </div>

                {/* Connector */}
                <div className="flex justify-center -my-1">
                  <span className="text-xs text-slate-400">↓</span>
                </div>

                {/* Step 2: Subject & Need */}
                <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-700 text-xs font-mono font-bold text-white">
                      02
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white">Subject Focus</p>
                      <p className="text-[11px] text-slate-400">Mathematics · Science · Social · English</p>
                    </div>
                  </div>
                  <span className="text-2xs text-[#7CC5FB] font-mono">Curriculum</span>
                </div>

                {/* Connector */}
                <div className="flex justify-center -my-1">
                  <span className="text-xs text-slate-400">↓</span>
                </div>

                {/* Step 3: Dedicated Faculty Match */}
                <div className="p-3.5 rounded-2xl bg-[#082949] border border-[#0B4982] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0B4982] text-xs font-mono font-bold text-white">
                      03
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white">Subject-Expert Tutor</p>
                      <p className="text-[11px] text-slate-300">Somya · Shiwangi · Shreya</p>
                    </div>
                  </div>
                  <span className="text-2xs text-[#7ECB51] font-mono font-bold">Expert</span>
                </div>

                {/* Connector */}
                <div className="flex justify-center -my-1">
                  <span className="text-xs text-slate-600">↓</span>
                </div>

                {/* Step 4: True Understanding */}
                <div className="p-3.5 rounded-2xl bg-[#06182A] border border-[#6BB640]/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#6BB640] text-xs font-mono font-bold text-slate-900">
                      ✓
                    </span>
                    <div>
                      <p className="text-xs font-bold text-[#7ECB51]">Conceptual Clarity &amp; Mastery</p>
                      <p className="text-[11px] text-slate-300">Beyond rote memorization</p>
                    </div>
                  </div>
                  <span className="text-2xs text-[#7ECB51] font-mono font-bold">Outcome</span>
                </div>
              </div>

              {/* Diagram Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-2xs text-slate-400">
                <span>Personalized Tutoring</span>
                <span className="text-[#7CC5FB] font-semibold">1-on-1 &amp; Small Batches</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
