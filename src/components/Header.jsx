import { useState, useEffect } from 'react';

const Header = () => {
  const [active, setActive] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none">
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-6 py-3 shadow-lg pointer-events-auto flex items-center space-x-2 sm:space-x-4 navoptions">
        {navLinks.map((link) => (
          <p key={link.name} className="m-0">
            <a 
              href={link.href} 
              className={active === link.id ? 'active' : ''}
              onClick={() => setActive(link.id)}
            >
              {link.name}
            </a>
          </p>
        ))}
      </div>
    </header>
  );
};

export default Header;
