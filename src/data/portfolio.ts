import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  LayoutDashboard,
  Sparkles,
  Workflow
} from "lucide-react";

export const socialLinks = {
  github: import.meta.env.VITE_GITHUB_URL || "https://github.com/varun5812",
  linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/",
  email: `mailto:${import.meta.env.VITE_EMAIL || "varunkumar@example.com"}`,
  leetcode: import.meta.env.VITE_LEETCODE_URL || "https://leetcode.com/",
  resume: import.meta.env.VITE_RESUME_URL || "/resume.pdf"
};

export const heroRoles = [
  "Data Scientist",
  "Machine Learning Enthusiast",
  "Deep Learning Learner",
  "Generative AI Explorer",
  "Data Analyst",
  "Python Developer"
];

export const sectionMeta = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Journey" },
  { id: "dashboard", label: "AI Dashboard" },
  { id: "contact", label: "Contact" }
];

export const stats = [
  { label: "Core Focus Areas", value: "06" },
  { label: "Project Highlights", value: "03" },
  { label: "Graduation Year", value: "2025" },
  { label: "AI Learning Mode", value: "∞" }
];

export const aboutHighlights = [
  "Artificial Intelligence graduate (2025) focused on real-world problem solving with data.",
  "Strong foundation in Python, SQL, machine learning, and business-focused data analytics.",
  "Currently exploring deep learning, generative AI, computer vision, and NLP systems."
];

export const skills = [
  {
    category: "Programming",
    icon: Code2,
    items: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 88 },
      { name: "TypeScript", level: 74 }
    ]
  },
  {
    category: "Data Analytics",
    icon: BarChart3,
    items: [
      { name: "Power BI", level: 84 },
      { name: "Tableau", level: 78 },
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 87 },
      { name: "Matplotlib", level: 80 },
      { name: "Seaborn", level: 79 }
    ]
  },
  {
    category: "Machine Learning",
    icon: BrainCircuit,
    items: [
      { name: "Scikit-learn", level: 87 },
      { name: "Regression", level: 85 },
      { name: "Classification", level: 84 },
      { name: "Clustering", level: 79 },
      { name: "Ensemble Learning", level: 76 }
    ]
  },
  {
    category: "Deep Learning",
    icon: Sparkles,
    items: [
      { name: "TensorFlow", level: 75 },
      { name: "Keras", level: 77 },
      { name: "CNN", level: 73 },
      { name: "Neural Networks", level: 74 }
    ]
  },
  {
    category: "Generative AI",
    icon: Workflow,
    items: [
      { name: "LLM Basics", level: 72 },
      { name: "Prompt Engineering", level: 82 },
      { name: "AI Tools", level: 84 },
      { name: "Transformers", level: 68 },
      { name: "Hugging Face", level: 66 }
    ]
  },
  {
    category: "Tools",
    icon: Database,
    items: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 83 },
      { name: "VS Code", level: 89 },
      { name: "Jupyter Notebook", level: 90 }
    ]
  }
];

export const projects = [
  {
    title: "Blinkit Data Analytics Dashboard",
    description:
      "Analyzed sales trends, customer behavior, and operational insights through polished business dashboards and actionable visual storytelling.",
    tech: ["Python", "Power BI", "Pandas"],
    accent: "from-cyan-400/70 to-blue-500/70"
  },
  {
    title: "Potato Disease Prediction using Deep Learning",
    description:
      "Built an image classification pipeline to detect potato plant diseases using convolutional neural networks and computer vision workflows.",
    tech: ["Python", "TensorFlow", "CNN", "Deep Learning"],
    accent: "from-fuchsia-500/70 to-violet-500/70"
  },
  {
    title: "Cloud Computing Adoption in Education Sector",
    description:
      "Final-year research project analyzing cloud technology adoption in educational institutions, covering infrastructure, access, and readiness trends.",
    tech: ["Research", "Data Analysis", "Cloud Concepts"],
    accent: "from-sky-400/70 to-cyan-300/70"
  }
];

export const experience = [
  {
    title: "Data Science Trainee",
    organization: "Eddie Globe",
    period: "Current Learning Track",
    summary:
      "Building practical foundations in machine learning, statistics, data analytics, AI concepts, and applied project work."
  }
];

export const education = [
  {
    title: "Bachelor Degree in Artificial Intelligence",
    period: "Graduated in 2025",
    summary: "Focused on AI systems, data-driven applications, and emerging machine intelligence domains."
  }
];

export const certifications = [
  "Python for Data Science",
  "SQL",
  "Machine Learning",
  "Data Analytics",
  "Power BI"
];

export const dashboardMetrics = [
  {
    label: "Model Curiosity",
    value: "96%",
    icon: LayoutDashboard
  },
  {
    label: "Data Storytelling",
    value: "91%",
    icon: BarChart3
  },
  {
    label: "AI Momentum",
    value: "88%",
    icon: BrainCircuit
  },
  {
    label: "Execution Readiness",
    value: "84%",
    icon: BriefcaseBusiness
  }
];

export const timeline = [
  {
    year: "2025",
    title: "Bachelor in Artificial Intelligence",
    text: "Graduated and transitioned into a more execution-focused AI and data science path."
  },
  {
    year: "Now",
    title: "Data Science Trainee at Eddie Globe",
    text: "Strengthening ML, statistics, analytics, and real-world AI project capabilities."
  },
  {
    year: "Next",
    title: "Generative AI Builder",
    text: "Expanding into computer vision, NLP, and AI-powered product experiences."
  }
];
