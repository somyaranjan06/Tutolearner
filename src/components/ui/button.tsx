import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "accent";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-[#0B4982] text-white shadow-subtle hover:bg-[#083A68] active:bg-[#06294a] hover:shadow-md",
  accent:
    "bg-[#6BB640] text-white shadow-subtle hover:bg-[#579631] active:bg-[#427325] hover:shadow-md",
  destructive:
    "bg-rose-600 text-white shadow-subtle hover:bg-rose-700",
  outline:
    "border border-slate-200 bg-white text-slate-800 shadow-subtle hover:bg-blue-50/60 hover:text-[#0B4982] hover:border-blue-200",
  secondary:
    "bg-slate-100 text-slate-900 shadow-subtle hover:bg-slate-200",
  ghost:
    "hover:bg-slate-100 hover:text-slate-900",
  link:
    "text-[#0B4982] underline-offset-4 hover:underline hover:text-[#083A68] p-0 h-auto",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "h-11 px-5 py-2.5",
  sm: "h-9 rounded-lg px-3.5 text-xs",
  lg: "h-12 rounded-xl px-7 text-base font-semibold",
  icon: "h-10 w-10",
};

export const buttonVariants = ({
  variant = "default",
  size = "default",
  className = "",
}: {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
} = {}) => {
  return cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4982] disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.985] motion-reduce:transform-none motion-reduce:transition-none",
    variantStyles[variant || "default"],
    sizeStyles[size || "default"],
    className
  );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
