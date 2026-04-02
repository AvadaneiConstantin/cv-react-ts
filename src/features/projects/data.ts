/**
 * Projects Data - Complete project information
 * Rol: Conține toate datele proiectelor într-un singur loc
 * Importanță: Centralizează datele pentru easy maintenance și updates
 *
 * ADĂUGAT: Migrat din src/data/projects.ts cu structură originală pentru compatibilitate
 * ȘTERS: Versiunea veche din data/projects.ts
 */
import type { ProjectData } from "./types";

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "p1",
    name: "HOVEN_AI",
    description: "AI-powered hotel discovery engine with conversational search",
    category: "web",
    tech: "Next.js / Supabase / Gemini AI",
    version: "v1.0.0",
    status: "LIVE",
    title: "Hôven - AI Hotel Finder",
    subtitle: "Conversational hotel search with AI-powered recommendations",
    url: "https://hoven-ai.vercel.app/",
    pulseData: [60, 75, 55, 90, 70, 85, 65, 95, 80, 90],

    quote:
      "Search is evolving from filters to conversations — this is the Next(js) step.",

    challenge:
      " Business part: when users request hotel recommendations, AI suggests partner hotels from the database.",
    metrics: [
      { label: "Hotels", value: 50, unit: "+" },
      { label: "Countries", value: 10, unit: "" },
      { label: "Search Modes", value: 2, unit: "" },
      { label: "Bundle Size", value: 48, unit: "kb" },
    ],

    stack: [
      "Next.js 15 App Router",
      "TypeScript",
      "Supabase PostgreSQL",
      "Vercel AI SDK",
      "Google Gemini 2.5 Flash",
      "Tailwind CSS",
    ],

    cvHighlights: [
      "Built **hybrid search** combining Supabase filters with Gemini AI conversational queries.",
      "Used **Next.js Server Components** - only 48kb client JS, rest server-rendered.",
      "Users can **chat in any language**, and AI responds with hotel recommendations from database.",
      "**Smart fallback** - when user requests hotels from countries not in DB (e.g., Finland), AI recommends similar hotels from available countries (Spain, Greece, Italy).",
      "Optimized images with **Next.js Image** - priority loading + responsive sizing.",
    ],

    technicalDecisions: [
      {
        challenge: "Balancing filters with AI search",
        solution: "Supabase queries + AI recommendations",
        outcome: "Flexible search - precise or natural language",
      },
      {
        challenge: "Large hotel lists performance",
        solution: "Server Components + isolated client logic",
        outcome: "48kb bundle, fast initial render",
      },
      {
        challenge: "Multi-language support + missing data",
        solution: "AI prompt engineering with fallback recommendations",
        outcome:
          "Chat in any language, AI suggests alternatives when exact match missing",
      },
      {
        challenge: "Fast loading & responsive images with Next.js",
        solution: "Next.js Image optimization",
        outcome: "Fast loading + responsive images",
      },
    ],

    previewImages: [
      {
        src: "/img/projDetails/hoven2.png",
        alt: "Hotel Grid",
        label: "HOTEL_GRID",
      },
      {
        src: "/img/projDetails/hoven1.webp",
        alt: "AI Finder",
        label: "AI_CHAT",
      },
      {
        src: "/img/projDetails/hoven3.webp",
        alt: "Fallback",
        label: "When no credits",
      },
    ],
  },
  {
    id: "p2",
    name: "UI_COMPONENTS",
    description: "Advanced UI component library with iframe sandboxing",
    category: "tool",
    tech: "Vanilla JS / Tailwind / Vite",
    version: "v1.3.0",
    status: "LIVE",
    title: "UI Components Showcase",
    subtitle: "27 production-ready components with iframe-based isolation",
    url: "https://ui-components-showcase.netlify.app/",
    pulseData: [45, 50, 48, 85, 25, 48, 52, 95, 60, 80],
    quote: "Performance is not a goal; it’s a mindset.",
    challenge:
      "Implemented cross-context theme synchronization between parent app and sandboxed iframes using direct DOM manipulation.",
    metrics: [
      { label: "Performance", value: 98, unit: "/100" },
      { label: "A11y Score", value: 100, unit: "WCAG" },
      { label: "Components", value: 25, unit: "units" },
      { label: "Categories", value: 6, unit: "types" },
      { label: "Bundle Size", value: 15, unit: "kb" },
    ],
    stack: [
      "Vanilla JavaScript (ES6+)",
      "Vite 5.4.21",
      "Tailwind CSS 3.4 (CDN)",
      "PostCSS",
      "Direct DOM Access",
      "Font Awesome CDN",
    ],

    // Highlight-uri combinate si focusate pe "Engineering"
    cvHighlights: [
      "Architected an **iframe-based rendering system** ensuring 100% CSS/JS isolation across 27 independent components.",
      "Implemented **cross-context theme synchronization** between parent app and sandboxed iframes using direct DOM manipulation.",
      "Achieved **95-100 Lighthouse scores** through zero-dependency architecture and CDN optimization.",
    ],

    // Scurt si la obiect
    technicalDecisions: [
      {
        challenge: "Style isolation and execution context separation",
        solution:
          "Implemented Iframe Sandboxing instead of Shadow DOM for absolute style isolation",
        outcome:
          "Complete isolation with zero CSS conflicts and secure execution context",
      },
      {
        challenge: "Demonstrating core DOM engineering skills",
        solution:
          "Used Vanilla JavaScript without framework overhead to showcase fundamental web development expertise",
        outcome:
          "Lightweight, performant components with zero dependencies and maximum browser compatibility",
      },
      {
        challenge: "Ensuring component portability and distribution",
        solution:
          "Adopted CDN-based strategy for zero build-step requirements and easy integration",
        outcome:
          "Portable components that can be dropped into any project without build configuration",
      },
    ],

    // Pastram imaginile
    previewImages: [
      {
        src: "/img/projDetails/ui20.png",
        alt: "FullScreen Mode",
        label: "SANDBOX_PREVIEW",
      },
      {
        src: "/img/projDetails/ui21.png",
        alt: "Library Inventory",
        label: "COMPONENT_LOG",
      },
      {
        src: "/img/projDetails/ui22.png",
        alt: "Mobile Validation",
        label: "MOBILE_STRESS_TEST",
      },
    ],
  },

  {
    id: "p3",
    name: "MATE_FIX",
    description:
      "Educational platform with lazy loading and enterprise error handling",
    category: "web",
    tech: "React / TypeScript / Vite",
    version: "v2.2.0",
    status: "LIVE",
    title: "Mate-Fix Platform",
    subtitle:
      "Educational Platform with Lazy Loading & Enterprise Error Handling",
    url: "https://mate-fix.netlify.app/",
    pulseData: [30, 40, 35, 50, 35, 60, 35, 40, 30, 35],

    quote: "First, solve the problem. Then, write the code.",
    challenge:
      "Developed bilingual educational platform with real-time language switching, comprehensive error handling, and modular architecture.",
    metrics: [
      { label: "React Engine", value: 19, unit: "v" },
      { label: "Languages", value: 2, unit: "active" },
      { label: "Type Safety", value: 100, unit: "%" },
      { label: "Error Boundaries", value: 3, unit: "levels" },
    ],
    stack: [
      "React",
      "TypeScript 5.8.3",
      "Vite 7.1.2",
      "TailwindCSS 3.4.17",
      "React Router 7.9.1",
    ],
    cvHighlights: [
      "Implemented enterprise-grade error handling with multi-level boundaries and graceful recovery.",
      "Engineered bilingual context management system enabling real-time language switching without page reload.",
      "Built custom quiz engine with instant feedback and detailed mathematical explanations.",
      "Architected scalable codebase using feature-based modules and comprehensive TypeScript type safety.",
    ],
    technicalDecisions: [
      {
        challenge: "Multi-level error handling and production stability",
        solution:
          "Implemented comprehensive error boundaries with graceful recovery mechanisms and production monitoring",
        outcome:
          "Robust application with 99.9% uptime and automatic error recovery without user impact",
      },
      {
        challenge: "Bilingual language switching without page reload",
        solution:
          "Utilized React Context for state management with localStorage persistence and instant language switching",
        outcome:
          "Seamless bilingual experience with zero page reloads and persistent language preferences",
      },
      {
        challenge: "Type safety and scalable architecture",
        solution:
          "Adopted feature-based architecture with TypeScript strict mode for comprehensive type safety",
        outcome:
          "Maintainable codebase with zero runtime type errors and excellent developer experience",
      },
    ],

    previewImages: [
      {
        src: "/img/projDetails/matefix1.png",
        alt: "Dashboard",
        label: "SYSTEM_DASHBOARD",
      },
      {
        src: "/img/projDetails/matefix2.png",
        alt: "Geometry Module",
        label: "GEOM_CIRCLE",
      },
      {
        src: "/img/projDetails/matefix3.png",
        alt: "Quiz System",
        label: "QUIZ_TESTS",
      },
    ],
  },

  {
    id: "p4",
    name: "SPEAKERS_HUB",
    description:
      "Premium e-commerce platform with video hero and glassmorphism UI",
    category: "web",
    tech: "React / TypeScript / Tailwind",
    version: "v1.3.0",
    status: "LIVE",
    title: "SpeakersHub Pro",
    subtitle: "Premium E-commerce with Video Hero & Glassmorphism UI",
    url: "https://speakers-hub.netlify.app/",
    pulseData: [45, 60, 35, 80, 55, 75, 40, 65, 50, 70],

    quote: "Code quality is the sum of small, consistent decisions.",
    challenge:
      "Built premium e-commerce platform with immersive video backgrounds, glassmorphism UI, and advanced product catalog.",
    metrics: [
      { label: "Products", value: 17, unit: "items" },
      { label: "Categories", value: 4, unit: "types" },
      { label: "UI Score", value: 95, unit: "/100" },
      { label: "Load Speed", value: 1.2, unit: "s" },
    ],
    stack: [
      "React",
      "TypeScript 5.9.3",
      "Vite 7.2.4",
      "Tailwind CSS 3.4.18",
      "Lucide React 0.561.0",
    ],

    cvHighlights: [
      "Architected a premium **e-commerce UI** featuring glassmorphism, immersive video backgrounds, and responsive grids.",
      "Built an advanced **product catalog** with dynamic filtering, fullscreen image inspection, and cart interactions.",
      "Implemented **AVIF optimization** strategies and persistent theme management (Dark/Light) with system preference detection.",
      "Integrated **React Context** for global theme management and local state for component-specific interactions.",
    ],

    technicalDecisions: [
      {
        challenge: "Global theme management with persistence",
        solution:
          "Implemented React Context with localStorage integration and system preference detection for automatic theme switching",
        outcome:
          "Seamless theme management with user preference persistence and automatic system theme detection",
      },
      {
        challenge: "Rapid, consistent styling across design system",
        solution:
          "Utilized Tailwind JIT compiler for on-demand CSS generation and consistency enforcement",
        outcome:
          "Highly optimized CSS bundle with consistent design tokens and rapid development workflow",
      },
      {
        challenge: "Modern premium aesthetic with depth effects",
        solution:
          "Created Glassmorphism UI using CSS backdrop filters and layered transparency effects",
        outcome:
          "Visually striking modern interface with depth and premium aesthetic appeal",
      },
    ],

    previewImages: [
      {
        src: "/img/projDetails/speakers1.png",
        alt: "Catalog",
        label: "PRODUCT_CATALOG",
      },
      {
        src: "/img/projDetails/speakers2.png",
        alt: "Hero Section",
        label: "VIDEO_HERO",
      },
      {
        src: "/img/projDetails/speakers3.png",
        alt: "Product Detail",
        label: "PRODUCT_DETAIL",
      },
    ],
  },

  {
    id: "p5",
    name: "Space_Discovery",
    description: "Interactive 3D solar system with WebGL rendering",
    category: "web",
    tech: "R3F / Three.js / TypeScript",
    version: "v1.0.0",
    status: "LIVE",
    title: "Space Discovery 3D",
    subtitle: "Interactive Solar System with Real-time Orbital Mechanics",
    url: "https://spacediscovery-go.netlify.app/",
    pulseData: [50, 90, 10, 95, 20, 85, 40, 90, 10, 50],

    quote: "The cosmos is within reach.",
    challenge:
      "Developed a 3D solar system visualization with realistic orbital mechanics using React Three Fiber.",
    metrics: [
      { label: "Celestial Bodies", value: 6, unit: "rendered" },
      { label: "FPS Rate", value: 60, unit: "stable" },
      { label: "Custom Hooks", value: 5, unit: "reusable" },
      { label: "3D Components", value: 8, unit: "modular" },
    ],
    stack: [
      "React",
      "Three.js",
      "React Three Fiber",
      "TypeScript",
      "TailwindCSS",
      "Vite",
    ],

    cvHighlights: [
      "Developed a **3D solar system visualization** with realistic orbital mechanics using React Three Fiber.",
      "Optimized the **WebGL rendering pipeline** to maintain stable 60FPS via geometry buffer management.",
      "Created **custom 3D hooks** to abstract complex math for planet rotation and camera interaction.",
      "Implemented a **mobile-first 3D control scheme**, ensuring seamless navigation on touch devices.",
    ],

    technicalDecisions: [
      {
        challenge: "Bridging declarative React with imperative 3D rendering",
        solution:
          "Implemented React Three Fiber to connect React state management with Three.js rendering loop",
        outcome:
          "Seamless integration allowing React developers to work with 3D graphics using familiar patterns",
      },
      {
        challenge: "Complex 3D mathematics abstraction and reusability",
        solution:
          "Created custom hooks to encapsulate complex 3D calculations and reusable logic units",
        outcome:
          "Clean, maintainable code with reusable 3D logic components and improved developer productivity",
      },
      {
        challenge: "Performance optimization for animation frames",
        solution:
          "Implemented object pooling technique to minimize garbage collection during continuous 3D animations",
        outcome:
          "Smooth 60fps animations with minimal memory allocation and reduced GC pressure",
      },
    ],

    previewImages: [
      {
        src: "/img/projDetails/space1.png",
        alt: "Solar System",
        label: "SOLAR_SYSTEM",
      },
      {
        src: "/img/projDetails/space2.png",
        alt: "Interactive Scene",
        label: "INTERACTIVE_3D",
      },
      {
        src: "/img/projDetails/space3.png",
        alt: "Mobile View",
        label: "RESPONSIVE_DESIGN",
      },
    ],
  },

  {
    id: "p6",
    name: "Urban_Food",
    description:
      "Food service management platform with analytics and customer management",
    category: "web",
    tech: "React / TypeScript / Material UI / Firebase",
    version: "v1.2.0",
    status: "LIVE",
    title: "Urban Food Management System",
    subtitle:
      "Food Service Management Platform with Analytics Dashboard & Customer Management",
    url: "https://urban-food-prod.netlify.app/",
    pulseData: [35, 25, 20, 30, 50, 45, 70, 60, 65, 85],
    quote:
      "Front-end development is the alchemy that turns the cold precision of binary into a warm, human dialogue.",
    challenge:
      "Built comprehensive food service management system with customer management, real-time analytics, and role-based authentication.",
    metrics: [
      { label: "React Engine", value: 19.1, unit: "v" },
      { label: "TypeScript", value: 5.8, unit: "v" },
      { label: "Material UI", value: 7.3, unit: "v" },
      { label: "Test Coverage", value: 15, unit: "%" },
      { label: "Features", value: 8, unit: "modules" },
      { label: "Auth Roles", value: 2, unit: "levels" },
      { label: "Chart Types", value: 4, unit: "visualizations" },
    ],
    stack: [
      "React",
      "TypeScript 5.8.3",
      "Material UI 7.3.1",
      "React Router DOM 7.8.2",
      "Firebase Auth 12.3.0",
      "Chart.js 4.5.0",
      "react-chartjs-2 5.3.0",
      "Jest 30.1.3",
      "React Testing Library 16.3.0",
      "Vite 7.1.2",
    ],
    cvHighlights: [
      "Architected complete food service management system with customer CRUD operations, order tracking, and menu management using React 19 and TypeScript.",
      "Implemented real-time analytics dashboard with Chart.js featuring line, bar, and pie charts for orders, sales, and customer segmentation analysis.",
      "Engineered secure authentication system using Firebase Auth with role-based access control, protecting admin-only routes and customer management features.",
    ],
    technicalDecisions: [
      {
        challenge:
          "Leveraging latest React features for enhanced developer experience",
        solution:
          "Adopted React 19 with concurrent rendering and automatic batching for improved performance",
        outcome:
          "Enhanced developer experience with better performance and modern React capabilities",
      },
      {
        challenge: "Consistent design system and responsive breakpoints",
        solution:
          "Implemented Material UI component library with comprehensive design tokens and responsive grid system",
        outcome:
          "Consistent, professional UI with rapid development and built-in accessibility features",
      },
      {
        challenge: "Secure authentication with role-based access control",
        solution:
          "Integrated Firebase Auth with custom claims and route protection for admin-only features",
        outcome:
          "Secure authentication system with role-based permissions and protected admin routes",
      },
    ],
    previewImages: [
      {
        src: "/img/projDetails/food1.png",
        alt: "Admin Dashboard with KPI Analytics",
        label: "ANALYTICS_DASHBOARD",
      },
      {
        src: "/img/projDetails/food2.png",
        alt: "Customer Management Interface",
        label: "CUSTOMER_MANAGEMENT",
      },
      {
        src: "/img/projDetails/food3.png",
        alt: "Food Menu Catalog with Responsive Grid",
        label: "FOOD_MENU_CATALOG",
      },
    ],
  },
  {
    id: "p7",
    name: "CV_DARK_GLASS",
    description: "Modern CV with Dark Glass Morphism design system",
    category: "web",
    tech: "HTML / CSS / Tailwind CSS",
    version: "v.2",
    status: "LIVE",
    title: "CV v.2 DARK GLASS",
    subtitle:
      "Professional CV with Dark Glass Morphism design and responsive layout",
    url: "https://cvdarkglass.netlify.app/",
    pulseData: [35, 25, 40, 55, 50, 75, 65, 85, 70, 85],
    quote: "Design is not just what it looks like, design is how it works.",
    challenge:
      "Creating a professional CV with Dark Glass Morphism effects while maintaining readability and corporate polish.",
    metrics: [
      { label: "Performance", value: 98, unit: "%" },
      { label: "CSS Framework", value: 3.4, unit: "Tailwind" },
      { label: "Interactive Elements", value: 15, unit: "components" },
      { label: "Color Variants", value: 2, unit: "themes" },
    ],
    stack: [
      "HTML5",
      "Tailwind CSS 3.4",
      "Vanilla JavaScript",
      "Lucide Icons",
      "Inter Font",
    ],
    cvHighlights: [
      "Dark Glass Morphism design system with backdrop-filter blur effects and semi-transparent gradients",
      "Responsive two-column layout with mobile-first approach and F-pattern reading flow optimization",
      "Professional color scheme using Slate 900-800 gradient with Cyan accent colors",
      "Interactive elements with hover states, smooth transitions, and touch-friendly targets",
      "Semantic HTML5 structure with accessibility considerations and progressive enhancement",
    ],
    technicalDecisions: [
      {
        challenge: "Creating professional Dark Glass Morphism aesthetic",
        solution:
          "Implemented backdrop-filter blur(10px) with rgba(15, 23, 42, 0.98) backgrounds and gradient overlays",
        outcome:
          "Visually striking modern interface with depth effects while maintaining readability and corporate polish",
      },
      {
        challenge: "Responsive layout optimization for different screen sizes",
        solution:
          "Utilized CSS Grid and Flexbox with responsive breakpoints (base, md:, lg:) for adaptive layouts",
        outcome:
          "Seamless responsive experience with preserved information hierarchy across mobile, tablet, and desktop",
      },
      {
        challenge: "Performance optimization with CDN-based resources",
        solution:
          "Leveraged CDN-loaded Tailwind CSS and Lucide icons with progressive enhancement approach",
        outcome:
          "Fast loading times with 98 performance score and core content accessible without JavaScript",
      },
    ],
    previewImages: [
      {
        src: "/img/projDetails/CVDARK2.png",
        alt: "Dark Glass Morphism CV Design",
        label: "DARK_GLASS_MORPHISM",
      },
      {
        src: "/img/projDetails/CVDARK1.png",
        alt: "Interactive Elements and Hover Effects",
        label: "INTERACTIVE_COMPONENTS",
      },
    ],
  },

  {
    id: "p8",
    name: "CV_PDF",
    description: "Professional CV template with print-to-PDF functionality",
    category: "tool",
    tech: "HTML / Tailwind CSS / Vanilla JS",
    version: "v.1",
    status: "LIVE",
    title: "CV PDF Generator",
    subtitle: "Professional CV template with optimized print-to-PDF export",
    url: "https://cvpagepdf.netlify.app/",
    pulseData: [45, 35, 40, 55, 80, 70, 75, 85, 90, 95],
    quote: "Documentation is the key to scalability.",
    challenge:
      "Creating a print-optimized CV template that maintains design integrity when exported to PDF.",
    metrics: [
      { label: "Performance", value: 98, unit: "%" },
      { label: "Print Optimization", value: 100, unit: "%" },
      { label: "CSS Framework", value: 3.4, unit: "Tailwind" },
      { label: "Load Speed", value: 0.8, unit: "sec" },
    ],
    stack: [
      "HTML5",
      "Tailwind CSS 3.4",
      "Vanilla JavaScript",
      "Lucide Icons",
      "CSS Print Media",
    ],
    cvHighlights: [
      "Professional CV template with dark sidebar and print-optimized layout",
      "Native browser print-to-PDF functionality with CSS print media queries",
      "Responsive design maintaining A4 format consistency across devices",
      "Optimized for high-quality PDF export with precise print styling",
    ],
    technicalDecisions: [
      {
        challenge: "Maintaining design integrity in PDF export",
        solution:
          "Implemented comprehensive CSS print media queries with exact A4 dimensions and print-color-adjust properties",
        outcome:
          "Pixel-perfect PDF output maintaining visual design and layout consistency",
      },
      {
        challenge: "Complex layout structure for print media",
        solution:
          "Used CSS Grid and Flexbox with print-specific breakpoints and fixed A4 dimensions (210mm x 297mm)",
        outcome:
          "Reliable print layout with consistent formatting across different browsers and printers",
      },
      {
        challenge: "Performance and accessibility for print optimization",
        solution:
          "Leveraged CDN-based resources and semantic HTML5 with progressive enhancement",
        outcome:
          "Fast loading with 98 performance score and accessible content without JavaScript",
      },
    ],
    previewImages: [
      {
        src: "/img/projDetails/CVPDF1.png",
        alt: "CV Template Design",
        label: "CV_TEMPLATE_DESIGN",
      },
      {
        src: "/img/projDetails/CVPDF2.png",
        alt: "PDF Export Preview",
        label: "PDF_EXPORT_PREVIEW",
      },
    ],
  },
];
