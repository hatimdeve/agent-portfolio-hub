export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
  tags: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  type: string;
  date: string;
  achievements: string[];
}

export interface TechCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface Language {
  name: string;
  level: string;
  percentage: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Multi-Agent RAG System",
    category: "AI Infrastructure",
    description: "Designed and deployed a sophisticated multi-agent retrieval-augmented generation system capable of processing 10,000+ documents. The system leverages LangGraph for orchestration, with specialized agents for query understanding, document retrieval, and response synthesis. Achieved 95% accuracy on domain-specific queries with sub-second response times.",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800"
    ],
    tags: ["LangGraph", "OpenAI", "Pinecone", "FastAPI", "Docker"]
  },
  {
    id: 2,
    title: "Autonomous Workflow Engine",
    category: "Automation",
    description: "Built an enterprise-grade workflow automation platform that reduced manual processes by 80%. Features include natural language workflow definition, real-time monitoring dashboards, and intelligent error recovery. Integrated with 50+ enterprise tools via custom connectors.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800"
    ],
    tags: ["n8n", "Python", "Redis", "PostgreSQL", "React"]
  },
  {
    id: 3,
    title: "Real-time Analytics Dashboard",
    category: "Data Engineering",
    description: "Developed a high-performance analytics dashboard processing 1M+ events daily. Implemented streaming data pipelines with Apache Kafka, real-time aggregations, and interactive visualizations. The system provides actionable insights with latency under 100ms.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800",
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800"
    ],
    tags: ["Kafka", "ClickHouse", "Grafana", "Python", "Kubernetes"]
  },
  {
    id: 4,
    title: "Intelligent Document Processor",
    category: "AI/ML",
    description: "Created an AI-powered document processing pipeline that extracts, classifies, and routes documents automatically. Utilizes fine-tuned vision-language models for understanding complex layouts, tables, and handwritten content with 98% extraction accuracy.",
    images: [
      "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=800",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800",
      "https://images.unsplash.com/photo-1568667256549-094345857637?w=800"
    ],
    tags: ["GPT-4 Vision", "Claude", "AWS Textract", "FastAPI", "MongoDB"]
  },
  {
    id: 5,
    title: "Conversational AI Platform",
    category: "AI Infrastructure",
    description: "Architected a scalable conversational AI platform serving 100K+ daily users. Features include multi-turn context management, sentiment analysis, seamless human handoff, and comprehensive analytics. Reduced support costs by 60% while improving CSAT scores.",
    images: [
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800",
      "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800",
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800"
    ],
    tags: ["Anthropic Claude", "LangChain", "WebSockets", "Redis", "GCP"]
  },
  {
    id: 6,
    title: "MLOps Pipeline Framework",
    category: "DevOps/MLOps",
    description: "Designed a comprehensive MLOps framework for continuous training and deployment of ML models. Includes automated data validation, experiment tracking, A/B testing infrastructure, and model monitoring. Reduced model deployment time from weeks to hours.",
    images: [
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
    ],
    tags: ["MLflow", "Kubeflow", "Terraform", "GitHub Actions", "Prometheus"]
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Agentic AI Engineer",
    company: "AI Innovations Inc.",
    type: "Full-time",
    date: "2023 - Present",
    achievements: [
      "Led development of multi-agent systems processing 1M+ daily requests",
      "Architected RAG pipelines achieving 95% accuracy on domain-specific queries",
      "Mentored team of 5 engineers on AI/ML best practices",
      "Reduced infrastructure costs by 40% through optimization"
    ]
  },
  {
    id: 2,
    role: "Automation Architect",
    company: "Independent Consultant",
    type: "Contract",
    date: "2021 - 2023",
    achievements: [
      "Delivered 20+ automation projects across finance, healthcare, and e-commerce",
      "Built custom n8n and Zapier integrations for enterprise clients",
      "Created reusable automation frameworks reducing development time by 60%",
      "Managed projects worth $500K+ in total contract value"
    ]
  },
  {
    id: 3,
    role: "ML Engineer",
    company: "DataTech Solutions",
    type: "Full-time",
    date: "2019 - 2021",
    achievements: [
      "Developed NLP models for sentiment analysis and entity extraction",
      "Implemented real-time recommendation systems serving 500K users",
      "Built data pipelines processing 10TB+ daily",
      "Published 2 research papers on transformer architectures"
    ]
  }
];

export const techStack: TechCategory[] = [
  {
    title: "AI & Orchestration",
    icon: "Brain",
    skills: ["LangChain", "LangGraph", "CrewAI", "AutoGen", "OpenAI", "Anthropic", "Hugging Face", "RAG Systems"]
  },
  {
    title: "Backend & APIs",
    icon: "Server",
    skills: ["Python", "FastAPI", "Node.js", "GraphQL", "REST", "WebSockets", "gRPC", "Celery"]
  },
  {
    title: "Data & Storage",
    icon: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Weaviate", "Elasticsearch", "ClickHouse", "S3"]
  },
  {
    title: "Automation Tools",
    icon: "Workflow",
    skills: ["n8n", "Zapier", "Make", "Temporal", "Apache Airflow", "Prefect", "Custom Scripts"]
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "ArgoCD"]
  },
  {
    title: "Monitoring & Analytics",
    icon: "LineChart",
    skills: ["Grafana", "Prometheus", "Datadog", "Sentry", "MLflow", "Weights & Biases", "LangSmith"]
  }
];

export const education: Education[] = [
  {
    degree: "M.S. Computer Science (AI Specialization)",
    school: "Stanford University",
    year: "2019"
  },
  {
    degree: "B.S. Computer Engineering",
    school: "MIT",
    year: "2017"
  }
];

export const languages: Language[] = [
  { name: "Arabic", level: "Native", percentage: 100 },
  { name: "English", level: "Fluent", percentage: 95 },
  { name: "French", level: "Conversational", percentage: 60 },
  { name: "German", level: "Basic", percentage: 30 }
];
