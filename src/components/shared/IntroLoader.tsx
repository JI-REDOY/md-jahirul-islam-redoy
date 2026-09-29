"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const IntroLoader = () => {
    const [show, setShow] = useState(true);
    const [phase, setPhase] = useState<"enter" | "slide" | "fade">("enter");
    const [targetStyle, setTargetStyle] = useState<React.CSSProperties>({});
    const { mode } = useTheme();
    const logo = mode === "dark" ? "/whiteLogo.png" : "/blackLogo.jpg";

    const wrapperRef = useRef<HTMLDivElement>(null);
    const logoIconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const shown = sessionStorage.getItem("intro-shown");
        if (shown) {
            setShow(false);
            return;
        }

        const enterTimer = setTimeout(() => {
            requestAnimationFrame(() => {
                const navbarLogo = document.querySelector(
                    "[data-navbar-logo]"
                ) as HTMLElement;

                const navImage = navbarLogo?.querySelector(
                    "img"
                ) as HTMLElement;

                if (navImage && logoIconRef.current) {
                    const navRect = navImage.getBoundingClientRect();
                    const logoRect = logoIconRef.current.getBoundingClientRect();

                    const scale = navRect.width / logoRect.width;

                    // Center-to-center translate
                    const deltaX =
                        navRect.left +
                        navRect.width / 2 -
                        (logoRect.left + logoRect.width / 2);
                    const deltaY =
                        navRect.top +
                        navRect.height / 2 -
                        (logoRect.top + logoRect.height / 2);

                    const Y_OFFSET = -22; // pixels — negative = up, positive = down

                    setTargetStyle({
                        transform: `translate(${deltaX}px, ${deltaY + Y_OFFSET}px) scale(${scale})`,
                        transformOrigin: "center center",
                    });
                }

                setPhase("slide");

                const fadeTimer = setTimeout(() => {
                    setPhase("fade");
                }, 900);

                const hideTimer = setTimeout(() => {
                    setShow(false);
                    sessionStorage.setItem("intro-shown", "true");
                }, 1500);

                return () => {
                    clearTimeout(fadeTimer);
                    clearTimeout(hideTimer);
                };
            });
        }, 900);

        return () => clearTimeout(enterTimer);
    }, []);

    if (!show) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg-primary)] transition-opacity duration-500 ${phase === "fade" ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            aria-hidden="true"
        >
            {/* Glow */}
            <div
                className={`absolute h-72 w-72 rounded-full blur-[120px] transition-all duration-700 ${phase === "enter"
                    ? "opacity-30 scale-100"
                    : "opacity-0 scale-50"
                    }`}
                style={{ backgroundColor: "var(--accent)" }}
            />

            {/* Logo wrapper */}
            <div
                ref={wrapperRef}
                className={`flex flex-col items-center gap-5 transition-all ${phase === "enter"
                    ? "duration-700 ease-out"
                    : "duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
                    }`}
                style={
                    phase === "slide" || phase === "fade" ? targetStyle : {}
                }
            >
                {/* Logo Icon */}
                <div
                    ref={logoIconRef}
                    className="flex h-28 w-28 items-center justify-center"
                >
                    <Image
                        src={logo}
                        alt="JI Redoy"
                        width={112}
                        height={112}
                        priority
                        className="h-full w-full object-contain"
                    />
                </div>

                {/* Brand Text */}
                <span
                    className={`font-heading text-3xl font-bold uppercase tracking-widest text-[var(--text-primary)] transition-opacity duration-300 sm:text-4xl ${phase === "slide" || phase === "fade"
                        ? "opacity-0"
                        : "opacity-100"
                        }`}
                >
                    JI <span className="text-accent">REDOY</span>
                </span>
            </div>
        </div>
    );
};

export default IntroLoader;