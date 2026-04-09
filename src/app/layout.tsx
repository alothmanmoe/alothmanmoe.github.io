import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import {Navbar} from "@/components/main/Navbar";
import {siteConfig} from "@/config/SiteConfig";
import "@/styles/globals.css"
import "@radix-ui/themes/styles.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: `${siteConfig.profile.fullName} - ${siteConfig.profile.metadata.role}`,
    description: siteConfig.profile.metadata.description,
    metadataBase: new URL(siteConfig.baseUrl),
    keywords: siteConfig.profile.metadata.keywords,
    authors: [{name: siteConfig.profile.fullName}],
    creator: siteConfig.profile.fullName,
    publisher: siteConfig.profile.fullName,
    category: siteConfig.profile.metadata.category,
    alternates: {
        canonical: "/"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.baseUrl,
        siteName: siteConfig.siteName,
        title: `${siteConfig.profile.fullName} - ${siteConfig.profile.metadata.role}`,
        description: siteConfig.profile.metadata.description,
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Moe's portfolio website preview"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.profile.fullName} - ${siteConfig.profile.metadata.role}`,
        description: siteConfig.profile.metadata.description,
        images: ["/og-image.png"]
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico"
    }
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">
        <Navbar/>
        <main role="main">
            {children}
        </main>
        </body>
        </html>
    );
}
