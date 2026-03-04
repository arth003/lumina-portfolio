import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Award, ExternalLink, Tag } from "lucide-react";

const certifications = [
  { 
    name: "Tata GenAI Powered Data Analytics Job Simulation", 
    issuer: "Forage", 
    year: "November, 2025", 
    category: "Micro Internship", 
    desc: "Conducted exploratory data analysis (EDA) and proposed a no-code predictive modeling framework to assess customer delinquency risk using GenAI tools.",
    link: "https://drive.google.com/file/d/108cfEHJfL8FApPxIYq51FNKXJK6ftg_v/view?usp=sharing" 
  },
  { 
    name: "Complete Python Pro Bootcamp: By Dr.Angela Yu", 
    issuer: "Udemy", 
    year: "August, 2025", 
    category: "Python", 
    desc: "This is an intensive, project-based bootcamp covering a wide range of Python topics, from fundamental programming to advanced web scraping, and professional automation projects.",
    link: "https://www.udemy.com/certificate/UC-c3f02cdd-a2be-4ca4-b038-7c91786f4ceb/" 
  },
  { 
    name: "AWS Academy Machine Learning Foundations", 
    issuer: "Amazon Web Service",
    year: "July, 2024",
    category: "AWS", 
    desc: "Foundational AWS Machine Learning course, gaining hands-on experience with core ML concepts, data preparation, model training, and deployment using Amazon SageMaker and other specialized AWS services.",
    link: "https://www.credly.com/go/854y6t3M" 
  },
  { 
    name: "Machine Learning Course Udemy",
    issuer: "Udemy",
    year: "September, 2024",
    category: "ML", 
    desc: "Completed a hands-on Machine Learning course focused on core algorithms, data preprocessing, and model evaluation. Built and trained models using Python and applied techniques to real-world datasets.",
    link: "https://www.udemy.com/certificate/UC-37024cd8-3ac0-4e35-b787-7331cf716ffd/"
  },
  { 
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Service",
    year: "November, 2023",
    category: "AWS", 
    desc: "Completed the AWS Cloud Foundations course, establishing a strong understanding of core AWS services, cloud security principles, networking, and the best practices for designing scalable cloud architecture.",
    link: "https://www.credly.com/go/QdX9wqiG"
  },
];

const CertificationsSection = () => (
  <Section id="certifications">
    <SectionHeading 
      title="Certifications & Awards" 
      subtitle="Professional certifications and achievements demonstrating expertise." 
    />
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
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="flex items-center justify-between mb-4">
            
            <div className="w-10 h-10 rounded-xl flex items-center justify-center 
                            bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md">
              <Award size={18} />
            </div>

            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              {cert.year}
            </span>
          </div>

          <h3 className="font-bold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">
            {cert.name}
          </h3>
          
          <div className="flex items-center gap-4 mb-3">
            <p className="text-primary text-xs font-medium">
              {cert.issuer}
            </p>

            <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
              <Tag size={11} />
              {cert.category}
            </div>
          </div>

          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
            {cert.desc}
          </p>

          {cert.link && (
            <a
              href={cert.link}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
            >
              <ExternalLink size={12} /> View Certificate
            </a>
          )}
        </motion.div>
      ))}
    </div>
  </Section>
);

export default CertificationsSection;