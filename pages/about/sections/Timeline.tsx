import React from 'react';
import { TIMELINE_EVENTS } from '../../../constants';

const Timeline: React.FC = () => {
  return (
    <section className="py-32 bg-cream-soft dark:bg-emerald-deep/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="text-center mb-24 space-y-4">
          <span className="text-gold-muted uppercase tracking-[0.4em] text-[10px] font-bold">The Journey</span>
          <h3 className="text-4xl serif-text text-emerald-deep dark:text-white">Chronicles of Tvasyah</h3>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sage/30 to-transparent -translate-x-1/2 hidden lg:block"></div>
          <div className="space-y-24">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div key={event.year} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:w-1/2 ${idx % 2 === 0 ? 'lg:pr-24 lg:text-right' : 'lg:pl-24'}`}>
                  <h4 className="text-gold-muted serif-text text-3xl mb-4">{event.year}</h4>
                  <h5 className="text-emerald-deep dark:text-white font-bold text-xs uppercase tracking-widest mb-4">{event.title}</h5>
                  <p className="text-sage dark:text-gray-400 font-light leading-relaxed">{event.description}</p>
                </div>
                <div className={`w-4 h-4 rounded-full ${event.isPrimary ? 'bg-primary ring-8 ring-primary/20' : 'bg-gold-muted ring-8 ring-white/50 dark:ring-white/10'} z-10 hidden lg:block`}></div>
                <div className={`lg:w-1/2 ${idx % 2 === 0 ? 'lg:pl-24' : 'lg:pr-24 lg:text-right'}`}>
                  <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg group">
                    <img 
                      alt={event.title} 
                      className={`w-full h-full object-cover transition-all duration-700 ${event.isPrimary ? '' : 'grayscale group-hover:grayscale-0'}`} 
                      src={event.image}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
