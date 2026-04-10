'use client';
import {motion} from "motion/react"
import {useEffect, useState} from "react";
import {siteConfig} from "@/config/SiteConfig";
import Image from 'next/image'

import {useInView} from 'react-intersection-observer'

const AnimatedBackground = () => (
    <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"/>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/20 rounded-lg rotate-45 animate-bounce"/>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-primary/15 rounded-full animate-ping"/>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-blue-400/10 rounded-lg rotate-12 float-animation"/>

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-linear-to-r from-primary/20 via-blue-500/10 to-transparent rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-linear-to-l from-blue-400/15 via-primary/10 to-transparent rounded-full blur-2xl"/>
    </div>
)

const Skill = ({skill, index}: { skill: { name: string, image: string }, index: number }) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    return (
        <motion.div
            title={skill.name}
            className="group relative flex flex-col items-center p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl"
            role="listitem"
            aria-label={skill.name}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: index * 0.05}}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
        >
            <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-t from-primary/20 via-blue-500/10 to-transparent blur-sm"/>
            <div className="relative flex flex-col items-center gap-3 z-10">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    variants={{
                        hidden: {opacity: 0},
                        visible: {opacity: 1}
                    }}
                    animate={inView ? 'visible' : 'hidden'}
                    custom={index}
                    transition={{delay: index * 0.2}}
                    className="group-hover:scale-110 transition-transform duration-300"
                >
                    <Image className="w-8 h-8" src={skill.image} width={32} height={32} alt="skill image"/>
                </motion.div>

                <span className="text-xs font-medium text-foreground text-center leading-tight line-clamp-2">
                  {skill.name}
                </span>
            </div>
            <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-300"/>
        </motion.div>
    )
}

export function Skills() {
    const [showAll, setShowAll] = useState(false)
    const [maxItemsToShow, setMaxItemsToShow] = useState(12)

    useEffect(() => {
        // This function will run only on the client side
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                if (window.innerWidth > 768) {
                    setMaxItemsToShow(12)
                } else if (window.innerWidth <= 768 && window.innerWidth > 425) {
                    setMaxItemsToShow(8)
                } else {
                    setMaxItemsToShow(6)
                }
            }
        }

        // Set initial value
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const skills = showAll ? siteConfig.skills : siteConfig.skills.slice(0, maxItemsToShow)

    return (
        <section
            id="skills"
            className="relative flex flex-col items-center justify-center gap-12 py-20 px-4 sm:px-8 min-h-150 overflow-hidden"
        >
            <AnimatedBackground/>

            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8}}
                className="text-center max-w-3xl relative z-10"
            >
                <h2
                    id="skills-heading"
                    title="Technical Skills"
                    className="text-4xl sm:text-5xl font-bold tracking-tight bg-linear-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent mb-4"
                >
                    Technical Skills
                </h2>
                <p className="text-lg text-muted-foreground font-medium">
                    A look at the languages, tools, and platforms I work with most.
                </p>
            </motion.div>

            <div className="w-full max-w-6xl relative z-10">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    {skills.map((skill, index) => (
                        <Skill key={`skill-${skill.name}`} skill={skill} index={index}/>
                    ))}
                </motion.div>

                {siteConfig.skills.length > maxItemsToShow && (
                    <motion.div
                        initial={{opacity: 0, y: 10}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.4}}
                        className="mt-12 text-center"
                    >
                        <button
                            title={showAll ? 'Show Less Skills' : `Show All Skills`}
                            onClick={() => setShowAll(!showAll)}
                            className="group relative overflow-hidden bg-linear-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="relative z-10">
                                {showAll ? 'Show Less' : `Show All (${siteConfig.skills.length})`}
                            </div>
                            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
                        </button>
                    </motion.div>
                )}

                <motion.p
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: 0.6}}
                    className="mt-12 text-center text-base text-muted-foreground"
                >
                    …and plenty more technologies I'm learning & mastering every day.
                </motion.p>
            </div>
        </section>
    )
}