import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, hasError, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-slate-900 shadow-subtle transition-all duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
          hasError
            ? "border-rose-400 bg-rose-50/20 focus-visible:border-rose-500 focus-visible:ring-rose-500"
            : "border-slate-300 focus-visible:border-[#0B4982] focus-visible:ring-[#0B4982]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
