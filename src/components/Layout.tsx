import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background grid-bg relative">
      {/* Ambient glow effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative z-10 pt-20"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
