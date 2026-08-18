import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tagline?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  id?: string;
}

export function SectionHeading({
  tagline,
  title,
  description,
  align = "center",
  className,
  id,
}: SectionHeadingProps) {
  const alignmentStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      id={id}
      className={cn(
        "flex flex-col max-w-3xl mb-12 sm:mb-16",
        alignmentStyles[align],
        className
      )}
    >
      {tagline && (
        <span className="inline-flex items-center text-2xs sm:text-xs font-bold tracking-wider uppercase text-[#0B4982] bg-blue-50/90 px-3.5 py-1 rounded-full border border-blue-200/80 mb-3.5 select-none shadow-subtle">
          {tagline}
        </span>
      )}
      <h2 className="font-heading text-2.5xl sm:text-3.5xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
