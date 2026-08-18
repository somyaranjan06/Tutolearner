// Centralized TutoLearner Configuration & Social Links

export const socialLinks = {
  // IMPORTANT: Set to the public TutoLearner LinkedIn Company page URL when available.
  // DO NOT use the admin dashboard URL on the public website.
  linkedin: "PASTE_PUBLIC_TUTOLEARNER_LINKEDIN_URL_HERE",
  facebook: "https://www.facebook.com/people/Tutolearner/61593222653583/",
  instagram: "https://www.instagram.com/tutolearner/",
  whatsapp:
    "https://wa.me/919827118949?text=Hello%20TutoLearner!%20I%20would%20like%20to%20know%20more%20about%20your%20tutoring%20programs",
  whatsappNumber: "+91 9827118949",
  whatsappFormattedNumber: "919827118949",
  whatsappDefaultMessage:
    "Hello TutoLearner! I would like to know more about your tutoring programs.",
};

export const siteConfig = {
  name: "TutoLearner",
  shortName: "TutoLearner",
  tagline: "Personalized Learning, Your Way.",
  brandLine: "Utilize Resources. Deliver Excellence.",
  manifesto: "Utilize Resources. Deliver Excellence.",
  description:
    "TutoLearner connects students with personalized academic guidance, subject-focused tutoring, and learning resources designed around how they learn.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tutolearner.in",
  ogImage: "/images/og-banner.svg",
  contactEmail: "enquiry@tutolearner.edu",
  contactPhone: "+91 9827118949",
  academicHours: "Monday – Saturday: 9:00 AM – 8:00 PM IST",
  locationNote: "Interactive Online Classrooms & Regional Academic Hubs",
  locale: "en_US",
  twitterHandle: "@tutolearner",
  foundingYear: "2024",
  socialLinks,
  subjectsOffered: [
    "Mathematics",
    "Science",
    "Social Science",
    "English",
  ],
  facultyMembers: [
    {
      name: "Somya Ranjan Naik",
      role: "Founder, TutoLearner | Mathematics · Science",
      slug: "somya-ranjan-naik",
      subjects: ["Mathematics", "Science"],
      linkedin: "https://www.linkedin.com/in/somya-ranjan-naik-737742372/",
    },
    {
      name: "Shiwangi",
      role: "Lead Faculty – Social Science",
      slug: "shiwangi",
      subjects: ["Social Science"],
    },
    {
      name: "Shreya Tiwari",
      role: "Lead Faculty – Science & English",
      slug: "shreya-tiwari",
      subjects: ["Science", "English"],
    },
  ],
};

export function getCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath === "/" ? "" : cleanPath}`;
}
