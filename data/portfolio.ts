export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface BrandConfig {
  name: string;
  initials: string;
  role: string;
  headlineRole: string;
  email: string;
  phone: string;
  github: string;
  availableForWork: boolean;
  statusText: string;
}

export interface HighlightItem {
  id: string;
  type: "number" | "text";
  numberValue?: number;
  suffix?: string;
  textValue?: string;
  label: string;
  sublabel: string;
  description: string;
  conceptTag: string;
  accentColor: "blue" | "green" | "purple";
}

export interface ExpertiseCategory {
  id: string;
  title: string;
  tagline: string;
  level: "Foundation" | "Active Focus" | "Developing";
  description: string;
  whatIDo: string[];
  whatICanBuild: string[];
  technologies: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Professional" | "Featured" | "Other" | "Components";
  badge: string;
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  isConfidential?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ExperienceItem {
  id: string;
  type: "work" | "education" | "certification";
  title: string;
  organization: string;
  duration: string;
  grade?: string;
  description: string;
  tags: string[];
}

export interface BlogTopic {
  id: string;
  title: string;
  category: string;
  summary: string;
  status: "Coming Soon" | "Drafting";
  readTime: string;
}

export const BRAND_DATA: BrandConfig = {
  name: "Shenpagam K",
  initials: "SK",
  role: "Full-Stack Web Developer",
  headlineRole: "Full-Stack Web Developer",
  email: "shenpagam200318@gmail.com",
  phone: "+91 63827 12815",
  github: "https://github.com/Shenpagam",
  availableForWork: true,
  statusText: "Available for new projects",
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "expertise", label: "Expertise", href: "#expertise" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "process", label: "Process", href: "#process" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "blog", label: "Blog", href: "#blog" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const HIGHLIGHTS_DATA: HighlightItem[] = [
  {
    id: "projects",
    type: "number",
    numberValue: 5,
    suffix: "+",
    label: "Projects Built",
    sublabel: "Full-stack apps, billing tools & clones",
    description: "Web apps, websites & platforms delivered with impact and practical utility.",
    conceptTag: "PROJECTS",
    accentColor: "green",
  },
  {
    id: "mern",
    type: "text",
    textValue: "MERN",
    label: "Full-Stack Foundation",
    sublabel: "End-to-end architecture & APIs",
    description: "Building modern applications from responsive React frontends to Express & MongoDB backends.",
    conceptTag: "DEVELOPMENT",
    accentColor: "blue",
  },
  {
    id: "internship",
    type: "number",
    numberValue: 3,
    suffix: " Mo",
    label: "Developer Internship",
    sublabel: "Live Stream Technologies",
    description: "Hands-on industry experience building full-stack features in a live collaborative environment.",
    conceptTag: "INDUSTRY EXPERIENCE",
    accentColor: "purple",
  },
];

export const EXPERTISE_DATA: ExpertiseCategory[] = [
  {
    id: "fullstack",
    title: "Full-Stack Development",
    tagline: "Core Technical Foundation",
    level: "Foundation",
    description:
      "Building complete web applications from front end to back end using the MERN stack with responsive interfaces, robust REST APIs, and database persistence.",
    whatIDo: [
      "Develop responsive user interfaces in React",
      "Architect RESTful APIs using Node.js & Express.js",
      "Design document schemas and handle data operations in MongoDB",
      "Implement secure authentication with JSON Web Tokens (JWT)",
    ],
    whatICanBuild: [
      "CRUD-based business & productivity applications",
      "Billing & invoicing web software",
      "Interactive data dashboards & client portals",
      "Authentication and role-based access systems",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "JavaScript (ES6+)"],
    icon: "code",
  },
  {
    id: "modern-web",
    title: "Modern Web Development",
    tagline: "Current Technical Expansion",
    level: "Active Focus",
    description:
      "Developing component-based, high-performance websites with Next.js and Tailwind CSS with a focus on UI polish, clean markup, and responsive design.",
    whatIDo: [
      "Build modern web apps using Next.js App Router",
      "Create scalable utility-first styling systems with Tailwind CSS",
      "Develop fluid micro-interactions with Framer Motion",
      "Ensure cross-browser compatibility and responsive layouts",
    ],
    whatICanBuild: [
      "Modern marketing websites & landing pages",
      "Portfolio & digital studio web experiences",
      "Component-driven interactive web interfaces",
      "Mobile-first performant web layouts",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "CSS3"],
    icon: "layers",
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    tagline: "CMS & Client Solutions",
    level: "Developing",
    description:
      "Developing practical experience in building, customizing, and managing WordPress websites for small businesses and content-driven brands.",
    whatIDo: [
      "Configure and customize WordPress themes & templates",
      "Build structured page layouts and content blocks",
      "Manage media, plugins, and custom menus",
      "Optimize website navigation and content flow",
    ],
    whatICanBuild: [
      "Business websites and company portfolios",
      "Blog & article publishing platforms",
      "Service showcase and lead-generation pages",
      "Easily manageable client websites",
    ],
    technologies: ["WordPress", "Theme Customization", "Content Management", "Gutenberg", "Responsive Layouts"],
    icon: "wordpress",
  },
  {
    id: "seo",
    title: "SEO & Website Optimization",
    tagline: "Discoverability & Performance",
    level: "Developing",
    description:
      "Applying technical on-page SEO best practices and web optimization so that websites are easily discovered by search engines and quick to load.",
    whatIDo: [
      "Implement semantic HTML heading hierarchy (H1-H6)",
      "Optimize meta titles, descriptions, and Open Graph tags",
      "Structure descriptive image alt text and internal linking",
      "Ensure fast page load times and mobile usability",
    ],
    whatICanBuild: [
      "Search-engine-friendly web architectures",
      "Optimized landing pages for targeted keywords",
      "Clean metadata structures for social sharing",
      "Accessible and indexable site structures",
    ],
    technologies: ["On-Page SEO", "Meta Optimization", "Semantic HTML", "Schema Markup", "Core Web Vitals", "Internal Linking"],
    icon: "trending-up",
  },
  {
    id: "backend",
    title: "Backend & REST APIs",
    tagline: "Server Architecture & Data Flow",
    level: "Foundation",
    description:
      "Designing modular server-side logic, data validation middleware, and efficient REST API endpoints to power dynamic frontend applications.",
    whatIDo: [
      "Create modular route controllers and middleware in Express",
      "Perform secure CRUD operations with Mongoose / MongoDB",
      "Handle JSON request-response formatting and error handling",
      "Integrate environment variables and secure configuration",
    ],
    whatICanBuild: [
      "RESTful API servers for web and mobile clients",
      "Data ingestion and processing endpoints",
      "User session management and auth pipelines",
      "Third-party API integrations (e.g. NASA APOD)",
    ],
    technologies: ["Node.js", "Express.js", "REST APIs", "Mongoose", "Postman", "CORS Middleware"],
    icon: "server",
  },
  {
    id: "tools",
    title: "Tools & Deployment",
    tagline: "Workflow & Cloud Hosting",
    level: "Foundation",
    description:
      "Utilizing modern version control, collaborative workflows, and cloud hosting platforms to deploy live web applications reliably.",
    whatIDo: [
      "Manage version control and branch workflows with Git & GitHub",
      "Deploy frontend applications to Netlify with custom builds",
      "Deploy full-stack services and Node servers to Render",
      "Inspect network requests and debug using browser DevTools",
    ],
    whatICanBuild: [
      "Automated CI/CD build deployments via Git hooks",
      "Production-ready static and server-rendered deployments",
      "Clean, documented open-source repositories",
      "Staging and live preview environments",
    ],
    technologies: ["Git", "GitHub", "Netlify", "Render", "VS Code", "npm / yarn"],
    icon: "terminal",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  // Professional Projects
  {
    id: "medronix",
    title: "Medronix",
    subtitle: "Healthcare Website & SEO Optimization",
    category: "Professional",
    badge: "Client Project · WordPress",
    description:
      "Developed a professional WordPress website and implemented SEO optimization. Worked on improving the website's search engine visibility using Rank Math SEO, contributing to the website's Google search ranking.",
    problem:
      "Establishing a high-visibility, trustworthy digital presence for healthcare services with targeted search engine discovery.",
    solution:
      "Developed a modern responsive WordPress website integrated with comprehensive on-page SEO strategies and indexation through Rank Math SEO.",
    keyFeatures: [
      "Professional WordPress website architecture",
      "Rank Math SEO configuration and optimization",
      "On-page SEO structuring and meta optimization",
      "Search engine indexation & Google search ranking contribution",
    ],
    technologies: [
      "WordPress",
      "Website Development",
      "SEO Optimization",
      "Rank Math SEO",
      "On-Page SEO",
    ],
    role: "WordPress Development & SEO",
    liveUrl: "https://www.medronix.com/",
  },
  {
    id: "vaidhya-ai-website",
    title: "Vaidhya AI",
    subtitle: "Product Marketing Website & SEO Optimization",
    category: "Professional",
    badge: "Product Website · WordPress",
    description:
      "Developed the marketing website for the Vaidhya AI product using WordPress. Implemented SEO optimization and worked on improving search engine visibility using Yoast SEO.",
    problem:
      "Building a dedicated marketing web presence for an AI healthcare product optimized for organic search discovery.",
    solution:
      "Designed and developed responsive WordPress landing pages with structured on-page SEO integration and search engine indexing via Yoast SEO.",
    keyFeatures: [
      "AI product marketing landing page development",
      "Yoast SEO setup and content optimization",
      "Search engine visibility & organic keyword alignment",
      "Responsive, clean, modern presentation",
    ],
    technologies: [
      "WordPress",
      "Website Development",
      "SEO Optimization",
      "Yoast SEO",
      "On-Page SEO",
    ],
    role: "WordPress Development & SEO",
    liveUrl: "https://www.vaidhya.ai/",
  },
  {
    id: "vaidhya-ai-chatbot",
    title: "Vaidhya AI – AI Chatbot",
    subtitle: "Tool-Calling & Conversational AI Integration",
    category: "Professional",
    badge: "Team Contribution · AI",
    description:
      "Contributed as part of the development team to improve the accuracy and effectiveness of the Vaidhya AI chatbot. The chatbot was developed using a tool-calling approach, and my contribution focused on helping improve chatbot accuracy and functionality.",
    problem:
      "Improving the precision, contextual tool execution, and reliability of an AI chatbot assistant.",
    solution:
      "Collaborated as part of the engineering team on the tool-calling approach, refining response accuracy and functional chatbot capabilities.",
    keyFeatures: [
      "Tool-calling mechanism integration and support",
      "Chatbot response accuracy and functional improvements",
      "Collaborative development in an AI product team",
      "Conversational flow verification and testing",
    ],
    technologies: [
      "AI Chatbot Development",
      "Tool Calling",
      "Team Collaboration",
      "AI Product Development",
    ],
    role: "Team Contributor — Chatbot Accuracy & Functionality",
    isConfidential: true,
  },
  {
    id: "production-management-system",
    title: "Production Management System",
    subtitle: "Centralized Operational & Productivity Platform",
    category: "Professional",
    badge: "Team Contribution · Internal Platform",
    description:
      "Contributed to the development of a production management system designed for the Data Processing Team. The system functions as a centralized operational and productivity management platform with CRM-like capabilities. Primary contribution included developing the Project Manager Dashboard and Employee Dashboard.",
    problem:
      "The Data Processing Team required a centralized solution to address manual file allocation, complexity in productivity tracking, and the lack of a unified dashboard.",
    solution:
      "Contributed to the development of the platform's core dashboard modules (Project Manager Dashboard and Employee Dashboard) with CRM-like capabilities for streamlined workflow management.",
    keyFeatures: [
      "Project Manager Dashboard for centralized operational oversight",
      "Employee Dashboard for task execution and productivity tracking",
      "Automated file allocation replacing manual distribution",
      "CRM-like operational tracking and activity metrics",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Role-Based Auth",
    ],
    role: "Team Contributor — Dashboard Development",
    isConfidential: true,
  },
  {
    id: "relative-book",
    title: "Relative Book — Landing Page",
    subtitle: "Motion-Driven Interactive UI",
    category: "Professional",
    badge: "Internship UI Project",
    description:
      "An animated, responsive landing page built during internship focused on UI/UX motion design, typography contrast, and smooth layout reveals.",
    problem: "Practicing fluid micro-interactions and modern layout composition.",
    solution: "Implemented Framer Motion scroll and entry animations over a clean React layout.",
    keyFeatures: ["Fluid Framer Motion scroll triggers", "Clean typography hierarchy", "Responsive mobile experience"],
    technologies: ["React", "Framer Motion", "CSS3", "Netlify"],
    role: "Front-End & Interaction Design",
    liveUrl: "https://relative-book.netlify.app",
    githubUrl: "https://github.com/Shenpagam",
  },

  // Reusable Components
  {
    id: "map-analytics",
    title: "Map Analytics",
    subtitle: "Interactive Dashboard Component",
    category: "Components",
    badge: "Reusable Component · Vaidhya AI",
    description:
      "An interactive map analytics component designed for analytics dashboards. This component was developed and integrated into the Vaidhya AI product for its Analytics Module.",
    problem:
      "Visualizing geographic distribution and location-based data interactively within complex analytics views.",
    solution:
      "Engineered an interactive, modular map analytics component for clean visualization and seamless integration into analytics dashboards.",
    keyFeatures: [
      "Interactive geographical data visualization",
      "Integrated into Vaidhya AI product for Analytics Module",
      "Reusable component design for analytics dashboards",
      "Smooth data interactions and responsive presentation",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Analytics Visualization",
      "Interactive Maps",
      "Modular UI",
    ],
    role: "Component Development & Integration",
    liveUrl: "https://map-analytics.netlify.app/",
  },
  {
    id: "dynamic-calendar-analytics",
    title: "Dynamic Calendar Analytics",
    subtitle: "Date-Based Analytics Component",
    category: "Components",
    badge: "Reusable Component · Vaidhya AI",
    description:
      "A dynamic calendar and date-based analytics component developed for the Vaidhya AI product's Analytics Module. This component helps support date-based data analysis and dashboard interactions.",
    problem:
      "Providing dynamic, multi-interval date selection and temporal data analysis in dashboard analytics.",
    solution:
      "Built a flexible date-based analytics calendar component supporting interactive range filtering and data exploration.",
    keyFeatures: [
      "Dynamic calendar interaction and date-based analysis",
      "Integrated into Vaidhya AI product for Analytics Module",
      "Interactive date filtering and timeline exploration",
      "Modular component architecture for dashboard integration",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Calendar Component",
      "Data Analytics",
      "Interactive UI",
    ],
    role: "Component Development & Integration",
    liveUrl: "https://dynamic-calendar-analytics.netlify.app/",
  },

  // Featured Personal Projects
  {
    id: "restrobill",
    title: "RestroBill — Restaurant Billing System",
    subtitle: "Digital Billing & QR Payment Platform",
    category: "Featured",
    badge: "Featured Personal Project",
    description:
      "A fast, modern restaurant billing web application with dynamic bill generation, itemized totals, and Google Pay QR code integration for instant direct payments.",
    problem:
      "Small food establishments often rely on slow, error-prone manual paper billing and struggle to provide smooth digital contactless payments for customers.",
    solution:
      "Engineered an efficient React web application that lets staff select items dynamically, compute taxes/totals automatically, and instantly render a Google Pay QR code for direct customer checkout.",
    keyFeatures: [
      "Dynamic bill creation with instant price calculation",
      "Google Pay QR code integration for direct cashless payment",
      "Local state & order persistence with browser storage",
      "Mobile-friendly touch interface designed for restaurant counters",
    ],
    technologies: ["React", "Node.js", "JavaScript", "localStorage", "CSS3", "QR API"],
    role: "Sole Creator — End-to-End Design & Development",
    liveUrl: "https://restaurant-billing-system-restrobill.netlify.app",
    githubUrl: "https://github.com/Shenpagam",
  },
  {
    id: "task-flow",
    title: "Task Flow — Task Management App",
    subtitle: "Productivity & CRUD Operations Platform",
    category: "Featured",
    badge: "Featured Personal Project",
    description:
      "A clean, CRUD-based task manager applying core MERN concepts to build a real, usable productivity tool with task creation, category filtering, and status updates.",
    problem:
      "Users need a straightforward, clutter-free task management interface to organize daily tasks without unnecessary SaaS bloat.",
    solution:
      "Developed a responsive single-page web application featuring full CRUD capabilities, smooth UI state transitions, and persistent storage.",
    keyFeatures: [
      "Complete CRUD: Create, Read, Update, and Delete tasks",
      "Real-time task completion toggle and progress visualizer",
      "Priority and category tagging for clear task sorting",
      "Responsive layout optimized for both desktop and mobile use",
    ],
    technologies: ["React", "Node.js", "JavaScript", "MERN Concepts", "Tailwind CSS"],
    role: "Sole Creator — End-to-End Development",
    liveUrl: "https://task-manager-taskflow.netlify.app",
    githubUrl: "https://github.com/Shenpagam",
  },

  // Other Projects
  {
    id: "guvi-clone",
    title: "GUVI Clone",
    subtitle: "Component Architecture Practice",
    category: "Other",
    badge: "Front-End Practice",
    description:
      "A responsive front-end clone built to practice component-based architecture, grid layouts, and visual design replication.",
    problem: "Mastering complex UI layout replication and responsive grid systems.",
    solution: "Deconstructed page sections into modular reusable React components with Bootstrap.",
    keyFeatures: ["Pixel-accurate course catalog layout", "Responsive navigation and cards", "Modular component tree"],
    technologies: ["React", "Bootstrap", "CSS3", "Render"],
    role: "Front-End Development",
    liveUrl: "https://guviclone.onrender.com",
    githubUrl: "https://github.com/Shenpagam",
  },
  {
    id: "nasa-apod",
    title: "NASA APOD — Astronomy Picture of the Day",
    subtitle: "Real-Time API Integration",
    category: "Other",
    badge: "API Exploration",
    description:
      "A web application that fetches and displays NASA's daily astronomy picture in real time using the official NASA REST API.",
    problem: "Consuming external REST APIs and handling asynchronous data fetching gracefully.",
    solution: "Integrated NASA REST API with date pickers, loading skeletons, and high-res media display.",
    keyFeatures: ["Live daily image & explanation fetch", "Interactive date query picker", "Responsive full-screen viewer"],
    technologies: ["React", "NASA REST API", "JavaScript", "Netlify"],
    role: "Front-End Development & API Integration",
    liveUrl: "https://nasa-apod-terraspace.netlify.app",
    githubUrl: "https://github.com/Shenpagam",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    tagline: "Requirements & Business Goals",
    description:
      "Every successful project starts with clarity. I analyze user needs, business objectives, and technical constraints to establish a clear project scope.",
    deliverables: ["Scope Definition", "Feature Breakdown", "Target Audience Alignment"],
  },
  {
    step: "02",
    title: "Plan",
    tagline: "Architecture & Data Workflow",
    description:
      "I structure the application before writing code — determining component trees, database models, REST API endpoints, and page hierarchy.",
    deliverables: ["Schema Modeling", "API Endpoint Design", "UI Component Wireframes"],
  },
  {
    step: "03",
    title: "Build",
    tagline: "Clean Code & Interactive UI",
    description:
      "Developing modular frontend interfaces and reliable backend services. Clean, maintainable code with clear separation of concerns.",
    deliverables: ["React / Next.js Components", "REST API & Server Logic", "State Management & Auth"],
  },
  {
    step: "04",
    title: "Optimize",
    tagline: "Performance, SEO & Responsiveness",
    description:
      "Refining the application for speed, mobile responsiveness, accessibility, and search engine discoverability with semantic markup and on-page SEO.",
    deliverables: ["Mobile-First Responsiveness", "Meta & Schema Optimization", "Speed & Asset Compression"],
  },
  {
    step: "05",
    title: "Deliver",
    tagline: "Deployment & Verification",
    description:
      "Deploying the live application to production platforms (Netlify, Render, Vercel) with version-controlled CI/CD pipelines and final quality checks.",
    deliverables: ["Cloud Deployment", "Live Testing & QA", "Clean Git Repository"],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "livestream-intern",
    type: "work",
    title: "MERN Stack Developer Intern",
    organization: "Live Stream Technologies",
    duration: "3 Months",
    description:
      "Developed full-stack web application features using MongoDB, Express.js, React.js, and Node.js in a collaborative team environment. Built REST APIs, integrated responsive frontend components, and worked with live codebases.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Full-Stack Development"],
  },
  {
    id: "mca",
    type: "education",
    title: "Master of Computer Applications (MCA)",
    organization: "Kalasalingam Academy of Research and Education",
    duration: "2024 – 2026",
    grade: "CGPA: 8.93",
    description:
      "Postgraduate studies focused on advanced computer applications, software engineering principles, database management systems, full-stack web architectures, and modern digital technologies.",
    tags: ["Advanced Web Engineering", "Database Systems", "Software Architecture", "Algorithms"],
  },
  {
    id: "bcom-ca",
    type: "education",
    title: "Bachelor of Commerce in Computer Applications (B.Com CA)",
    organization: "Kalasalingam Academy of Research and Education",
    duration: "2021 – 2024",
    grade: "CGPA: 9.16",
    description:
      "Undergraduate degree blending practical computer applications, software programming fundamentals, and business commerce principles with academic distinction.",
    tags: ["Programming Fundamentals", "Database Applications", "Business Systems", "Graduated with Honors"],
  },
  {
    id: "mern-cert",
    type: "certification",
    title: "MERN Stack Certification",
    organization: "Learn Wave Studios",
    duration: "8 Months",
    description:
      "Comprehensive 8-month hands-on training covering full-stack web engineering, React component architecture, Node.js backend services, Express routing, MongoDB database modeling, and JWT authentication.",
    tags: ["MERN Stack", "React", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
  },
];

export const BLOG_TOPICS: BlogTopic[] = [
  {
    id: "mern-vs-nextjs",
    title: "MERN Stack vs Next.js: When to Use Which",
    category: "Web Development",
    summary:
      "A practical comparison of building standalone React + Express backends versus unified Next.js full-stack architectures based on project scale and SEO needs.",
    status: "Coming Soon",
    readTime: "5 min read",
  },
  {
    id: "getting-started-nextjs",
    title: "Getting Started with Next.js as a MERN Developer",
    category: "Next.js",
    summary:
      "How transitioning from standard client-side React + Express to Next.js App Router shifts component thinking, data fetching, and routing.",
    status: "Coming Soon",
    readTime: "6 min read",
  },
  {
    id: "basic-onpage-seo",
    title: "Basic On-Page SEO Every Developer Should Know",
    category: "SEO & Digital",
    summary:
      "Why semantic heading hierarchy, meta descriptions, descriptive alt text, and Open Graph tags make a tangible difference in website discoverability.",
    status: "Coming Soon",
    readTime: "4 min read",
  },
  {
    id: "crud-app-architecture",
    title: "How I Structured a CRUD App Using MERN Concepts",
    category: "MERN Stack",
    summary:
      "Practical lessons from building Task Flow — organizing route controllers, state management, and handling asynchronous errors cleanly.",
    status: "Coming Soon",
    readTime: "5 min read",
  },
  {
    id: "wordpress-vs-custom",
    title: "WordPress vs Custom Development: Choosing the Right Approach",
    category: "WordPress",
    summary:
      "Evaluating client requirements, budget, maintenance, and content publishing workflows to choose between WordPress and bespoke custom code.",
    status: "Coming Soon",
    readTime: "5 min read",
  },
  {
    id: "content-structuring-seo",
    title: "Content Structuring Tips for SEO-Friendly Websites",
    category: "SEO & Digital",
    summary:
      "How intentional content grouping, internal linking, and readable typography improve both user retention and search engine crawling.",
    status: "Coming Soon",
    readTime: "4 min read",
  },
];
