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

  export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
      (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Skills</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bd-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill, key) => (
              <div
                key={key}
                className="bg-card px-5 py-4 rounded-xl shadow-xs card-hover 
                border border-white/5 hover:border-primary/30 transition-all duration-300"
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
