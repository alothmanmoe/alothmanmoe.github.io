'use client';

import {motion} from "motion/react";
import {siteConfig} from "@/config/SiteConfig";
import {trackEvent} from "@/utils/gtag";

const containerVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.2,
        }
    }
}

const childVariants = {
    hidden: {opacity: 0, y: 10},
    visible: {opacity: 1, y: 0, transition: {duration: 0.4}},
}

export function Footer() {

    return (
        <footer
            className="relative w-full px-6 py-12 mt-20 bg-background text-foreground border-t border-border transition-colors flex justify-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-purple-500 via-blue-500 to-cyan-500"/>

            <div className="max-w-7xl">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="space-y-4" variants={childVariants}>
                        <h1 title={siteConfig.profile.fullName}
                            className="text-2xl font-extrabold bg-clip-text">{siteConfig.profile.fullName}</h1>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {siteConfig.profile.metadata.description}
                        </p>
                    </motion.div>

                    <motion.div className="space-y-4" variants={childVariants}>
                        <h2 title="Quick Links"
                            className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Quick Links
                        </h2>
                        <ul className="space-y-2 text-sm">
                            {siteConfig.footer.quickLinks.map((link) => (
                                <li key={`footer-ref-${link.name}`}>
                                    <a
                                        href={link.url}
                                        className="hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                                        aria-label={`Navigate to ${link.name} section`}
                                        onClick={() => trackEvent("quick_link_click", {
                                            link_label: `${link.name} Footer Button`,
                                            destination: link.url
                                        })}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div className="space-y-4" variants={childVariants}>
                        <h2
                            title="Connect"
                            className="text-sm font-semibold text-muted-foreground uppercase tracking-wider"
                        >
                            Connect
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {siteConfig.footer.socialLinks.map((social) => (
                                <motion.a
                                    key={`footer-social-${social.label}`}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 bg-muted rounded-full hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                                    whileHover={{scale: 1.2, rotate: 5}}
                                    aria-label={`Visit my ${social.label} profile`}
                                    onClick={() => trackEvent("contact_click", {
                                        link_label: `${social.label} Footer Button`,
                                        destination_uri: social.url
                                    })}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    )
}