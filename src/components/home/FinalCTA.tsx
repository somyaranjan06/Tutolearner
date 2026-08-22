import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { socialLinks } from "@/data/siteConfig";
import { WhatsAppIcon } from "@/components/common/SocialIcons";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-[#071F36] px-6 py-14 sm:px-12 sm:py-20 text-white shadow-lifted relative overflow-hidden text-center">
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#0B4982]/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#6BB640]/15 blur-2xl" />

          <div className="relative z-10 mx-auto max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#082949] border border-[#0B4982] px-4 py-1 text-2xs font-bold uppercase tracking-wider text-[#7ECB51]">
              <span>Personalized Learning, Your Way</span>
            </span>

            <h2 className="font-heading text-3.5xl sm:text-4.5xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Book a Free Demo Class
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              Experience personalized 1-on-1 learning.
            </p>

            {/* Dual CTAs: Book a Free Demo Class & Talk to Us on WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-[#0B4982] hover:bg-[#083A68] text-white font-semibold shadow-md gap-2 py-3.5 px-8 justify-center text-sm sm:text-base rounded-xl"
              >
                <Link href="/contact">
                  <span>Book a Free Demo Class</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold py-3.5 px-8 justify-center text-sm sm:text-base rounded-xl gap-2"
              >
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Talk to Us on WhatsApp (+91 9827118949)"
                >
                  <WhatsAppIcon className="h-5 w-5 text-[#25D366] fill-current shrink-0" />
                  <span>Talk to Us on WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
