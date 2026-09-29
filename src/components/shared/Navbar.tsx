"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import ModeToggle from "./ModeToggle";
import ColorDropdown from "./ColorDropdown";
import VisitCounter from "./VisitCounter";

const navLinks = [
    { label: "Home", href: "/", sectionId: "home" },
    { label: "Projects", href: "/#projects", sectionId: "projects" },
    { label: "Skills", href: "/#skills", sectionId: "skills" },
    { label: "About", href: "/#about", sectionId: "about" },
    { label: "Contact", href: "/#contact", sectionId: "contact" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const isClickScrolling = useRef(false);

    const { mode } = useTheme();
    const logo = mode === "dark" ? "/whiteLogo.png" : "/blackLogo.jpg";

    useEffect(() => {
        const sections = navLinks
            .map((link) => document.getElementById(link.sectionId))
            .filter((el): el is HTMLElement => el !== null);

        if (sections.length === 0) return;

        const handleScroll = () => {
            if (isClickScrolling.current) return;

            const scrollPosition = window.scrollY + 150;

            const isAtBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 100;

            if (isAtBottom) {
                setActiveSection("contact");
                return;
            }

            let currentSection = "home";
            let closestDistance = Infinity;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const distance = Math.abs(scrollPosition - sectionTop);

                if (sectionTop <= scrollPosition && distance < closestDistance) {
                    closestDistance = distance;
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (sectionId: string) => {
        setActiveSection(sectionId);
        setMenuOpen(false);

        isClickScrolling.current = true;
        setTimeout(() => {
            isClickScrolling.current = false;
        }, 800);
    };

    return (
        <nav className="fixed left-0 right-0 top-0 z-[100] w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)]/95 backdrop-blur">

            <div className="container-fitlog flex h-16 items-center justify-between">

                {/* Logo + Brand */}
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => handleLinkClick("home")}
                    data-navbar-logo
                >
                    <Image
                        key={mode}
                        src={logo}
                        alt="JI Redoy"
                        width={28}
                        height={28}
                        className="animate-logo-fade h-7 w-7 object-contain"
                    />
                    <span className="font-heading text-lg font-bold tracking-wider text-[var(--text-primary)] sm:text-xl">
                        JI <span className="text-accent">REDOY</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.sectionId;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => handleLinkClick(link.sectionId)}
                                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                                    isActive
                                        ? "bg-[var(--accent-soft)] text-accent"
                                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Side — Desktop */}
                <div className="hidden items-center gap-3 lg:flex">
                    <VisitCounter />
                    <ModeToggle />
                    <ColorDropdown />
                </div>

                {/* Right Side — Mobile */}
                <div className="flex items-center gap-2 lg:hidden">
                    <VisitCounter />
                    <ModeToggle />
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border-color)] text-[var(--text-primary)]"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="max-h-[70vh] overflow-y-auto border-t border-[var(--border-color)] bg-[var(--bg-primary)] lg:hidden">
                    <div className="container-fitlog flex flex-col gap-3 py-4">

                        {navLinks.map((link) => {
                            const isActive = activeSection === link.sectionId;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => handleLinkClick(link.sectionId)}
                                    className={`inline-block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                        isActive
                                            ? "bg-[var(--accent-soft)] text-accent"
                                            : "text-[var(--text-secondary)]"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        <div className="my-2 border-t border-[var(--border-color)]"></div>

                        <div className="w-full px-1">
                            <ColorDropdown />
                        </div>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;