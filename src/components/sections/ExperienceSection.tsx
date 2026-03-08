import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const experience = [
  {
    role: "Software Engineer Intern",
    company: "Guj Info Petro Limited",
    location: "Gandinagar, Gujrat",
    duration: "Dec, 2024 - March, 2025",
    achievements: [
      "Enhanced CMS admin module using .NET Core, serving 40+ schools to improve system reliability and workflow.",
      "Developed UI components for GIPL's website during its website redesign, ensuring a seamless user experience.",
      "Optimized SQL queries and stored procedures, reducing a 30% of runtime and boosting database performance.",
      "Built interactive Power BI dashboards to track and analyze vendor management KPIs.",
    ],
    tech: [".Net Core", "Asp.Net", "C#", "SQL", "PowerBi"],
  },
];

const glowCardClass =
  "relative rounded-2xl bg-card border border-border/50 p-6 md:p-8 overflow-hidden group transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]";

const ExperienceSection = () => (
  <Section id="experience">
    <SectionHeading title="Experience" subtitle="Professional journey and roles." />
    <div className="relative">
      <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />
      <div className="space-y-8">
        {experience.map((item, i) => (
          <motion.div
            key={item.role + item.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="md:pl-14 relative"
          >
            <div className="absolute left-3 top-6 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary hidden md:block" />
            <div className={glowCardClass}>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-60 transition-opacity" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                  </div>
                  <p className="text-primary font-semibold text-sm">{item.company}</p>
                  <div className="flex items-center gap-4 mt-1 text-muted-foreground text-xs">
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> {item.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} /> {item.duration}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {item.achievements.map((a) => (
                  <li key={a} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>

              <div>
                <p className="text-xs font-semibold text-foreground mb-2">Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
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