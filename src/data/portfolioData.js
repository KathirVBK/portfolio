import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/vbk.jpg";
import movieImg from "../assets/movie.png"; // Use your actual filename
import portfolioImg from "../assets/portfolio.png";
import expenseImg from "../assets/expense.png";
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
        url: "mail to:kathirvb24@gmail.com",
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
      techStack: ["HTML","CSS","REACT"],
      github: "https://github.com/",
      demo: "https://demo.com/",
      image: movieImg,
      category: "Web App",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website to showcase skills and projects.",
      techStack: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/",
      demo: "https://demo.com/",
      image: portfolioImg,
      category: "Personal",
    },
    {
      id: 3,
      title: "Expense Tracker",
      description:
        "A simple and interactive productivity app for tracking daily expenses.",
      techStack: ["HTML","CSS","JAVASCRIPT","REACT"],
      github: "https://github.com/",
      demo: "https://demo.com/",
      image: expenseImg,
      category: "Productivity",
    },
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
