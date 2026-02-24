import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Chat Platform",
    description: "Real-time AI-powered chat application with natural language processing and contextual responses.",
    tags: ["React", "Node.js", "OpenAI", "WebSocket"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "E-Commerce Dashboard",
    description: "Full-stack analytics dashboard for e-commerce businesses with real-time data visualization.",
    tags: ["Next.js", "PostgreSQL", "Recharts", "Tailwind"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Cloud Storage System",
    description: "Distributed cloud file storage with encryption, sharing, and version control capabilities.",
    tags: ["Go", "AWS S3", "Docker", "gRPC"],
    github: "#",
    demo: "#",
  },
  {
    title: "ML Model Pipeline",
    description: "Automated machine learning pipeline for model training, evaluation, and deployment.",
    tags: ["Python", "TensorFlow", "MLflow", "FastAPI"],
    github: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    tags: ["React", "Firebase", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Generator",
    description: "CLI tool to generate beautiful developer portfolios from a configuration file.",
    tags: ["Node.js", "TypeScript", "CLI"],
    github: "#",
  },
];

const Projects = () => {
  return (
    <Layout>
      <Section>
        <SectionHeading title="Projects" subtitle="A selection of things I've built." />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`glass rounded-xl p-6 group hover:glow-primary transition-all duration-300 ${
                project.featured ? "gradient-border" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Projects;
