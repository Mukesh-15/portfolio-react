import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const links = [
    { name: "Instagram", icon: <FaInstagram size={18} />, href: "https://www.instagram.com/mukie_15/" },
    { name: "LinkedIn", icon: <FaLinkedin size={18} />, href: "https://in.linkedin.com/in/mukesh-doodapaka-426a352b6" },
    { name: "GitHub", icon: <FaGithub size={18} />, href: "https://github.com/Mukesh-15" },
    { name: "Twitter", icon: <FaTwitter size={18} />, href: "https://twitter.com/Mukie_15" },
    { name: "WhatsApp", icon: <FaWhatsapp size={18} />, href: "https://wa.me/qr/KH73QG2NNZBEO1" },
    { name: "Leetcode", icon: <SiLeetcode size={18} />, href: "https://leetcode.com/u/mukie15/" },
  ];

  return (
    <footer id="contact" className="w-full bg-white pt-32 pb-16 flex flex-col items-center">
      <div className="w-full max-w-6xl px-6 md:px-12 flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-6xl md:text-[8rem] font-bold text-gray-900 leading-none text-center mb-16 font-heading tracking-tight"
        >
          Let's work together.
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {links.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <span className="mr-2">{link.icon}</span>
              <span className="font-medium text-sm">{link.name}</span>
            </motion.a>
          ))}
          
          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: links.length * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-primary transition-colors duration-300 ml-0 sm:ml-4"
          >
            <Download size={18} className="mr-2" />
            <span className="font-semibold text-sm">Download Resume</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
