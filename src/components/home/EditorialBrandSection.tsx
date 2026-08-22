import * as React from "react";
import { corePhilosophy } from "@/data/methodology";

export function EditorialBrandSection() {
  const principles = corePhilosophy;

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <span className="text-2xs sm:text-xs font-bold uppercase tracking-wider text-[#0B4982] block">
            The Philosophy
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            A More Personal Way to Learn
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal pt-2">
            Different students struggle with different concepts, learn at different speeds, and need different kinds of guidance. TutoLearner is built around that idea.
          </p>
        </div>

        {/* 3 Editorial Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {principles.map((item) => (
            <div
              key={item.number}
              className="flex flex-col justify-between pt-6 border-t-2 border-slate-900 group hover:border-[#0B4982] transition-colors duration-200"
            >
              <div className="space-y-4">
                <span className="font-mono text-sm sm:text-base font-bold text-slate-600 group-hover:text-[#0B4982] transition-colors">
                  {item.number}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base font-semibold text-slate-800 leading-snug">
                  {item.description}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
