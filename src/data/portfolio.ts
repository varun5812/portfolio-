import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Database,
  LayoutDashboard,
  Sparkles,
  Workflow
} from "lucide-react";

export const socialLinks = {
  github: import.meta.env.VITE_GITHUB_URL || "https://github.com/varun5812",
  linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/",
  email: `mailto:${import.meta.env.VITE_EMAIL || "varunkumar5812@gmail.com"}`,
  leetcode: import.meta.env.VITE_LEETCODE_URL || "https://leetcode.com/",
  resume: import.meta.env.VITE_RESUME_URL || "/Varun_Resume__.pdf"
};

export const heroRoles = [
  "Fresher Data Scientist",
  "Machine Learning Engineer",
  "EDA And Analytics Learner",
  "Deep Learning Learner",
  "Generative AI Explorer"
];

export const sectionMeta = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Resume" },
  { id: "dashboard", label: "Snapshot" },
  { id: "contact", label: "Contact" }
];

export const stats = [
  { label: "Core Focus Areas", value: "05" },
  { label: "Project Highlights", value: "03" },
  { label: "Graduation Year", value: "2025" },
  { label: "Internship Track", value: "Active" }
];

export const aboutHighlights = [
  "B.E. graduate in Artificial Intelligence and Machine Learning, ready to contribute as a fresher in data and AI roles.",
  "Hands-on with data preprocessing, EDA, feature engineering, model building, and evaluation using Python and SQL.",
  "Currently extending into deep learning, RAG workflows, LLM applications, and deployment-focused AI projects."
];

export const focusAreas = [
  {
    title: "Data Preprocessing",
    description:
      "Cleaning raw datasets, encoding features, scaling inputs, and preparing reliable model-ready pipelines.",
    tags: ["Cleaning", "Encoding", "Scaling"]
  },
  {
    title: "EDA And Analytics",
    description:
      "Understanding trends, patterns, and anomalies through exploration, visual storytelling, and statistical thinking.",
    tags: ["EDA", "Visualization", "Insights"]
  },
  {
    title: "Machine Learning",
    description:
      "Building classification and prediction workflows with model comparison, metrics, and feature engineering.",
    tags: ["Classification", "Evaluation", "Features"]
  },
  {
    title: "Deep Learning",
    description:
      "Learning neural network workflows and image-based modeling with a practical, experiment-driven approach.",
    tags: ["Neural Nets", "CNN", "Tuning"]
  },
  {
    title: "Generative AI",
    description:
      "Exploring RAG systems, prompt design, vector databases, and LLM-based application building.",
    tags: ["LangChain", "RAG", "LLMs"]
  }
];

export const skills = [
  {
    category: "Data Foundation",
    icon: Database,
    intro:
      "My strongest fresher value starts with reliable data handling: preprocess first, understand the data clearly, then build better models.",
    items: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 88 },
      { name: "EDA", level: 90 },
      { name: "Data Preprocessing", level: 91 },
      { name: "Feature Engineering", level: 84 }
    ]
  },
  {
    category: "Analytics And Visualization",
    icon: BarChart3,
    intro:
      "I use analytics to turn raw data into understandable patterns and decision-friendly dashboards.",
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
    intro:
      "I enjoy comparing algorithms, measuring outcomes clearly, and improving predictions with better features and cleaner inputs.",
    items: [
      { name: "Scikit-learn", level: 87 },
      { name: "Supervised Learning", level: 86 },
      { name: "Unsupervised Learning", level: 79 },
      { name: "Classification", level: 85 },
      { name: "Model Evaluation", level: 83 },
      { name: "XGBoost / Ensemble Concepts", level: 75 }
    ]
  },
  {
    category: "Deep Learning",
    icon: Sparkles,
    intro:
      "I am actively growing my deep learning foundation through neural network concepts, CNNs, and applied experimentation.",
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
    intro:
      "My GenAI learning is focused on practical systems: retrieval, prompting, embeddings, and usable application flows.",
    items: [
      { name: "LangChain", level: 78 },
      { name: "LLM Basics", level: 76 },
      { name: "GPT-3.5 / Mistral", level: 74 },
      { name: "RAG", level: 77 },
      { name: "Prompt Engineering", level: 82 },
      { name: "Sentence Transformers", level: 72 },
      { name: "Vector Databases", level: 70 }
    ]
  },
  {
    category: "Deployment And Tools",
    icon: BriefcaseBusiness,
    intro:
      "I like taking projects beyond notebooks through simple deployment, developer tooling, and cloud basics.",
    items: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 83 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "Streamlit", level: 82 },
      { name: "Render", level: 79 },
      { name: "Docker (Basic)", level: 61 },
      { name: "Azure / Kubernetes (Basic)", level: 58 }
    ]
  }
];

