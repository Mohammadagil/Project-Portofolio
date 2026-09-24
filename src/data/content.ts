export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  repos: { label: string; url: string }[];
  liveUrl?: string;
  role: string;
  timeline: string;
  overview: string[];
  decisions: { title: string; text: string }[];
};

export const profile = {
  name: "Mohammad Agil Rofiqul Zein",
  role: "Fullstack / Backend Developer",
  headline: "I build reliable backends and the interfaces on top of them.",
  intro: "Informatics graduate who designs databases, RESTful APIs, and web applications. I have experience in Laravel, Node.js, and Next.js.",
  photo: "/images/profile.jpg",
  email: "mohammadagilrz11@gmail.com",
  github: "https://github.com/Mohammadagil",
  linkedin: "https://www.linkedin.com/in/mohammad-agil-rofiqul-zein/",
};

export const stack = ["HTML5", "CSS3", "JavaScript", "PHP", "Laravel", "Node.js", "Express.js", "React.js", "Next.js", "Prisma", "Sequelize", "MySQL", "Git", "RESTful APIs", "Postman", "TypeScript", "Tailwind CSS"];

export const about = {
  title: "Comfortable in the parts users never see.",
  paragraphs: [
    "I'm a fresh Informatics graduate who likes database schemas, API contracts and the services that keep data consistent. I work mostly in Laravel and Node.js, and build the React or Next.js front end when a project needs it.",
    "I like to write the design down before the code: ERDs, table structures, indexing and naming conventions.",
  ],
  facts: [
    { label: "EDUCATION", value: "Informatics — UPN Veteran Jawa Timur, GPA 3.90" },
    { label: "PROGRAMS", value: "Dicoding Independent Study, Kominfo Digital Talent Scholarship" },
    { label: "APPROACH", value: "MVC, Layered Architecture, Service Repository Pattern, REST API & Database Design" },
    { label: "TOOLS", value: "VSCode, Git, Postman, TablePlus, DBeaver, Laragon" },
  ],
};

export const experience = [
  {
    period: "February 2024 — July 2024",
    title: "System Analyst IT (Intern)",
    org: "PT. Tjakrindo Mas",
    text: "Worked as a system analyst on a Laravel-based warehouse stock application.",
  },
  {
    period: "May 2026 — September 2026",
    title: "Fullstack Web Developer (Talent)",
    org: "Harisenin",
    text: "Completing mission-based coursework across Front-End and Back-End specialization tracks.",
  },
];

