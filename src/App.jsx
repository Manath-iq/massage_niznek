import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SpecialistsSection from './components/SpecialistsSection';
import ContactSection from './components/ContactSection';
import './index.css';

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SpecialistsSection />
      <ContactSection />
    </>
  );
}

export default App;
