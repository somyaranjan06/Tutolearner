import * as React from "react";

export function PositioningStrip() {
  const pillars = [
    "PERSONALIZED GUIDANCE",
    "MULTIPLE SUBJECT EXPERTS",
    "CONCEPT-FOCUSED LEARNING",
    "STUDENT-CENTERED APPROACH",
  ];

  return (
    <section
      aria-label="Core Academic Positioning"
      className="border-b border-slate-200/80 bg-slate-50/70 py-4.5 sm:py-5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-8 text-center">
          {pillars.map((pillar, index) => (
            <React.Fragment key={pillar}>
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-700 uppercase">
                {pillar}
              </span>
              {index < pillars.length - 1 && (
                <span
                  className="hidden sm:inline text-slate-500 select-none text-xs font-light"
                  aria-hidden="true"
                >
                  |
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