export const projects: Project[] = [
  {
    slug: "inventory-web",
    title: "Inventory Web",
    category: "Fullstack · Internal System",
    summary: "A warehouse inventory system for PT. Tjakrindo Mas that records incoming and outgoing goods, tracks stock per item and exports date-range reports to PDF.",
    tags: ["Laravel 9", "PHP", "MySQL", "Bootstrap 5", "jQuery", "DataTables"],
    image: "/images/projects/inventory-web.png",
    imageAlt: "Screenshot of the Inventory Web dashboard",
    repos: [{ label: "GitHub", url: "https://github.com/Mohammadagil/Project-Inventory-Web-PT.Tjakrindo-Mas" }],
    role: "System Analyst IT (Intern)",
    timeline: "23 weeks",
    overview: [
      "The warehouse at PT. Tjakrindo Mas needed a reliable way to know how much of each item was in stock and where it had gone. Inventory Web replaces manual records with one system for logging goods coming in and going out, so current stock per item is always visible.",
      "I worked on it with Laravel 9 and MySQL, covering master data for item types, units, brands and customers, incoming and outgoing transactions, stock monitoring, and three reports that can be filtered by date range and exported to PDF. Access is controlled by four roles (Super Admin, Admin, Operator and Manager), each with its own view, create, update and delete permissions per menu.",
    ],
    decisions: [
      {
        title: "Menu-level role permissions",
        text: "Instead of fixed roles, each role gets view, create, update and delete rights per menu, so the company can adjust who can do what without changing code.",
      },
      {
        title: "Server-side tables with DataTables",
        text: "Transaction and master data lists use Yajra DataTables, so searching, sorting and paging happen on the server and stay fast as the data grows.",
      },
    ],
  },
  {
    slug: "tiketku",
    title: "Tiketku",
    category: "Fullstack · Web app",
    summary: "A ticket booking website where visitors browse tickets by city and category, book and pay online, and track their booking by invoice, with a Filament admin panel.",
    tags: ["Laravel 11", "Filament", "Blade", "Tailwind CSS", "MySQL"],
    image: "/images/projects/tiketku.png",
    imageAlt: "Screenshot of the Tiketku ticketing platform",
    repos: [{label: "GitHub", url: "https://github.com/Mohammadagil/Project-Website-Tiketku-Laravel-11"}],
    role: "Fullstack Developer",
    timeline: "4 weeks",
    overview: [
      "Finding and booking tickets often means jumping between different sites and waiting for manual confirmation. Tiketku puts browsing and booking in one place, so users can find an event, choose tickets and book them online.",
      "I built the web application with React.js on the front end and a Laravel API backed by MySQL, covering the ticket listing, the booking flow and the database that stores events, tickets and bookings.",
    ],
    decisions: [],
  },
  {
    slug: "katering-sehat",
    title: "Katering Sehat",
    category: "Fullstack · Catering subscription",
    summary: "A healthy catering subscription platform where customers browse packages by category and city, pick a tier and book with payment proof, backed by a Laravel API and admin panel.",
    tags: ["Laravel", "Filament", "MySQL", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/katering-sehat.png",
    imageAlt: "Screenshot of the Katering Sehat website",
    repos: [
      { label: "Backend", url: "https://github.com/Mohammadagil/Project-Website-Backend-KateringSehat-Laravel-11" },
      { label: "Frontend", url: "https://github.com/Mohammadagil/Project-Website-Frontend-KateringSehat-Laravel-11" },
    ],
    role: "Fullstack Developer",
    timeline: "5 weeks",
    overview: [
      "Ordering healthy catering usually means chatting with each vendor to compare menus, prices and delivery areas. Katering Sehat puts catering packages in one place, where customers can filter them by category and city, compare tiers and their benefits, and book a subscription online.",
      "I built both sides. The backend is a Laravel 11 REST API with Sanctum authentication, password reset, rate-limited endpoints, and a booking flow where customers upload payment proof and can resubmit it if an admin rejects it with a reason. Admins manage packages, tiers, kitchens and bookings in a Filament panel. The frontend is a Next.js and TypeScript app styled with Tailwind CSS.",
    ],
    decisions: [],
  },
  {
    slug: "omnichannel-crm",
    title: "Omnichannel CRM",
    category: "Backend · System design",
    summary: "A CRM that brings customer conversations from many channels into one workspace, backed by a documented ERD.",
    tags: ["Node.js", "Express.js", "Sequelize", "MySQL"],
    // image: "/images/projects/omnichannel-crm.png",
    // imageAlt: "Entity relationship diagram of the Omnichannel CRM database",
    repos: [{label: "GitHub", url: "https://github.com/Mohammadagil/Project-Website-Backend-Omnichannel-CRM-Express.js"}],
    role: "Fullstack Developer",
    timeline: "Ongoing",
    overview: [
      "Businesses that sell through WhatsApp often keep customer chats in personal phones, so conversations get lost, nobody knows who is handling which customer, and leads are tracked by memory. This CRM backend records every conversation and message against a contact, lets staff assign and update conversations, and prepares a pipeline for tracking leads.",
      "I built the REST API with Express.js, Sequelize and MySQL. I designed the schema first (users, contacts, conversations, messages and leads) with indexes on status columns and clear delete rules, then added JWT authentication, Joi request validation, and endpoints for contacts, conversations and message threads. The project is an MVP; lead management and the WhatsApp webhook integration are the next phases.",
    ],
    decisions: [],
  },
  {
    slug: "chillstream",
    title: "ChillStream",
    category: "Backend · REST API",
    summary: "A REST API for a subscription-based film and series streaming platform, with a content catalog, subscription orders, Midtrans payments and personal watchlists.",
    tags: ["Node.js", "Express.js", "Prisma", "MySQL", "JWT", "Midtrans"],
    // image: "/images/projects/chillstream.png",
    // imageAlt: "Screenshot of the ChillStream API", 
    repos: [{label: "GitHub", url: "https://github.com/Mohammadagil/Project-Backend-Harisenin-ChillStream"}],
    role: "Backend Developer",
    timeline: "Ongoing",
    overview: [
      "A streaming service needs more than a list of films: it has to sell subscription packages, take payments safely and remember what each user wants to watch. ChillStream is the backend for that, managing genres, films, series and episodes, subscription packages, orders, payments and each user's personal watchlist.",
      "I built the REST API with Express.js, Prisma and MySQL across eight entities, using a layered structure of routes, controllers, services and Prisma. It includes JWT authentication with email verification, film search with filters and sorting, image uploads with multer, and Midtrans Snap payments whose status is synced through a verified webhook. Built as a project for the Harisenin Fullstack Developer Bootcamp.",
    ],
    decisions: [
      {
        title: "Payments driven by Midtrans webhooks",
        text: "Payment status is only changed by Midtrans notifications after the signature is verified, and the amount is fixed when the payment is created so the client can't change it.",
      },
      {
        title: "Order rules that protect data",
        text: "Each user can have only one pending order, which expires after 24 hours. A package's price and duration are locked once orders exist, and packages are soft-deleted to keep order history intact.",
      },
      {
        title: "Anti-enumeration on auth",
        text: "Register and login return the same response whether or not an email exists, so attackers can't use them to discover registered accounts.",
      },
      {
        title: "Layered structure and consistent responses",
        text: "Routes, controllers and services each have one job, and every endpoint returns the same JSON shape with errors handled through a custom ApiError class.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
