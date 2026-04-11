import {motion} from "motion/react"
import {siteConfig} from "@/config/SiteConfig";
import Image from 'next/image'
import {FaGithub} from "react-icons/fa";
import {Badge} from "@radix-ui/themes";

const AnimatedBackground = () => (
    <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-16 w-28 h-28 bg-primary/10 rounded-full blur-xl animate-pulse"/>
        <div className="absolute top-80 right-24 w-20 h-20 bg-blue-500/20 rounded-lg rotate-45 animate-bounce"/>
        <div className="absolute bottom-60 left-1/3 w-16 h-16 bg-primary/15 rounded-full animate-ping"/>
        <div className="absolute bottom-32 right-1/4 w-24 h-24 bg-blue-400/10 rounded-lg rotate-12 float-animation"/>

        <div
            className="absolute top-1/4 right-1/2 translate-x-1/2 w-96 h-96 bg-linear-to-r from-primary/20 via-blue-500/10 to-transparent rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-linear-to-l from-blue-400/15 via-primary/10 to-transparent rounded-full blur-2xl"/>
    </div>
)

export function Projects() {
    return (
        <section
            id="projects"
            className="relative py-20 overflow-hidden"
        >
            <AnimatedBackground/>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h1 title="My Projects"
                        className="text-4xl md:text-5xl font-bold bg-linear-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent mb-4 leading-[1.15] pb-1">
                        My Projects
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-3">
                        A look at the projects I’ve built and the kinds of problems I enjoy solving.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-6xl grid grid-cols-2 gap-4 md:auto-rows-[18rem] md:grid-cols-3 mx-auto [@media(max-width:425px)]:grid-cols-1">
                {siteConfig.projects.map((project, index) => (
                    <div
                        key={`project-${project.title}`}
                        className='hadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-4 transition duration-200 hover:shadow-xl hover:border-border glass-effect'
                    >
                        <div className="relative w-full h-full [@media(max-width:425px)]:min-h-36 min-h-24 rounded-xl overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                quality={80}
                                fill
                            />
                        </div>

                        <div className="transition duration-200 group-hover/bento:translate-x-2">
                            <div title={project.title} className="mt-2 mb-2 font-sans font-bold text-neutral-600">
                                {project.title}
                            </div>
                            <div className="font-sans text-xs font-normal text-neutral-600">
                                <div className="space-y-1 text-sm text-foreground">
                                    <p>{project.description}</p>
                                    <span className="inline-flex items-center justify-center border px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/40 gap-1 rounded-full">
                                        <a
                                            title={`View ${project.title} on GitHub`}
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1"
                                        >
                                            <FaGithub className="size-3" />
                                            GitHub
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}