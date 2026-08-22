import * as React from "react";
import { siteConfig } from "@/data/siteConfig";

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function generateWebSiteSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TutoLearner",
    alternateName: "TutoLearner Academy",
    url: siteUrl,
    description:
      "Personalized academic guidance, subject-focused tutoring, and learning resources designed around how students learn in Mathematics, Science, Social Science, and English.",
    publisher: {
      "@type": "EducationalOrganization",
      name: "TutoLearner",
      url: siteUrl,
      logo: `${siteUrl}/images/branding/logo_Tutolearner.jpeg`,
    },
  };
}

export function generateOrganizationSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "TutoLearner",
    alternateName: "TutoLearner Academy",
    url: siteUrl,
    logo: `${siteUrl}/images/branding/logo_Tutolearner.jpeg`,
    description:
      "A dedicated academic tutoring collective led by Somya Ranjan Naik, Shiwangi, and Shreya Tiwari. Providing structured instruction in Mathematics, Science, Social Science, and English.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Online & Regional Academic Hubs",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contactEmail,
      telephone: siteConfig.contactPhone,
      contactType: "Admissions & Student Support",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.facebook.com/people/Tutolearner/61593222653583/",
      "https://www.instagram.com/tutolearner/",
      "https://wa.me/919827118949"
    ],
    knowsAbout: ["Mathematics", "Science", "Social Science", "English"],
    member: [
      {
        "@type": "Person",
        name: "Somya Ranjan Naik",
        jobTitle: "Founder & Educator | Lead Faculty – Mathematics & Science",
        url: `${siteUrl}/tutors/somya-ranjan-naik`,
      },
      {
        "@type": "Person",
        name: "Shiwangi",
        jobTitle: "Lead Faculty – Social Science",
        url: `${siteUrl}/tutors/shivangi`,
      },
      {
        "@type": "Person",
        name: "Shreya Tiwari",
        jobTitle: "Lead Faculty – Science & English",
        url: `${siteUrl}/tutors/shreya-tiwari`,
      },
    ],
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
  siteUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${siteUrl}${item.url.startsWith("/") ? item.url : `/${item.url}`}`,
    })),
  };
}

export function generatePersonSchema(
  tutor: {
    name: string;
    roleTitle: string;
    slug: string;
    image: string;
    shortBio: string;
    subjects: string[];
    linkedin?: string;
  },
  siteUrl: string
) {
  const isFounder = tutor.slug === "somya-ranjan-naik";
  const jobTitle = isFounder
    ? "Founder & Educator | Lead Faculty – Mathematics & Science"
    : tutor.roleTitle;

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: tutor.name,
      jobTitle,
      url: `${siteUrl}/tutors/${tutor.slug}`,
      image: tutor.image.startsWith("http") ? tutor.image : `${siteUrl}${tutor.image}`,
      description: tutor.shortBio,
      worksFor: {
        "@type": "EducationalOrganization",
        name: "TutoLearner",
        url: siteUrl,
      },
      sameAs: tutor.linkedin ? [tutor.linkedin] : undefined,
      knowsAbout: tutor.subjects,
    },
  };
}

export function generateCourseSchema(
  subject: {
    name: string;
    slug: string;
    description: string;
    tutor: string[];
  },
  siteUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${subject.name} Academic Mentorship`,
    description: subject.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "TutoLearner",
      url: siteUrl,
    },
    url: `${siteUrl}/subjects/${subject.slug}`,
    instructor: subject.tutor.map((tutorName) => ({
      "@type": "Person",
      name: tutorName,
    })),
  };
}

export function generateFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
