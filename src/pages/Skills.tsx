import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 88 },
      { name: "Java", level: 80 },
      { name: "C++", level: 70 },
      { name: "Go", level: 60 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 88 },
      { name: "Express", level: 82 },
      { name: "FastAPI", level: 75 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 72 },
      { name: "Firebase", level: 70 },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 82 },
      { name: "AWS", level: 78 },
      { name: "CI/CD", level: 80 },
      { name: "Kubernetes", level: 65 },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 72 },
      { name: "Scikit-learn", level: 80 },
      { name: "NLP", level: 68 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Linux", level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <Layout>
      <Section>
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08, duration: 0.4 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Skills;
