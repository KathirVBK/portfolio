import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/vbk.jpg";
import movieImg from "../assets/movie.png"; 
import expenseImg from "../assets/expense.png";
import agriSenseImg from "../assets/agriSense.png";
import attentionBlogImg from "../assets/attention_blog.jpg";
import Agents from "../assets/Agents.png";
import langchain from "../assets/langachain.png";
export const portfolioData = {
  personalInfo: {
    name: "V.B.Kathir",
    role: "AI Application Developer · AI Engineer · Frontend Developer",
    tagline: "Building intelligent AI systems that can reason, use tools, automate workflows, and turn ideas into real-world applications.",
    image: profileImg,
    resumeLink: "/resume.pdf", // Hosted in the public folder
    email: "kathirvb24@gmail.com",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/KathirVBK",
        icon: FaGithub,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kathir-v-b-47764a27a",
        icon: FaLinkedin,
      },
      {
        name: "Email",
        url: "mailto:kathirvb24@gmail.com",
        icon: FaEnvelope,
      },
    ],
  },

  about: {
    sectionTitle: "About Me",
    summary:
      "I am an AI Application Developer and Frontend Engineer passionate about building intelligent software that bridges the gap between complex AI systems and human interaction I work with LLMs, RAG, Prompt Engineering, AI Agents, Multi-Agent Systems, MCP, and modern web technologies to transform ideas into practical AI-powered applications. With a strong foundation in Frontend Development and UI/UX, I focus on making intelligent systems not only powerful, but also intuitive, accessible, and enjoyable to use.I am constantly exploring emerging AI technologies and building systems that move beyond simple chat interfaces toward AI that can reason, use tools, automate workflows, and take meaningful actions.",
    highlights: [
      "Building AI-powered and agentic applications",
      "Working with LLMs, RAG, Prompt Engineering, AI Agents, Multi-Agent Systems, MCP, and modern web technologies",
      "Continuously exploring emerging AI technologies",
    ],
    experienceYears: "Fresher",
  },

  skills: [
    {
      category: "AI & Agentic Systems",
      items: ["AI Agents", "Multi-Agent Systems", "Model Context Protocol (MCP)", "Voice AI", "RAG", "Prompt Engineering"],
    },
    {
      category: "LLM & AI Engineering",
      items: ["LangChain", "LangGraph", "Embeddings", "Vector Databases", "ChromaDB", "FAISS"],
    },
    {
      category: "Frontend Development",
      items: ["React", "JavaScript", "HTML5", "CSS3"],
    },
    {
      category: "Programming & Database",
      items: ["Python", "MySQL"],
    },
    {
      category: "Tools & Deployment",
      items: ["Git", "Render"],
    },
  ],

  projects: [

    {
      id: 1,
      title: "Movie Search Platform",
      description:
        "A simple frontend project on  movie search platform using React and CSS.",
      techStack: ["HTML", "CSS", "REACT"],
      github: "https://github.com/KathirVBK/movie-search-frontend",
      demo: "https://movie-search-frontend-rust.vercel.app",
      image: movieImg,
      category: "Web App",
    },
   
    {
      id: 2,
      title: "AgriSense Precision AI",
      description:
        "An intelligent, full-stack AI agricultural advisory platform designed to provide real-time, context-aware scientific guidance for farmers and agricultural professionals. It features a strict expert-mode AI, local Retrieval-Augmented Generation (RAG), live global web search, voice capabilities (STT/TTS), and Firebase authentication, all wrapped in a responsive, modern glassmorphism UI.",
      techStack: ["React.js", "Firebase", "Python", "FastAPI", "SQLite", "Llama-3"],
      github: "https://github.com/KathirVBK/AI-AGRICULTURE-ASSISTANT",
      demo: "https://agrisense-frontend-tbmg.onrender.com/",
      image: agriSenseImg,
      category: "AI Web App / AgriTech",
    },
  ],

  blogs: [
    {
      id: 1,
      title: "Attention Is All You Need : The Transition In The AI Models",
      description: "An overview of how the attention mechanism revolutionized AI models.",
      link: "https://lnkd.in/p/gZKcG5MX",
      image: attentionBlogImg,
    },
    {
      id: 2,
      title: "Understanding Generative AI Agents: Architecture, Orchestration, and Tool Use in Modern AI Systems",
      description: "An overview of how the attention mechanism revolutionized AI models.",
      link: "https://lnkd.in/p/gwsw4YmP",
      image: Agents,
    },
    {
      id: 3,
      title: "Meet LangChain: The Framework Powering Today's AI Applications",
      description: "An overview of how the attention mechanism revolutionized AI models.",
      link: "https://lnkd.in/p/grmGZ8jS",
      image: langchain,
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Crash Course on Python",
      organization: "Google",
      year: "2024",
      link: "https://coursera.org/verify/GCLV9KQRPDA7",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "Designing User Interfaces and Experiences (UI/UX)",
      organization: "IBM",
      year: "2025",
      link: "https://coursera.org/verify/YICEDFDZGEM6",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      title: "AI Workshop",
      organization: "KAMBAA",
      year: "2025",
      link: "https://www.kambaa.in/ai-ignite-certificate/QUlJVzIwMjUwOTAwNjM",
      image: "https://via.placeholder.com/100",
    },
  ],

  contact: {
    sectionTitle: "Get In Touch",
    description:
      "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!",
    email: "kathirvb24@gmail.com",
    form: {
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      buttonText: "Send Message",
    },
  },
};
