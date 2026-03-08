import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Code, Database, Globe, Monitor, Brain, Wrench } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string; // tailwind ring color class
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C/C++", "Python", "Java", "TypeScript", "C#"],
    color: "from-primary to-primary",
  },
  {
    title: "Frameworks",
    icon: Monitor,
    skills: ["React", "Next.js", "Node.js", ".Net Core", "FastAPI"],
    color: "from-accent to-accent",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "Microsoft SQL Server", "PostgreSQL"],
    color: "from-primary to-accent",
  },
  {
    title: "DevOps & Cloud",
    icon: Globe,
    skills: ["Docker", "AWS", "CI/CD", "Git", "Vercel"],
    color: "from-accent to-primary",
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: ["MediaPipe", "TensorFlow", "PyTorch", "Scikit-learn", "NLP"],
    color: "from-primary to-primary",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Github", "VS Code", "IntelliJ", "Postman"],
    color: "from-accent to-accent",
  },
];

// Orbital positions for 6 items around the center
const getOrbitalPosition = (index: number, total: number, radius: number) => {
  const angle = (index * (360 / total) - 90) * (Math.PI / 180);
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
};

const SkillsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Section id="skills">
      <SectionHeading
        title="Technical Skills"
        subtitle="Technologies and tools I've used to build real-world applications."
      />

      {/* Desktop Orbital View */}
      <div className="hidden lg:flex justify-center items-center">
        <div className="relative w-[620px] h-[620px]">
          {/* Orbit rings */}
          {[180, 270].map((r, i) => (
            <div
              key={i}
              className="absolute border border-border/20 rounded-full"
              style={{
                width: r * 2,
                height: r * 2,
                top: `calc(50% - ${r}px)`,
                left: `calc(50% - ${r}px)`,
              }}
            />
          ))}

          {/* Animated orbit ring glow */}
          <motion.div
            className="absolute border border-primary/10 rounded-full"
            style={{ width: 540, height: 540, top: "calc(50% - 270px)", left: "calc(50% - 270px)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Center hub */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <div className="w-28 h-28 rounded-full glass-strong flex items-center justify-center glow-primary">
              <div className="text-center">
                <span className="text-2xl font-bold gradient-text">Skills</span>
              </div>
            </div>
          </motion.div>

          {/* Orbital skill nodes */}
          {skillCategories.map((category, i) => {
            const pos = getOrbitalPosition(i, skillCategories.length, 250);
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={category.title}
                className="absolute z-20"
                style={{
                  top: `calc(50% + ${pos.y}px)`,
                  left: `calc(50% + ${pos.x}px)`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 150 }}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Connector line to center */}
                <svg
                  className="absolute pointer-events-none"
                  style={{
                    width: Math.abs(pos.x) + 20,
                    height: Math.abs(pos.y) + 20,
                    top: pos.y > 0 ? "50%" : "auto",
                    bottom: pos.y <= 0 ? "50%" : "auto",
                    left: pos.x > 0 ? "50%" : "auto",
                    right: pos.x <= 0 ? "50%" : "auto",
                    overflow: "visible",
                  }}
                >
                  <line
                    x1="0"
                    y1="0"
                    x2={-pos.x}
                    y2={-pos.y}
                    className="stroke-border/30"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Node */}
                <motion.div
                  className={`relative cursor-pointer rounded-2xl glass p-4 transition-shadow duration-300 ${
                    isActive ? "glow-primary" : ""
                  }`}
                  whileHover={{ scale: 1.1 }}
                  animate={isActive ? { y: [0, -4, 0] } : {}}
                  transition={isActive ? { duration: 1.5, repeat: Infinity } : {}}
                >
                  {/* Gradient top border */}
                  <div
                    className={`absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r ${category.color} opacity-60`}
                  />

                  <div className="flex flex-col items-center gap-2 min-w-[100px]">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <category.icon size={20} className="text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                      {category.title}
                    </span>
                  </div>

                  {/* Expanded skills on hover */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={isActive ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-1.5 mt-3 justify-center max-w-[160px]">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            const r = 160 + Math.random() * 120;
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary/30"
                style={{
                  top: `calc(50% + ${Math.sin(angle) * r}px)`,
                  left: `calc(50% + ${Math.cos(angle) * r}px)`,
                }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Tablet view */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
        {skillCategories.map((category, ci) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.08, duration: 0.4 }}
            className="glass rounded-xl p-5 gradient-border hover:glow-primary transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <category.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile view - compact cards */}
      <div className="md:hidden space-y-3">
        {skillCategories.map((category, ci) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.06, duration: 0.4 }}
            className="glass rounded-xl p-4 gradient-border hover:glow-primary transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                <category.icon size={18} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
