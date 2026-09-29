import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project.types";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="card-dark flex w-[280px] shrink-0 flex-col overflow-hidden sm:w-[320px] lg:w-[360px]">

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

                {/* Title */}
                <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] sm:text-xl">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="line-clamp-3 text-xs text-[var(--text-secondary)] sm:text-sm">
                    {project.description}
                </p>

                {/* Tech Badges */}
                {project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
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
                {(project.liveUrl || project.githubUrl) && (
                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">

                        {project.liveUrl && (
                            <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-black transition-opacity hover:opacity-90"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-3 w-3"
                                >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-3 w-3"
                                >
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                                GitHub
                            </Link>
                        )}

                    </div>
                )}

            </div>

        </div>
    );
};

export default ProjectCard;