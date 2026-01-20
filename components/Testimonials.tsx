
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 mb-16 flex flex-col items-center text-center space-y-4">
        <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">The Glow Journal</span>
        <h3 className="text-4xl serif-text dark:text-white">Community Testimonials</h3>
      </div>
      <div className="mask-fade overflow-hidden flex whitespace-nowrap">
        <div className="flex gap-12 animate-scroll">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
            <div key={`${t.id}-${idx}`} className="min-w-[400px] bg-white dark:bg-[#1a2e2a] p-10 rounded-2xl zen-shadow border border-sage/5 space-y-6">
              <div className="flex text-gold-muted gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined !text-sm">star</span>
                ))}
              </div>
              <p className="text-lg italic serif-text leading-relaxed whitespace-normal text-sage dark:text-gray-200">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-muted/20 flex items-center justify-center font-bold text-gold-muted">
                  {t.initials}
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest dark:text-white">{t.name}</h5>
                  <p className="text-[10px] text-sage/60 uppercase">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
