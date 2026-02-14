import {
    // c,
    cpp,
    java,
    // python,
    mysql,
    arrow,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    react,
    tailwindcss,

    experience,
    education,


    portfolio,
    jobportal,
    hospital,



    leetcode,
    vscode,
    eclipse,
    hibernate,
    sublime,
    postman,
    spring,
    springboot,
    intellij,
    maven,
    jdbc
} from "../assets/icons";

export const skills = [
    // {
    //     imageUrl: cpp,
    //     name: "cpp",
    //     type: "Programming",
    // },
    {
        imageUrl: java,
        name: "java",
        type: "Programming",
    },
    // {
    //     imageUrl: python,
    //     name: "python",
    //     type: "Programming",
    // },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mysql,
        name: "Mysql",
        type: "Database",
    },
];
export const tools = [
    
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    
    {
        imageUrl: postman,
        name: "Postman",
        type: "Tools",
    },
    
    {
        imageUrl: springboot,
        name: "springboot",
        type: "Tools",
    },
    
];

export const experiences = [
    {
        title: "Cyberathon - Nagpur",
        company_name: "Java Developer Intern",
        icon: experience,
        iconBg: "#accbe1",
        date: "Fab 2023 - Fab 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "IT Integration - Bhopal",
        company_name: "Python Django Workshop",
        icon: experience,
        iconBg: "#fbc3bc",
        date: "May 2019 - Jun 2019",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const educations = [
    {
        title: "B-Tech",
        company_name: "Government College of Engineering, Jalgaon",
        icon: education,
        iconBg: "#A0DEFF",
        date: "Aug 2020 - April 2023",
        points: [
            "Bachelor of Technology in Computer Engineering",
            "CGPA : 7.79",
        ],
    },
    {
        title: "Diploma",
        company_name: "Ballarpur Institute of Technology, Ballarpur",
        icon: education,
        iconBg: "#A0DEFF",
        date: "Aug 2018 - May 2020",
        points: [
            "Diploma in Computer Engineeing",
            "Percentage : 87.83%",
        ],
    },
];

export const socialLinks = [

    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/avinashwele',
    },
    {
        name: 'Linkedin',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/avinashwele',
    }


];

export const projects = [
    {
        iconUrl: hospital,
        theme: 'btn-back-red',
        name: 'Rail Alert – Tatkal and advance booking notification system.',
        technology:'Spring Boot, PostgreSQL, Next.js, Flutter',
        description: 'Architected a smart railway booking alert system that notifies users when Tatkal and Advance Reservation windows open using automated travel date calculations. Built scheduled backend services with JWT-based authentication and user-specific alert configurations via RESTful APIs. Designed a normalized PostgreSQL schema and integrated Flutter mobile and Next.js web dashboards with a scalable Spring Boot backend.',
        link: 'https://github.com/avinashwele/Hospital_M_System',
        website: "",
        github: "https://github.com/avinashwele/Rail-Alert"
    },
    {
        iconUrl: jobportal,
        theme: 'btn-back-blue',
        name: 'Studigma – Study Material Sharing Platform',
        technology:'Spring Boot, PostgreSQL, AWS S3, Flutter',
        description: 'Built a scalable MVP study material sharing platform allowing students to upload and download PDF and image-based resources. Developed secure RESTful APIs using Spring Boot with JWT-based authentication, AWS S3 integration for file storage, and PostgreSQL for metadata management. Designed a normalized relational schema with validation, download tracking, and future-ready admin moderation support.',
        link: 'https://github.com/avinashwele/JobPortal',
        website: "",
        github: "https://github.com/avinashwele/Studigma"  
    },
];