import { Skill } from "@/types/skill.types";

export const skills: Skill[] = [
    // Frontend
    { name: "React", icon: "react", category: "Frontend", level: 85, color: "#61DAFB" },
    { name: "Next.js", icon: "nextdotjs", category: "Frontend", level: 85, color: "#FFFFFF" },
    { name: "TypeScript", icon: "typescript", category: "Frontend", level: 80, color: "#3178C6" },
    { name: "JavaScript", icon: "javascript", category: "Frontend", level: 85, color: "#F7DF1E" },
    { name: "HTML5", icon: "html5", category: "Frontend", level: 90, color: "#E34F26" },
    { name: "CSS3", icon: "css3", category: "Frontend", level: 85, color: "#1572B6" },
    { name: "Tailwind CSS", icon: "tailwindcss", category: "Frontend", level: 85, color: "#06B6D4" },

    // Backend
    { name: "Node.js", icon: "nodedotjs", category: "Backend", level: 70, color: "#339933" },
    { name: "MongoDB", icon: "mongodb", category: "Backend", level: 70, color: "#47A248" },
    { name: "Express", icon: "express", category: "Backend", level: 65, color: "#FFFFFF" },

    // Tools
    { name: "Git", icon: "git", category: "Tools", level: 80, color: "#F05032" },
    { name: "GitHub", icon: "github", category: "Tools", level: 80, color: "#FFFFFF" },
    { name: "VS Code", icon: "visualstudiocode", category: "Tools", level: 90, color: "#007ACC" },
    { name: "Vercel", icon: "vercel", category: "Tools", level: 80, color: "#FFFFFF" },
];