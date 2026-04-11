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
    ],
    experience: [
        {
            title: 'Senior Software Engineer',
            company: 'Samsung SmartThings',
            location: 'Remote',
            companyImage: '/experience/smartthings.png',
            date: 'Jan 2022 - Present',
            description: 'Working on large-scale distributed systems focused on real-time event processing, scheduling, and platform reliability.',
            achievements: [
                "Architected and launched Hourglass, a sharded distributed scheduling system built on DynamoDB and MemoryDB, replacing a Cassandra-backed monolith and enabling a live migration of 90M+ schedules.",
                "Founded and led the Event Review Board, defining schema and usage standards for event types across the platform and coordinating adoption across teams.",
                "Reduced event pipeline load by 30% by designing a targeted subscription notification system that eliminated unnecessary proactive event traffic.",
                "Helped scale SmartThings’ global event pipeline, a distributed system processing 400k events per second across 10M concurrent subscriptions.",
                "Drove infrastructure savings of $20k+ per month through Kafka consumer upgrades, cluster consolidation, and Cassandra replica optimization.",
                "Improved monitoring and alerting with Sumo Logic and Datadog, and contributed to incident response through 24/7 on-call support."
            ]
        },
        {
            title: 'Freelance Software Engineer',
            company: 'Fiverr',
            location: 'Remote',
            companyImage: '/experience/fiverr.svg',
            date: 'Mar 2020 - Jan 2022',
            description: 'Built custom game modifications and multiplayer systems for clients, focused on gameplay changes, networking, and technical problem-solving.',
            achievements: [
                "Developed custom game-altering mods for clients based on requested features and gameplay changes.",
                "Implemented client-server networking systems to handle inventory synchronization across multiple connected players.",
                "Built A* pathfinding logic to validate connections before performing network operations.",
                "Delivered tailored freelance projects through Fiverr and received strong client feedback."
            ]
        },
        {
            title: 'Software Engineer',
            company: 'Eagle Path Express LLC',
            location: 'On-site',
            companyImage: '/experience/eaglepathexpress.svg',
            date: 'Feb 2018 - Mar 2020',
            description: 'Built and maintained internal software for freight operations, carrier management, and day-to-day logistics workflows.',
            achievements: [
                "Developed and maintained a commercial freight management portal using React, Java, Spring Boot, and GraphQL.",
                "Improved operational efficiency by 60% by moving core freight workflows into an in-house platform.",
                "Integrated with partner APIs to streamline cross-system operations and reduce time spent on external broker software.",
                "Built features for load management, driver tracking, invoicing, and other daily freight operations.",
                "Reviewed pull requests with a focus on code quality, best practices, and documentation.",
                "Wrote tests and automated deployment scripts to improve production reliability and team workflow."
            ]
        }
    ]
};