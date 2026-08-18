"use client";

import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQItem } from "@/types";

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
  defaultOpen?: string;
}

export function FAQAccordion({ items, className, defaultOpen }: FAQAccordionProps) {
  return (
    <div className={className}>
      <Accordion
        type="single"
        collapsible
        defaultValue={defaultOpen || items[0]?.id}
        className="w-full divide-y divide-slate-200/90 rounded-2xl border border-slate-200 bg-white px-6 sm:px-8 shadow-subtle"
      >
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-none py-2">
            <AccordionTrigger className="text-left text-base sm:text-lg font-bold text-slate-900 hover:no-underline hover:text-[#0B4982] transition-colors py-4">
              <span className="flex items-center gap-3 pr-4">
                {item.category && (
                  <span className="text-2xs uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60 shrink-0">
                    {item.category}
                  </span>
                )}
                <span>{item.question}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 leading-relaxed text-sm sm:text-base pb-6 pt-1 font-normal">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
