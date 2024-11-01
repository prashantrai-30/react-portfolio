import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../constants';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-primary-dark/95 backdrop-blur-sm shadow-lg border-b border-accent/20 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <a 
              href="#" 
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-highlight to-accent 
                         self-center md:self-center md:ml-10 text-center w-full md:w-auto"
            >
              Portfolio
            </a>
            <div className="hidden md:flex items-center justify-center flex-grow space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-gray-300 hover:text-accent transition-colors transform hover:scale-105 hover:font-semibold"
                >
                  {link.title}
                </a>
              ))}
            </div>
            <div className="absolute top-4 right-4 md:hidden">
              <button
                className="text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-primary-dark/95 backdrop-blur-sm border-t border-accent/20 py-4 shadow-lg">
              <div className="flex flex-col items-center space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="block px-4 py-3 text-center text-gray-300 hover:bg-accent/20 hover:text-accent transition-colors w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  };

export default Navbar;