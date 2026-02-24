import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "Thank you for reaching out." });
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <Section id="contact">
      <SectionHeading title="Contact" subtitle="Let's connect and build something great." />
      <div className="grid md:grid-cols-2 gap-12">
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Your name" maxLength={100} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="you@example.com" maxLength={255} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" placeholder="Your message..." maxLength={1000} />
          </div>
          <button type="submit" disabled={sending} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:shadow-lg glow-primary disabled:opacity-50">
            {sending ? "Sending..." : "Send Message"} <Send size={16} />
          </button>
        </motion.form>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex flex-col justify-center space-y-6">
          <p className="text-muted-foreground leading-relaxed">Feel free to reach out if you'd like to collaborate, have a question, or just want to say hello.</p>
          <div className="space-y-4">
            <a href="mailto:hello@example.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow-primary transition-shadow"><Mail size={18} className="text-primary" /></div>
              <span className="text-sm">hello@example.com</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow-primary transition-shadow"><Linkedin size={18} className="text-primary" /></div>
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow-primary transition-shadow"><Github size={18} className="text-primary" /></div>
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactSection;
