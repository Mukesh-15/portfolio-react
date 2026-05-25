import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    "Solved 500+ Data Structures & Algorithms Problems — LeetCode & GeeksForGeeks",
    "Achieved 5 Stars in Problem Solving on HackerRank",
    "Participated in LeetCode Weekly Contests, Ranked top 7%",
    "Strong problem-solving in Monotonic Stack, Sliding Window, and Dynamic Programming"
  ];

  return (
    <section id="achievements" className="w-full py-24 bg-dotted flex flex-col items-center">
      <div className="w-full max-w-6xl px-6 md:px-12 flex flex-col md:flex-row gap-12">
        
        {/* Extracurriculars */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 font-heading">Extracurricular</h2>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Coding Club Coordinator</h3>
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-6">JNTUH | Aug 2023 – Present</p>
            <ul className="list-disc list-outside ml-5 space-y-3 text-gray-600 text-lg leading-relaxed">
              <li>Organized coding contests, hackathons, and workshops to promote programming culture.</li>
              <li>Coordinated with faculty and peers to conduct technical events and mentorship programs.</li>
              <li>Guided club members in competitive programming and project development.</li>
              <li>Collaborated with other university clubs for interdisciplinary projects.</li>
            </ul>
          </motion.div>
        </div>

        {/* Achievements */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 font-heading">Achievements</h2>
            <ul className="space-y-6">
              {achievements.map((achieve, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary mr-4 mt-1">✦</span>
                  <p className="text-gray-700 text-lg font-medium leading-relaxed">{achieve}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
