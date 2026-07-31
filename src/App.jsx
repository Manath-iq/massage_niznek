import React from 'react';
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PricesSection from './components/PricesSection';
import SpecialistsSection from './components/SpecialistsSection';
import FAQSection from './components/FAQSection';
import TrustSection from './components/TrustSection';
import LocalSection from './components/LocalSection';
import CtaSection from './components/CtaSection';
import SeoSection from './components/SeoSection';
import ContactSection from './components/ContactSection';
import useReveal from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricesSection />
        <SpecialistsSection />
        <TrustSection />
        <FAQSection />
        <LocalSection />
        <CtaSection />
        <SeoSection />
      </main>
      <ContactSection />
    </>
  );
}

export default App;
