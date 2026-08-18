import * as React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-xs sm:text-sm text-slate-500", className)}
    >
      <ol className="flex items-center space-x-1.5 sm:space-x-2 flex-wrap">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-slate-900 transition-colors p-1 -m-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4982] rounded"
            aria-label="Home"
          >
            <Home className="h-3.5 w-3.5" />
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-1.5 sm:space-x-2">
              <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" aria-hidden="true" />
              {isLast || !item.href ? (
                <span className="font-medium text-slate-900 truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-slate-900 transition-colors truncate max-w-[150px] sm:max-w-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4982] rounded"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
