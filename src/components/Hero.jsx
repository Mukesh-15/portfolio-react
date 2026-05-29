import { motion } from 'framer-motion';

const Hero = () => {
  const traits = [
    "✦ FULL STACK DEVELOPER",
    "✦ REACT.JS",
    "✦ EXPRESS.JS",
    "✦ NODE.JS",
    "✦ PROBLEM SOLVER",
    "✦ HTML & CSS",
    "✦ JAVA",
    "✦ PYTHON & C",
    "✦ CONTINUOUS LEARNER",
    "✦ FULL STACK DEVELOPER",
    "✦ REACT.JS",
    "✦ EXPRESS.JS",
    "✦ NODE.JS",
    "✦ PROBLEM SOLVER",
    "✦ HTML & CSS",
    "✦ JAVA",
    "✦ PYTHON & C"
  ];

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="home" className="relative w-full min-h-[90vh] flex flex-col justify-center items-center pt-32 overflow-hidden bg-dotted">
      <div className="flex flex-col md:flex-row w-full max-w-6xl px-6 md:px-12 z-10 flex-grow items-center justify-between">
        
        {/* Left Side: Typography */}
        <div className="flex flex-col w-full md:w-[55%] items-start">
          <motion.h1 
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-6xl md:text-[6rem] font-heading font-bold text-gray-900 mb-6 leading-tight tracking-tight"
          >
            Hi, I'm<br/>Mukesh.
          </motion.h1>
          
          <motion.p 
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base md:text-lg text-gray-500 max-w-xl leading-relaxed mb-4"
          >
            A passionate Computer Science student at <span className="font-semibold text-gray-800"> Jawaharlal Nehru Technological University Hyderabad </span> and a <span className="font-semibold text-gray-800"> MERN Stack Developer </span> with a strong interest in building modern and scalable web applications. I enjoy solving problems, learning new technologies, and continuously improving my development skills through practical experience and real-world projects.
          </motion.p>
          
          {/* <motion.p 
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base md:text-lg text-gray-500 max-w-xl leading-relaxed"
          >
            Fuelled by coding challenges, modern design systems, and a constant drive to learn technologies like <span className="font-semibold text-gray-800">React and Tailwind.</span>
          </motion.p> */}
        </div>

        {/* Right Side: Image & Art */}
        <div className="w-full md:w-[45%] flex justify-end items-end mt-12 md:mt-0 relative h-full">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 w-full flex justify-end"
          >
            <img 
              src="/media/images/mukesh.gif" 
              alt="Mukesh" 
              className="w-[80%] md:w-[90%] h-auto object-contain"
            />
          </motion.div>
        </div>

      </div>

      {/* Marquee Banner at bottom */}
      <div className="w-full border-t border-b border-gray-200 bg-white py-3 mt-auto relative z-20 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="inline-block"
        >
          {traits.map((trait, index) => (
            <span key={index} className="text-sm font-bold tracking-widest text-gray-800 mx-6">
              {trait}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
