import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tutors, getTutorBySlug, getAllTutorSlugs } from "@/data/tutors";
import { siteConfig, getCanonicalUrl } from "@/data/siteConfig";
import { TutorProfile } from "@/components/tutors/TutorProfile";
import { CTASection } from "@/components/common/CTASection";
import {
  JsonLd,
  generatePersonSchema,
  generateBreadcrumbSchema,
} from "@/components/seo/JsonLd";

interface TutorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllTutorSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: TutorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tutor = getTutorBySlug(slug);

  if (!tutor) {
    return {
      title: "Faculty Profile Not Found | TutoLearner",
      description: "The requested faculty profile is not available.",
    };
  }

  const subjectsList = tutor.subjects.join(", ");
  const canonicalUrl = getCanonicalUrl(`/tutors/${tutor.slug}`);

  return {
    title: {
      absolute: tutor.metaTitle || `${tutor.name} | ${tutor.roleTitle} – TutoLearner`,
    },
    description:
      tutor.metaDescription ||
      `${tutor.name} provides personalized academic tutoring in ${subjectsList}. ${tutor.shortBio}`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${tutor.name} | ${tutor.roleTitle} – TutoLearner`,
      description: `${tutor.name} leads instruction in ${subjectsList}. First-principles conceptual clarity.`,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: tutor.image.startsWith("http")
            ? tutor.image
            : `${siteConfig.url}${tutor.image}`,
          width: 400,
          height: 400,
          alt: `Portrait of ${tutor.name}`,
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary",
      title: `${tutor.name} | ${tutor.roleTitle} – TutoLearner`,
      description: `${tutor.name} leads instruction in ${subjectsList}.`,
      images: [
        tutor.image.startsWith("http")
          ? tutor.image
          : `${siteConfig.url}${tutor.image}`,
      ],
    },
  };
}

export default async function SingleTutorPage({ params }: TutorPageProps) {
  const { slug } = await params;
  const tutor = getTutorBySlug(slug);

  if (!tutor) {
    notFound();
  }

  const firstName = tutor.name.split(" ")[0];
  const personSchema = generatePersonSchema(tutor, siteConfig.url);
  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: "Home", url: "/" },
      { name: "Tutors", url: "/tutors" },
      { name: tutor.name, url: `/tutors/${tutor.slug}` },
    ],
    siteConfig.url
  );

  return (
    <div className="py-10 sm:py-16">
      {/* Structured Data: Person & Breadcrumbs */}
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Full Tutor Profile View */}
        <TutorProfile tutor={tutor} />

        {/* Closing Enquiry CTA */}
        <CTASection
          title={`Enquire for classes with ${tutor.name}`}
          subtitle={`Schedule an initial evaluation and get a customized syllabus roadmap for ${tutor.subjects.join(" & ")}.`}
          primaryBtnText={`Enquire with ${firstName}`}
          primaryBtnHref={`/contact?tutor=${tutor.slug}`}
          secondaryBtnText="Explore All Faculty"
          secondaryBtnHref="/tutors"
        />
      </div>
    </div>
  );
}
