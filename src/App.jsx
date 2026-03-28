import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PricesSection from './components/PricesSection';
import FAQSection from './components/FAQSection';
import TrustSection from './components/TrustSection';
import LocalSection from './components/LocalSection';
import ContactSection from './components/ContactSection';
import './index.css';

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricesSection />
      <FAQSection />
      <TrustSection />
      <LocalSection />
      <ContactSection />
    </>
  );
}

export default App;
