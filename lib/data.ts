export const personalInfo = {   name: "ASad Rana",
  title: "Full-Stack Developer",
  tagline: "I build beautiful, performant web experiences.",
  bio: `I'm a passionate full-stack developer with 5+ years of experience crafting modern web applications. 
  I specialize in React, Next.js, and Node.js, with a strong eye for design and user experience. 
  When I'm not coding, you'll find me contributing to open source, writing technical articles, or exploring the latest in web technology.`,
  email: "alex@alexmorgan.dev",
  location: "San Francisco, CA",
  github: "https://github.com/alexmorgan",
  linkedin: "https://linkedin.com/in/alexmorgan",
  twitter: "https://twitter.com/alexmorgan",
  resumeUrl: "/resume.pdf",
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 93 },
      { name: "Framer Motion", level: 80 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "GraphQL", level: 75 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 78 },
      { name: "AWS", level: 72 },
      { name: "Vercel", level: 90 },
      { name: "Figma", level: 80 },
      { name: "CI/CD", level: 75 },
    ],
  },
];

export const projects = [
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "A comprehensive analytics platform for SaaS businesses with real-time metrics, custom dashboards, and team collaboration features. Built with Next.js 14, Prisma, and PostgreSQL.",
    longDescription: `This project was born out of the need for a unified analytics solution for small to medium SaaS businesses. 
    The platform provides real-time metrics tracking, customizable dashboard widgets, team collaboration tools, and automated reporting.
    
    Key challenges included implementing real-time data streaming with WebSockets, building a flexible widget system that users could customize, 
    and ensuring the application remained performant with large datasets.`,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Chart.js"],
    image: "/projects/saas-dashboard.jpg",
    liveUrl: "https://saas-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/alexmorgan/saas-dashboard",
    featured: true,
    year: "2024",
    category: "Full-Stack",
  },
  {
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "An AI-powered content creation tool that helps marketers generate blog posts, social media copy, and ad creatives using OpenAI's GPT-4 API with custom fine-tuning.",
    longDescription: `Built to solve the content bottleneck problem for marketing teams, this tool leverages GPT-4 to generate high-quality, 
    brand-consistent content across multiple formats. Users can define their brand voice, target audience, and content goals.
    
    The application features a real-time streaming interface, content history, team workspaces, and integrations with popular CMS platforms.`,
    tags: ["React", "Node.js", "OpenAI API", "MongoDB", "Socket.io", "AWS"],
    image: "/projects/ai-content.jpg",
    liveUrl: "https://ai-content-demo.vercel.app",
    githubUrl: "https://github.com/alexmorgan/ai-content-generator",
    featured: true,
    year: "2024",
    category: "AI/ML",
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with product management, cart, checkout with Stripe, order tracking, and an admin dashboard for inventory management.",
    longDescription: `A production-ready e-commerce platform built from the ground up with a focus on performance and developer experience. 
    Features include a headless CMS integration, real-time inventory management, Stripe payment processing, and a comprehensive admin dashboard.
    
    The platform handles thousands of products and processes hundreds of orders daily, with 99.9% uptime and sub-second page loads.`,
    tags: ["Next.js", "Stripe", "Sanity CMS", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/projects/ecommerce.jpg",
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/alexmorgan/ecommerce-platform",
    featured: true,
    year: "2023",
    category: "Full-Stack",
  },
  {
    slug: "devtools-cli",
    title: "DevTools CLI",
    description:
      "A powerful command-line toolkit for developers that automates common workflows including project scaffolding, deployment, and code generation.",
    longDescription: `DevTools CLI was created to streamline the development workflow for teams working on multiple projects. 
    The tool provides intelligent project scaffolding, automated deployment pipelines, and customizable code generation templates.
    
    With over 2,000 GitHub stars and 500+ weekly downloads on npm, it has become a staple in many development teams' toolkits.`,
    tags: ["Node.js", "TypeScript", "Commander.js", "Inquirer", "npm"],
    image: "/projects/devtools.jpg",
    liveUrl: "https://devtools-cli.dev",
    githubUrl: "https://github.com/alexmorgan/devtools-cli",
    featured: false,
    year: "2023",
    category: "Tools",
  },
  {
    slug: "realtime-chat",
    title: "Real-Time Chat App",
    description:
      "A modern chat application with real-time messaging, file sharing, voice messages, and end-to-end encryption built with Socket.io and React.",
    longDescription: `A feature-rich real-time communication platform built with security and performance in mind. 
    The application supports direct messages, group channels, file sharing, voice messages, and end-to-end encryption.
    
    Built to handle thousands of concurrent connections with horizontal scaling via Redis pub/sub and load balancing.`,
    tags: ["React", "Socket.io", "Node.js", "Redis", "MongoDB", "WebRTC"],
    image: "/projects/chat-app.jpg",
    liveUrl: "https://chat-demo.vercel.app",
    githubUrl: "https://github.com/alexmorgan/realtime-chat",
    featured: false,
    year: "2023",
    category: "Full-Stack",
  },
  {
    slug: "design-system",
    title: "Component Design System",
    description:
      "A comprehensive React component library with 50+ accessible components, dark mode support, and full TypeScript types, published to npm.",
    longDescription: `A production-grade design system built with accessibility and developer experience as core principles. 
    The library includes 50+ components, comprehensive documentation with Storybook, automated visual regression testing, and full TypeScript support.
    
    Used by 3 production applications and maintained with semantic versioning and automated changelog generation.`,
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "Tailwind CSS", "npm"],
    image: "/projects/design-system.jpg",
    liveUrl: "https://design-system-docs.vercel.app",
    githubUrl: "https://github.com/alexmorgan/design-system",
    featured: false,
    year: "2022",
    category: "Frontend",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
