import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { CornerLeftUp } from "lucide-react";
import profileImg from "@/assets/profile1.jpg";

const AboutSection = () => (
  <Section id="about">
    <SectionHeading
      title="About Me"
      subtitle="Graduate CS Student @ NJIT, one line of code at a time."
    />

    <div className="grid md:grid-cols-2 gap-8 items-center">
  
      <div className="text-base space-y-5 text-muted-foreground leading-relaxed">
        <p className="text-base font-space">
          Hello! I'm a passionate <span className="gradient-text font-bold">Software Developer and a Graduate student in Computer Science.</span>
        </p>

        <p>
          My passion lies in building functional and scalable applications. 
          Leveraging a solid foundation in languages like Python, .Net Core, SQL, 
          and the MERN stack, I really enjoy the process of crafting both web applications and software that solve real-world problems.
          For me, it’s about more than just writing code, it's about making sure everything I build is practical, reliable, and production ready.
        </p>

        <p>
          When I'm not coding, you'll find me on field playing cricket or tennis, explooring new places,
          reading about the latest breakthroughs in AI, or exploring new frameworks.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative flex justify-end pr-6"   // shifted slightly right
      >
        <div className="relative w-full max-w-[270px]"> {/* smaller image size */}
          
          {/* Glow Background */}
          <div className="absolute inset-0 gradient-bg opacity-20 blur-3xl rounded-full" />

          {/* Profile Image */}
          <img
            src={profileImg}
            alt="Profile"
            className="relative rounded-2xl shadow-2xl w-full gradient-border"
          />

          {/* That's Me Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-8 -right-1 flex items-center gap-1"
          >
            <CornerLeftUp className="w-4 h-4 text-primary" /> {/* smaller icon */}
            <span className="text-sm font-medium text-foreground bg-card/80 backdrop-blur-sm px-2 py-0.5 rounded-md border border-primary/20 shadow-md">
              That's me
            </span>
          </motion.div>
        </div>
      </motion.div>

    </div>
  </Section>
);

export default AboutSection;