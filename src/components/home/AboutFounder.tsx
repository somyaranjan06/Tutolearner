import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutFounder() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Founder Portrait Presentation (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 shadow-lifted">
                <Image
                  src="/images/tutors/Somya.jpeg"
                  alt="Portrait of Somya Ranjan Naik, Founder of TutoLearner"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-[#071F36]/90 backdrop-blur-xs px-3.5 py-1 text-xs font-bold text-white border border-slate-700">
                    Founder
                  </span>
                </div>
              </div>

              {/* Caption Card below portrait */}
              <div className="mt-4 p-4.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading font-extrabold text-base text-slate-900">
                      Somya Ranjan Naik
                    </p>
                    <p className="text-xs font-semibold text-[#0B4982]">
                      Mathematics &amp; Science Tutor
                    </p>
                  </div>
                  <Link
                    href="/tutors/somya-ranjan-naik"
                    className="text-xs font-bold text-slate-900 hover:text-[#0B4982] inline-flex items-center gap-1 transition-colors px-2 py-1"
                  >
                    <span>Profile</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>

                {/* LinkedIn Link for Somya */}
                <div className="pt-2.5 border-t border-slate-200/70 flex items-center justify-between">
                  <span className="text-2xs font-bold uppercase tracking-wider text-slate-600">
                    Professional Profile:
                  </span>
                  <a
                    href="https://www.linkedin.com/in/somya-ranjan-naik-737742372/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-semibold shadow-xs transition-colors"
                    aria-label="Somya Ranjan Naik LinkedIn Profile"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-2xs sm:text-xs font-bold uppercase tracking-wider text-[#0B4982] block">
                Meet the Founder
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-4.5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Somya Ranjan Naik
              </h2>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                Founder, TutoLearner | Mathematics &amp; Science Tutor
              </p>
            </div>

            {/* Story Text */}
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <p>
                Learning becomes more meaningful when students are given the right guidance, resources, and space to understand concepts in their own way.
              </p>
              <p>
                TutoLearner began with a simple idea — learning should not be limited to one teaching style, one pace, or one way of understanding a concept.
              </p>
              <p>
                As a tutor, Somya Ranjan Naik recognized that students approach the same subject differently. Some need concepts explained visually, some learn through examples and practice, while others need the right guidance and confidence to ask questions.
              </p>
              <p>
                That belief became the foundation of TutoLearner.
              </p>
              <p>
                The vision is to bring together capable tutors, useful learning resources, and personalized academic guidance so that students can find an approach that works for them.
              </p>
              <p>
                Rather than focusing only on completing a syllabus, TutoLearner aims to make learning more understandable, practical, and engaging — helping students move from simply remembering information to actually understanding it.
              </p>
              <p>
                That belief is at the heart of TutoLearner.
              </p>
            </div>

            {/* Highlight Callout Quote */}
            <div className="border-l-4 border-[#0B4982] pl-4 sm:pl-5 py-2 my-4 bg-blue-50/40 rounded-r-xl">
              <p className="text-base sm:text-lg font-bold text-slate-900 italic leading-snug">
                &ldquo;Learning becomes powerful when the right resource meets the right learner in the right way.&rdquo;
              </p>
            </div>

            {/* Motto Closure */}
            <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700">
              <span className="text-[#0B4982]">Utilize Resources. Deliver Excellence.</span>
              <Link
                href="/contact?tutor=somya-ranjan-naik"
                className="text-[#0B4982] hover:text-[#083A68] inline-flex items-center gap-1 font-semibold normal-case"
              >
                <span>Enquire with Somya</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
