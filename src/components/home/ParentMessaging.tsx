import * as React from "react";
import Link from "next/link";
import { ArrowRight, Layers, Clock, UserCheck } from "lucide-react";

export function ParentMessaging() {
  const cards = [
    {
      title: "Concept Gaps",
      description:
        "Struggling with the basics can make new topics harder to understand.",
      icon: Layers,
    },
    {
      title: "Different Learning Pace",
      description:
        "Some students need more time, practice, or explanation before a concept becomes clear.",
      icon: Clock,
    },
    {
      title: "Lack of Individual Attention",
      description:
        "Personalized 1-on-1 tuition gives students the opportunity to ask questions, practice, and learn without hesitation.",
      icon: UserCheck,
    },
  ];

  return (
    <section
      aria-labelledby="parent-messaging-heading"
      className="py-14 sm:py-16 lg:py-20 bg-slate-50/60 border-b border-slate-200/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-10 sm:mb-12">
          <span className="text-2xs sm:text-xs font-bold uppercase tracking-wider text-[#0B4982] block">
            Personalized Learning for Grades 1–12
          </span>
          <h2
            id="parent-messaging-heading"
            className="font-heading text-2.5xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]"
          >
            Every Student Learns Differently
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            A classroom may have one lesson, one pace, and many students. But every learner has different strengths, challenges, and learning needs.
          </p>
        </div>

        {/* 3 Challenge & Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-subtle hover:border-blue-200 hover:shadow-lifted transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50/90 text-[#0B4982] group-hover:bg-[#0B4982] group-hover:text-white transition-colors duration-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Statement & CTA */}
        <div className="mt-10 sm:mt-12 text-center space-y-2">
          <p className="text-sm sm:text-base font-semibold text-slate-800">
            That’s where personalized learning makes a difference.
          </p>
          <div>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B4982] hover:text-[#083A68] underline-offset-4 hover:underline transition-colors py-1"
            >
              <span>How TutoLearner Helps</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
