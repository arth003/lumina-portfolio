import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
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
      <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 relative">
        {/* Hero glow effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-5 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-8"
            >
              Welcome to my portfolio
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Hello, It's Me
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="gradient-text">Arth Nangar</span>
            </h1>

            <p className="text-muted-foreground text-lg mb-2">
              MS in Computer Science
            </p>

            <div className="h-8 mb-8">
              <span className="text-lg md:text-xl text-primary font-mono">
                {displayText}
                <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-200">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-200">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-200">
                <Mail size={18} />
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
