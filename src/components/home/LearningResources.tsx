import * as React from "react";
import {
  FileText,
  Eye,
  HelpCircle,
  Layers,
  BookOpen,
  Newspaper,
  Clock,
} from "lucide-react";

export function LearningResources() {
  const resources = [
    {
      title: "Concept Notes",
      description:
        "Structured, concise chapter summaries and formula cheat-sheets.",
      icon: FileText,
      status: "Coming Soon",
    },
    {
      title: "Visual Learning",
      description:
        "Diagrammatic deconstructions and animated scientific/mathematical models.",
      icon: Eye,
      status: "Coming Soon",
    },
    {
      title: "Practice Questions",
      description:
        "Curated problem sets categorized by difficulty and question type.",
      icon: HelpCircle,
      status: "Coming Soon",
    },
    {
      title: "Worksheets",
      description:
        "Printable homework sheets with graded scaffolding for self-study.",
      icon: Layers,
      status: "Coming Soon",
    },
    {
      title: "Study Guides",
      description:
        "Comprehensive board-exam preparation and revision roadmaps.",
      icon: BookOpen,
      status: "Coming Soon",
    },
    {
      title: "Educational Articles",
      description:
        "Pedagogical insights and study strategies written by our tutors.",
      icon: Newspaper,
      status: "Coming Soon",
    },
  ];

  return (
    <section id="resources" className="py-20 sm:py-24 lg:py-32 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <span className="text-2xs sm:text-xs font-bold uppercase tracking-wider text-[#0B4982] block">
            Academic Resources
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Learning doesn&apos;t stop when the class ends.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Explore learning resources designed to make difficult concepts easier to understand.
          </p>
        </div>

        {/* 6 Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {resources.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-subtle hover:border-blue-200 hover:shadow-lifted transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Top Icon & Status Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#082949] text-white shadow-subtle">
                      <Icon className="h-5 w-5 text-[#6BB640]" />
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-2xs font-semibold text-slate-600 border border-slate-200">
                      <Clock className="h-3 w-3 text-slate-400" />
                      <span>{item.status}</span>
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-xl font-bold text-slate-900 tracking-tight pt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-2xs font-mono text-slate-400">
                  Resource Category
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
