import React from 'react';
import { INGREDIENTS, PUBLICATIONS } from '../../constants';
import Marquee from '../../components/ui/Marquee';
import Hero from './components/Hero';
import AlchemySection from './components/AlchemySection';
import RitualSection from './components/RitualSection';
import Bestsellers from './components/Bestsellers';
import Testimonials from './components/Testimonials';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Ingredients Marquee */}
      <section className="py-16 bg-moss-green dark:bg-background-dark border-y border-sage/10 overflow-hidden">
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
  );
};

export default HomePage;