export const projects = [
  {
    type: "Generative AI / RAG",
    title: "Customer Support Chatbot Automation",
    summary:
      "Built a context-aware customer support chatbot using retrieval-augmented generation to answer queries from internal knowledge base documents and FAQs.",
    impact:
      "Focused on combining retrieval quality with better prompt structure so answers stay relevant and grounded.",
    tech: [
      "Python",
      "LangChain",
      "RAG",
      "GPT-3.5 / Mistral",
      "Sentence Transformers",
      "ChromaDB",
      "Flask"
    ],
    highlights: [
      "Orchestrated document loading, chunking, embeddings, and retrieval workflow with LangChain.",
      "Integrated vector search with ChromaDB for faster context retrieval from knowledge documents.",
      "Designed a lightweight Flask interface for interaction, testing, and response validation."
    ],
    githubUrl: socialLinks.github,
    githubLabel: "GitHub Profile",
    accent: "from-[#79f0ff] via-[#7cd4ff] to-[#8c7dff]",
    previewLabel: "RAG pipeline"
  },
  {
    type: "Machine Learning",
    title: "Customer Churn Prediction In Retail",
    summary:
      "Designed a churn prediction workflow for a retail loyalty program using purchase behavior, engagement signals, and promotional response data.",
    impact:
      "The project was positioned around identifying high-risk customers and supporting targeted retention strategies.",
    tech: [
      "Python",
      "Machine Learning",
      "XGBoost",
      "Decision Trees",
      "Random Forest",
      "Feature Engineering",
      "Azure ML"
    ],
    highlights: [
      "Processed customer transaction and engagement data for modeling and segmentation.",
      "Compared multiple classification models including XGBoost and Random Forest.",
      "Paired model outputs with dashboard thinking for churn-risk visibility and action."
    ],
    githubUrl: socialLinks.github,
    githubLabel: "GitHub Profile",
    accent: "from-[#84f8c6] via-[#7cf2ff] to-[#8c7dff]",
    previewLabel: "Churn scoring"
  },
  {
    type: "Machine Learning Deployment",
    title: "Heart Disease Prediction Web App",
    summary:
      "Built an end-to-end machine learning solution to predict heart disease risk from patient clinical data, then deployed it as a web application.",
    impact:
      "This project highlights my fresher strengths most clearly: preprocessing, EDA, model comparison, and real deployment.",
    tech: [
      "Python",
      "Scikit-learn",
      "EDA",
      "Feature Engineering",
      "Streamlit",
      "Render"
    ],
    highlights: [
      "Performed preprocessing and feature preparation including encoding and scaling with StandardScaler.",
      "Trained and compared Logistic Regression, KNN, SVM, Naive Bayes, and Decision Tree models.",
      "Selected KNN based on accuracy and F1 score, then deployed the final solution as a Streamlit app."
    ],
    liveUrl: "https://heart-d-g2ab.onrender.com/",
    liveLabel: "Open Live App",
    githubUrl: socialLinks.github,
    githubLabel: "GitHub Profile",
    accent: "from-[#ff9a7a] via-[#ff7bcf] to-[#8c7dff]",
    previewLabel: "Clinical ML app"
  }
];

export const experience = [
  {
    title: "Data Scientist Intern",
    organization: "AIML LABS PVT LTD",
    period: "April 2025 - Present",
    summary:
      "Completed hands-on training in Data Science and Machine Learning with a focus on practical problem solving and model development.",
    bullets: [
      "Worked on preprocessing, EDA, feature engineering, and model evaluation workflows.",
      "Built classification-based machine learning projects with real-world problem framing.",
      "Explored advanced concepts including Generative AI, RAG, LangChain, and vector databases."
    ]
  }
];

export const education = [
  {
    title: "B.E. In Artificial Intelligence And Machine Learning",
    school: "SEA College of Engineering, Bengaluru",
    period: "2021 - 2025",
    summary: "CGPA 7.01"
  },
  {
    title: "PUC (Class XII)",
    school: "Shree Vijetha PU College, Chintamani",
    period: "2021",
    summary: "71.5%"
  },
  {
    title: "SSLC (Class X)",
    school: "Nalanda Vidhya Mandira, Chintamani",
    period: "2019",
    summary: "68.18%"
  }
];

export const certifications = [
  "Python For Data Science",
  "SQL",
  "Machine Learning",
  "Data Analytics",
  "Power BI"
];

export const dashboardMetrics = [
  {
    label: "Preprocessing And EDA",
    value: "92%",
    icon: LayoutDashboard
  },
  {
    label: "Analytics And Visualization",
    value: "89%",
    icon: BarChart3
  },
  {
    label: "Machine Learning Focus",
    value: "86%",
    icon: BrainCircuit
  },
  {
    label: "Generative AI Exploration",
    value: "80%",
    icon: BriefcaseBusiness
  }
];

export const workflowStages = [
  { name: "Collect", value: 74 },
  { name: "Clean", value: 92 },
  { name: "Explore", value: 90 },
  { name: "Model", value: 86 },
  { name: "Deploy", value: 78 }
];

export const timeline = [
  {
    year: "2021",
    title: "Started AIML Degree",
    text: "Began the Artificial Intelligence and Machine Learning journey with strong interest in data-led problem solving."
  },
  {
    year: "2025",
    title: "Graduated And Built Applied Projects",
    text: "Completed the degree while strengthening machine learning, analytics, and deployment-oriented project work."
  },
  {
    year: "Now",
    title: "Internship And GenAI Expansion",
    text: "Currently deepening practical skills in ML, preprocessing, EDA, RAG systems, and LLM-based applications."
  }
];
