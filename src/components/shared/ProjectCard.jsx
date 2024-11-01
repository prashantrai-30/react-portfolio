import React from 'react';
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project = {} }) => {
  const {
    image = "/api/placeholder/400/320",
    title = "",
    description = "",
    tech = [],
    github = "#",
  } = project;

  return (
    <div className="group relative bg-gradient-to-br from-primary/80 to-primary rounded-xl overflow-hidden border border-gray-800 backdrop-blur-sm">
      <div className="absolute -inset-[1px] bg-gradient-to-r from-accent via-highlight to-accent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="relative group overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-6 relative">
          <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-highlight">
            {title}
          </h3>
          <p className="text-gray-300 mb-4">{description}</p>
          {tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tech.map((technology, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-accent/10 to-highlight/10 border border-accent/20 text-accent-light"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-6">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              <span>Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;