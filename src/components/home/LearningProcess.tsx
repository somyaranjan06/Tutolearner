import * as React from "react";

export function LearningProcess() {
  const steps = [
    {
      step: "01",
      title: "Understand",
      description: "Identify what the student needs help with.",
      detail:
        "Initial diagnostic evaluation to pinpoint concept gaps, learning pace, and target goals.",
    },
    {
      step: "02",
      title: "Match",
      description: "Connect the learner with the appropriate subject tutor.",
      detail:
        "Direct assignment to Somya Ranjan Naik, Shiwangi, or Shreya Tiwari based on academic discipline.",
    },
    {
      step: "03",
      title: "Learn",
      description:
        "Build understanding through personalized guidance and practice.",
      detail:
        "Interactive live instruction, first-principles derivation, and guided problem solving.",
    },
    {
      step: "04",
      title: "Improve",
      description:
        "Strengthen concepts through continued learning and feedback.",
      detail:
        "Regular feedback reviews, targeted worksheet practice, and milestone assessments.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-32 bg-slate-50/60 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <span className="text-2xs sm:text-xs font-bold uppercase tracking-wider text-[#0B4982] block">
            How It Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            A Learning Experience Built Around You
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A structured, intentional learning journey built around how students actually understand concepts.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-subtle hover:border-blue-200 hover:shadow-lifted transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Step Marker */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl sm:text-2xl font-extrabold text-[#0B4982]">
                    {item.step}
                  </span>
                  <span className="text-2xs font-bold uppercase tracking-wider text-slate-600">
                    Step {index + 1}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-heading text-xl font-bold text-slate-900 tracking-tight pt-1">
                  {item.title}
                </h3>

                {/* Core Description */}
                <p className="text-sm font-semibold text-slate-800 leading-snug">
                  {item.description}
                </p>

                {/* Detail */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              {/* Bottom line indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-2xs font-mono text-slate-600">
                <span>Phase {index + 1} of 4</span>
                <span className="text-[#0B4982] font-bold text-sm">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
