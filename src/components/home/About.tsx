import React from "react";
import Link from "next/link";
import { aboutData } from "@/data/about";

const infoIcons: Record<string, React.ReactNode> = {
    location: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    ),
    briefcase: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    ),
    graduation: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
    ),
    mail: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    ),
};

const About = () => {
    return (
        <section id="about" className="container-fitlog py-12 sm:py-16 lg:py-20">

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

                {/* Left — Bio */}
                <div className="flex flex-col gap-5">

                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">
                            Get to know me
                        </p>
                        <h2 className="font-heading mt-3 text-3xl font-bold uppercase text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                            About Me
                        </h2>
                    </div>

                    <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                        {aboutData.bio1}
                    </p>

                    <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                        {aboutData.bio2}
                    </p>

                </div>

                {/* Right — Info Card + CTA */}
                <div className="flex flex-col gap-6">

                    {/* Info Card */}
                    <div className="card-dark flex flex-col gap-4 p-5 sm:p-6">

                        <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] sm:text-xl">
                            Quick Info
                        </h3>

                        <div className="flex flex-col gap-3">

                            {aboutData.info.map((item) => {
                                return (
                                    <div
                                        key={item.label}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-accent">
                                            {infoIcons[item.icon]}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                                                {item.label}
                                            </span>
                                            <span className="text-sm font-medium text-[var(--text-primary)]">
                                                {item.value}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-3">

                        {aboutData.resumeUrl && (
                            <a
                                href={aboutData.resumeUrl}
                                download="Jahirul_Islam_Redoy_Resume.pdf"
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
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Resume
                            </a>
                        )}

                        <Link
                            href={`mailto:${aboutData.email}`}
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
                            Hire Me
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;