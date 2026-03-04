import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
  { title: "Event Aquarium", description: "Full-stack event hosting platform for college clubs and organizations featuring secure authentication and integrated payments.", features: ["Implemented Google OAuth and secure sign-in using Clerk for a seamless user experience.", "Processed secure ticket transactions by integrating the Stripe Payment gateway for ticket purchases.", "Admin dashboard with analytics and order management", "Role-based access control for user and admins"], tags: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB", "ClearkAPI"], github: "https://github.com/ArthNangar/event_aquarium", demo: "https://event-aquarium.vercel.app/", featured: true },
  { title: "Motion Canvas", description: "A real-time computer vision application that enables gesture-based drawing and interaction through a webcam.", features: ["Integrated OpenCV and MediaPipe to track hand landmarks and translate physical movements into on-screen actions.", "Developed specific gesture-recognition logic to handle different functions like drawing, color switching, and erasing.", "Optimized frame processing with NumPy to ensure smooth, low-latency real-time performance."], tags: ["Python", "OpenCV", "MediaPipe", "NumPy"], github: "https://github.com/ArthNangar/motion_canvas", demo: "https://drive.google.com/file/d/12UiJu6vCIlgDTqx8l0ccrJx0KF3AT0NP/view?usp=sharing", featured: true },
  // { title: "Real-Time Analytics Dashboard", description: "Interactive dashboard for monitoring application metrics with live data visualization and alerting system.", features: ["Live data visualization with D3.js charts", "Configurable alerting system with email notifications", "Custom metric tracking and aggregation", "Exportable reports in PDF and CSV formats"], tags: ["React", "D3.js", "WebSocket", "Express", "InfluxDB"], github: "#", demo: "#", featured: true },
  { title: "Advanced Full Stack Calculator", description: "Built full-stack application featuring complex expression evaluation, normal calculations, and user history management.", features: ["Built a robust backend to handle complete CRUD operations, allowing users to store, retrieve, and manage their calculation history.", "Implemented multi-level expression evaluation to support complex arithmetic operations and nested calculations.", "Developed REST APIs using FastAPI and managed data persistence with PostgreSQL and SQLAlchemy.", "Containerized the application using Docker and automated the testing and deployment pipeline with GitHub Actions."], tags: ["Python", "FastAPI", "PostgresSQL", "SQLAlchemy", "Docker", "Github Actions"], github: "https://github.com/ArthNangar/finalproject", demo: "https://drive.google.com/file/d/1PJ1DEGjY1_i-B_1rMu9V_8Hm_XkRxi8G/view?usp=drive_link", docker:"https://hub.docker.com/repository/docker/arthnangar7/finalproject/general" },
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
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
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
            {project.docker && (
              <a href={project.docker} className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline">
                <ExternalLink size={14} /> Docker Image 
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default ProjectsSection;
