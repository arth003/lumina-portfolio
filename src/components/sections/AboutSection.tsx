import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { GraduationCap, Target, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "Academic Excellence", text: "Pursuing MS in Computer Science with focus on AI and distributed systems." },
  { icon: Target, title: "Research Driven", text: "Passionate about AI/ML, systems design, and scalable architectures." },
  { icon: Lightbulb, title: "Innovation Mindset", text: "Constantly exploring emerging technologies and building solutions." },
  { icon: Rocket, title: "Career Goals", text: "Aiming to build products that make a meaningful impact at scale." },
];

const AboutSection = () => (
  <Section id="about">
    <SectionHeading title="About Me" subtitle="A passionate technologist building the future, one line of code at a time." />
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>I'm a graduate student in Computer Science with a deep passion for building intelligent, scalable software systems.</p>
        <p>My academic focus spans artificial intelligence, machine learning, and full-stack development. I enjoy bridging cutting-edge research with practical, production-ready applications.</p>
        <p>When I'm not coding, you'll find me exploring new frameworks, contributing to open source, or reading about the latest breakthroughs in AI.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="glass rounded-xl p-5 hover:glow-primary transition-shadow duration-300"
          >
            <item.icon size={20} className="text-primary mb-3" />
            <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default AboutSection;
