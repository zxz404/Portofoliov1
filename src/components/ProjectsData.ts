// src/data/ProjectsData.ts

import P1 from '../assets/Projects/P1.png';
import P2 from '../assets/Projects/P2.png';
import P3 from '../assets/Projects/P3.png';
import P4 from '../assets/Projects/PPDB1.png';
import P5 from '../assets/Projects/PPDB.png';
import P6 from '../assets/Projects/Nexus1.png';
import P7 from '../assets/Projects/Nexus.png';
import P8 from '../assets/Projects/UMKM.png';
import P9 from '../assets/Projects/P4.png';
import P10 from '../assets/Projects/Story.png';


export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  images: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  features: string[];
  technologies: { name: string; purpose: string }[];
  year: number;
   featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Biezari Event Organizer',
    description: 'Biezari event organizer UI is a website that is used to manage events such as referees, participant expenses, income, reports.',
    detailedDescription: 'A comprehensive event management system designed to streamline the entire event organization process. This platform allows event organizers to manage everything from participant registration, referee assignments, financial tracking, and real-time reporting. The system provides an intuitive dashboard for monitoring event progress and generating detailed analytics.',
    images: [P1], // Add multiple images for slider
    tags: ['PHP', 'JavaScript', 'TailwindCSS', 'Laravel', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Real-time event management dashboard',
      'Participant registration and payment tracking',
      'Referee assignment system',
      'Financial reporting and analytics',
      'Automated email notifications',
      'Multi-user role management'
    ],
    technologies: [
      { name: 'Laravel', purpose: 'Backend framework for robust architecture' },
      { name: 'MySQL', purpose: 'Database for storing event and user data' },
      { name: 'Tailwind CSS', purpose: 'Styling and responsive design' },
      { name: 'JavaScript', purpose: 'Interactive frontend features' }
    ],
    year: 2024,
     featured: true
  },
  {
    id: 2,
    title: 'Web UMKM',
    description: 'A responsive static website for SMEs, built with HTML and CSS to showcase business profiles and services.',
    detailedDescription: 'A modern, responsive website template designed specifically for Small and Medium Enterprises (SMEs). This project focuses on creating an attractive online presence for local businesses with clean design, mobile-first approach, and easy content management.',
    images: [P2,P8],
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Fully responsive design for all devices',
      'Service showcase section',
      'Contact form integration',
      'Product gallery',
      'SEO optimized',
      'Fast loading performance'
    ],
    technologies: [
      { name: 'HTML5', purpose: 'Semantic markup structure' },
      { name: 'CSS3', purpose: 'Modern styling with flexbox/grid' },
      { name: 'Vanilla JavaScript', purpose: 'Basic interactivity' }
    ],
    year: 2023,
     featured: true
  },
  {
    id: 3,
    title: 'Attendance Management System',
    description: 'A powerful attendance tracking system built with Python (Flask) and PostgreSQL.',
    detailedDescription: 'A comprehensive attendance management solution that automates the tracking of student/employee attendance. The system features real-time data processing, advanced analytics, customizable reports, and integration capabilities with other educational/HR systems.',
    images: [P3],
    tags: ['Python', 'Flask', 'PostgreSQL', 'Data Analytics'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Real-time attendance tracking',
      'Advanced analytics dashboard',
      'Customizable reporting system',
      'Facial recognition integration (optional)',
      'QR code check-in',
      'Automated notifications'
    ],
    technologies: [
      { name: 'Python Flask', purpose: 'Backend API development' },
      { name: 'PostgreSQL', purpose: 'Relational database for attendance records' },
      { name: 'Chart.js', purpose: 'Data visualization and analytics' },
      { name: 'SQLAlchemy', purpose: 'Database ORM' }
    ],
    year: 2024,
     featured: true
  },
{
    id: 4,
    title: 'Student Admission Decision System',
    description: 'A Laravel-based web application that uses the SMART method to evaluate student eligibility.',
    detailedDescription: 'An intelligent decision support system that implements the SMART (Simple Multi-Attribute Rating Technique) method to objectively evaluate student applications for junior high school admission. The system automates the scoring process based on multiple criteria and provides transparent results.',
    images: [P4, P5],
    tags: ['Laravel', 'UI/UX', 'MySQL', 'Decision Support System'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'SMART method implementation',
      'Multi-criteria evaluation',
      'Automated scoring system',
      'Result transparency',
      'Admin dashboard',
      'Export functionality'
    ],
    technologies: [
      { name: 'Laravel', purpose: 'Full-stack framework' },
      { name: 'MySQL', purpose: 'Student data storage' },
      { name: 'Bootstrap', purpose: 'User interface' },
      { name: 'JavaScript', purpose: 'Interactive form validation' }
    ],
    year: 2024,
    featured: true
  },
  {
  id: 5,
  title: "StoryHive",
  description: "StoryHive adalah platform web untuk berbagi cerita dan pengalaman berbasis lokasi.",
  detailedDescription:
    "StoryHive is a location-based storytelling web platform that allows users to create, explore, and share stories enriched with photos and geographic coordinates. The application features interactive maps, user authentication, and a recommendation system to connect communities through inspiring stories.",
  images: [P9, P10],
  tags: [
    "JavaScript",
    "Storytelling Platform",
    "Geolocation",
    "SPA",
    "Web Application",
    "Community"
  ],
  liveUrl: "#",
  githubUrl: "https://github.com/zxz404/Web-UMKM",
  features: [
    "Story creation with photo upload (file & camera)",
    "Interactive map with story markers",
    "Geolocation integration (GPS & manual selection)",
    "Search and filter stories by location or keyword",
    "Responsive design for all devices",
    "User authentication and authorization",
    "Social sharing functionality",
    "Story navigation (previous/next)",
    "Dashboard with story statistics",
    "Recommendation system for related stories"
  ],
  technologies: [
    { name: "JavaScript (ES6+)", purpose: "SPA logic and component management" },
    { name: "HTML5 & CSS3", purpose: "Semantic markup and modern styling" },
    { name: "Leaflet.js", purpose: "Interactive maps and geolocation" },
    { name: "WebRTC API", purpose: "Camera access for photo capture" },
    { name: "Fetch API", purpose: "API communication" },
    { name: "Service Workers", purpose: "Offline support and PWA features" },
    { name: "Local Storage", purpose: "Client-side data persistence" }
  ],
  year: 2025,
  featured: true
},
{
  id: 6,
  title: 'Nexus Telco App',
  description: 'A machine learning–powered Telco web application for package simulation, quota management, rewards, and personalized product recommendations.',
  detailedDescription: 'Nexus Telco App is a Telco service simulation web application designed to replicate a modern telecommunications ecosystem. The application allows users to register, top up balance, purchase data packages, redeem rewards, and receive personalized product recommendations generated by a TensorFlow (.h5) machine learning model. The recommendation system analyzes user behavior such as purchase history, quota usage, and interaction patterns to deliver dynamic and relevant offers. This project focuses on integrating real-world Telco business logic with machine learning into a scalable web-based system.',
  images: [P4, P5],
  tags: ['Flask', 'Machine Learning', 'TensorFlow', 'PostgreSQL', 'Telco Simulation', 'Recommendation System'],
  liveUrl: '#',
  githubUrl: '#',
  features: [
    'OTP-based user authentication',
    'Balance top-up and data package purchase simulation',
    'Automatic quota and balance management',
    'Reward points and redemption system',
    'Real-time notification system with unread indicator',
    'Machine learning–based product recommendations',
    'User behavior tracking for personalization',
    'Quota usage simulation for ML feature updates',
    'Scalable backend architecture'
  ],
  technologies: [
    { name: 'Flask (Python)', purpose: 'Backend API and business logic' },
    { name: 'PostgreSQL', purpose: 'Relational database for transactions, users, and ML features' },
    { name: 'TensorFlow (.h5)', purpose: 'Machine learning model for recommendation engine' },
    { name: 'JavaScript (ES6)', purpose: 'Frontend logic and API communication' },
    { name: 'SweetAlert2', purpose: 'Interactive modals and user feedback' },
    { name: 'Tailwind CSS', purpose: 'Responsive and modern UI design' }
  ],
  year: 2025
}
];