import * as React from "react";
import { socialLinks } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

// Official vector paths for social media platforms
export function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={cn("fill-current", className)} width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={cn("fill-current", className)} width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={cn("fill-current", className)} width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={cn("fill-current", className)} width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.8 14.15c-.24.67-1.39 1.28-1.92 1.34-.51.06-1.17.08-1.9-.15-.44-.14-1.01-.33-1.75-.65-3.08-1.34-5.09-4.47-5.24-4.67-.15-.2-1.25-1.66-1.25-3.17 0-1.51.79-2.25 1.07-2.56.28-.31.62-.39.83-.39.21 0 .41.01.59.02.19.01.44-.07.69.53.25.61.85 2.08.93 2.23.08.15.13.33.03.53-.1.2-.15.33-.3.51-.15.18-.32.39-.45.53-.15.15-.3.32-.13.62.17.3.77 1.27 1.65 2.05 1.13 1.01 2.09 1.32 2.39 1.47.3.15.48.13.66-.08.18-.21.77-.9 1-.1.21.2.46.23.77.34.31.11 1.98.93 2.32 1.1.34.17.57.25.65.39.08.14.08.81-.16 1.48z" />
    </svg>
  );
}

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  variant?: "footer" | "light" | "header";
}

export function SocialMediaLinks({
  className,
  iconClassName = "h-4 w-4",
  variant = "footer",
}: SocialLinksProps) {
  const isLinkedInConfigured =
    socialLinks.linkedin &&
    socialLinks.linkedin !== "PASTE_PUBLIC_TUTOLEARNER_LINKEDIN_URL_HERE";

  const linkedInHref = isLinkedInConfigured
    ? socialLinks.linkedin
    : "#";

  const buttonClass =
    variant === "footer"
      ? "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-slate-800/90 text-slate-300 hover:text-white border border-slate-700/80 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6BB640]"
      : "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:text-[#0B4982] hover:bg-blue-50 border border-slate-200 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4982]";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* LinkedIn */}
      <a
        href={linkedInHref}
        target={isLinkedInConfigured ? "_blank" : undefined}
        rel={isLinkedInConfigured ? "noopener noreferrer" : undefined}
        aria-label="TutoLearner on LinkedIn"
        title="Follow TutoLearner on LinkedIn"
        className={cn(
          buttonClass,
          "hover:bg-[#0A66C2] hover:border-[#0A66C2]"
        )}
      >
        <LinkedInIcon className={iconClassName} />
      </a>

      {/* Facebook */}
      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TutoLearner on Facebook"
        title="Follow TutoLearner on Facebook"
        className={cn(
          buttonClass,
          "hover:bg-[#1877F2] hover:border-[#1877F2]"
        )}
      >
        <FacebookIcon className={iconClassName} />
      </a>

      {/* Instagram */}
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TutoLearner on Instagram"
        title="Follow TutoLearner on Instagram"
        className={cn(
          buttonClass,
          "hover:bg-[#E4405F] hover:border-[#E4405F]"
        )}
      >
        <InstagramIcon className={iconClassName} />
      </a>

      {/* WhatsApp */}
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with TutoLearner on WhatsApp"
        title="Chat with TutoLearner on WhatsApp (+91 9827118949)"
        className={cn(
          buttonClass,
          "hover:bg-[#25D366] hover:border-[#25D366]"
        )}
      >
        <WhatsAppIcon className={iconClassName} />
      </a>
    </div>
  );
}
