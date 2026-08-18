"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { X, ArrowRight, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();

  // Close menu on ESC key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      {/* Backdrop with fade transition */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer with slide transition */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-slate-200 animate-slide-in-right">
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 rounded-xl overflow-hidden border border-slate-100 shadow-subtle bg-white flex items-center justify-center p-0.5 shrink-0">
              <Image
                src="/images/branding/logo_Tutolearner.jpeg"
                alt="TutoLearner"
                width={36}
                height={36}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-heading font-extrabold text-lg tracking-tight">
              <span className="text-[#0B4982]">Tuto</span>
              <span className="text-[#6BB640]">Learner</span>
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4982] transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="p-4 sm:p-5 space-y-1">
          <span className="text-2xs font-bold uppercase tracking-wider text-slate-600 px-3 block mb-2">
            Navigation
          </span>
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/#")
                ? false
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all duration-150 active:scale-[0.99]",
                  isActive
                    ? "bg-blue-50 text-[#0B4982] font-bold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#0B4982]"
                )}
              >
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4 text-slate-500" />
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer & CTA */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 space-y-3">
          <Button
            asChild
            size="lg"
            className="w-full justify-center bg-[#0B4982] hover:bg-[#083A68] text-white font-semibold shadow-card gap-2 rounded-xl"
          >
            <Link href="/contact" onClick={onClose}>
              <span>Start Learning</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <div className="pt-2 text-2xs text-slate-600 space-y-1">
            <p className="flex items-center gap-1.5 font-medium text-slate-700">
              <Mail className="h-3 w-3 text-[#0B4982]" />
              <span>{siteConfig.contactEmail}</span>
            </p>
            <p className="flex items-center gap-1.5 text-slate-600">
              <Clock className="h-3 w-3 text-slate-500" />
              <span>{siteConfig.academicHours}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
