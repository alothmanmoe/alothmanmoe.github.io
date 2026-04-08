'use client';

import {ReactNode, useEffect, useRef, useState} from "react";
import {AnimatePresence, motion, useMotionValueEvent, useScroll} from "motion/react";
import Image from "next/image";
import {siteConfig} from "@/config/SiteConfig";
import {
    FullNavbarBodyProps,
    FullNavbarItemsProps,
    MobileNavbarBodyProps,
    MobileNavbarMenuProps,
    MobileNavbarToggleProps
} from "@/components/models/NavbarModels";
import {FaBars, FaEnvelope, FaTimes} from "react-icons/fa";
import Link from "next/link";

const NavbarBorder = ({visible}: { visible: boolean }) => {
    return (
        <div className="flex items-center justify-center">
            {
                visible &&
                <hr className="h-1/2 w-[90vw] rounded-full border-gray-500 bg-linear-to-r from-primary-600 to-primary-800 shadow-md"/>
            }
        </div>
    )
}

const FullNavbarBody = ({children, visible}: FullNavbarBodyProps) => (
    <motion.div
        animate={{
            backdropFilter: visible ? 'blur(10px)' : 'none',
            boxShadow: visible
                ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
                : 'none',
            width: visible ? '40%' : '100%',
            y: visible ? 20 : 0
        }}
        transition={{
            type: 'spring',
            stiffness: 200,
            damping: 50
        }}
        style={{
            minWidth: '200px'
        }}
        className={`hidden relative z-60 mx-auto w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex ${visible ? 'bg-white/80' : ''}`}
    >
        {children}
    </motion.div>
)

const NavbarAvatar = ({minimized}: { minimized: boolean }) => (
    <div className="flex items-center space-x-3">
        <Image
            src={siteConfig.profile.avatarSrcImg}
            alt={siteConfig.profile.fullName}
            width={32}
            height={32}
            className="rounded-full"
        />
        {
            !minimized && (
                <span title={siteConfig.profile.fullName} className="text-lg font-bold">
                    {siteConfig.profile.fullName}
                </span>
            )
        }
    </div>
)

const FullNavbarItems = ({routes, minimized, onItemClick}: FullNavbarItemsProps) => {
    const [hovered, setHovered] = useState<number | null>(null)

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className="hidden absolute inset-0 flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2"
        >
            {routes.map((route, index) => (
                <a
                    key={`navbar-route-${route.name}`}
                    href={route.link}
                    title={`Navigate to ${route.name}`}
                    onMouseEnter={() => setHovered(index)}
                    onClick={(e) => {
                        e.preventDefault()
                        onItemClick?.()
                        document.getElementById(route.link.slice(1))?.scrollIntoView({behavior: 'smooth'})
                    }}
                    className="relative px-4 py-2 text-neutral-600"
                >
                    {
                        hovered == index && (
                            <motion.div className="absolute inset-0 h-full w-full rounded-full bg-gray-100"/>
                        )
                    }

                    <div className="relative z-20 flex items-center justify-between gap-2">
                        {route.icon} {!minimized && <span className="font-semibold">{route.name}</span>}
                    </div>
                </a>
            ))}
        </motion.div>
    )
}

const FullNavbarContact = () => (
    <div className="flex items-center gap-2">
        <button
            title="Contact Me"
            className="z-50 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium h-9 px-4 py-2 transition-colors hover:bg-primary/90"
            onClick={() => {
                document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})
            }}
        >
            <FaEnvelope/>
        </button>
    </div>
)

const MobileNavbarBody = ({children, visible}: MobileNavbarBodyProps) => (
    <motion.div
        animate={{
            backdropFilter: visible ? 'blur(10px)' : 'none',
            boxShadow: visible
                ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
                : 'none',
            width: visible ? '90%' : '100%',
            paddingRight: visible ? '12px' : '0px',
            paddingLeft: visible ? '12px' : '0px',
            borderRadius: '2rem',
            y: visible ? 20 : 0,
        }}
        transition={{
            type: 'spring',
            stiffness: 200,
            damping: 50,
        }}
        className={`relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden ${visible ? 'bg-white/80' : ''}`}
    >
        {children}
    </motion.div>
)

const MobileNavbarHeader = ({children}: { children: ReactNode }) => (
    <div className="flex w-full flex-row items-center justify-between">
        {children}
    </div>
)

const MobileNavbarToggle = ({isOpen, onClick}: MobileNavbarToggleProps) => {
    return isOpen ? (
        <FaTimes
            title="Close mobile menu"
            className="text-black"
            onClick={onClick}
        />
    ) : (
        <FaBars
            title="Open mobile menu"
            data-testid="mobile-toggle"
            className="text-black"
            onClick={onClick}
        />
    )
}

const MobileNavbarMenu = ({children, isOpen}: MobileNavbarMenuProps) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            >
                {children}
            </motion.div>
        )}
    </AnimatePresence>
)

export function Navbar() {
    const [visible, setVisible] = useState<boolean>(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const ref = useRef<HTMLDivElement>(null)
    const {scrollY} = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50)
        // Run onScroll to set the initial state based on the current scroll position (eg, page refreshes already scrolled down)
        onScroll()
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setVisible(latest > 100)
    })

    return (
        <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            <motion.div
                ref={ref}
                className="w-full sticky inset-x-0 top-20 z-40 flex flex-col items-center justify-center gap-4 px-4 py-2"
            >
                <FullNavbarBody visible={visible}>
                    <NavbarAvatar minimized={isScrolled}/>
                    <FullNavbarItems routes={siteConfig.navbar.routes} minimized={isScrolled}/>
                    <FullNavbarContact/>
                </FullNavbarBody>

                <MobileNavbarBody visible={visible}>
                    <MobileNavbarHeader>
                        <NavbarAvatar minimized={isScrolled}/>
                        <MobileNavbarToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavbarHeader>

                    <MobileNavbarMenu isOpen={isMobileMenuOpen}>
                        {
                            siteConfig.navbar.routes.map(route => (
                                <Link
                                    key={`mobile-navbar-route-${route.name}`}
                                    href={route.link}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false)
                                        document.getElementById(route.link.slice(1))
                                            ?.scrollIntoView({behavior: 'smooth'})
                                    }}
                                    className="relative text-neutral-600 flex gap-2 items-center"
                                >
                                    {route.icon} <span>{route.name}</span>
                                </Link>
                            ))
                        }

                        <div className="flex w-full flex-col gap-4">
                            <button
                                title="Contact Me"
                                className="z-50 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium h-9 px-4 py-2 transition-colors hover:bg-primary/90"
                                onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                <FaEnvelope />
                            </button>
                        </div>
                    </MobileNavbarMenu>
                </MobileNavbarBody>
            </motion.div>
            <NavbarBorder visible={!isScrolled}/>
        </div>
    )
}