import React from "react";
import Image from "next/image";
import Link from "next/link";
import TypingText from "./TypingText";
import { aboutData } from "@/data/about";

const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js Developer",
];

const Hero = () => {
    return (
        <section id="home" className="container-fitlog py-8 sm:py-10 lg:py-12">

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

                {/* Left — Content */}
                <div className="order-2 flex flex-col gap-6 lg:order-1">

                    <div className="flex flex-col gap-4">
                        <p className="text-sm font-medium text-accent sm:text-base">
                            Hello, I&apos;m
                        </p>

                        <h1 className="font-heading text-3xl font-bold uppercase leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                            MD JAHIRUL ISLAM{" "}
                            <span className="text-accent">REDOY</span>
                        </h1>

                        <div className="flex flex-wrap items-baseline gap-2 text-lg font-semibold text-[var(--text-primary)] sm:text-xl lg:text-2xl">
                            <span>I&apos;m a</span>
                            <TypingText
                                words={roles}
                                className="text-accent"
                            />
                        </div>
                    </div>

                    <p className="max-w-lg text-sm text-[var(--text-secondary)] sm:text-base">
                        Frontend Developer passionate about building clean, modern web
                        experiences with Next.js and React. I turn ideas into fast,
                        responsive interfaces that users love.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-3">

                        <Link
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-opacity hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                            >
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <polyline points="19 12 12 19 5 12" />
                            </svg>
                            View Projects
                        </Link>

                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-accent sm:px-6 sm:py-3 sm:text-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                            >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Contact Me
                        </Link>

                        {aboutData.resumeUrl && (
                            <a
                                href={aboutData.resumeUrl}
                                download="Jahirul_Islam_Redoy_Resume.pdf"
                                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-accent sm:px-6 sm:py-3 sm:text-sm"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Resume
                            </a>
                        )}

                    </div>
                </div>

                {/* Right — Profile Image with Subtle Glow */}
                <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                    <div className="relative w-full max-w-[220px] sm:max-w-[280px] lg:max-w-md">

                        {/* Subtle background glow */}
                        <div
                            className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-10 blur-[150px]"
                            style={{ backgroundColor: "var(--accent)" }}
                            aria-hidden="true"
                        />

                        {/* Profile Image */}
                        <Image
                            src="/portfolioImg.png"
                            alt="MD Jahirul Islam Redoy"
                            width={500}
                            height={600}
                            priority
                            className="relative h-auto w-full object-cover"
                        />

                    </div>
                </div>

            </div>

        </section>
    );
};

export default Hero;