import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, socialLinks } from "@/data/siteConfig";
import { footerLinks } from "@/data/navigation";
import { SocialMediaLinks, WhatsAppIcon } from "@/components/common/SocialIcons";
import { Mail, Clock, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#071F36] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column (4 cols) */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6BB640] rounded-xl"
              aria-label="TutoLearner"
            >
              <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-xl overflow-hidden bg-white p-0.5 shadow-subtle border border-slate-700/60 flex items-center justify-center shrink-0 group-hover:border-[#6BB640] transition-colors">
                <Image
                  src="/images/branding/logo_Tutolearner.jpeg"
                  alt="TutoLearner"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight">
                <span className="text-white">Tuto</span>
                <span className="text-[#6BB640]">Learner</span>
              </span>
            </Link>

            <p className="text-sm font-semibold text-[#7ECB51]">
              Personalized Learning, Your Way.
            </p>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm font-normal">
              Connecting students with personalized academic guidance, subject-focused tutoring, and learning resources designed around how they learn.
            </p>

            {/* Social Media - Follow Us Section */}
            <div className="pt-2 space-y-2.5">
              <span className="text-2xs font-bold uppercase tracking-wider text-slate-300 block">
                Connect With Us
              </span>
              <SocialMediaLinks variant="footer" />
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="space-y-3.5 lg:col-span-2">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects Column (3 cols) */}
          <div className="space-y-3.5 lg:col-span-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
              Subjects &amp; Tracks
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.subjects.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (3 cols) */}
          <div className="space-y-3.5 lg:col-span-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
              Contact &amp; Admissions
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {/* WhatsApp Phone */}
              <li>
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 group hover:text-white transition-colors"
                  aria-label="Direct WhatsApp (+91 9827118949)"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block text-2xs uppercase tracking-wider">
                      WhatsApp Support:
                    </span>
                    <span className="text-slate-300 group-hover:text-[#7ECB51] transition-colors">
                      {siteConfig.contactPhone}
                    </span>
                  </div>
                </a>
              </li>

              {/* Email */}
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-[#6BB640] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block text-2xs uppercase tracking-wider">
                    Email Enquiries:
                  </span>
                  <span>{siteConfig.contactEmail}</span>
                </div>
              </li>

              {/* Academic Hours */}
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-[#6BB640] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block text-2xs uppercase tracking-wider">
                    Academic Hours:
                  </span>
                  <span>{siteConfig.academicHours}</span>
                </div>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7ECB51] hover:text-white transition-colors"
              >
                <span>Request Consultation</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} TutoLearner. All rights reserved. Somya Ranjan Naik, Shiwangi &amp; Shreya Tiwari.
          </p>

          <p className="text-2xs font-mono text-slate-300">
            Utilize Resources. Deliver Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
