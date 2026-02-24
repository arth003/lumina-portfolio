import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { name: "AWS Solutions Architect – Associate", issuer: "Amazon Web Services", year: "2024", link: "#" },
  { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2024", link: "#" },
  { name: "Docker Certified Associate", issuer: "Docker Inc.", year: "2023", link: "#" },
  { name: "Full Stack Web Development", issuer: "Meta (Coursera)", year: "2023", link: "#" },
  { name: "Machine Learning Specialization", issuer: "Stanford (Coursera)", year: "2022", link: "#" },
];

const CertificationsSection = () => (
  <Section id="certifications">
    <SectionHeading title="Certifications" subtitle="Professional certifications and credentials." />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {certifications.map((cert, i) => (
        <motion.div key={cert.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.3 }} className="glass rounded-xl p-5 group hover:glow-accent transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
              <Award size={16} className="text-accent" />
            </div>
            <span className="text-xs text-muted-foreground font-mono">{cert.year}</span>
          </div>
          <h3 className="font-semibold text-foreground text-sm mb-1">{cert.name}</h3>
          <p className="text-muted-foreground text-xs mb-3">{cert.issuer}</p>
          {cert.link && <a href={cert.link} className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline">Verify <ExternalLink size={12} /></a>}
        </motion.div>
      ))}
    </div>
  </Section>
);

export default CertificationsSection;
