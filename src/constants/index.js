import { safe, minutemen, nsoft } from "../assets/images";
import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    tailwindcss,
    threads,
    typescript,
    leetcode,
    codeforces,
    codechef,
    sql,
    cpp,
    aws,
    jest,
    cypress
} from "../assets/icons";

export const technologies = [
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
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: jest,
        name: "Jest",
        type: "Testing",
    },
    {
        imageUrl: cypress,
        name: "Cypress",
        type: "Testing",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const languages = [
    {
        imageUrl: cpp,
        name: "C++",
        type: "Programming",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
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
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    }
    
];

export const coding = [
    {
        imageUrl: github,
        name: "GitHub",
        link: "https://github.com/rohitthapa2320",
    },
    {
        imageUrl: leetcode,
        name: "Leetcode",
        link: "https://leetcode.com/u/thaparikki/",
    },
    {
        imageUrl: codechef,
        name: "Codechef",
        link: "https://www.codechef.com/users/thaparikki",
    },
    {
        imageUrl: codeforces,
        name: "Codeforces",
        link: "https://codeforces.com/profile/thaparikki",
    }
    
];

export const experiences = [
    {
        title: "Software Development Engineer - I",
        company_name: "Safe Security",
        icon: safe,
        iconBg: "#02123c",
        date: "June 2022 - November 2023",
        points: [
            "Developed a new Portfolio application SAFE Portfolio which provides an aggregated view and analytics of children companies to the Channel Partner. There are 5 customers currently which corresponds to '$300K' in revenue.",
            "Collaborated with Platforms team to make the SAFE Enterprise application use Multi-tenant architecture instead of Single-tenant. This resulted in significant reduction in AWS cost from '$200' to '$15' per customer monthly.",
            "Refactored SAFE Enterprise app by replacing PHP pages with React, enhancing loading speed, and introducing deep linking for improved user experience. Simultaneously, revamped automation tests and introduced new test cases to maintain high-quality delivery.",
            "Revamped the entire UI and UX of SAFE Enterprise Application. Updated existing and added new components in OASIS.",
        ]
    },
    {
        title: "Software Engineer Intern",
        company_name: "Safe Security",
        icon: safe,
        iconBg: "#02123c",
        date: "March 2022 - May 2022",
        points: [
            "Acquired proficiency in new technologies like 'Typescript' and 'Storybook'.",
            "Implemented new components Avatar and Checkbox for 'OASIS' -UI Library.",
            "Promptly addressed and resolved assigned bugs, reviewed PRs to make continuous improvement in quality of the code and the application performance."
        ]
    },
    {
        title: "Frontend Developer Intern",
        company_name: "MinuteMen Innovations Pvt. Ltd",
        icon: minutemen,
        iconBg: "#b7e4c7",
        date: "June 2021 - July 2021",
        points: [
            "Collaborated with UI Design team to design and develop the new User Interface, elevating the application's overall user experience", 
            "Developed a fully automated End-to-End Testing system using the testing framework, Cypress. Enhancing the reliability and reduced testing time.",
            "Optimized app performance by reducing bundle size through 'Code Splitting' and 'Lazy Loading'.",
            "Developed the ADMINISTRATOR module in React and integrating it seamlessly with the backend via 'AJAX'."
        ]
    },
    {
        title: "Backend Developer Intern",
        company_name: "NSoft Technologies",
        icon: nsoft,
        iconBg: "#dee2e6",
        date: "April 2021 - May 2021",
        points: [
            "Developed a server using Node.js & Express.js that fetch real-time data from Exchange APIs (like Bitfinex) using web-sockets, perform calculations and decides whether to buy/sell a cryptocurrency.",
            "Implemented Multithreading using Node.js core modules, 'worker_threads' and 'child_process'. Utilized 'sequelize' to define models and store data into 'MySQL'."
        ]
    },
];


export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Track It - Budget Tracker',
        description: 'This application is an expense budget tracker that allows users to keep track of their savings and manage their budget.',
        link: 'https://track-savings.netlify.app',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Xylo Call',
        description: 'A real-time video chat application that allows users to chat with their friends through video calls.',
        link: 'https://xylo-call.netlify.app',
    }
];