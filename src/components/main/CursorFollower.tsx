'use client';

import {useEffect, useState} from "react";

export function CursorFollower() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({x: e.clientX, y: e.clientY})
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div
            className="fixed pointer-events-none z-0 w-6 h-6 bg-primary/20 rounded-full blur-sm transition-all duration-300 ease-out"
            style={{
                left: mousePosition.x - 12,
                top: mousePosition.y - 12,
            }}
        />
    )
}