import { motion } from 'framer-motion';

const EduCard = ({ title, degree, duration, grade, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
  >
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">{title}</h3>
      <p className="text-gray-700 text-lg font-semibold mb-2">{degree}</p>
      <p className="text-gray-500 text-sm mb-6">{duration}</p>
    </div>
    <div className="pt-4 border-t border-gray-100">
      <p className="text-sm font-bold tracking-wider text-primary uppercase">{grade}</p>
    </div>
  </motion.div>
);

const Education = () => {
  const eduData = [
    { 
      title: "JNTUH College of Engineering Hyderabad", 
      degree: "Bachelor of Computer Science and Engineering",
      duration: "Sep. 2023 – Sep 2027",
      grade: "CGPA: 8.6"
    },
    { 
      title: "Tagore Junior College", 
      degree: "Board of Intermediate Education – (MPC)",
      duration: "July 2021 – July 2023",
      grade: "Percentage: 89.3%"
    },
    // {
    //   title: "Rosary Convent High School",
    //   degree: "Secondary School Educattion",
    //   duration: "2021",
    //   grade: "7.8"      
    // }
  ];

  return (
    <section id="education" className="w-full py-24 bg-kraft flex flex-col items-center">
      <div className="w-full max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight font-heading">Education</h2>
          <p className="text-gray-500 text-lg">My academic background and qualifications.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eduData.map((edu, idx) => (
            <EduCard key={idx} {...edu} delay={idx * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
