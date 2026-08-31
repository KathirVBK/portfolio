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
    role: "Frontend Developer, UI/UX Designer & AI Learning Enthusiast",
    tagline: "Building seamless digital experiences with modern web technologies, Exploring AI technologies",
    image: profileImg,
    resumeLink: "https://drive.google.com/file/d/1VaMUH6jY6PzJ_8dDT8EAWk0tGK55mBsc/view?usp=drive_link", // Replace with your resume link
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
      "I am a Frontend Developer and AI Engineer dedicated to building intelligent, user-centric digital experiences. I specialize in crafting high-performance web applications where clean architecture meets sophisticated machine intelligence.My expertise lies in bridging the gap between complex AI-driven systems—such as RAG pipelines and advanced Prompt Engineering—and the end-user. With a deep foundation in UI/UX principles, I focus on transforming intricate AI logic into simple, elegant, and accessible interfaces that deliver real-world impact.",
    highlights: [
      "Developing responsive frontend applications",
      "Adapting with new AI technologies",
      "Designing user centric interfaces",
    ],
    experienceYears: "Fresher",
  },

  skills: [
    {
      category: "Programming",
      items: ["JavaScript", "Python", "HTML5", "CSS3", "TailwindCSS"],
    },
    {
      category: "Tools & Frameworks",
      items: ["React", "Next.js", "Tailwind CSS", "Git", "Figma"],
    },
    {
      category: "AI Technologies",
      items: ["TensorFlow", "Prompt Engineering", "RAG Technologies"],
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
      title: "Expense Tracker",
      description:
        "A simple and interactive productivity app for tracking daily expenses.",
      techStack: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
      github: "https://github.com/",
      demo: "https://demo.com/",
      image: expenseImg,
      category: "Productivity",
    },
    {
      id: 3,
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
