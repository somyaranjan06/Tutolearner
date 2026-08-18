export interface MethodologyPrinciple {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface PersonalizedAdvantage {
  title: string;
  description: string;
  iconName: string;
}

export interface LearningStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
  iconName: string;
}

export const methodologyPrinciples: MethodologyPrinciple[] = [
  {
    number: "01",
    title: "Understand Concepts",
    subtitle: "First-Principles Foundation",
    description: "We break complex formulas, scientific laws, historical events, and grammar rules down to fundamental intuitive concepts before introducing advanced problem sets.",
    iconName: "BrainCircuit"
  },
  {
    number: "02",
    title: "Practice Systematically",
    subtitle: "Deliberate Scaffolding",
    description: "Students work through graded problem sets—advancing from guided illustrative walkthroughs to independent high-difficulty exam questions.",
    iconName: "Target"
  },
  {
    number: "03",
    title: "Ask Questions Freely",
    subtitle: "Active Discourse",
    description: "We cultivate an open, supportive learning environment where students are encouraged to voice uncertainties, test hypothesis, and clear every doubt without hesitation.",
    iconName: "HelpCircle"
  },
  {
    number: "04",
    title: "Apply Knowledge",
    subtitle: "Real-World Context",
    description: "Theory is solidified by connecting concepts to practical applications, diagrammatic representations, structured essay responses, and scientific reasoning.",
    iconName: "Sparkles"
  },
  {
    number: "05",
    title: "Track Progress",
    subtitle: "Continuous Review",
    description: "Periodic chapter diagnostics and milestone reviews help students and parents monitor retention, identify weak areas, and adjust study pacing.",
    iconName: "LineChart"
  }
];

export const personalizedAdvantages: PersonalizedAdvantage[] = [
  {
    title: "Individual Attention",
    description: "Every lesson is tailored to the student's unique learning pace, ensuring no misconception goes unnoticed or unaddressed.",
    iconName: "UserCheck"
  },
  {
    title: "Concept-Focused Learning",
    description: "We prioritize deep conceptual understanding over superficial memorization, building analytical thinking skills that last.",
    iconName: "BrainCircuit"
  },
  {
    title: "Flexible Guidance",
    description: "Lesson plans adapt dynamically to upcoming school exams, assignment needs, and emerging revision priorities.",
    iconName: "Sliders"
  },
  {
    title: "Interactive Learning",
    description: "Two-way dialogue, live whiteboard derivations, and active inquiry keep students engaged and intellectually stimulated.",
    iconName: "MessageSquareCode"
  },
  {
    title: "Regular Practice",
    description: "Structured practice sets and curated problem sheets reinforce retention between sessions without overwhelming the student.",
    iconName: "ListOrdered"
  },
  {
    title: "Student-Centered Support",
    description: "Mentorship designed to build academic confidence, reduce exam stress, and foster genuine curiosity in every discipline.",
    iconName: "HeartHandshake"
  }
];

export const personalizationAdvantages = personalizedAdvantages;

export const learningProcessSteps: LearningStep[] = [
  {
    step: "01",
    title: "Understand the Student's Needs",
    subtitle: "Step 01: Intake & Alignment",
    description: "We begin with an introductory consultation to understand the student's academic background, syllabus board, target goals, and scheduling preferences.",
    details: "Grade assessment, syllabus alignment, goal definition",
    iconName: "Compass"
  },
  {
    step: "02",
    title: "Identify Learning Gaps",
    subtitle: "Step 02: Diagnostic Assessment",
    description: "A non-intimidating diagnostic assessment identifies specific foundational gaps, recurring calculation or conceptual errors, and areas of strength.",
    details: "Diagnostic test, error taxonomy, prerequisite check",
    iconName: "SearchCheck"
  },
  {
    step: "03",
    title: "Build a Personalized Approach",
    subtitle: "Step 03: Structured Roadmap",
    description: "The assigned tutor creates a customized syllabus roadmap, setting appropriate pacing, lesson schedules, and targeted practice milestones.",
    details: "Custom curriculum plan, faculty matching, practice materials",
    iconName: "DraftingCompass"
  },
  {
    step: "04",
    title: "Track Learning and Improve",
    subtitle: "Step 04: Continuous Evaluation",
    description: "Through regular chapter reviews, revision sets, and transparent parent updates, we ensure continuous learning progression and confident exam readiness.",
    details: "Milestone reports, periodic review, iterative adjustments",
    iconName: "TrendingUp"
  }
];
