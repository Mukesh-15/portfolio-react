import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ index, category, title, descriptionList, toolsStr, imgUrl, link, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col md:flex-row items-center w-full mb-32 gap-12"
    >
      {/* Content Side (Left) */}
      <div className="w-full md:w-5/12 flex flex-col items-start pr-0 md:pr-8">
        <p className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
          {index} — {category}
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight font-heading">
          {title}
        </h3>
        
        <ul className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 list-disc list-inside space-y-2">
          {descriptionList.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
        
        <div className="text-gray-700 text-sm mb-8 bg-gray-100 px-4 py-3 rounded-lg w-full">
          <span className="font-bold">Tech Stack:</span> {toolsStr}
        </div>

        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer" 
          className="bg-gray-900 hover:bg-primary text-white font-semibold px-8 py-4 rounded-full flex items-center shadow-md hover:shadow-lg transition-all duration-300"
        >
          View Github <ArrowUpRight size={20} className="ml-2" />
        </a>
      </div>

      {/* Image Side (Right) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.2, delay: delay + 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full md:w-7/12 relative group cursor-pointer" 
        onClick={() => window.open(link, "_blank")}
      >
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white font-bold px-6 py-3 rounded-full flex items-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
            Explore
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-xl border border-gray-100 bg-white">
          <img 
            src={imgUrl} 
            alt={title} 
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      index: "01",
      category: "FULLSTACK \u00B7 API",
      title: "Crime Reporting & Case Management System",
      descriptionList: [
        "Built a Django-based Crime Reporting System to securely submit, manage, and track crime reports online.",
        "Implemented authentication and role-based access control for users, police, and administrators.",
        "Developed case tracking and status update workflows to improve transparency and reporting efficiency.",
        "Designed responsive dashboards and forms using Tailwind CSS and JavaScript.",
        "Ensured secure data handling and integrity using Django’s built-in security features."
      ],
      toolsStr: "Python, Django, Tailwind CSS, MySQL",
      imgUrl: "/media/images/crime-tracker.png", 
      link: "https://github.com/Mukesh-15/Crime-Reporting-System"
    },
    {
      index: "02",
      category: "MERN \u00B7 REAL-TIME",
      title: "Real-Time One-to-One Chat Application",
      descriptionList: [
        "Designed and developed a real-time one-to-one chat application using the MERN stack and Socket.IO for low-latency, bi-directional communication.",
        "Implemented secure email-based OTP authentication for verified user sign-up and login.",
        "Developed a responsive React.js UI with live state synchronization across connected clients.",
        "Engineered scalable backend APIs using Node.js, Express.js, and MongoDB."
      ],
      toolsStr: "Mongo DB, Express.js, React.js, Node.js, Socket.IO",
      imgUrl: "/media/images/chat-app.png", 
      link: "https://github.com/Mukesh-15/MeoChat" 
    }
  ];

  return (
    <section id="projects" className="w-full min-h-screen bg-dotted py-32 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-6xl px-6 md:px-12 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight font-heading">Projects</h2>
          <p className="text-gray-500 text-lg">Real-world applications built with modern web technologies.</p>
        </motion.div>

        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}
            delay={0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
