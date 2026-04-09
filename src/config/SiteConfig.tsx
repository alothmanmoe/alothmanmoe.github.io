import {FaBriefcase, FaCode, FaProjectDiagram, FaUser} from "react-icons/fa";

export const siteConfig = {
    baseUrl: 'https://moealothman.com',
    siteName: "Moe Alothman Portfolio",
    profile: {
        fullName: 'Moe Alothman',
        avatarSrcImg: '/profile_pic.png',
        metadata: {
            role: 'Backend / Distributed Systems Engineer',
            description: 'Backend engineer specializing in distributed systems, APIs, and reliable production software. Explore my portfolio, experience, and projects.',
            keywords: [
                "Moe",
                "Mohammad",
                "Alothman",
                "Moe Alothman portfolio",
                "Mohammad Alothman portfolio",
                "software engineer",
                "backend engineer",
                "cloud engineer",
                "Kotlin developer",
                "Java developer",
                "Spring Boot developer",
                "Spring developer",
                "backend development",
                "API development",
                "microservices",
                "distributed systems",
                "cloud engineering",
                "AWS",
                "event-driven architecture",
                "Kafka",
                "REST APIs",
                "system design",
                "scalable systems",
                "performance optimization",
                "platform engineering",
                "SmartThings",
                "Samsung",
                "IoT"
            ],
            category: 'technology'
        }
    },
    navbar: {
        routes: [
            {name: 'About', link: '#about', icon: <FaUser/>},
            {name: 'Skills', link: '#skills', icon: <FaCode/>},
            {name: 'Projects', link: '#projects', icon: <FaProjectDiagram/>},
            {name: 'Experience', link: '#experience', icon: <FaBriefcase/>}
        ]
    }
};