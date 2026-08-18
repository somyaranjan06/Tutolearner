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
    label: "Learning Resources",
    href: "/#resources",
    description: "Concept notes, visual breakdowns & practice sheets",
  },
  {
    label: "How It Works",
    href: "/#how-it-works",
    description: "Our 4-step personalized learning pathway",
  },
  {
    label: "FAQ",
    href: "/#faq",
    description: "Frequently asked questions about classes and tutors",
  },
];

export const mainNavItems = navItems;

export const footerLinks = {
  explore: [
    { label: "Tutors", href: "/tutors" },
    { label: "Subjects", href: "/subjects" },
    { label: "Learning Resources", href: "/#resources" },
    { label: "How It Works", href: "/#how-it-works" },
  ],
  support: [
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
    { label: "Enquire", href: "/contact" },
  ],
  subjects: [
    { label: "Mathematics", href: "/subjects/mathematics" },
    { label: "Science", href: "/subjects/science" },
    { label: "Social Science", href: "/subjects/social-science" },
    { label: "English", href: "/subjects/english" },
  ],
};

export const footerNav = footerLinks;
