import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 w-full"
  >
    <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4 font-heading">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span 
          key={index} 
          className="px-4 py-2 bg-gray-50 text-gray-800 font-medium rounded-lg border border-gray-200 hover:border-primary hover:text-primary transition-colors duration-300 cursor-default text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillData = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C", "SQL (MySQL)", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Frameworks",
      skills: ["Django", "Express.js"]
    },
    {
      title: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman API", "Node.js"]
    },
    {
      title: "Libraries",
      skills: ["Pandas", "NumPy", "Matplotlib", "React.js"]
    }
  ];

  return (
    <section id="skills" className="w-full pb-32 bg-kraft flex flex-col items-center">
      <div className="w-full max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 mt-16 flex flex-col items-center text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-heading">Technical Skills</h2>
          <p className="text-gray-500 text-lg">Tools and technologies I work with.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillData.map((category, idx) => (
            <SkillCategory key={idx} title={category.title} skills={category.skills} delay={idx * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
