import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0B4982] mb-6 border border-blue-200/60 shadow-subtle">
        <GraduationCap className="h-8 w-8" />
      </div>
      <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-sm sm:text-base text-slate-600 leading-relaxed">
        The faculty or curriculum page you are looking for might have been moved or is currently unavailable.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild size="default" className="bg-[#0B4982] hover:bg-[#083A68] text-white rounded-xl">
          <Link href="/" className="gap-2">
            <Home className="h-4 w-4" />
            <span>Return to Home</span>
          </Link>
        </Button>
        <Button asChild variant="outline" size="default" className="rounded-xl">
          <Link href="/tutors" className="gap-2">
            <span>Explore Faculty</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
