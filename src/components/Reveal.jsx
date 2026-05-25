import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0, y = 50 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: y, filter: 'blur(5px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
