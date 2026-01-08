import { Import } from 'lucide-react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
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
    title: "Tervela: AI Data Cleaning & Dashboard Deneration Agent ",
    category: "AI Data Agent",
    description: "Engineered a dual-agent platform featuring a React frontend and FastAPI backend orchestrated by LangGraph: includes a Data Profiling agent for detailed CSV summaries and automated cleaning, alongside an Insight Agent for dynamic dashboard generation; secured with Clerk and deployed on DigitalOcean.",
    images: [
      img1,
      img2,
      img3
    ],
    tags: ["LangGraph", "Groc", "FastAPI","Redis","PostgreSQL", "React", "DigitalOcean"," Clerk Auth"]
  },
  {
    id: 2,
    title: "Twilio Auto-Reply",
    category: "Automation",
    description: "Architected an n8n orchestration system for Twilio SMS, integrating auto-reply logic and real-time lead synchronization with Google Sheets for centralized tracking.",
    images: [
      img4
    ],
    tags: ["Twilio", "n8n", "Google Sheets"]
  },
  {
    id: 3,
    title: "Enterprise Workflow Automation",
    category: "Automation",
    description: "Engineered a serverless n8n pipeline with AWS Lambda and Discord approval gateways, featuring robust rerun handling and automated Google Sheets synchronization.",
    images: [
      img5
    ],
    tags: ["n8n", "AWS Lambda", "Discord", "Google Sheets"]
  },
  {
    id: 4,
    title: "Text-To-SQL Chatbot",
    category: "AI Engineering",
    description: "Engineered an AI-driven Text-to-SQL chatbot using LlamaIndex and OpenAI, supported by a sAngular full-stack platform and automated CI/CD pipelines via Docker Swarm, Jenkins, and AzureDevOps for scalable data ingestion.",
    images: [
      img6,
      img7
    ],
    tags: ["LlamaIndex ", "OpenAI", "Angular", "FastAPI", "ocker Swarm, Jenkins", "AzureDevOps"]
  },
  {
    id: 5,
    title: "Text Summarizer",
    category: "ML Engineer",
    description: "Engineered an NLP pipeline using Hugging Face and FastAPI, utilizing MLflow, DVC, and GitHub Actions for automated Docker deployment to AWS.",
    images: [
      img8
    ],
    tags: ["Hugging Face", "FastAPI", "MLflow", "DVC  ", "GitHub Actions", "AWS"," Docker" ]
  },
  {
    id: 6,
    title: "Speed Limit Detection Using YOLO & CNN",
    category: "Computer Vision Engineer",
    description: "Built a two-stage speed limit recognition system for real-time driving scenes. YOLO detects speed-limit signs in video frames, then a custom CNN classifies the numeric value inside the sign. Implemented the full pipeline including dataset preparation, training, evaluation, and real-time inference for road-safety automation.",
    images: [
      img9
    ],
    tags: ["YOLO", "CNN", "TensorFlow", "OpenCV" ]
  },
  
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Data Scientist | ADAS Analytics & CV",
    company: "Alten & Stellantis",
    type: "Full-time (CDI)",
    date: "Aug 2024 - Present",
    achievements: [
      "Developing autonomous driving features by implementing YOLO/CNN architectures for object detection.",
      "Engineering large-scale data pipelines using PySpark, Airflow, and Databricks to analyze telemetric vehicle data for ADAS validation."
    ]
},
  {
    id: 2,
    role: "Data Scientist | Generative AI & MLOps",
    company: "Berexia & Scor",
    type: "Internship",
    date: "Feb 2024 - July 2024",
    achievements: [
      "Engineered an AI-driven Text-to-SQL chatbot using LlamaIndex and OpenAI for intelligent data querying.",
      "Integrated the AI model into a full-stack Angular platform for seamless user interaction.",
      "Established automated CI/CD pipelines using Docker Swarm, Jenkins, and Azure DevOps for scalable data ingestion."
    ]
},
 {
    id: 3,
    role: "Data Scientist | NLP for 3D Synthesis",
    company: "3D Smart Factory",
    type: "Internship",
    date: "July 2023 - Aug 2023",
    achievements: [
      "Engineered a conversational NLP interface using Rasa and Python to automate the creation of 3D CAD objects.",
      "Integrated backend logic with Blender to enable generative 3D modeling directly from natural language commands."
    ]
}
];

export const techStack: TechCategory[] = [
  {
    title: "AI & Automation",
    icon: "Workflow",
    skills: ["Agentic AI Systems", "LangGraph", "LangChain", "n8n", "Make", "Zapier"]
  },
  {
    title: "Core AI Expertise",
    icon: "Brain",
    skills: ["LLMs", "RAG", "GraphRAG", "Computer Vision (YOLO)", "OCR", "NLP"]
  },
  {
    title: "Programming & Stack",
    icon: "Code",
    skills: ["Python", "PySpark", "PyTorch", "TensorFlow", "Pandas", "Pytesseract", "OpenCV", "React", "TypeScript", "SQL"]
  },
  {
    title: "LLM Frameworks",
    icon: "Cpu",
    skills: ["LlamaIndex", "Hugging Face", "Groq API", "Ollama"]
  },
  {
    title: "Deployment & MLOps",
    icon: "Cloud",
    skills: ["AWS", "Docker", "Kubernetes", "FastAPI", "MLflow", "DVC", "Git", "CI/CD"]
  },
  {
    title: "Data & Vector DB",
    icon: "Database",
    skills: ["Pinecone", "Faiss", "Elasticsearch", "PostgreSQL", "MongoDB", "Neo4j", "Selenium"]
  }
];

export const education: Education[] = [
  {
    degree: "Cycle d'Ingénieur en Big Data Analytics",
    school: "Université Euro-Méditerranéenne (EIDIA), Fès",
    year: "2021 - 2024"
  },
  {
    degree: "Licence en Génie Informatique",
    school: "Faculté des Sciences et Techniques (FST), Fès",
    year: "2020 - 2021"
  },
  {
    degree: "DEUST en Mathématiques, Informatique et Physique (MIP)",
    school: "Faculté des Sciences et Techniques (FST), Fès",
    year: "2018 - 2020"
  }
];

export const languages: Language[] = [
  { name: "Arabic", level: "Native", percentage: 100 },
  { name: "English", level: "Fluent", percentage: 95 },
  { name: "French", level: "Fluent", percentage: 95 },
  { name: "Spanish", level: "Basic", percentage: 30 }
];
