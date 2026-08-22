import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Tutors",
    href: "/tutors",
    description: "Somya Ranjan Naik, Shiwangi & Shreya Tiwari",
  },
  {
    label: "Subjects",
    href: "/subjects",
    description: "Mathematics, Science, Social Science & English",
  },
  {
    label: "Methodology",
    href: "/methodology",
    description: "Our structured teaching approach & learning roadmap",
  },
  {
    label: "FAQ",
    href: "/faq",
    description: "Frequently asked questions about classes and tutors",
  },
];

export const mainNavItems = navItems;

export const footerLinks = {
  explore: [
    { label: "Tutors", href: "/tutors" },
    { label: "Subjects", href: "/subjects" },
    { label: "Methodology", href: "/methodology" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  subjects: [
    { label: "Mathematics", href: "/subjects/mathematics" },
    { label: "Science", href: "/subjects/science" },
    { label: "Social Science", href: "/subjects/social-science" },
    { label: "English", href: "/subjects/english" },
  ],
};

export const footerNav = footerLinks;
