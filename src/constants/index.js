import { portfoliopic,studynotion} from "../assets";
export const navLinks = [
    {
      id: "home",
      title:"Home"
    }, 
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  export const skills = [
    "MongoDB",
    "React",
    "Express",
    "Node.js",
    "Tailwind CSS",
    "Postman",
    "Git",
    "C++",
    "HTML",
    "CSS3"
  ];
  
  export const projects = [
    {
      title: "Portfolio",
      description: "The personal portfolio website is a responsive digital showcase built using HTML5 and CSS3, designed to professionally present skills and projects. Utilizing semantic HTML and modern CSS techniques like flexbox and grid, the site features a clean, mobile-friendly layout with intuitive navigation and visually appealing design. The project demonstrates front-end web development skills through an interactive, well-structured interface that highlights personal achievements and technical capabilities.",
      tech: ["Html", "Css", "Git"],
      image: portfoliopic,
      github: "https://github.com/prashantrai-30/Portfolio",
    },
    {
      title: "Study Notion",
      description: "Engineered a robust backend infrastructure for StudyNotion, an EdTech platform, utilizing Node.js, Express, MongoDB to support scalable user management, course delivery, and content management.Integrated Razorpay payment gateway, implementing secure transaction handling and automated payment verification,resulting in a streamlined purchase process for users.Designed and optimized RESTful APIs for efficient data retrieval and updates, improving overall application performance.",
      tech: ["Node.js", "MongoDB", "Express", "Postman"],
      image: studynotion,
      github: "https://github.com/prashantrai-30/StudyNotion_Backend",
    },
  
  ];