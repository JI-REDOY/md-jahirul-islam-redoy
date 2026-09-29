import React from "react";
import { Skill } from "@/types/skill.types";

const SkillIcon = ({ skill }: { skill: Skill }) => {
    return (
        <div className="card-dark group flex flex-col items-center gap-3 p-4 transition-all duration-300 hover:-translate-y-1 sm:p-5">
            <div className="flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
                <img
                    src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color.replace("#", "")}`}
                    alt={skill.name}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <span className="text-center text-xs font-semibold text-[var(--text-primary)] sm:text-sm">
                {skill.name}
            </span>
        </div>
    );
};

export default SkillIcon;