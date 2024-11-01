import { motion } from "framer-motion";
import SectionTitle from "../shared/SectionTitle/";
import { skills } from "../../constants";

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-highlight/5 to-primary-dark" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle className="text-center text-white">About Me</SectionTitle>
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-300 mb-8 text-lg leading-relaxed"
          >
            I'm a passionate web developer with expertise in building modern web
            applications. I focus on creating responsive, accessible, and
            user-friendly interfaces using the latest web technologies.
          </motion.p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.8,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                  className="bg-accent/20 text-gray-200 px-4 py-2 rounded-full backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;