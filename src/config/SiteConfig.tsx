import {FaBriefcase, FaCode, FaEnvelope, FaGithub, FaLinkedin, FaProjectDiagram, FaUser} from "react-icons/fa";

export const siteConfig = {
    baseUrl: 'https://moealothman.com',
    siteName: "Moe Alothman Portfolio",
    profile: {
        fullName: 'Moe Alothman',
        position: 'Backend Software Engineer',
        avatarSrcImg: '/profile_pic.png',
        resume: '/resume.pdf',
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
    },
    footer: {
        description: "Backend engineer building reliable APIs, distributed systems, and scalable production software with a focus on performance and clean design.",
        quickLinks: [
            {name: 'About', url: '#about'},
            {name: 'Skills', url: '#skills'},
            {name: 'Projects', url: '#projects'},
            {name: 'Experience', url: '#experience'},
        ],
        socialLinks: [
            {
                url: 'https://github.com/alothmanmoe/',
                icon: <FaGithub className="w-5 h-5"/>,
                label: 'GitHub',
            },
            {
                url: 'https://www.linkedin.com/in/alothmanmoe/',
                icon: <FaLinkedin className="w-5 h-5"/>,
                label: 'LinkedIn',
            },
            {
                url: 'alothmanmoe@gmail.com',
                icon: <FaEnvelope className="w-5 h-5"/>,
                label: 'Email',
            }
        ]
    },
    skills: [
        {name: "Java", image: "/skills/java.png", width: 70, height: 70},
        {name: "Kotlin", image: "/skills/kotlin.svg", width: 70, height: 70},
        {name: "AWS", image: "/skills/aws.png", width: 70, height: 70},
        {name: "Spring Boot", image: "/skills/spring-boot.png", width: 70, height: 70},

        {name: "Kafka", image: "/skills/kafka.svg", width: 70, height: 70},
        {name: "Terraform", image: "/skills/terraform.png", width: 70, height: 70},
        {name: "DynamoDB", image: "/skills/dynamodb.svg", width: 70, height: 70},
        {name: "Docker", image: "/skills/docker.png", width: 70, height: 70},

        {name: "Jenkins", image: "/skills/jenkins.svg", width: 70, height: 70},
        {name: "GitHub Actions", image: "/skills/github-actions.svg", width: 70, height: 70},
        {name: "LaunchDarkly", image: "/skills/launchdarkly.svg", width: 70, height: 70},
        {name: 'Ansible', image: '/skills/ansible.svg', width: 80, height: 80},

        {name: "Datadog", image: "/skills/datadog.svg", width: 70, height: 70},
        {name: "Sumo Logic", image: "/skills/sumologic.svg", width: 70, height: 70},
        {name: "MySQL", image: "/skills/mysql.png", width: 70, height: 70},
        {name: "PostgreSQL", image: "/skills/postgresql.png", width: 70, height: 70},

        {name: "Git", image: "/skills/git.svg", width: 70, height: 70},
        {name: 'AWS Secrets Manager', image: '/skills/aws-secrets-manager.png', width: 80, height: 80},
        {name: "Distributed Systems", image: "/skills/distributed-systems.png", width: 70, height: 70},
        {name: "Microservices", image: "/skills/microservices.png", width: 70, height: 70},

        {name: "JavaScript", image: "/skills/javascript.png", width: 70, height: 70},
        {name: "TypeScript", image: "/skills/typescript.png", width: 70, height: 70},
        {name: "React", image: "/skills/react.png", width: 70, height: 70},
        {name: "Python", image: "/skills/python.svg", width: 70, height: 70}
    ],
    projects: [
        {
            title: "Nooksy",
            description: "A marketplace for booking private spaces built with Kotlin, Spring Boot, PostgreSQL, and Stripe.",
            image: "/projects/nooksy.png",
            github: "https://github.com/NooksyApp/Latch"
        },
        {
            title: "Hush",
            description: "An invite-only nightclub app for member verification, event discovery, and seamless QR code entry built with Java, Spring, MySQL, and React Native.",
            image: "/projects/hush.png",
            github: "https://github.com/ParticleStudios/Hush"
        },
        {
            title: "OtakuTree",
            description: "A full-stack anime streaming site built with Java, Spring, GraphQL, MySQL, and AniList integration.",
            image: "/projects/otakutree.jpg",
            github: "https://github.com/alothmanmoe/OtakuTree"
        },
        {
            title: "Truckers Portal",
            description: "A freight management platform for managing loads, drivers, and invoices using Java, Spring, GraphQL, and MongoDB.",
            image: "/projects/truckersportal.png",
            github: "https://github.com/alothmanmoe/TruckersPortal-Server"
        }
    ]
};