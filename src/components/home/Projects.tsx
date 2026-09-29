"use client";

import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);
    const isPausedRef = useRef(false);

    const duplicatedProjects = [...projects, ...projects];

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let scrollPos = 0;
        const speed = 0.5;

        const animate = () => {
            if (!isPausedRef.current && el) {
                scrollPos += speed;

                const half = el.scrollWidth / 2;
                if (scrollPos >= half) {
                    scrollPos = 0;
                }

                el.scrollLeft = scrollPos;
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const handleMouseEnter = () => {
        isPausedRef.current = true;
    };

    const handleMouseLeave = () => {
        isPausedRef.current = false;
    };

    return (
        <section id="projects" className="pb-12 sm:pb-16 lg:pb-20">

            {/* Header */}
            <div className="container-fitlog mb-10 sm:mb-12 lg:mb-14">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">
                    Portfolio
                </p>
                <h2 className="font-heading mt-3 text-3xl font-bold uppercase text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                    Featured Projects
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-[var(--text-secondary)] sm:text-base">
                    A selection of projects I&apos;ve built. Hover to pause and explore.
                </p>
            </div>

            {/* Auto-Scroll Track */}
            <div className="container-fitlog relative overflow-hidden pt-12 sm:pt-14 lg:pt-16">

                {/* Left fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent sm:w-20" />

                {/* Right fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent sm:w-20" />

                {/* Scroll area */}
                <div
                    ref={scrollRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="scrollbar-hide flex gap-5 overflow-x-auto pb-4 sm:gap-6 lg:gap-7"
                >
                    {duplicatedProjects.map((project, index) => {
                        return (
                            <div key={`${project.id}-${index}`} className="shrink-0">
                                <ProjectCard project={project} />
                            </div>
                        );
                    })}
                </div>

            </div>

        </section>
    );
};

export default Projects;