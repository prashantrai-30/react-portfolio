import { Github,Linkedin,Instagram} from "lucide-react";
const Footer = () => {
    return (
      <footer className="py-8 bg-primary-dark/95 backdrop-blur-sm border-t border-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <a href="https://github.com/prashantrai-30" className="text-gray-400 hover:text-accent transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/prashant-kumar-rai-88425a310" className="text-gray-400 hover:text-accent transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/prashantrai_30.5/" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-center">
              © {new Date().getFullYear()} Prashant Rai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
export default Footer;
  