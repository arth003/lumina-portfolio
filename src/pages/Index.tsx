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
import Chatbot from "@/components/Chatbot";
import EducationSection from "@/components/sections/EducationSection";

const roles = [
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Software Engineer",
  "Problem Solver",
  "Data Analyst",
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

            <h4 className="text-3xl font-bold 
               text-slate-600
               dark:text-white
               mb-2">
              Hello, It's Me
            </h4>

            <h3 className="text-4xl md:text-6xl font-bold mb-6 font-space text-primary leading-none">
              Arth Nangar.
            </h3>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-6">
              Building Intelligent Systems & Scalable Software
            </p>

            <div className="min-h-[2.5rem] mb-8 flex flex-wrap items-center justify-center gap-1">
              <span className="text-base sm:text-lg md:text-xl text-muted-foreground whitespace-nowrap">
                MS in Computer Science<span className="mx-2 text-primary">|</span>
              </span>
              <span className="text-base sm:text-lg md:text-xl text-primary font-mono">
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
                href="https://drive.google.com/file/d/1lJ9ROjnidnXxaxFCB7nsO8uOXMM_zwC9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass text-foreground font-medium text-sm transition-all duration-200 hover:bg-muted/60"
              >
                Resume
              </a>
            </div>

            <div className="flex items-center justify-center gap-4">
              <a href="https://github.com/ArthNangar" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-200">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/arth-nangar-574589241/" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-200">
                <Linkedin size={18} />
              </a>
              <a href="mailto:arthnangar3@gmail.com" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-200">
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
      <Chatbot />
    </Layout>
  );
};

export default HeroPage;
