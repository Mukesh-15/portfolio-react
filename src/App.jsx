import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Cursor />
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <Projects />
        <Education />
        <Skills />
        <Certifications />
        <Achievements />
      </main>
      <Contact />
    </div>
  );
}

export default App;
