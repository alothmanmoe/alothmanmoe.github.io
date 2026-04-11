'use client';

import {IntroHeader} from "@/components/main/IntroHeader";
import {Skills} from "@/components/main/Skills";
import {Resume} from "@/components/main/Resume";

export default function Home() {

    return (
        <div className="min-h-screen min-w-screen">
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)] rotate-45 scale-150 origin-center" />
            </div>

            <IntroHeader />
            <Skills />
            <Resume />
        </div>
    );
}
