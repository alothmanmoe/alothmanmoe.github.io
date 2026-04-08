import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import {Navbar} from "@/components/main/Navbar";
import "@/styles/globals.css"
import "@radix-ui/themes/styles.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Moe Alothman",
    description: "Backend engineer focused on distributed systems, APIs, and reliable production software.",
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">
            <Navbar />
            <main role="main">
                {children}
            </main>
        </body>
        </html>
    );
}
