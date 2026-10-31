import { Binary, BrainCircuit, Bot, Cloud, Globe, MessageSquareText, Network, Plug, Search, Workflow } from 'lucide-react'

export const profile = {
  email: 'edigavarunkumar66@gmail.com',
  github: 'https://github.com/Varunnn47',
  linkedin: 'https://www.linkedin.com/in/varun-140a192a1/',
  resume: './Varun-Goud-Resume.pdf',
}

export const projects = [
  {
    id: 1,
    title: 'AI Research Paper Summarizer',
    description: 'Full-stack app that extracts insights and generates summaries from research papers using Groq Llama-3.3-70b, with PDF/DOCX upload, Q&A, paper comparison, and JWT auth.',
    tags: ['FastAPI', 'Python', 'Groq AI', 'MongoDB', 'JavaScript'],
    github: 'https://github.com/Varunnn47/AI-Research-Paper-Summarizer',
    demo: 'https://iip-frontend.onrender.com/'
  },
  {
    id: 2,
    title: 'InterveuX',
    description: 'AI-powered interview prep platform that generates smart interview questions and role recommendations.',
    tags: ['React', 'Node.js', 'Azure AI', 'Tailwind CSS', 'Machine Learning'],
    github: 'https://github.com/Varunnn47/InterveuX',
    demo: null
  },
  {
    id: 3,
    title: 'Optima-AI',
    description: 'Dual-LLM chatbot that compares AI responses and selects the most accurate one.',
    tags: ['React', 'LLMs', 'Tailwind CSS'],
    github: 'https://github.com/Varunnn47/Optima-AI',
    demo: null
  },
  {
    id: 4,
    title: 'RegulaNet-AI',
    description: 'Multi-agent compliance audit system powered by Gemini that analyzes financial transactions and detects regulatory violations.',
    tags: ['React', 'Flask', 'Gemini', 'Multi-Agent AI'],
    github: 'https://github.com/Varunnn47/RegulaNet-AI',
    demo: null
  },
  {
    id: 5,
    title: 'Employee Salary Prediction',
    description: 'ML model predicting salaries based on employee data with regression algorithms and visual insights.',
    tags: ['Python', 'Jupyter Notebook', 'Machine Learning'],
    github: 'https://github.com/Varunnn47/Employee-Salary-Prediction',
    demo: null
  },
  {
    id: 6,
    title: 'Expense Tracker',
    description: 'A simple expense management tool with category sorting, spending insights, and persistent storage.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Varunnn47/Expense-Tracker',
    demo: null
  }
]

export const experience = [
  {
    id: 2,
    company: 'AETHRIZ',
    logo: 'logo-aethriz.png',
    role: 'AI/ML Engineer Intern',
    employmentType: 'Internship',
    startDate: 'Oct 2026',
    endDate: 'Present',
    location: 'Remote',
    description: 'Building AI models for personalized health analysis and food scanning — from image input to tailored diet plans.',
    achievements: [
      'Developing a health and lifestyle analysis model with personalized recommendations',
      'Developing a food and product scanning model for nutritional analysis',
      'Building multilingual support for 24+ Indian languages and dialects',
    ]
  },
  {
    id: 1,
    company: 'Masika Care (Masika Pvt Ltd)',
    logo: 'logo-masika.jpg',
    role: 'Lead Full-Stack Engineer',
    employmentType: 'Part-time',
    startDate: 'Feb 2026',
    endDate: 'Present',
    location: 'Remote',
    description: 'Building and maintaining the mobile app and public website for an AI/ML-driven menstrual health startup, recognized under the deep-tech category by Startup India and Startup Odisha.',
    achievements: [
      'Built the cross-platform app (Flutter + Supabase) and masikacare.com',
      'Implemented patient and doctor roles, appointment booking, and real-time chat',
      'Led a security and reliability audit of auth, database schema, and API key handling ahead of closed beta',
    ]
  }
]

