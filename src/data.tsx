import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export const siteData = {
  name: 'Rio Rizqi Saputra',
  role: 'Website Engineer & Full Stack Developer',
  bio: 'Software Engineering student at SMKN 17 Jakarta Barat. I build modern web applications, business management systems, and custom digital solutions. Currently exploring AI, automation, and full-stack development.',
  status: 'Available for freelance',
  email: 'riorizqi918@gmail.com',
  location: 'Jakarta Barat, Indonesia',
  social: {
    github: 'https://github.com/riorizqi-dev',
    linkedin: 'https://linkedin.com',
  },
  tagline: {
    projects: 'Portfolio Showcase',
    projectsSub: 'A selection of projects — from web applications to business management systems.',
    tech: 'Tech Stack',
    contact: "Let's work together",
    contactSub: 'Have a project in mind? I am open to freelance, internships, and collaborations.',
  },
  footer: `© ${new Date().getFullYear()} Rio Rizqi Saputra. All rights reserved.`,
}

export interface Project {
  title: string
  description: string
  tags: string[]
  github: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'Ryuuka Store',
    description:
      'A modern platform for managing and selling premium application subscriptions. Built with a fast, secure, and user-friendly experience in mind.',
    tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/riorizqi-dev/Ryuuka-Store',
  },
  {
    title: 'Warehouse Management System',
    description:
      'A web-based warehouse management system for inventory tracking, stock monitoring, and warehouse operations. Built with Laravel and MySQL.',
    tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    github: 'https://github.com/riorizqi-dev/Warehouse-Management-System',
  },
  {
    title: 'Cafe Yo',
    description:
      'Professional cafe management system with menu management, order tracking, and reservation features. Built with ASP.NET Core MVC.',
    tags: ['C#', 'ASP.NET Core', 'MVC', 'SQL Server'],
    github: 'https://github.com/riorizqi-dev/cafe-yo',
  },
  ]

export interface TechItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

export const techStack: TechItem[] = [
  { name: 'HTML', icon: () => <span className="text-[#E34F26] font-bold text-lg">H</span> },
  { name: 'CSS', icon: () => <span className="text-[#1572B6] font-bold text-lg">C</span> },
  { name: 'JavaScript', icon: () => <span className="text-[#F7DF1E] font-bold text-lg">JS</span> },
  { name: 'TypeScript', icon: () => <span className="text-[#3178C6] font-bold text-lg">TS</span> },
  { name: 'PHP', icon: () => <span className="text-[#777BB4] font-bold text-lg">P</span> },
  { name: 'Python', icon: () => <span className="text-[#3776AB] font-bold text-lg">Py</span> },
  { name: 'C#', icon: () => <span className="text-[#512BD4] font-bold text-lg">C#</span> },
  { name: 'Laravel', icon: () => <span className="text-[#FF2D20] font-bold text-lg">L</span> },
  { name: 'ASP.NET', icon: () => <span className="text-[#512BD4] font-bold text-lg">.N</span> },
  { name: 'Bootstrap', icon: () => <span className="text-[#7952B3] font-bold text-lg">B</span> },
  { name: 'Tailwind CSS', icon: () => <span className="text-[#06B6D4] font-bold text-lg">T</span> },
  { name: 'MySQL', icon: () => <span className="text-[#4479A1] font-bold text-lg">M</span> },
  { name: 'Git', icon: () => <span className="text-[#F05032] font-bold text-lg">G</span> },
  { name: 'Figma', icon: () => <span className="text-[#F24E1E] font-bold text-lg">F</span> },
  { name: '.NET MAUI', icon: () => <span className="text-[#512BD4] font-bold text-lg">MA</span> },
  { name: 'VSCode', icon: () => <span className="text-[#007ACC] font-bold text-lg">VS</span> },
]

export const heroTags = [
  'Laravel',
  'PHP',
  'JavaScript',
  'TypeScript',
  'ASP.NET Core',
  'MySQL',
  'Tailwind CSS',
]

export const socialLinks = [
  { label: 'GitHub', href: siteData.social.github, icon: Github },
  { label: 'LinkedIn', href: siteData.social.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${siteData.email}`, icon: Mail },
  { label: 'Hire me', href: '#', icon: ExternalLink },
]