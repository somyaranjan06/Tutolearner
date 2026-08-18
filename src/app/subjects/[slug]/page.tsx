import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { subjects, getSubjectBySlug, getAllSubjectSlugs } from "@/data/subjects";
import { siteConfig, getCanonicalUrl } from "@/data/siteConfig";
import { SubjectDetail } from "@/components/subjects/SubjectDetail";
import { CTASection } from "@/components/common/CTASection";
import { JsonLd, generateCourseSchema, generateFaqSchema } from "@/components/seo/JsonLd";

interface SubjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSubjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: SubjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const subject = getSubjectBySlug(slug);

  if (!subject) {
    return {
      title: "Subject Not Found",
      description: "The requested curriculum subject is not available.",
    };
  }

  const facultyNames = subject.tutor.join(", ");
  const canonicalUrl = getCanonicalUrl(`/subjects/${subject.slug}`);

  return {
    title: `${subject.name} Tutoring & Syllabus | TutoLearner Academy`,
    description: `${subject.name} instruction led by ${facultyNames}. ${subject.description}`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${subject.name} Curriculum & Mentorship | TutoLearner Academy`,
      description: `${subject.name} led by ${facultyNames}. First-principles conceptual mastery and diagnostic reviews.`,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${subject.name} Curriculum`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${subject.name} Tutoring & Syllabus | TutoLearner Academy`,
      description: `${subject.name} instruction led by ${facultyNames}.`,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function SingleSubjectPage({ params }: SubjectPageProps) {
  const { slug } = await params;
  const subject = getSubjectBySlug(slug);

  if (!subject) {
    notFound();
  }

  const courseSchema = generateCourseSchema(subject, siteConfig.url);
  const faqSchema = generateFaqSchema(subject.faqs);

  return (
    <div className="py-10 sm:py-16">
      {/* Course and Subject FAQ Structured Data */}
      <JsonLd data={[courseSchema, faqSchema]} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Full Subject Detail View */}
        <SubjectDetail subject={subject} />

        {/* Closing CTA */}
        <CTASection
          title={`Enrol or Enquire for ${subject.name}`}
          subtitle={`Schedule an assessment to review student proficiency and design a targeted learning schedule with our faculty (${subject.tutor.join(" & ")}).`}
          primaryBtnText={`Enquire for ${subject.name}`}
          primaryBtnHref={`/contact?subject=${subject.slug}`}
          secondaryBtnText="Explore All Subjects"
          secondaryBtnHref="/subjects"
        />
      </div>
    </div>
  );
}
