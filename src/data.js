// ============================================================
// PORTFOLIO DATA — Edit this file to customize your portfolio!
// ============================================================

export const profileData = {
  name: "Keerthana Y",
  title: "Software Developer",
  tagline: "Passionate about building elegant solutions with clean code",
  heroSubtitle: "Computer Science Student & Aspiring Software Engineer",

  // Links
  linkedin: "https://www.linkedin.com/in/keerthana-y-452309314",
  github: "https://github.com/keerthana344/react_portfolio",
  email: "keerthana@example.com",
  resume: "/resume.pdf", // Link to the file in the public folder

  // About section
  about: {
    description: `I'm a passionate Computer Science student with a strong foundation in software development, 
    web technologies, and problem-solving. I love creating impactful applications and constantly exploring 
    new technologies to expand my skill set. With a keen eye for detail and a drive for excellence, 
    I aim to contribute meaningfully to the tech industry.`,
    stats: [
      { label: "Projects Completed", value: "10+" },
      { label: "Technologies", value: "15+" },
      { label: "Certifications", value: "5+" },
    ],
  },

  // Skills section
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C/C++", level: 75 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      category: "Web Development",
      items: [
        { name: "React.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Node.js", level: 75 },
        { name: "Flask", level: 70 },
        { name: "FastAPI", level: 70 },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Docker", level: 65 },
        { name: "MongoDB", level: 70 },
        { name: "MySQL", level: 80 },
      ],
    },
  ],

  // Projects section
  projects: [
    {
      title: "AI Chatbot Application",
      description:
        "An intelligent chatbot built with Python and Flask, featuring natural language processing capabilities and a modern, responsive web interface.",
      tags: ["Python", "Flask", "NLP", "REST API"],
      github: "https://github.com/keerthana344",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React.js featuring smooth animations, dark theme, and glassmorphism design elements.",
      tags: ["React", "CSS", "JavaScript", "Vite"],
      github: "https://github.com/keerthana344",
      live: "#",
    },
    {
      title: "Task Management System",
      description:
        "A full-stack web application for managing tasks and projects, with user authentication, real-time updates, and collaborative features.",
      tags: ["FastAPI", "React", "MongoDB", "JWT"],
      github: "https://github.com/keerthana344",
      live: "#",
    },
    {
      title: "Machine Learning Predictor",
      description:
        "A machine learning project using TensorFlow and Keras for predictive analysis, with data visualization and model evaluation dashboards.",
      tags: ["Python", "TensorFlow", "Pandas", "ML"],
      github: "https://github.com/keerthana344",
      live: "#",
    },
  ],

  // Education section
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University Name",
      year: "2022 – 2026",
      description:
        "Studying core computer science subjects including Data Structures, Algorithms, Database Management, Software Engineering, and Machine Learning.",
    },
    {
      degree: "Higher Secondary Education (XII)",
      institution: "School Name",
      year: "2020 – 2022",
      description:
        "Completed higher secondary education with a focus on Mathematics, Physics, and Computer Science.",
    },
  ],

  // Certifications
  certifications: [
    {
      title: "Certification Name",
      issuer: "Issuing Organization",
      date: "Month Year",
      link: "#",
    },
  ],

  // Contact
  contact: {
    heading: "Let's Connect",
    description:
      "I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. Feel free to reach out!",
    phone: "+91 7975456996",
    location: "India",
  },
};
