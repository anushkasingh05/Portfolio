import { Skill, Project, Certification, Achievement, Education, NavItem } from "../types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: "C++", category: "Programming Languages" },
  { name: "Java", category: "Programming Languages" },
  { name: "Python", category: "Programming Languages" },
  { name: "R", category: "Programming Languages" },
  
  // Web Development
  { name: "HTML", category: "Web Development" },
  { name: "CSS", category: "Web Development" },
  { name: "React", category: "Web Development" },
  
  // Tools & Platforms
  { name: "MySQL", category: "Tools & Platforms" },
  
  // Soft Skills
  { name: "Problem-Solving", category: "Soft Skills" },
  { name: "Project Management", category: "Soft Skills" },
  { name: "Adaptability", category: "Soft Skills" },
  { name: "Holistic Thinking", category: "Soft Skills" }
];

export const PROJECTS: Project[] = [
  {
    title: "Predictive Modeling for Banking Campaigns",
    date: "June 2024",
    description: "Built ML models to forecast customer enrollment in term deposits.",
    tools: ["Python", "Data Visualization", "Classification Algorithms", "Predictive Analytics"],
    image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Fitness Management System",
    date: "August 2024",
    description: "Developed a C++ system to manage gym data and workflows.",
    tools: ["C++", "DSA", "OOP"],
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Educational Website",
    date: "May 2023",
    description: "Created a learning resource platform with HTML, CSS, and React.",
    tools: ["HTML", "CSS", "React"],
    image: "https://images.pexels.com/photos/5906033/pexels-photo-5906033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Cloud Computing",
    issuer: "IIT Kharagpur – NPTEL",
    date: "Nov 2024"
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "GeeksforGeeks",
    date: "Mar 2024"
  },
  {
    title: "Design & Analysis of Algorithms",
    issuer: "Coursera",
    date: "Jan 2024"
  },
  {
    title: "Data Visualization",
    issuer: "Tata Group - Forage",
    date: "Aug 2024"
  },
  {
    title: "Community Development",
    issuer: "Savera Swayamseva Sangathan",
    date: "Jun 2024"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Smart India Hackathon Semi-Finalist",
    description: "Among top 50+ teams nationwide.",
    date: "Sep 2024"
  },
  {
    title: "Gold Medalist in SOF (School Level)",
    description: "Twice, latest in Mar 2022",
    date: "Mar 2022"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech in CSE",
    institution: "Lovely Professional University",
    duration: "Since Aug 2022",
    score: "CGPA: 7.30"
  },
  {
    degree: "Intermediate (84%)",
    institution: "Lyceum International School, Muzaffarpur",
    duration: "Apr 2020 – Mar 2022",
    score: "84%"
  },
  {
    degree: "Matriculation (90%)",
    institution: "Adarsh Vidya Mandir, Muzaffarpur",
    duration: "Apr 2006 – Mar 2020",
    score: "90%"
  }
];

export const CONTACT_INFO = {
  linkedin: "linkedin.com/in/anushka-kumari-",
  github: "github.com/anushkasingh05",
  email: "anushkaindia0@gmail.com",
  phone: "+91 7209314716"
};