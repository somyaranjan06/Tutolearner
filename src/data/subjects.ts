import { Subject } from "@/types";

export const subjects: Subject[] = [
  {
    name: "Mathematics",
    slug: "mathematics",
    tagline: "First-Principles Deductive Logic & Computational Rigor",
    description: "Developing logical deduction, numerical fluency, algebraic mastery, and systematic geometric proof techniques through intuitive concept breakdown rather than mechanical memorization.",
    metaDescription: "Personalized 1-on-1 Mathematics tutoring focused on deeper understanding and problem-solving.",
    tutor: ["Somya Ranjan Naik"],
    tutorSlugs: ["somya-ranjan-naik"],
    icon: "Calculator",
    targetGrades: "Grades 6 to 12 & Foundation",
    whyItMatters: "Mathematics serves as the foundational language for STEM disciplines, computer science, and data reasoning. Mastering mathematical problem solving trains students in logical hypothesis testing, structured thinking, pattern recognition, and quantitative precision that extends far beyond exams.",
    learningApproach: "We use a step-by-step first-principles approach. Instead of memorizing formulas, students learn how formulas are derived, why mathematical theorems hold true, and how to deconstruct multi-step word problems into manageable equations.",
    approachPillars: [
      {
        title: "First-Principles Derivations",
        description: "Deconstructing algebraic and trigonometric relations so formulas become intuitive rather than remembered."
      },
      {
        title: "Error Taxonomy Analysis",
        description: "Tracking whether mistakes stem from conceptual misunderstandings, sign errors, or calculation speed bottlenecks."
      },
      {
        title: "Graded Scaffolding",
        description: "Progressing smoothly from illustrative textbook proofs to complex multi-step board exam problems."
      }
    ],
    keyLearningAreas: [
      {
        title: "Number Systems & Arithmetic Operations",
        description: "Real numbers, rational exponents, prime factorization, and modular arithmetic concepts.",
        topics: ["Real Numbers & Euclid's Division", "Fundamental Theorem of Arithmetic", "Polynomials & Factoring", "Linear Equations in Two Variables"]
      },
      {
        title: "Algebraic Relations & Quadratic Systems",
        description: "Mastery of polynomial behavior, quadratic formula derivations, and series progressions.",
        topics: ["Quadratic Equations & Roots", "Arithmetic Progressions (AP)", "Sum of n Terms", "Algebraic Word Problems"]
      },
      {
        title: "Coordinate Geometry & Trigonometry",
        description: "Bridging algebra and geometry with analytical graphing, distance formulas, and trigonometric identities.",
        topics: ["Distance & Section Formulas", "Trigonometric Ratios & Values", "Trigonometric Proof Identities", "Heights & Distances Applications"]
      },
      {
        title: "Geometry, Mensuration & Probability",
        description: "Rigorous proof formulation for planar geometry, 3D volume calculations, and stochastic statistics.",
        topics: ["Triangles & Similarity Theorems", "Circles & Tangents Properties", "Surface Areas & Volumes (3D)", "Statistics & Probability Modeling"]
      }
    ],
    learningOutcomes: [
      "Mastery of core algebraic manipulation, polynomial factoring, and quadratic solutions",
      "Confidence in writing clear, deductive geometric proofs with appropriate justifications",
      "Proficiency in trigonometric ratios, standard values, and multi-step height-and-distance problems",
      "Elimination of recurring calculation and sign errors through structured step-by-step writing"
    ],
    curriculumNote: "[Curriculum topics listed above represent illustrative standard modules adapted to CBSE, ICSE, and State Board frameworks for Grades 6–12. Exact syllabus pacing is aligned to the student's board during diagnostic consultation.]",
    faqs: [
      {
        question: "How does Somya Ranjan Naik approach students who struggle with math anxiety?",
        answer: "Mathematics anxiety often comes from rushing into formula application before understanding underlying concepts. We begin with diagnostic assessments to find the exact prerequisite gap, then rebuild confidence through simple, visual examples before moving to complex exercises."
      },
      {
        question: "Are both board exam syllabus and foundation/competitive math covered?",
        answer: "Yes. Core board syllabus concepts are prioritized first to ensure strong academic performance, followed by extension problems that build higher-order thinking skills."
      },
      {
        question: "How are doubt clearance and homework practice handled?",
        answer: "Every session includes dedicated time for homework walkthroughs. Students also have access to offline doubt support channels between scheduled classes."
      }
    ]
  },
  {
    name: "Science",
    slug: "science",
    tagline: "Empirical Inquiry across Physics, Chemistry & Biology",
    description: "Building an empirical, inquiry-driven understanding of physical laws, chemical reactions, and biological life processes through concept visualization, diagrams, and scientific modeling.",
    tutor: ["Somya Ranjan Naik", "Shreya Tiwari"],
    tutorSlugs: ["somya-ranjan-naik", "shreya-tiwari"],
    icon: "Atom",
    targetGrades: "Grades 6 to 10 & Secondary Foundation",
    whyItMatters: "Science develops critical observation, empirical reasoning, and an understanding of the natural and physical world. It enables students to analyze cause-and-effect relationships, interpret experimental data, and understand technological and environmental systems.",
    learningApproach: "Science is taught collaboratively by Somya Ranjan Naik (focusing on physics numerical modeling and physical/chemical fundamentals) and Shreya Tiwari (focusing on empirical scientific inquiry, biological systems, and diagrammatic clarity).",
    approachPillars: [
      {
        title: "Dual Faculty Specialization",
        description: "Somya Ranjan Naik and Shreya Tiwari coordinate instruction to provide deep domain expertise across Physics, Chemistry, and Biology."
      },
      {
        title: "Visual Process Modeling",
        description: "Visualizing microscopic reactions, electric circuits, and biological organ systems through clear diagrams."
      },
      {
        title: "Equation Balancing & Numericals",
        description: "Step-by-step frameworks for physics numericals (ray optics, electricity) and chemical stoichiometry."
      }
    ],
    keyLearningAreas: [
      {
        title: "Physics: Mechanics, Energy & Electricity",
        description: "Mathematical models of motion, gravitational forces, work-energy theorems, and electric current circuits.",
        topics: ["Laws of Motion & Gravitation", "Work, Power & Energy Conservation", "Electricity: Ohm's Law & Circuit Analysis", "Magnetic Effects & Electromagnetic Induction"]
      },
      {
        title: "Physics: Optics & The Physical World",
        description: "Ray diagrams, spherical lenses and mirrors, and phenomena of dispersion and atmospheric refraction.",
        topics: ["Reflection & Refraction (Ray Diagrams)", "Lens & Mirror Equations (Sign Convention)", "Human Eye & Corrective Lenses", "Atmospheric Refraction & Scattering"]
      },
      {
        title: "Chemistry: Reactions, Acids, Bases & Metals",
        description: "Balancing chemical equations, predicting precipitation reactions, and understanding periodic properties.",
        topics: ["Types of Chemical Reactions", "Acids, Bases & pH Indicators", "Metals, Non-metals & Reactivity Series", "Carbon Compounds & Functional Groups"]
      },
      {
        title: "Biology: Life Processes, Genetics & Ecology",
        description: "Cellular respiration, circulatory systems, endocrine regulation, Mendelian genetics, and ecosystems.",
        topics: ["Nutrition, Respiration & Transportation", "Control & Coordination (Nervous/Hormonal)", "Reproduction & Heredity Laws", "Our Environment & Ecosystem Dynamics"]
      }
    ],
    learningOutcomes: [
      "Ability to accurately draw, label, and explain key scientific diagrams (circuits, ray diagrams, biological organs)",
      "Confidence in solving physics numericals with correct SI units and sign conventions",
      "Proficiency in balancing chemical equations and predicting reaction outcomes",
      "Clear conceptual understanding of biological mechanisms and environmental interactions"
    ],
    curriculumNote: "[Curriculum topics listed above represent illustrative standard modules adapted to CBSE, ICSE, and State Board frameworks for Grades 6–10. Exact syllabus pacing is aligned during the diagnostic consultation.]",
    faqs: [
      {
        question: "How is teaching divided between Somya Ranjan Naik and Shreya Tiwari?",
        answer: "Teaching is allocated based on specific module focus and student scheduling. Somya Ranjan Naik emphasizes physics derivations, numericals, and core chemical principles, while Shreya Tiwari leads biological inquiry, anatomical diagrams, and empirical concepts."
      },
      {
        question: "Do you help with school lab write-ups and practical exam questions?",
        answer: "Yes. We deconstruct the theoretical principles behind standard school lab experiments, helping students understand practical procedures and high-scoring viva questions."
      },
      {
        question: "How do you help students remember biological terminology and chemical reactions?",
        answer: "We use structured summary tables, etymology breakdowns, and active recall quizzes rather than passive reading."
      }
    ]
  },
  {
    name: "Social Science",
    slug: "social-science",
    tagline: "Thematic History, Spatial Geography, Civics & Economics",
    description: "Cultivating historical perspective, spatial geographic literacy, constitutional awareness, and economic analysis through structured thematic mapping and high-scoring essay formulations.",
    tutor: ["Shiwangi"],
    tutorSlugs: ["shivangi"],
    icon: "Globe2",
    targetGrades: "Grades 6 to 10 & Humanities Foundation",
    whyItMatters: "Social Science equips students with critical awareness of democratic institutions, global history, environmental stewardship, and economic systems. It builds strong analytical reading, synthesis, and structured written communication skills essential for academic and professional success.",
    learningApproach: "Shiwangi structures dense textbook information into memorable conceptual themes. By connecting historical events chronologically, spatial maps geographically, and economic principles practically, students learn how to structure high-scoring descriptive answers.",
    approachPillars: [
      {
        title: "Thematic Timeline Mapping",
        description: "Transforming long historical chapters into clear, interconnected chronological flowcharts."
      },
      {
        title: "Cartography & Map Skills",
        description: "Dedicated masterclasses on historical and geographical map-pointing for guaranteed exam marks."
      },
      {
        title: "Structured Answer Engineering",
        description: "Framing 3-mark and 5-mark answers with distinct subheadings, key dates, and exact terminology."
      }
    ],
    keyLearningAreas: [
      {
        title: "History: World Nationalism & Indian Freedom Movement",
        description: "Understanding socio-political revolutions, anti-colonial movements, and global economic transformations.",
        topics: ["The Rise of Nationalism in Europe", "Nationalism in India (Non-Cooperation & Civil Disobedience)", "The Making of a Global World", "Print Culture & Modern World"]
      },
      {
        title: "Geography: Resource Planning & Spatial Analysis",
        description: "Physical geography, agricultural patterns, mineral distributions, and manufacturing industries.",
        topics: ["Resources & Land Utilization", "Forest, Wildlife & Water Resources", "Agriculture & Cropping Patterns", "Minerals, Energy & Manufacturing Industries"]
      },
      {
        title: "Political Science: Democratic Institutions & Diversity",
        description: "Constitutional governance, federal power-sharing, electoral politics, and outcomes of democracy.",
        topics: ["Power Sharing & Federalism", "Gender, Religion & Caste in Politics", "Political Parties & Electoral Systems", "Outcomes & Challenges of Democracy"]
      },
      {
        title: "Economics: Development, Sectors & Globalisation",
        description: "Macroeconomic development indices, credit mechanisms, formal and informal banking, and consumer rights.",
        topics: ["Development & National Income Indices", "Sectors of the Indian Economy (Primary, Secondary, Tertiary)", "Money, Credit & Banking Systems", "Globalisation & Consumer Rights"]
      }
    ],
    learningOutcomes: [
      "Command over historical timelines, causes, and consequences of major political movements",
      "Precision in map identification and location pointing across Indian geography and history",
      "Deep understanding of democratic institutions, federalism, and fundamental constitutional rights",
      "Ability to write well-structured, 5-point answers using correct academic terminology"
    ],
    curriculumNote: "[Curriculum topics listed above represent illustrative standard modules adapted to CBSE, ICSE, and State Board frameworks for Grades 6–10. Exact syllabus pacing is aligned during the diagnostic consultation.]",
    faqs: [
      {
        question: "How does Shiwangi help students remember extensive dates and historical facts?",
        answer: "Shiwangi utilizes chronological timeline flowcharts and thematic storytelling that connect causes and consequences, making facts meaningful rather than isolated memorization items."
      },
      {
        question: "How is answer-writing practice integrated into classes?",
        answer: "Students practice writing structured answers under timed conditions, learning how to present points with sub-headings, underlined keywords, and bullet points to maximize marks."
      },
      {
        question: "Are map-work skills practiced regularly?",
        answer: "Yes. Map pointing for historical centers, major dams, agricultural belts, and industrial hubs is practiced through dedicated worksheet exercises."
      }
    ]
  },
  {
    name: "English",
    slug: "english",
    tagline: "Language Mechanics, Critical Literature & Expressive Composition",
    description: "Elevating grammatical accuracy, reading comprehension, critical literary analysis, and structured composition for polished communication and academic excellence.",
    tutor: ["Shreya Tiwari"],
    tutorSlugs: ["shreya-tiwari"],
    icon: "BookOpenCheck",
    targetGrades: "Grades 6 to 12 & Advanced Communication",
    whyItMatters: "Mastery of English is crucial for academic achievement across all disciplines, competitive examinations, and effective self-expression. It develops critical thinking, rhetorical analysis, and the ability to articulate complex thoughts with clarity and nuance.",
    learningApproach: "Shreya Tiwari bridges formal syntax mechanics with expressive writing and literary analysis. Students master grammar rules through targeted drill sets, learn unseen passage decoding techniques, and analyze literature for underlying themes and character development.",
    approachPillars: [
      {
        title: "Applied Grammar Precision",
        description: "Systematic rules for tenses, reported speech, and voice to eliminate recurring sentence construction errors."
      },
      {
        title: "Unseen Passage Decoding",
        description: "Skimming, scanning, and inference-extraction strategies for rapid, accurate comprehension scoring."
      },
      {
        title: "Analytical Essay Templates",
        description: "Structured paragraph blueprints for formal letters, analytical paragraphs, reports, and thematic essays."
      }
    ],
    keyLearningAreas: [
      {
        title: "Applied Grammar & Syntax Engineering",
        description: "Mastery of sentence structure, verb concord, reported speech, modals, and error correction.",
        topics: ["Tenses & Subject-Verb Agreement", "Reported Speech (Direct to Indirect)", "Active & Passive Voice Mechanics", "Determiners, Modals & Clauses"]
      },
      {
        title: "Reading Comprehension & Critical Analysis",
        description: "Techniques for analyzing factual, discursive, and literary passages with speed and precision.",
        topics: ["Factual & Discursive Passage Strategies", "Inference & Vocabulary from Context", "Tone, Mood & Central Idea Extraction", "Summary & Note-Making Frameworks"]
      },
      {
        title: "Creative & Formal Writing Skills",
        description: "Structured formats for academic and formal communication following board guidelines.",
        topics: ["Analytical Paragraph Writing", "Formal Letters (Inquiry, Complaint, Editor)", "Article & Speech Drafting", "Notice, Message & Report Writing"]
      },
      {
        title: "Literature Study: Prose, Poetry & Drama",
        description: "In-depth textual deconstruction, character sketches, poetic devices, and thematic essay answers.",
        topics: ["Prose Chapter Analysis & Character Arcs", "Poetry: Rhyme, Metaphor & Symbolism", "Drama & Dialogic Text Interpretation", "Long Answer Thematic Formulation"]
      }
    ],
    learningOutcomes: [
      "Flawless application of core grammatical rules in writing and error-spotting exercises",
      "Ability to decode complex unseen passages and extract accurate inferences rapidly",
      "Command over formal writing formats with appropriate tone, vocabulary, and paragraph structure",
      "Nuanced literary analysis demonstrating understanding of motifs, themes, and poetic devices"
    ],
    curriculumNote: "[Curriculum topics listed above represent illustrative standard modules adapted to CBSE, ICSE, and State Board frameworks for Grades 6–12. Exact syllabus pacing is aligned during the diagnostic consultation.]",
    faqs: [
      {
        question: "How does Shreya Tiwari improve a student's writing style?",
        answer: "Shreya provides line-by-line feedback on written drafts, teaching students how to replace repetitive vocabulary with precise words, vary sentence lengths, and structure compelling analytical arguments."
      },
      {
        question: "Is the school prescribed literature textbook covered?",
        answer: "Yes. Sessions include detailed textual walkthroughs of the student's specific school curriculum literature texts, analyzing plot points, characters, and high-frequency exam questions."
      },
      {
        question: "How is reading speed and comprehension accuracy developed?",
        answer: "Through timed passage drills and step-by-step annotation techniques that train students to quickly locate key evidence in text passages."
      }
    ]
  }
];

export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find((subj) => subj.slug === slug);
}

export function getAllSubjectSlugs(): string[] {
  return subjects.map((subj) => subj.slug);
}
