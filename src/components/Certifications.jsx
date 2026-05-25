import { motion } from 'framer-motion';

const CertCard = ({ title, platform, img, link, delay }) => (
  <motion.a 
    href={link}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between items-center text-center cursor-none group h-full block"
  >
    <div className="w-full overflow-hidden rounded-xl mb-6">
      <img 
        src={img} 
        alt={title} 
        className="w-full rounded-xl h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
    </div>
    <div>
      <h4 className="text-xl font-bold text-gray-900 mb-3 font-heading">{title}</h4>
      <p className="text-primary font-semibold text-sm uppercase tracking-widest">{platform}</p>
    </div>
  </motion.a>
);

const Certifications = () => {
  const certifications = [
    { 
      title: "Meta React Basics Certification", 
      platform: "Coursera",
      img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~NNCJ0L7YZ01B/CERTIFICATE_LANDING_PAGE~NNCJ0L7YZ01B.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/NNCJ0L7YZ01B"
    },
    { 
      title: "Meta JavaScript Certification", 
      platform: "Coursera",
      img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7Y732FIQA4FA/CERTIFICATE_LANDING_PAGE~7Y732FIQA4FA.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/7Y732FIQA4FA"
    },
    { 
      title: "HackerRank Problem Solving", 
      platform: "HackerRank",
      img: "/media/images/certi.png", 
      link: "https://www.hackerrank.com/certificates/d5c59e5e0060"
    }
  ];

  return (
    <section id="certifications" className="w-full py-24 bg-white flex flex-col items-center">
      <div className="w-full max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight font-heading">Certifications</h2>
          <p className="text-gray-500 text-lg">Click on the certificates to verify them.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertCard key={index} {...cert} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
