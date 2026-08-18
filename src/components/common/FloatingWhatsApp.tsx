"use client";

import * as React from "react";
import { socialLinks } from "@/data/siteConfig";
import { WhatsAppIcon } from "@/components/common/SocialIcons";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <aside
      aria-label="Direct WhatsApp Enquiry"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 pointer-events-auto"
    >
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with TutoLearner on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 active:scale-95"
      >
        {/* Subtle breathing ripple glow */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10"
          aria-hidden="true"
        />

        {/* WhatsApp Official Icon */}
        <WhatsAppIcon className="h-6 w-6 shrink-0 fill-current drop-shadow-xs" />

        {/* Desktop Text expansion */}
        <span className="hidden sm:inline-block text-xs font-bold tracking-tight text-white select-none whitespace-nowrap pr-1">
          Chat with us on WhatsApp
        </span>

        {/* Tooltip on mobile/hover for accessibility */}
        <span className="sr-only">Chat with TutoLearner on WhatsApp (+91 9827118949)</span>
      </a>
    </aside>
  );
}