export const achievements = [
  {
    id: 4,
    title: 'SAP Certified - Back-End Developer - ABAP Cloud',
    organization: 'SAP',
    issueDate: 'September 19, 2026',
    category: 'Certification',
    skills: ['ABAP', 'ABAP RESTful (RAP)', 'Clean Core', 'SAP S/4HANA'],
    image: 'cert-sap-abap-cloud.jpg',
    driveUrl: 'https://drive.google.com/file/d/15ifKBYEETsefhDE8Fqy5IwNDN3Dbp9zg/view?usp=drive_link',
    verifyUrl: 'https://www.credly.com/badges/c2d46979-b299-49aa-9523-0a5a52e473f1'
  },
  {
    id: 1,
    title: 'ServiceNow Certified Application Developer (CAD)',
    organization: 'ServiceNow',
    issueDate: 'June 17, 2026',
    category: 'Certification',
    skills: ['ServiceNow', 'Application Development', 'ITSM', 'JavaScript'],
    image: 'cert-servicenow-cad.jpg',
    driveUrl: 'https://drive.google.com/file/d/1xBrolx6jC4DyhfBOE63uuQiCBtA28p8a/view?usp=sharing'
  },
  {
    id: 2,
    title: 'ServiceNow Certified System Administrator (CSA)',
    organization: 'ServiceNow',
    issueDate: 'June 7, 2026',
    category: 'Certification',
    skills: ['ServiceNow', 'System Administration', 'ITSM', 'Platform Configuration'],
    image: 'cert-servicenow-csa.jpg',
    driveUrl: 'https://drive.google.com/file/d/1eXl3GpwezdE-LEfPh_2XxZUgAx4wF9fB/view?usp=sharing'
  }
]

// `icon` is a devicon path, `lucide` an icon for skills with no devicon logo.
// `invertDark` and `brightenDark` keep black or very dark logos visible in dark mode.
export const skillGroups = [
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Machine Learning', lucide: BrainCircuit },
      { name: 'Deep Learning', lucide: Network },
      { name: 'NLP', lucide: MessageSquareText },
      { name: 'AI Agents', lucide: Bot },
      { name: 'Model APIs', lucide: Plug },
      { name: 'Azure AI Foundry', icon: 'azure/azure-original' },
      { name: 'FAISS', lucide: Search },
      { name: 'Sentence Transformers', lucide: Binary },
    ]
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: 'python/python-original' },
      { name: 'Java', icon: 'java/java-original' },
      { name: 'C', icon: 'c/c-original' },
      { name: 'JavaScript', icon: 'javascript/javascript-original' },
      { name: 'TypeScript', icon: 'typescript/typescript-original' },
      { name: 'HTML5', icon: 'html5/html5-original' },
      { name: 'CSS3', icon: 'css3/css3-original' },
    ]
  },
  {
    title: 'Full-Stack Development',
    skills: [
      { name: 'React', icon: 'react/react-original' },
      { name: 'Flutter', icon: 'flutter/flutter-original' },
      { name: 'FastAPI', icon: 'fastapi/fastapi-original' },
      { name: 'Node.js', icon: 'nodejs/nodejs-original' },
      { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original' },
      { name: 'REST APIs', lucide: Globe },
      { name: 'Java Backend', icon: 'java/java-original' },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
      { name: 'MySQL', icon: 'mysql/mysql-original', brightenDark: true },
      { name: 'Firebase', icon: 'firebase/firebase-plain' },
      { name: 'Supabase', icon: 'supabase/supabase-original' },
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: 'git/git-original' },
      { name: 'GitHub', icon: 'github/github-original', invertDark: true },
      { name: 'Azure', icon: 'azure/azure-original' },
      { name: 'Jupyter', icon: 'jupyter/jupyter-original' },
      { name: 'ServiceNow', lucide: Workflow },
      { name: 'SAP ABAP Cloud', lucide: Cloud },
    ]
  },
]
