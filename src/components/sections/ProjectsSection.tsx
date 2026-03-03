import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
  { title: "Event Aquarium", description: "Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.", features: ["Real-time inventory tracking with WebSocket updates", "Stripe payment integration with subscription support", "Admin dashboard with analytics and order management", "Role-based access control for staff and admins"], tags: ["React", "Node.js", "MongoDB", "Stripe", "Redis"], github: "#", demo: "#", featured: true },
  { title: "AI Chat Assistant", description: "Intelligent chatbot powered by GPT-4 with context awareness, multi-turn conversations, and custom knowledge base.", features: ["Context-aware multi-turn conversation handling", "Custom knowledge base ingestion and retrieval", "Streaming responses with real-time token generation", "Conversation history and analytics dashboard"], tags: ["Next.js", "OpenAI", "Python", "FastAPI", "PostgreSQL"], github: "#", demo: "#", featured: true },
  { title: "Real-Time Analytics Dashboard", description: "Interactive dashboard for monitoring application metrics with live data visualization and alerting system.", features: ["Live data visualization with D3.js charts", "Configurable alerting system with email notifications", "Custom metric tracking and aggregation", "Exportable reports in PDF and CSV formats"], tags: ["React", "D3.js", "WebSocket", "Express", "InfluxDB"], github: "#", demo: "#", featured: true },
  { title: "Social Media Aggregator", description: "Platform that aggregates posts from multiple social media platforms with sentiment analysis and trending topics.", features: ["Multi-platform post aggregation (Twitter, Reddit, etc.)", "NLP-based sentiment analysis on aggregated content", "Trending topic detection and visualization", "Scheduled data collection with Celery workers"], tags: ["Vue.js", "Python", "Django", "Celery", "MongoDB"], github: "#" },
];

const ProjectsSection = () => (
  <Section id="projects">
    <SectionHeading title="Projects" subtitle="A selection of things I've built, using diverse technologies." />
    <div className="space-y-5">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="relative rounded-2xl bg-card border border-border/50 p-6 group hover:border-primary/30 transition-all duration-300 overflow-hidden"
        >
          {/* Top glow border on hover */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
              {project.featured && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20">
                  Featured
                </span>
              )}
            </div>
            <Code2 size={18} className="text-muted-foreground flex-shrink-0 ml-2" />
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

          {project.features && (
            <ul className="space-y-1.5 mb-4">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">{tag}</span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2 border-t border-border/50">
            {project.github && (
              <a href={project.github} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Github size={14} /> Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline">
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default ProjectsSection;
