import { motion } from "framer-motion";
import SectionTitle from "../shared/SectionTitle/"
import Button from "../shared/Button/";
const Contact = () => {
    return (
      <section id="contact" className="py-20 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-highlight/5 to-primary-dark" />
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-highlight/20 rounded-full filter blur-3xl animate-float" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="max-w-3xl mx-auto text-center"
          >
            <SectionTitle className="text-white">Let's Connect</SectionTitle>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new projects and opportunities.
            </p>
            <form className="space-y-6 max-w-xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-accent/10 border border-accent/20 text-white placeholder-gray-400 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all backdrop-blur-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-accent/10 border border-accent/20 text-white placeholder-gray-400 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all backdrop-blur-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-accent/10 border border-accent/20 text-white placeholder-gray-400 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all backdrop-blur-sm"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-accent/10 border border-accent/20 text-white placeholder-gray-400 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all backdrop-blur-sm resize-none"
              ></textarea>
              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    );
  };
export default Contact;
  