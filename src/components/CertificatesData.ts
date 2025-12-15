// src/components/CertificatesData.ts

import cert1 from '../assets/sertifikat/cert1.png';
import cert2 from '../assets/sertifikat/cert2.png';
import cert3 from '../assets/sertifikat/cert3.png';
import cert4 from '../assets/sertifikat/cert4.png';
import cert5 from '../assets/sertifikat/cert5.png';
import cert6 from '../assets/sertifikat/cert6.png';
import cert7 from '../assets/sertifikat/cert7.png';
import cert8 from '../assets/sertifikat/cert8.png';
import cert9 from '../assets/sertifikat/cert9.png';
import cert10 from '../assets/sertifikat/cert10.png';


export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  downloadUrl: string;
  category: string;
  image: string;
  skills: string[];
  verificationUrl?: string;
}

export const certificatesData: Certificate[] = [
  {
    id: 1,
    title: 'Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: 'November 2024',
    description: 'Certified in foundational networking concepts including network protocols, IP addressing, and basic network security. This certification covers essential skills for building and maintaining computer networks.',
    downloadUrl: '#',
    category: 'Networking',
    image: cert1,
    skills: ['TCP/IP', 'Network Protocols', 'IP Addressing', 'Network Security'],
    verificationUrl: 'https://www.credly.com/badges/example'
  },
  {
    id: 2,
    title: 'Lomba Web Statis Tingkat Mahasiswa',
    issuer: 'Festival of Innovation III',
    date: 'October 2024',
    description: 'Awarded for creating an innovative static website in a national-level competition. The project focused on responsive design, performance optimization, and creative UI implementation.',
    downloadUrl: '#',
    category: 'Frontend Development',
    image: cert4,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Performance Optimization']
  },
  {
    id: 3,
    title: 'UI/UX Research and Design Bootcamp',
    issuer: 'MySkill x Lion Parcel',
    date: 'September 2024',
    description: 'Comprehensive UI/UX design bootcamp covering user research, wireframing, prototyping, and design systems. Completed real-world projects focusing on user-centered design principles.',
    downloadUrl: '#',
    category: 'UI/UX Design',
    image: cert5,
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    verificationUrl: 'https://myskill.id/certificates/example'
  },
  {
    id: 4,
    title: 'C++ Programming Fundamentals',
    issuer: 'Meta',
    date: 'August 2024',
    description: 'Comprehensive course covering C++ programming fundamentals including object-oriented programming, memory management, data structures, and algorithmic problem-solving.',
    downloadUrl: '#',
    category: 'Backend Development',
    image: cert3,
    skills: ['C++', 'Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Memory Management']
  },
  {
    id: 5,
    title: 'Java Programming Certification',
    issuer: 'Dicoding Indonesia',
    date: 'July 2024',
    description: 'Hands-on Java programming course covering object-oriented programming concepts, file handling, exception handling, and building desktop applications.',
    downloadUrl: '#',
    category: 'Backend Development',
    image: cert2,
    skills: ['Java', 'OOP', 'File Handling', 'Exception Handling', 'Desktop Applications'],
    
  },
  {
    id: 6,
  title: 'Belajar Dasar Cloud dan Gen AI di AWS',
  issuer: 'Dicoding Indonesia',
  date: 'November 2025',
  description: 'This certification covers fundamental concepts of cloud computing and Generative AI using Amazon Web Services (AWS), including basic cloud architecture, core AWS services, and an introduction to generative AI use cases in cloud environments.',
  downloadUrl: '#',
  category: 'Cloud Computing & Artificial Intelligence',
  image: cert6,
  skills: [
    'Cloud Computing Fundamentals',
    'Amazon Web Services (AWS)',
    'Generative AI Basics',
    'Cloud Architecture',
    'AI Use Case Understanding'
  ],
    verificationUrl: 'https://www.dicoding.com/certificates/example'
  },
  {
     id: 7,
  title: 'Belajar Dasar AI',
  issuer: 'Dicoding Indonesia',
  date: 'November 2025',
  description: 'This certification introduces the fundamental concepts of Artificial Intelligence, including basic machine learning principles, data-driven decision making, and real-world AI applications across various industries.',
  downloadUrl: '#',
  category: 'Artificial Intelligence',
  image: cert7,
  skills: [
    'Artificial Intelligence Fundamentals',
    'Machine Learning Basics',
    'Data-Driven Decision Making',
    'AI Concepts & Terminology',
    'Understanding AI Applications'
  ],
    verificationUrl: 'https://www.dicoding.com/certificates/1RXYQDR6KZVM'
  },
  {
  id: 8,
  title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
  issuer: 'Dicoding Indonesia',
  date: 'Agustus 2025',
  description: 'This certification covers fundamental programming concepts, including problem solving, algorithms, control structures, and basic software development practices as a foundation for becoming a software developer.',
  downloadUrl: '#',
  category: 'Software Development',
  image: cert8,
  skills: [
    'Programming Fundamentals',
    'Problem Solving',
    'Basic Algorithms',
    'Control Structures',
    'Software Development Basics'
  ],
  verificationUrl: 'https://www.dicoding.com/certificates/MRZM6KONKPYQ'
},
 {
  id: 9,
  title: 'Belajar Membuat Front-End Web untuk Pemula',
  issuer: 'Dicoding Indonesia',
  date: 'September 2025',
  description: 'This certification focuses on building responsive and interactive front-end web applications using fundamental web technologies, including HTML, CSS, and JavaScript, with an emphasis on user interface and user experience basics.',
  downloadUrl: '#',
  category: 'Frontend Development',
  image: cert9,
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Responsive Web Design',
    'Basic UI/UX Principles'
  ],
  verificationUrl: 'https://www.dicoding.com/certificates/72ZDK8D6VPYW'
},
 {
  id: 10,
  title: 'Belajar Pengembangan Web Intermediate JavaScript',
  issuer: 'Dicoding Indonesia',
  date: 'November 2025',
  description: 'This certification covers intermediate JavaScript concepts for web development, including asynchronous programming, modular code structure, API integration, and best practices for building maintainable and scalable web applications.',
  downloadUrl: '#',
  category: 'Web Development',
  image: cert10,
  skills: [
    'JavaScript (Intermediate)',
    'Asynchronous Programming',
    'API Integration',
    'Modular JavaScript',
    'Web Application Development'
  ],
    verificationUrl: 'https://www.dicoding.com/certificates/JLX15K4L5Z72'
}
];