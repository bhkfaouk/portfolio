export const personalInfo = {
  name: "Farouk Bouhaka",
  title: "Software Engineer",
  email: "faroukbouhaka@gmail.com",
  phone: "0542 82 55 25",
  website: "www.faroukbouhaka.co.uk",
  bio: "Passionate Software Engineer specializing in Java Full Stack Development with expertise in building scalable web applications for public sector digitalization. Experienced in developing enterprise solutions using Spring Boot, React, and modern cloud technologies.",
  github: "https://github.com/faroukbouhaka",
  linkedin: "https://linkedin.com/in/faroukbouhaka",
  twitter: "https://twitter.com/faroukbouhaka",
}

export const experienceData = [
  {
    position: "Software Engineer (Java Fullstack Developer)",
    company: "EADN - Entreprise d'Appui et de Développement Nationale",
    period: "February 2025 - Present",
    description:
      "Contributing to the digitalization of public sectors by developing platforms and web portals for various ministries. Building a complete internal web application for the Ministry of Tourism and Culture, covering modules such as human resources (RH), logistics, and inventory management.",
    technologies: ["Java EE", "JSF", "PrimeFaces", "JavaScript", "AJAX"],
  },
  {
    position: "Fullstack Java Developer",
    company: "Algerian Ministry of Finance",
    period: "December 2024 - March 2025",
    description:
      "Developed internal web application solutions utilizing Spring Boot to construct a robust, scalable and secure backend infrastructure for government financial systems.",
    technologies: [
      "Java 18",
      "Spring Boot 3",
      "Spring Security (OAuth2)",
      "JPA/Hibernate",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Maven",
    ],
  },
  {
    position: "Fullstack Java Developer",
    company: "Teletic",
    period: "February 2024 - November 2024",
    description:
      "Led development of an e-commerce platform for phone accessories utilizing Spring Boot to construct a robust, scalable and secure backend infrastructure.",
    technologies: [
      "Java 18",
      "Spring Boot 3",
      "Spring Security (OAuth2)",
      "JPA/Hibernate",
      "React",
      "TypeScript",
      "Oracle DB",
      "PL/SQL",
      "Docker",
      "Jenkins",
      "ClickUp",
    ],
  },
  {
    position: "Java Backend Developer",
    company: "Teletic",
    period: "November 2023 - November 2024",
    description:
      "Developed and optimized REST APIs for a Topup solution handling 40k+ daily transactions and wrote comprehensive technical documentation.",
    technologies: [
      "Java 18",
      "Spring Boot 3",
      "Spring Security (OAuth2)",
      "JPA/Hibernate",
      "Angular 15",
      "Oracle DB",
      "PL/SQL",
      "Docker",
      "Jenkins",
    ],
  },
  {
    position: "Freelancer Java Desktop App Developer",
    company: "Freelance",
    period: "January 2021 - Present",
    description:
      "Developed desktop applications including a gym management system using Java Swing and JavaFX, integrated with MySQL and Firebase for real-time data synchronization.",
    technologies: ["Java", "JavaFX", "Swing", "MySQL", "Firebase"],
  },
]

export const educationData = [
  {
    degree: "Master of Software Engineering",
    institution: "Ibn Khaldoun University",
    period: "September 2017 - October 2019",
    location: "Tiaret, Algeria",
    description:
      "Advanced studies in software engineering methodologies, system architecture, and enterprise application development. Focused on distributed systems, software quality assurance, and modern development practices.",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Ibn Khaldoun University",
    period: "September 2014 - October 2017",
    location: "Tiaret, Algeria",
    description:
      "Simulated an autonomous e-commerce agent using Java JADE to automate buying and selling. Utilized the Devsuit simulator for system modeling and proposed an approach for transforming UML diagrams into the Devs Suite, enhancing agent-based system simulations. Demonstrated skills in multi-agent systems, model transformation and simulation tools.",
  },
]

export const projectsData = [
  {
    title: "Ministry Web Portal",
    description:
      "Complete internal web application for the Ministry of Tourism and Culture with HR, logistics, and inventory management modules.",
    technologies: ["Java EE", "JSF", "PrimeFaces", "JavaScript", "AJAX"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce platform for phone accessories with payment integration and inventory management.",
    technologies: ["Spring Boot", "React", "TypeScript", "Oracle DB", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Topup Solution API",
    description:
      "High-performance REST API handling 40k+ daily transactions for mobile topup services with comprehensive monitoring.",
    technologies: ["Spring Boot", "Oracle DB", "Jenkins", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Gym Management System",
    description:
      "Desktop application for gym management with member tracking, payment processing, and real-time Firebase integration.",
    technologies: ["Java", "JavaFX", "MySQL", "Firebase"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Government Financial Portal",
    description:
      "Secure internal web application for the Ministry of Finance with OAuth2 authentication and role-based access control.",
    technologies: ["Spring Boot", "React", "PostgreSQL", "OAuth2", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Multi-Agent E-Commerce System",
    description:
      "Autonomous e-commerce agent simulation using JADE framework with UML to Devs Suite transformation capabilities.",
    technologies: ["Java", "JADE", "UML", "Devs Suite"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export const skillsData = [
  // Frameworks
  { name: "Spring Boot", category: "Frameworks" },
  { name: "Spring Security", category: "Frameworks" },
  { name: "Spring Batch", category: "Frameworks" },
  { name: "JPA/Hibernate", category: "Frameworks" },
  { name: "Java EE", category: "Frameworks" },
  { name: "React", category: "Frameworks" },
  { name: "JSF", category: "Frameworks" },
  { name: "JSP", category: "Frameworks" },
  { name: "PrimeFaces", category: "Frameworks" },

  // Languages
  { name: "Java", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "PL/SQL", category: "Languages" },
  { name: "PL/pgSQL", category: "Languages" },

  // Databases
  { name: "Oracle", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "Firebase", category: "Databases" },

  // DevOps (Enthusiast)
  { name: "Docker", category: "DevOps" },
  { name: "Jenkins", category: "DevOps" },
  { name: "Git", category: "DevOps" },
  { name: "GitLab", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Maven", category: "DevOps" },

  // Management Tools
  { name: "Jira", category: "Management Tools" },
  { name: "ClickUp", category: "Management Tools" },
  { name: "Slack", category: "Management Tools" },
  { name: "Trello", category: "Management Tools" },
]

export const languagesData = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "B2" },
  { name: "English", level: "B2" },
  { name: "German", level: "A1" },
]
