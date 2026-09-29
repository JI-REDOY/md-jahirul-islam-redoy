import React from "react";
import SkillIconSVG from "../shared/SkillIconSVG";
import { skills } from "@/data/skills";

const Skills = () => {
    return (
        <section id="skills" className="container-fitlog py-12 sm:py-16 lg:py-20">

            {/* Header */}
            <div className="mb-10 sm:mb-12">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">
                    Tech Stack
                </p>
                <h2 className="font-heading mt-3 text-3xl font-bold uppercase text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                    My Skills
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-[var(--text-secondary)] sm:text-base">
                    Technologies and tools I work with daily.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-5 xl:grid-cols-6">
                {skills.map((skill) => {
                    return <SkillIconSVG key={skill.name} skill={skill} />;
                })}
            </div>

        </section>
    );
};

export default Skills;