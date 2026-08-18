import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "indigo" | "emerald" | "amber" | "brand" | "blue" | "green";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default: "border-transparent bg-[#0B4982] text-white shadow-subtle",
    secondary: "border-transparent bg-slate-100 text-slate-800",
    outline: "border-slate-200 text-slate-700 bg-white",
    brand: "border-blue-200/80 bg-blue-50 text-[#0B4982] font-semibold",
    blue: "border-blue-200/80 bg-blue-50 text-[#0B4982] font-semibold",
    indigo: "border-blue-200/80 bg-blue-50 text-[#0B4982] font-semibold", // fallback for backward-compat
    emerald: "border-emerald-200/80 bg-[#F2FAF0] text-[#365B20] font-semibold",
    green: "border-emerald-200/80 bg-[#F2FAF0] text-[#365B20] font-semibold",
    amber: "border-amber-200/60 bg-amber-50 text-amber-900 font-semibold",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold tracking-tight transition-colors select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
