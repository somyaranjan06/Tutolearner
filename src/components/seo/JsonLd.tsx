import * as React from "react";

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

export function generateOrganizationSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "TutoLearner Academy",
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    description:
      "A dedicated academic tutoring collective led by Somya Ranjan Naik, Shiwangi, and Shreya Tiwari. Providing structured instruction in Mathematics, Science, Social Science, and English.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Online & Regional Academic Hubs",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "enquiry@tutolearner.edu",
      contactType: "Admissions & Student Support",
      availableLanguage: ["English", "Hindi"],
    },
    knowsAbout: ["Mathematics", "Science", "Social Science", "English"],
    member: [
      {
        "@type": "Person",
        name: "Somya Ranjan Naik",
        jobTitle: "Lead Faculty – Mathematics & Science",
        url: `${siteUrl}/tutors/somya-ranjan-naik`,
      },
      {
        "@type": "Person",
        name: "Shiwangi",
        jobTitle: "Lead Faculty – Social Science",
        url: `${siteUrl}/tutors/shiwangi`,
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

export function generatePersonSchema(tutor: {
  name: string;
  roleTitle: string;
  slug: string;
  image: string;
  shortBio: string;
  subjects: string[];
}, siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: tutor.name,
    jobTitle: tutor.roleTitle,
    url: `${siteUrl}/tutors/${tutor.slug}`,
    image: `${siteUrl}${tutor.image}`,
    description: tutor.shortBio,
    worksFor: {
      "@type": "EducationalOrganization",
      name: "TutoLearner Academy",
      url: siteUrl,
    },
    knowsAbout: tutor.subjects,
  };
}

export function generateCourseSchema(subject: {
  name: string;
  slug: string;
  description: string;
  tutor: string[];
}, siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${subject.name} Academic Mentorship`,
    description: subject.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "TutoLearner Academy",
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
