export interface SyllabusTopicGroup {
  subject: string;
  topics: string[];
}

export interface Tutor {
  name: string;
  slug: string;
  roleTitle: string;
  subjects: string[];
  availableSubjects: string[];
  shortBio: string;
  teachingStyle: string;
  image: string;
  featured: boolean;
  curriculumLevels: string[];
  methodologyFocus: string[];
  whatStudentsCanExpect: string[];
  syllabusTopicsCovered: SyllabusTopicGroup[];
  credentialStatus: string;
  sessionFormats: string[];
  availabilityNote: string;
  linkedin?: string;
}

export interface SubjectModule {
  title: string;
  description: string;
  topics: string[];
}

export interface SubjectFAQ {
  question: string;
  answer: string;
}

export interface Subject {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  tutor: string[];
  tutorSlugs: string[];
  icon: string;
  targetGrades: string;
  whyItMatters: string;
  learningApproach: string;
  approachPillars: { title: string; description: string }[];
  keyLearningAreas: SubjectModule[];
  learningOutcomes: string[];
  curriculumNote: string;
  faqs: SubjectFAQ[];
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface PillarItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}
