import { motion } from "framer-motion";

const SectionTitle = ({ children, className = "" }) => {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`text-4xl md:text-5xl font-bold mb-12 relative ${className}`}
    >
      <span className="relative inline-block">
        {children}
        <span className="absolute -bottom-4 left-0 w-2/3 h-1 bg-gradient-to-r from-accent via-highlight to-accent rounded-full" />
      </span>
    </motion.h2>
  );
};

export default SectionTitle;