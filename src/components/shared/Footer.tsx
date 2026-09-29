"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
    const { mode } = useTheme();
    const logo = mode === "dark" ? "/whiteLogo.png" : "/blackLogo.jpg";

    return (
        <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)] lg:fixed lg:bottom-0 lg:left-0 lg:right-0 lg:z-50 lg:bg-[var(--bg-primary)]/95 lg:backdrop-blur">

            <div className="container-fitlog flex flex-col items-center justify-between gap-4 py-8 sm:flex-row lg:py-4">

                {/* Left — Brand */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        key={mode}
                        src={logo}
                        alt="JI Redoy"
                        width={24}
                        height={24}
                        className="animate-logo-fade h-6 w-6 object-contain"
                    />
                    <span className="font-heading text-base font-bold tracking-wider text-[var(--text-primary)]">
                        JI <span className="text-accent">REDOY</span>
                    </span>
                </Link>

                {/* Right — Copyright */}
                <p className="text-center text-xs text-[var(--text-secondary)] sm:text-sm">
                    © 2026 JI Redoy — Built with Next.js & Tailwind CSS.
                </p>

            </div>

        </footer>
    );
};

export default Footer;