import React from 'react';
import AboutHero from './components/AboutHero';
import FounderLegacy from './components/FounderLegacy';
import Timeline from './components/Timeline';
import Promises from './components/Promises';
import Testimonials from '../homepage/components/Testimonials';

const AboutPage: React.FC = () => {
  return (
    <>
        <AboutHero />
        <FounderLegacy />
        <Timeline />
        <Promises />
        <div className="bg-cream-soft/30">
            <Testimonials />
        </div>
    </>
  );
};

export default AboutPage;
