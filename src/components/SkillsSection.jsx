import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "MySQL", category: "backend" },

  // Programming
  { name: "Java", category: "programming" },
  { name: "Python", category: "programming" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "SQL", category: "tools" },
  { name: "MS Excel", category: "tools" },

  // Soft Skills
  { name: "Problem Solving", category: "softskills" },
  { name: "Team Work", category: "softskills" },
  { name: "Time Management", category: "softskills" },
  { name: "Planning", category: "softskills" },

  // Certifications
  { name: "Cloud Computing (NPTEL)", category: "certifications" },
  { name: "Python for Data Science", category: "certifications" },
  { name: "DSA in Java", category: "certifications" },
  { name: "Full Stack Development", category: "certifications" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "programming",
  "tools",
  "softskills",
  "certifications",
];

const categoryColors = {
  frontend:
    "bg-purple-500/[0.03] border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]",

  backend:
    "bg-green-500/[0.03] border-green-500/40 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]",

  programming:
    "bg-orange-500/[0.03] border-orange-500/40 hover:border-orange-400 hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]",

  tools:
    "bg-cyan-500/[0.03] border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]",

  softskills:
    "bg-pink-500/[0.03] border-pink-500/40 hover:border-pink-400 hover:shadow-[0_0_25px_rgba(236,72,153,0.35)]",

  certifications:
    "bg-yellow-500/[0.03] border-yellow-500/40 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(234,179,8,0.35)]",
};
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full capitalize transition-all duration-300 border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                  : "bg-secondary/50 border-white/10 text-foreground hover:bg-secondary hover:border-primary/40"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className={cn(
                "bg-card/80 backdrop-blur-sm px-5 py-5 rounded-xl border transition-all duration-300",
                "hover:-translate-y-1 hover:scale-[1.02]",
                categoryColors[skill.category]
              )}
            >
              <h3 className="font-medium text-base text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};