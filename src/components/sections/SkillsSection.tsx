import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { useState } from "react";

interface Skill {
  name: string;
  icon: string;
  category: string;
}

const allSkills: Skill[] = [
  // Languages
  { name: "C/C++", icon: "cplusplus", category: "Languages" },
  { name: "Python", icon: "python", category: "Languages" },
  { name: "Java", icon: "java", category: "Languages" },
  { name: "TypeScript", icon: "typescript", category: "Languages" },
  { name: "C#", icon: "csharp", category: "Languages" },
  // Frameworks
  { name: "React", icon: "react", category: "Frameworks" },
  { name: "Next.js", icon: "nextjs", category: "Frameworks" },
  { name: "Node.js", icon: "nodejs", category: "Frameworks" },
  { name: ".Net Core", icon: "dotnetcore", category: "Frameworks" },
  { name: "FastAPI", icon: "fastapi", category: "Frameworks" },
  // Databases
  { name: "MongoDB", icon: "mongodb", category: "Databases" },
  { name: "SQL Server", icon: "microsoftsqlserver", category: "Databases" },
  { name: "PostgreSQL", icon: "postgresql", category: "Databases" },
  // DevOps & Cloud
  { name: "Docker", icon: "docker", category: "DevOps" },
  { name: "AWS", icon: "amazonwebservices", category: "DevOps" },
  { name: "Git", icon: "git", category: "DevOps" },
  { name: "Vercel", icon: "vercel", category: "DevOps" },
  // AI/ML
  { name: "TensorFlow", icon: "tensorflow", category: "AI/ML" },
  { name: "PyTorch", icon: "pytorch", category: "AI/ML" },
  { name: "Scikit-learn", icon: "scikitlearn", category: "AI/ML" },
  { name: "MediaPipe", icon: "google", category: "AI/ML" },
  // Tools
  { name: "GitHub", icon: "github", category: "Tools" },
  { name: "VS Code", icon: "vscode", category: "Tools" },
  { name: "IntelliJ", icon: "intellij", category: "Tools" },
  { name: "Postman", icon: "postman", category: "Tools" },
];

const categories = ["All", "Languages", "Frameworks", "Databases", "DevOps", "AI/ML", "Tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? allSkills : allSkills.filter((s) => s.category === activeCategory);

  return (
    <Section id="skills">
      <SectionHeading title="Technical Skills" subtitle="Technologies and tools I've used to build real-world applications." />

      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
              activeCategory === cat
                ? "bg-primary/20 border-primary/50 text-primary shadow-[0_0_12px_hsl(var(--primary)/0.2)]"
                : "border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Floating icon grid */}
      <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-5">
        {filtered.map((skill, i) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ delay: i * 0.03, type: "spring", stiffness: 300, damping: 25 }}
            whileHover={{ y: -8, scale: 1.08 }}
            className="group flex flex-col items-center gap-2.5 p-4 sm:p-5 rounded-xl glass gradient-border cursor-default transition-shadow duration-300 hover:glow-primary"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-muted/40 group-hover:bg-primary/10 transition-colors duration-300">
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
                alt={skill.name}
                className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = "1";
                    target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-plain.svg`;
                  }
                }}
              />
            </div>
            <span className="text-[11px] sm:text-xs text-muted-foreground group-hover:text-foreground font-medium text-center transition-colors duration-300 leading-tight">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default SkillsSection;
