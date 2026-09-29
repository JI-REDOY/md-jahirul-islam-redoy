"use client";

import React from "react";

type FloatingIcon = {
    name: string;
    icon: string;
    size: number;
    top: string;
    left: string;
    delay: string;
    duration: string;
    rotateSpeed: string;
};

const icons: FloatingIcon[] = [
    { name: "React", icon: "react", size: 80, top: "10%", left: "5%", delay: "0s", duration: "25s", rotateSpeed: "60s" },
    { name: "Next.js", icon: "nextdotjs", size: 60, top: "70%", left: "8%", delay: "-5s", duration: "30s", rotateSpeed: "80s" },
    { name: "TypeScript", icon: "typescript", size: 70, top: "25%", left: "90%", delay: "-8s", duration: "28s", rotateSpeed: "70s" },
    { name: "JavaScript", icon: "javascript", size: 55, top: "80%", left: "85%", delay: "-3s", duration: "32s", rotateSpeed: "90s" },
    { name: "Tailwind CSS", icon: "tailwindcss", size: 65, top: "50%", left: "95%", delay: "-10s", duration: "26s", rotateSpeed: "75s" },
    { name: "Node.js", icon: "nodedotjs", size: 75, top: "15%", left: "75%", delay: "-6s", duration: "34s", rotateSpeed: "65s" },
    { name: "MongoDB", icon: "mongodb", size: 60, top: "60%", left: "15%", delay: "-12s", duration: "27s", rotateSpeed: "85s" },
    { name: "Git", icon: "git", size: 50, top: "40%", left: "3%", delay: "-4s", duration: "29s", rotateSpeed: "70s" },
    { name: "GitHub", icon: "github", size: 55, top: "85%", left: "50%", delay: "-9s", duration: "31s", rotateSpeed: "80s" },
    { name: "Vercel", icon: "vercel", size: 45, top: "5%", left: "40%", delay: "-2s", duration: "33s", rotateSpeed: "95s" },
];

const FloatingIcons = () => {
    return (
        <div
            className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
            aria-hidden="true"
        >
            {icons.map((item) => (
                <div
                    key={item.name}
                    className="absolute animate-float"
                    style={{
                        top: item.top,
                        left: item.left,
                        width: `${item.size}px`,
                        height: `${item.size}px`,
                        animationDuration: item.duration,
                        animationDelay: item.delay,
                    }}
                >
                    <div
                        className="h-full w-full animate-spin-slow"
                        style={{
                            animationDuration: item.rotateSpeed,
                            backgroundColor: "var(--accent)",
                            opacity: 0.06,
                            maskImage: `url(https://cdn.simpleicons.org/${item.icon})`,
                            WebkitMaskImage: `url(https://cdn.simpleicons.org/${item.icon})`,
                            maskSize: "contain",
                            WebkitMaskSize: "contain",
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default FloatingIcons;