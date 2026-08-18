import * as React from "react";
import { faqs } from "@/data/faqs";
import { FAQAccordion } from "@/components/common/FAQAccordion";

export function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-24 lg:py-32 bg-slate-50/60 border-b border-slate-200/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18 space-y-4">
          <span className="text-2xs sm:text-xs font-bold uppercase tracking-wider text-[#0B4982] block">
            Clarifications &amp; Details
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Everything you need to know about our subjects, tutors, matching process, and learning resources.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-subtle">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
