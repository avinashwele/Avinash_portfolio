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
    //     imageUrl: c,
    //     name: "c",
    //     type: "Programming",
    // },
    {
        imageUrl: cpp,
        name: "cpp",
        type: "Programming",
    },
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
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
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
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
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: tailwindcss,
    //     name: "Tailwind CSS",
    //     type: "Frontend",
    // }
];
export const tools = [
    {
        imageUrl: vscode,
        name: "vscode",
        type: "Tools",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: eclipse,
        name: "eclipse",
        type: "Tools",
    },
    {
        imageUrl: sublime,
        name: "sublime",
        type: "Tools",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "Tools",
    },
    {
        imageUrl: spring,
        name: "Spring",
        type: "Tools",
    },
    {
        imageUrl: springboot,
        name: "springboot",
        type: "Tools",
    },
    {
        imageUrl: hibernate,
        name: "hibernate",
        type: "Tools",
    },
    {
        imageUrl: intellij,
        name: "Intellij",
        type: "Tools",
    },
    {
        imageUrl: maven,
        name: "maven",
        type: "Tools",
    },
    
    {
        imageUrl: jdbc,
        name: "maven",
        type: "Tools",
    }
    
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
    },
    {
        name: 'leetcode',
        iconUrl: leetcode,
        link: 'https://leetcode.com/u/avinashwele/',
    }


];

export const projects = [
    {
        iconUrl: hospital,
        theme: 'btn-back-red',
        name: 'Hospital Management System',
        description: 'Create multiple function-based components like Contact, Hero, Navbar, About, Footer, Project, Skills, etc., and at the end, integrat all files into App.js. Styling and design are implemented through TailWind CSS. We connected Tailwind CSS through CDN inside the index.html file so that whenever someone wants to run this code on a local machine, they can directly run it without installing Tailwind CSS. All the components of this project are stored in a directory called components. All the assets and amenities used in this project are connected in hyperlink form.',
        link: 'https://github.com/avinashwele/Hospital_M_System',
    },
    {
        iconUrl: jobportal,
        theme: 'btn-back-blue',
        name: 'Job Portal',
        description: [
            "Technology Stack: ",
            "Spring Framework: Explain why Spring MVC is suitable for this project.",
            "Hibernate: Discuss the role of Hibernate for ORM (Object-Relational Mapping).",
            "Database:Mysql Workbench",
            "Frontend Technologies: HTML, CSS, JavaScript, and frameworks like Bootstrap for responsive design.",
            "Other Tools: Maven for project management, Git for version control, and Tomcat as the web server.',",

        ],
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-green',
        name: 'Portfolio Website',
        description: 'Create multiple function-based components like Contact, Hero, Navbar, About, Footer, Project, Skills, etc., and at the end, integrat all files into App.js. Styling and design are implemented through TailWind CSS. We connected Tailwind CSS through CDN inside the index.html file so that whenever someone wants to run this code on a local machine, they can directly run it without installing Tailwind CSS. All the components of this project are stored in a directory called components. All the assets and amenities used in this project are connected in hyperlink form.',
        link: 'https://github.com/adrianhajdin/threads',
    },
];