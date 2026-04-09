'use client';
import {motion} from "motion/react";
import {siteConfig} from "@/config/SiteConfig";
import {FaRocket} from "react-icons/fa";

const BackgroundGrid = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Faded tech grid */}
        <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_85%)] rotate-45 scale-150 origin-center"/>

        {/* Large ambient glows */}
        <div className="absolute -top-24 -left-32 h-104 w-104 rounded-full bg-primary/12 blur-3xl"/>
        <div className="absolute top-[18%] -right-24 h-88 w-88 rounded-full bg-blue-500/12 blur-3xl"/>
        <div className="absolute -bottom-32 left-[18%] h-96 w-[24rem] rounded-full bg-blue-400/10 blur-3xl"/>

        {/* Center beam / hero energy */}
        <div
            className="absolute left-1/2 top-0 h-full w-lg -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,rgba(59,130,246,0.06)_28%,transparent_68%)]"/>

        {/* Framed geometry accents */}
        <div
            className="absolute left-[8%] top-[16%] h-40 w-40 rotate-12 rounded-3xl border border-primary/15 bg-primary/5 backdrop-blur-sm float-animation"/>
        <div
            className="absolute right-[10%] top-[24%] h-28 w-28 rotate-45 rounded-2xl border border-blue-400/20 bg-blue-500/10 animate-pulse"/>
        <div
            className="absolute bottom-[18%] right-[20%] h-44 w-44 -rotate-12 rounded-full border border-primary/15 bg-primary/5 float-animation"/>
        <div
            className="absolute bottom-[22%] left-[14%] h-20 w-20 rotate-12 rounded-xl border border-blue-400/20 bg-blue-400/10 animate-pulse"/>

        {/* Subtle connection lines */}
        <div
            className="absolute left-[18%] top-[30%] h-px w-88 rotate-18 bg-linear-to-r from-transparent via-primary/25 to-transparent"/>
        <div
            className="absolute right-[18%] bottom-[28%] h-px w-[18rem] -rotate-24 bg-linear-to-r from-transparent via-blue-400/25 to-transparent"/>

        {/* Floating highlight dots */}
        <div
            className="absolute left-[22%] top-[24%] h-2.5 w-2.5 rounded-full bg-primary/70 shadow-[0_0_20px_rgba(59,130,246,0.45)] animate-ping"/>
        <div
            className="absolute left-[32%] bottom-[26%] h-2 w-2 rounded-full bg-blue-400/70 shadow-[0_0_18px_rgba(96,165,250,0.4)] float-animation"/>
        <div
            className="absolute right-[26%] top-[34%] h-2.5 w-2.5 rounded-full bg-primary/60 shadow-[0_0_18px_rgba(59,130,246,0.4)] animate-pulse"/>
        <div
            className="absolute right-[16%] bottom-[20%] h-3 w-3 rounded-full bg-blue-500/60 shadow-[0_0_20px_rgba(59,130,246,0.4)] float-animation"/>

        {/* Bottom glow shelf */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-primary/8 via-blue-500/4 to-transparent"/>
    </div>
)

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
}

const childVariants = {
    hidden: {opacity: 0, y: 30},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8
        }
    }
}

export function IntroHeader() {
    return (
        <section
            id="about"
            className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden"
        >
            <BackgroundGrid/>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="relative z-10 flex flex-col items-center justify-center text-center gap-8 px-4 sm:px-8 lg:px-16 w-full max-w-6xl mx-auto pt-20 sm:pt-24 lg:pt-28"
            >
                <motion.div variants={childVariants} className="space-y-6 flex flex-col items-center">
                    <h1 title='name' className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight">
                            <span title='name' className="bg-linear-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent">
                                {siteConfig.profile.fullName}
                            </span>
                    </h1>

                    <div className="relative w-full bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-2xl">
                        <h2
                            title={siteConfig.profile.position}
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent mb-3"
                        >
                            {siteConfig.profile.position}
                        </h2>
                        <div className="w-40 h-1 bg-linear-to-r from-primary to-blue-500 rounded-full mx-auto"/>
                    </div>

                    <motion.p
                        variants={childVariants}
                        className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        Building software that feels simple on the surface and solid underneath.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={childVariants}
                    className="flex flex-col sm:flex-row items-center gap-4 mt-8 mb-16"
                >
                    <button
                        className="group relative overflow-hidden bg-linear-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:cursor-pointer"
                        onClick={() => {
                            document.getElementById(siteConfig.navbar.routes[0].link.slice(1))?.scrollIntoView({behavior: 'smooth'})
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <FaRocket className="w-5 h-5 group-hover:animate-bounce"/>
                            Jump In
                            <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"/>
                        </div>
                        <div
                            className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    )
}