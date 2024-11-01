import { motion } from "framer-motion";
import Button from "../shared/Button";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const handleContactScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectScroll = () => {
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-highlight/10 to-primary-dark animate-gradient" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgb(139 92 246 / 0.2) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-accent/30 rounded-full filter blur-3xl animate-float" />
        <div 
          className="absolute bottom-20 right-1/4 w-64 h-64 bg-highlight/20 rounded-full filter blur-3xl animate-float" 
          style={{ animationDelay: '-3s' }} 
        />
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-highlight to-accent animate-gradient bg-300">
                Web Developer
              </span>
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            I create responsive and intuitive web experiences using modern technologies
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-6 justify-center"
          >
            <Button onClick={handleProjectScroll}>View Projects</Button>
            <Button variant="outline" onClick={handleContactScroll}>Contact Me</Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;