import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  { degree: "MS in Computer Science", school: "University Name", duration: "2023 – 2025", details: ["Focus: Artificial Intelligence & Systems", "Relevant Coursework: Machine Learning, Distributed Systems, Advanced Algorithms, NLP", "GPA: 3.9/4.0"] },
  { degree: "BS in Computer Science", school: "University Name", duration: "2019 – 2023", details: ["Focus: Software Engineering", "Relevant Coursework: Data Structures, Operating Systems, Databases, Computer Networks", "GPA: 3.8/4.0"] },
];

const experience = [
  { role: "Software Engineer Intern", company: "Tech Company", duration: "Summer 2024", achievements: ["Built microservices handling 10K+ requests/sec using Go and gRPC", "Reduced API latency by 40% through caching and query optimization", "Collaborated with cross-functional teams on feature delivery"], tech: ["Go", "gRPC", "PostgreSQL", "Docker"] },
  { role: "Full Stack Developer", company: "Startup Inc.", duration: "2022 – 2023", achievements: ["Developed and shipped 3 major product features end-to-end", "Implemented CI/CD pipelines reducing deployment time by 60%", "Mentored junior developers and led code reviews"], tech: ["React", "Node.js", "AWS", "MongoDB"] },
  { role: "Research Assistant", company: "University AI Lab", duration: "2023 – Present", achievements: ["Conducting research on transformer architectures for code generation", "Published findings at a peer-reviewed conference", "Built evaluation benchmarks for model performance"], tech: ["Python", "PyTorch", "HuggingFace"] },
];

const ExperienceSection = () => (
  <Section id="experience">
    <SectionHeading title="Education" subtitle="Academic background and qualifications." />
    <div className="space-y-6 mb-20">
      {education.map((item, i) => (
        <motion.div key={item.degree} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }} className="glass rounded-xl p-6 flex gap-5">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <GraduationCap size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{item.degree}</h3>
            <p className="text-primary text-sm">{item.school}</p>
            <p className="text-muted-foreground text-xs mb-3">{item.duration}</p>
            <ul className="space-y-1">{item.details.map((d) => <li key={d} className="text-muted-foreground text-sm">• {d}</li>)}</ul>
          </div>
        </motion.div>
      ))}
    </div>

    <SectionHeading title="Experience" subtitle="Professional journey and roles." />
    <div className="relative">
      <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />
      <div className="space-y-8">
        {experience.map((item, i) => (
          <motion.div key={item.role + item.company} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }} className="md:pl-14 relative">
            <div className="absolute left-3 top-6 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary hidden md:block" />
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center md:hidden">
                  <Briefcase size={18} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{item.role}</h3>
                  <p className="text-primary text-sm">{item.company}</p>
                  <p className="text-muted-foreground text-xs mb-3">{item.duration}</p>
                  <ul className="space-y-1 mb-4">{item.achievements.map((a) => <li key={a} className="text-muted-foreground text-sm">• {a}</li>)}</ul>
                  <div className="flex flex-wrap gap-2">{item.tech.map((t) => <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground">{t}</span>)}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default ExperienceSection;
