import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    toast({
      title: "Please fill all fields",
      variant: "destructive",
    });
    return;
  }

  try {
    setSending(true);

    await emailjs.send(
      "Service ID",   // replace
      "Template ID",  // replace
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "Public Key"    // replace
    );

    toast({
      title: "Message sent successfully!",
      description: "Arth will contact you shortly.",
    });

    setForm({ name: "", email: "", message: "" });

  } catch (error) {
    toast({
      title: "Something went wrong",
      description: "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setSending(false);
  }
};

  return (
    <Section id="contact">
      <SectionHeading title="Get In Touch" subtitle="Let's discuss your next project or just say hello." />
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Info */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex flex-col justify-start">
          <h3 className="text-xl font-bold text-foreground mb-3">Let's Connect</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="space-y-4 mb-8">
            <a
              href="mailto:arthnangar3@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground">
                  arthnangar3@gmail.com
                </p>
              </div>
            </a>
            <a
              href="tel:+16094500671"
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium text-foreground">
                  +1 (609)450-0671
                </p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground">
                  Newark, NJ
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-3">Connect on social media</p>
          <div className="flex gap-3">
            <a href="https://github.com/ArthNangar" className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/arth-nangar-574589241/" className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <div className="rounded-2xl bg-card border border-border/50 p-6 md:p-8">
            <h3 className="text-lg font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Your name" maxLength={100} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Your Email" maxLength={255} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" placeholder="Tell me about your project or just say hello..." maxLength={1000} />
              </div>
              <button type="submit" disabled={sending} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:shadow-lg glow-primary disabled:opacity-50">
                <Send size={16} />
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactSection;
