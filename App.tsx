
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import AlchemySection from './components/AlchemySection';
import RitualSection from './components/RitualSection';
import Bestsellers from './components/Bestsellers';
import Testimonials from './components/Testimonials';
import AboutHero from './components/AboutHero';
import FounderLegacy from './components/FounderLegacy';
import Timeline from './components/Timeline';
import Promises from './components/Promises';
import Footer from './components/Footer';
import { INGREDIENTS, PUBLICATIONS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigate} currentView={currentView} />
      
      <main className="transition-opacity duration-500">
        {currentView === 'home' ? (
          <>
            <Hero />
            
            {/* Ingredients Marquee */}
            <section className="py-20 bg-background-light dark:bg-background-dark border-y border-sage/10 overflow-hidden">
              <Marquee items={INGREDIENTS} variant="large-text" />
            </section>

            <AlchemySection />
            <RitualSection />
            <Bestsellers />
            
            {/* Publication Marquee */}
            <section className="py-20 bg-cream-soft dark:bg-background-dark/50 border-y border-gold-muted/10 overflow-hidden">
              <div className="max-w-[1440px] mx-auto px-6 mb-12 text-center">
                <span className="text-gold-muted uppercase tracking-[0.3em] text-[10px] font-bold">As Featured In</span>
              </div>
              <Marquee items={PUBLICATIONS} variant="small-logos" reverse={true} />
            </section>

            <Testimonials />
          </>
        ) : (
          <div className="animate-in fade-in duration-700">
            <AboutHero />
            <FounderLegacy />
            <Timeline />
            <Promises />
            
            {/* Re-use testimonials on about page for credibility */}
            <div className="bg-cream-soft/30">
              <Testimonials />
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
