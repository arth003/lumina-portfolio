import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Code, Database, Globe, Monitor, Brain, Wrench } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface Skill {
  name: string;
  icon: string; // devicon CDN slug
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "C/C++", icon: "cplusplus" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "TypeScript", icon: "typescript" },
      { name: "C#", icon: "csharp" },
    ],
  },
  {
    title: "Frameworks",
    icon: Monitor,
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Node.js", icon: "nodejs" },
      { name: ".Net Core", icon: "dotnetcore" },
      { name: "FastAPI", icon: "fastapi" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "SQL Server", icon: "microsoftsqlserver" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Globe,
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "amazonwebservices" },
      { name: "Git", icon: "git" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "MediaPipe", icon: "google" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "IntelliJ", icon: "intellij" },
      { name: "Postman", icon: "postman" },
    ],
  },
];

const OrbitCard = ({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const count = category.skills.length;
  const radius = count <= 3 ? 90 : 105;
  const duration = 20 + index * 5; // seconds per full rotation, varied per card

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
      className="glass rounded-2xl gradient-border p-6 flex flex-col items-center justify-center min-h-[280px] sm:min-h-[320px] relative group hover:glow-primary transition-shadow duration-500"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); setHovered(null); }}
    >
      <div className="relative w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] flex items-center justify-center">
        {/* Orbit ring */}
        <div
          className="absolute rounded-full border border-border/30 group-hover:border-primary/20 transition-colors duration-500"
          style={{ width: radius * 2 + 40, height: radius * 2 + 40 }}
        />

        {/* Center category icon */}
        <motion.div
          className="z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <category.icon size={28} className="text-primary" />
        </motion.div>

        {/* Rotating orbit container */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {category.skills.map((skill, i) => {
            const angle = (360 / count) * i - 90;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const isHovered = hovered === i;

            return (
              <motion.div
                key={skill.name}
                className="absolute flex flex-col items-center"
                style={{
                  left: `calc(50% + ${x}px - 22px)`,
                  top: `calc(50% + ${y}px - 22px)`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.08 + 0.3, type: "spring", stiffness: 200 }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ scale: 1.2 }}
              >
                {/* Counter-rotate so icons stay upright */}
                <motion.div
                  className="flex flex-col items-center"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ animationPlayState: paused ? "paused" : "running" }}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? "bg-primary/20 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                        : "bg-muted/50 hover:bg-muted"
                    }`}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
                      alt={skill.name}
                      className="w-6 h-6"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.dataset.fallback) {
                          target.dataset.fallback = "1";
                          target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-plain.svg`;
                        }
                      }}
                    />
                  </div>
                  <motion.span
                    className="text-[10px] sm:text-xs text-muted-foreground mt-1.5 whitespace-nowrap font-medium"
                    animate={{ opacity: isHovered ? 1 : 0.7 }}
                  >
                    {skill.name}
                  </motion.span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <h3 className="font-bold text-foreground text-sm sm:text-base mt-4">{category.title}</h3>
    </motion.div>
  );
};

const SkillsSection = () => (
  <Section id="skills">
    <SectionHeading
      title="Technical Skills"
      subtitle="Technologies and tools I've used to build real-world applications."
    />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category, i) => (
        <OrbitCard key={category.title} category={category} index={i} />
      ))}
    </div>
  </Section>
);

export default SkillsSection;
