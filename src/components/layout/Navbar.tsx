"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "./MobileNavigation";
import { Menu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-subtle border-b border-slate-200/80 py-3"
            : "bg-white border-b border-slate-100 py-3.5 sm:py-4"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo Presentation: Official TutoLearner Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4982] rounded-xl transition-opacity hover:opacity-95"
            aria-label="TutoLearner Home"
          >
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-xl overflow-hidden border border-slate-100 shadow-subtle bg-white flex items-center justify-center p-0.5 group-hover:border-blue-200 transition-colors shrink-0">
              <Image
                src="/images/branding/logo_Tutolearner.jpeg"
                alt="TutoLearner"
                width={48}
                height={48}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-extrabold tracking-tight leading-none">
                <span className="text-[#0B4982]">Tuto</span>
                <span className="text-[#6BB640]">Learner</span>
              </span>
              <span className="text-[10px] font-medium tracking-wide text-slate-500 mt-0.5 hidden sm:inline">
                Personalized Learning
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => {
              const isExactActive =
                item.href === "/"
                  ? pathname === "/"
                  : item.href.startsWith("/#")
                  ? false
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4982]",
                    isExactActive
                      ? "text-[#0B4982] font-semibold bg-blue-50/80"
                      : "text-slate-600 hover:text-[#0B4982] hover:bg-slate-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="bg-[#0B4982] hover:bg-[#083A68] active:bg-[#06294a] text-white text-xs sm:text-sm font-semibold h-10 px-5 sm:px-6 rounded-xl shadow-subtle transition-all duration-200"
            >
              <Link href="/contact" className="gap-2">
                <span>Start Learning</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex lg:hidden items-center justify-center p-2.5 rounded-xl text-slate-700 hover:text-[#0B4982] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4982] border border-slate-200 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Open Navigation Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
