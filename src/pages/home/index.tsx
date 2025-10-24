// src/pages/home/index.tsx
import { useRef } from 'react';
import Hero from './sections/hero';
import Skills from './sections/skills';
import Projects from './sections/projects';
import { portfolioData } from './constants';

// Dados do portfólio - depois você pode mover para um arquivo separado ou buscar de uma API

const Home = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero data={portfolioData.hero} onContactClick={scrollToContact} />
      <Skills data={portfolioData.skills} />
      <Projects data={portfolioData.projects} />
      {/* Você pode adicionar mais seções aqui: About, Experience, Contact, etc */}
    </>
  );
};

export default Home;