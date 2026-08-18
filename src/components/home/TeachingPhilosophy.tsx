import * as React from "react";

export function TeachingPhilosophy() {
  return (
    <section className="py-24 sm:py-28 lg:py-36 bg-[#071F36] text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#0B4982]/30 blur-3xl -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-10">
        {/* Brand Tag */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[#082949] border border-[#0B4982] px-4 py-1.5 text-2xs font-bold uppercase tracking-wider text-[#7ECB51]">
          <span>The Teaching Philosophy</span>
        </div>

        {/* Brand Manifesto Line */}
        <h2 className="font-heading text-3.5xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
          Utilize Resources. Deliver Excellence.
        </h2>

        {/* Supporting Manifesto Body */}
        <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
          At TutoLearner, learning is more than delivering information. It is about using the right resources, delivering them in a way the learner can understand, and creating an environment where concepts become useful knowledge.
        </p>

        {/* Motto Pillars */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-mono text-slate-400">
          <span className="text-[#BAE0FD]">01 · Concept Clarity</span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="text-[#BAE0FD]">02 · Adaptive Pacing</span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="text-[#BAE0FD]">03 · Guided Mastery</span>
        </div>
      </div>
    </section>
  );
}
