import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";

const roles = [
  "Full Stack Developer",
  "AI Enthusiast",
  "Software Engineer",
  "Problem Solver",
];

const HeroPage = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <Layout>
      <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-mono text-sm mb-6 tracking-widest uppercase">
              MS in Computer Science
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Building{" "}
              <span className="gradient-text">Intelligent Systems</span>
              <br />& Scalable Software
            </h1>

            <div className="h-8 mb-8">
              <span className="text-lg md:text-xl text-muted-foreground font-mono">
                {displayText}
                <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:shadow-lg glow-primary"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass text-foreground font-medium text-sm transition-all duration-200 hover:bg-muted/60"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground font-medium text-sm transition-all duration-200 hover:text-foreground hover:border-primary/40"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
    </Layout>
  );
};

export default HeroPage;
