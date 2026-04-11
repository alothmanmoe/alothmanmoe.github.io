'use client'

import React, {useEffect, useRef, useState} from 'react'
import {motion, useScroll, useTransform} from 'motion/react'
import Image from "next/image";
import {siteConfig} from "@/config/SiteConfig";

interface ExperienceProps {
    title: string
    company: string
    location: string
    companyImage: string
    date: string
    description: string
    achievements: string[]
}

const AnimatedBackground = () => (
    <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"/>
        <div className="absolute top-60 left-20 w-20 h-20 bg-blue-500/20 rounded-lg rotate-45 animate-bounce"/>
        <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-primary/15 rounded-full animate-ping"/>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-400/10 rounded-lg rotate-12 float-animation"/>

        <div
            className="absolute top-1/3 right-1/2 translate-x-1/2 w-96 h-96 bg-linear-to-r from-primary/20 via-blue-500/10 to-transparent rounded-full blur-3xl"/>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-linear-to-l from-blue-400/15 via-primary/10 to-transparent rounded-full blur-2xl"/>
    </div>
)

const ExperienceItem = ({item}: { item: ExperienceProps }) => (
    <div className="space-y-6">
        <div className="flex items-center gap-4">
            <Image
                src={item.companyImage}
                alt={`${item.company} Logo`}
                width={48}
                height={48}
                className="rounded-md shadow bg-muted p-1"
            />
            <div>
                <h3 title={item.title} className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                    {item.company} • {item.location}
                </p>
                <p className="text-sm text-muted-foreground">{item.date}</p>
            </div>
        </div>

        <p className="text-sm text-muted-foreground">{item.description}</p>

        <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
            {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
            ))}
        </ul>
    </div>
)

const Timeline = () => {
    const ref = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        const updateHeight = () => {
            if (!ref.current) return
            requestAnimationFrame(() => {
                setHeight(ref.current?.getBoundingClientRect().height || 0)
            })
        }

        if (typeof ResizeObserver !== 'undefined') {
            const resizeObserver = new ResizeObserver(updateHeight)
            if (ref.current) {
                resizeObserver.observe(ref.current)
            }
            return () => resizeObserver.disconnect()
        }

        window.addEventListener('resize', updateHeight)
        return () => window.removeEventListener('resize', updateHeight)
    }, [])

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ['start 10%', 'end 50%'],
    })

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

    return (
        <div className="w-full font-sans md:px-10" ref={containerRef}>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {siteConfig.experience.map((item) => (
                    <div key={item.date} className="flex justify-start pt-10 first:pt-0 md:pt-40 md:first:pt-0 md:gap-10">
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div
                                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"/>
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                                {item.date}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                {item.date}
                            </h3>
                            <ExperienceItem key={item.title} item={item}/>
                        </div>
                    </div>
                ))}
                <div
                    data-testid="timeline-line-container"
                    style={{
                        height: height + 'px',
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        data-testid="motion-div"
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-0.5 bg-linear-to-t from-purple-500 via-blue-500 to-transparent from-0% via-10% rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}

export function Experience() {
    return (
        <section
            id="experience"
            className="relative py-20 text-foreground transition-colors overflow-hidden"
        >
            <AnimatedBackground/>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <h1
                        title="Professional Experience"
                        className="text-4xl sm:text-5xl font-bold tracking-tight bg-linear-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent mb-4"
                    >
                        Professional Experience
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Highlights of my career and the impact I’ve made.
                    </p>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="relative w-full"
                >
                    <Timeline />
                </motion.div>
            </div>
        </section>
    )
}