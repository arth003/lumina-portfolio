import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Code, Database, Globe, Monitor, Brain, Wrench } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["TypeScript", "Python", "Java", "C++", "Go"],
  },
  {
    title: "Frameworks",
    icon: Monitor,
    skills: ["React", "Next.js", "Node.js", "Express", "FastAPI"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    title: "DevOps & Cloud",
    icon: Globe,
    skills: ["Docker", "AWS", "CI/CD", "Kubernetes"],
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "VS Code", "Figma", "Linux"],
  },
];

const SkillsSection = () => (
  <Section id="skills">
    <SectionHeading title="Technical Skills" subtitle="Technologies and tools I've used to build real-world applications." />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category, ci) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ci * 0.08, duration: 0.4 }}
          className="glass rounded-xl p-6 gradient-border hover:glow-primary transition-shadow duration-300"
        >
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5">
            <category.icon size={22} className="text-primary" />
          </div>
          <h3 className="font-bold text-foreground mb-3 text-base">
            {category.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {category.skills.join(", ")}
          </p>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default SkillsSection;
