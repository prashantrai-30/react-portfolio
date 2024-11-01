import SectionTitle from "../shared/sectionTitle/";
import { projects } from "../../constants";
import { motion } from "framer-motion";
import ProjectCard from "../shared/projectcard/";
const Projects = () => {
    return (
      <section id="projects" className="py-20 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-highlight/5 to-primary-dark" />
        </div>
        <div className="container mx-auto px-16 relative z-10">
          <SectionTitle className="text-center text-white">Featured Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.8,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
export default Projects;