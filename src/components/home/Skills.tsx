import React from "react";
import SkillIconSVG from "../shared/SkillIconSVG";
import { skills } from "@/data/skills";

const Skills = () => {
    const categories = ["Frontend", "Backend", "Tools"];

    return (
        <section id="skills" className="container-fitlog py-12 sm:py-16 lg:py-20">
            
            {/* Header */}
            <div className="mb-10 sm:mb-14 flex flex-col items-center text-center">
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

            {/* Categories Loop */}
            <div className="flex flex-col gap-12">
                {categories.map((category) => {
                    const filteredSkills = skills.filter((skill) => skill.category === category);

                    if (filteredSkills.length === 0) return null;

                    return (
                        <div key={category} className="flex flex-col gap-6">
                            
                            {/* Category Title with Line */}
                            <div className="flex items-center gap-4">
                                <h3 className="font-heading text-xl font-bold uppercase tracking-widest text-[var(--text-primary)] sm:text-2xl shrink-0">
                                    {category}
                                </h3>
                                {/* লাইনটি একদম ডানদিক পর্যন্ত যাবে */}
                                <div className="h-[1px] w-full bg-gradient-to-r from-[var(--border-color)] to-transparent"></div>
                            </div>

                            {/* Skills Grid (একদম সেন্টারে রাখার জন্য mx-auto ব্যবহার করা হয়েছে) */}
                            <div className="mx-auto flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
                                {filteredSkills.map((skill) => {
                                    return (
                                        <div key={skill.name} className="transition-transform duration-300 hover:-translate-y-1">
                                            <SkillIconSVG skill={skill} />
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    );
                })}
            </div>

        </section>
    );
};

export default Skills;