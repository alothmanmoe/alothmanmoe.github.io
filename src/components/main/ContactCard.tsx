import {motion} from "motion/react"
import {Variants} from "motion";
import {siteConfig} from "@/config/SiteConfig";

const cardVariants: Variants = {
    hidden: {opacity: 0, y: 50, scale: 0.95},
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {duration: 0.6, ease: 'easeOut'}
    },
    hover: {
        scale: 1.02,
        transition: {duration: 0.3}
    }
}

const AnimatedBackground = () => (
    <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-12 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"/>
        <div className="absolute top-60 right-16 w-20 h-20 bg-blue-500/20 rounded-lg rotate-45 animate-bounce"/>
        <div className="absolute bottom-40 left-1/3 w-16 h-16 bg-primary/15 rounded-full animate-ping"/>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-blue-400/10 rounded-lg rotate-12 float-animation"/>
    </div>
)

export function ContactCard() {
    return (
        <section
            id="contact"
            className="relative py-20 text-foreground transition-colors overflow-hidden"
        >
            <AnimatedBackground/>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto flex flex-col items-center justify-center bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-10 shadow-2xl"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                >
                    <h2 title="Connect With Me" className="text-4xl font-extrabold bg-linear-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent">
                        Connect With Me
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-base pt-5">
                        If you’re reaching out about an opportunity or simply want to connect, I’d be happy to hear from you.
                    </p>

                    <div className="flex items-center gap-3 pt-10">
                        {siteConfig.contact.map((item) => (
                            <a
                                key={`contact-${item.label}`}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-card/60 backdrop-blur-sm border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}