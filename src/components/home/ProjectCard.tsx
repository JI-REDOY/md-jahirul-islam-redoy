"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project.types";

const ProjectCard = ({ project }: { project: Project }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="card-dark flex h-full w-[280px] shrink-0 flex-col overflow-hidden sm:w-[320px] lg:w-[360px]">

                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-secondary)]">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="360px"
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-12 w-12 text-[var(--text-muted)]"
                            >
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="min-h-[56px] font-heading text-lg font-bold uppercase text-[var(--text-primary)] sm:text-xl sm:min-h-[60px]">
                        {project.title}
                    </h3>

                    <p className="line-clamp-3 text-xs text-[var(--text-secondary)] sm:text-sm">
                        {project.description}
                    </p>

                    {project.tech.length > 0 && (
                        <div className="flex min-h-[42px] flex-wrap content-start gap-1.5">
                            {project.tech.map((tech) => {
                                return (
                                    <span
                                        key={tech}
                                        className="rounded-sm bg-[var(--accent-soft)] px-2 py-0.5 text-[10px] font-semibold text-accent"
                                    >
                                        {tech}
                                    </span>
                                );
                            })}
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                        
                        {/* Details Button (Fixed for both themes) */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-accent"
                        >
                            Details
                        </button>

                        {project.liveUrl && (
                            <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-black transition-opacity hover:opacity-90"
                            >
                                Live
                            </Link>
                        )}

                        {project.githubUrl && (
                            <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-color)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-accent"
                            >
                                GitHub
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Details Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--bg-secondary)] p-6 shadow-2xl border border-[var(--border-color)]">
                        
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-accent"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h2 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-2 pr-8">{project.title}</h2>
                        <p className="text-sm text-[var(--text-secondary)] mb-6">{project.description}</p>
                        
                        <div className="mb-6">
                            <h3 className="text-sm font-bold text-accent uppercase mb-2">Challenges Faced:</h3>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-primary)] p-3 rounded-lg border border-[var(--border-color)]">
                                {project.challenges || "N/A"}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-sm font-bold text-accent uppercase mb-2">Future Improvements:</h3>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-primary)] p-3 rounded-lg border border-[var(--border-color)]">
                                {project.improvements || "N/A"}
                            </p>
                        </div>

                        <button 
                            onClick={() => setIsOpen(false)}
                            className="w-full rounded-full bg-accent py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;