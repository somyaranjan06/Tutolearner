import * as React from "react";
import { Subject } from "@/types";
import { SubjectCard } from "./SubjectCard";
import { cn } from "@/lib/utils";

interface SubjectGridProps {
  subjects: Subject[];
  className?: string;
}

export function SubjectGrid({ subjects, className }: SubjectGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8", className)}>
      {subjects.map((subject) => (
        <SubjectCard key={subject.slug} subject={subject} />
      ))}
    </div>
  );
}
