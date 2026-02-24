import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Award, ExternalLink, Tag } from "lucide-react";

const certifications = [
  { name: "AWS Solutions Architect – Associate", issuer: "Amazon Web Services", year: "2024", category: "Cloud Computing", tags: ["AWS", "Cloud Architecture", "DevOps"], link: "#" },
  { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2024", category: "AI/ML", tags: ["TensorFlow", "Deep Learning", "Python"], link: "#" },
  { name: "Docker Certified Associate", issuer: "Docker Inc.", year: "2023", category: "DevOps", tags: ["Docker", "Kubernetes", "Containers"], link: "#" },
  { name: "Full Stack Web Development", issuer: "Meta (Coursera)", year: "2023", category: "Web Development", tags: ["React", "JavaScript", "HTML/CSS"], link: "#" },
  { name: "Machine Learning Specialization", issuer: "Stanford (Coursera)", year: "2022", category: "AI/ML", tags: ["Neural Networks", "TensorFlow", "PyTorch"], link: "#" },
  { name: "MongoDB Certified Developer", issuer: "MongoDB University", year: "2023", category: "Database", tags: ["MongoDB", "NoSQL", "Database Design"], link: "#" },
];

const CertificationsSection = () => (
  <Section id="certifications">
    <SectionHeading title="Certifications & Awards" subtitle="Professional certifications and achievements demonstrating expertise." />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {certifications.map((cert, i) => (
        <motion.div
          key={cert.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
          className="relative rounded-2xl bg-card border border-border/50 p-6 group hover:border-primary/30 transition-all duration-300 overflow-hidden"
        >
          {/* Top glow border */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Award size={18} className="text-primary" />
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              {cert.year}
            </span>
          </div>

          <h3 className="font-bold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">{cert.name}</h3>
          <p className="text-primary text-xs font-medium mb-2">{cert.issuer}</p>

          <div className="flex items-center gap-1.5 mb-3">
            <Tag size={11} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{cert.category}</span>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {cert.tags.map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{tag}</span>
            ))}
          </div>

          {cert.link && (
            <a href={cert.link} className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">
              <ExternalLink size={12} /> Verify Certification
            </a>
          )}
        </motion.div>
      ))}
    </div>
  </Section>
);

export default CertificationsSection;
