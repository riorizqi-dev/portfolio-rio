import { Github, Linkedin, Mail, Instagram, ExternalLink } from 'lucide-react'

export const siteData = {
  name: 'Rio Rizqi Saputra',
  role: 'Website Engineer / Full-stack developer',
  bio: 'Software Engineering student from West Jakarta building useful interfaces, business systems, and small experiments across web and Android.',
  status: 'Available for freelance + collaboration',
  email: 'riorizqi918@gmail.com',
  location: 'Jakarta Barat, Indonesia',
  social: {
    github: 'https://github.com/riorizqi-dev',
    linkedin: 'https://www.linkedin.com/in/rio-rizqi-saputra-a86441417',
    instagram: 'https://www.instagram.com/riio_gorioio',
  },
  tagline: {
    projects: 'Things I have shipped',
    projectsSub: 'A growing archive of interfaces, management tools, and experiments from GitHub.',
    tech: 'The tools I reach for',
    contact: 'Open for good work',
    contactSub: 'Freelance, internships, and thoughtful collaborations are welcome.',
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
  { title: 'Ryuuka Store', description: 'A fast platform for managing and selling premium application subscriptions.', tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'], github: 'https://github.com/riorizqi-dev/Ryuuka-Store' },
  { title: 'Warehouse Management System', description: 'A Laravel and MySQL system for inventory tracking and warehouse operations.', tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript'], github: 'https://github.com/riorizqi-dev/Warehouse-Management-System' },
  { title: 'Cafe Yo', description: 'An ASP.NET Core MVC system for menus, orders, and reservations.', tags: ['C#', 'ASP.NET Core', 'MVC', 'SQL Server'], github: 'https://github.com/riorizqi-dev/cafe-yo' },
  { title: 'Vantor', description: 'A cinematic luxury watch landing page built with Next.js, GSAP, and Framer Motion.', tags: ['Next.js', 'GSAP', 'Framer Motion'], github: 'https://github.com/riorizqi-dev/vantor' },
  { title: 'RFM Market', description: 'A global stocks and crypto exchange dashboard concept made with HTML and Tailwind.', tags: ['HTML', 'Tailwind CSS', 'UI'], github: 'https://github.com/riorizqi-dev/rfm-market' },
  { title: 'GhostMode', description: 'An Android utility app exploring Kotlin and foreground services.', tags: ['Kotlin', 'Android'], github: 'https://github.com/riorizqi-dev/GhostMode' },
  { title: 'TaskTrack', description: 'A simple daily task management app for Android, built while learning Kotlin.', tags: ['Kotlin', 'Android'], github: 'https://github.com/riorizqi-dev/TaskTrack' },
  { title: 'The Killer', description: 'A fictional dark noir contract specialists landing page using pure HTML, CSS, and JavaScript.', tags: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/riorizqi-dev/the-killer' },
]

export interface TechItem { name: string; icon: string }
const techIcons: Record<string, string> = { HTML: 'html5', CSS: 'css3', JavaScript: 'javascript', TypeScript: 'typescript', PHP: 'php', Python: 'python', 'C#': 'csharp', Laravel: 'laravel', 'ASP.NET': 'dotnet', Bootstrap: 'bootstrap', 'Tailwind CSS': 'tailwindcss', MySQL: 'mysql', Git: 'git', Figma: 'figma', '.NET MAUI': 'dotnet', VSCode: 'visualstudiocode' }
export const techStack: TechItem[] = Object.keys(techIcons).map((name) => ({ name, icon: `https://cdn.simpleicons.org/${techIcons[name]}/00ff88` }))

export const heroTags = ['Laravel', 'PHP', 'JavaScript', 'TypeScript', 'ASP.NET Core', 'MySQL', 'Tailwind CSS']

export const socialLinks = [
  { label: 'GitHub', href: siteData.social.github, icon: Github },
  { label: 'LinkedIn', href: siteData.social.linkedin, icon: Linkedin },
  { label: 'Instagram', href: siteData.social.instagram, icon: Instagram },
  { label: 'Email', href: `mailto:${siteData.email}`, icon: Mail },
  { label: 'Resume', href: '/resume/', icon: ExternalLink },
]
