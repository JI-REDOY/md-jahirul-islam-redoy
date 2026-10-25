"use client"; // স্টেট ব্যবহারের জন্য এটি যোগ করতে হবে

import React, { useState } from "react";
import Link from "next/link";
import { aboutData } from "@/data/about";

const infoIcons: Record<string, React.ReactNode> = {
    location: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    ),
    briefcase: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    ),
    graduation: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
    ),
    mail: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    ),
};

const About = () => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false); // মডাল স্টেট

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

                    {/* Hobbies & Interests */}
                    <div className="mt-2 border-l-2 border-accent pl-4">
                        <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                            <strong className="text-[var(--text-primary)]">Outside of Coding:</strong> When I'm not writing code, I love playing cricket, exploring new tech trends, and reading tech blogs. I also enjoy traveling and discovering new places.
                        </p>
                    </div>
                </div>

                {/* Right — Info Card + CTA */}
                <div className="flex flex-col gap-6">
                    
                    {/* Premium Info Card */}
                    <div className="card-dark relative overflow-hidden flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 backdrop-blur-sm">
                        
                        {/* Top Glowing Border Effect */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50"></div>

                        <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] sm:text-xl">
                            Quick Info
                        </h3>
                        
                        <div className="flex flex-col gap-5">
                            {aboutData.info.map((item) => {
                                const values = item.value.split('\n');

                                return (
                                    <div key={item.label} className="flex items-start gap-3">
                                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-accent">
                                            {infoIcons[item.icon]}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                                                {item.label}
                                            </span>
                                            
                                            <span className="text-sm font-semibold text-[var(--text-primary)]">
                                                {values[0]}
                                            </span>
                                            
                                            {values[1] && (
                                                <span className="text-xs font-medium text-[var(--text-secondary)]">
                                                    {values[1]}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                        
                        {/* NEW: View Details Button */}
                        <button
                            onClick={() => setIsDetailsOpen(true)}
                            className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-accent sm:px-6 sm:py-3 sm:text-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 sm:h-4 sm:w-4">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="16" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                            </svg>
                            View Details
                        </button>

                        {aboutData.resumeUrl && (
                            <a href={aboutData.resumeUrl} download="Jahirul_Islam_Redoy_Resume.pdf" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-opacity hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 sm:h-4 sm:w-4">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Resume
                            </a>
                        )}
                        <Link href={`mailto:${aboutData.email}`} className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-accent sm:px-6 sm:py-3 sm:text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 sm:h-4 sm:w-4">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Hire Me
                        </Link>
                    </div>
                </div>
            </div>

            {/* 🌟 Education & Experience Details Modal 🌟 */}
            {isDetailsOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--bg-secondary)] p-6 shadow-2xl border border-[var(--border-color)]">
                        
                        <button 
                            onClick={() => setIsDetailsOpen(false)}
                            className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-accent"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h2 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-6 pr-8">
                            Education & Experience
                        </h2>
                        
                        {/* Education Section */}
                        <div className="mb-6">
                            <h3 className="text-sm font-bold text-accent uppercase mb-3 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                                Education
                            </h3>
                            <div className="flex flex-col gap-4">
                                <div className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-color)]">
                                    <h4 className="font-bold text-sm text-[var(--text-primary)]">BSc in CSE</h4>
                                    <p className="text-xs text-[var(--text-secondary)]">Bangladesh University (2022 – 2026)</p>
                                    <p className="text-xs font-semibold text-accent mt-1">CGPA: 3.19 / 4.00</p>
                                </div>
                                <div className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-color)]">
                                    <h4 className="font-bold text-sm text-[var(--text-primary)]">HSC in Science</h4>
                                    <p className="text-xs text-[var(--text-secondary)]">Govt. Science College, Tejgaon (2019 – 2021)</p>
                                    <p className="text-xs font-semibold text-accent mt-1">GPA: 5.00 / 5.00</p>
                                </div>
                            </div>
                        </div>

                        {/* Experience Section */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold text-accent uppercase mb-3 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                                Experience
                            </h3>
                            <div className="flex flex-col gap-4">
                                <div className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-color)]">
                                    <h4 className="font-bold text-sm text-[var(--text-primary)]">Computer Operator</h4>
                                    <p className="text-xs text-[var(--text-secondary)] mb-2">Unique Library & Stationery (2025 – 2026)</p>
                                    <ul className="list-disc pl-4 text-xs text-[var(--text-secondary)] space-y-1">
                                        <li>Handled daily data entry, documentation, and customer service.</li>
                                        <li>Operated office software and managed inventory records.</li>
                                    </ul>
                                </div>
                                <div className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-color)]">
                                    <h4 className="font-bold text-sm text-[var(--text-primary)]">Mobile Mechanic (Part-time)</h4>
                                    <p className="text-xs text-[var(--text-secondary)] mb-2">Bismillah Solutions BD (2021 – 2024)</p>
                                    <ul className="list-disc pl-4 text-xs text-[var(--text-secondary)] space-y-1">
                                        <li>Diagnosed and repaired hardware issues for diverse customers.</li>
                                        <li>Managed multiple repair jobs simultaneously under tight deadlines.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={() => setIsDetailsOpen(false)}
                            className="w-full rounded-full bg-accent py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default About;