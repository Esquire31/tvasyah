import React from 'react';
import { TESTIMONIALS } from '../../../constants';
import { Star, StarHalf } from 'lucide-react';
import { COLOR, ICONS } from '../../../core/constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-40 bg-cream dark:bg-background-dark overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[50%] h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M45.7,-77.1C58.9,-70.5,69.2,-58.5,77.3,-45.3C85.5,-32.1,91.5,-17.7,91.1,-3.5C90.7,10.7,83.9,24.6,75.4,37.6C66.9,50.6,56.7,62.8,43.9,71.1C31,79.3,15.5,83.6,0.3,83.1C-14.9,82.5,-29.8,77.1,-43.3,69.1C-56.7,61.1,-68.8,50.6,-76.3,37.7C-83.9,24.8,-86.8,9.6,-85.9,-5.4C-84.9,-20.4,-80,-35.3,-71.2,-47.9C-62.5,-60.5,-50,-70.7,-36.4,-77.1C-22.9,-83.5,-8.3,-86.1,4.7,-85.5C17.6,-84.9,32.4,-83.7,45.7,-77.1Z" fill="#7c9082" transform="translate(100 100)"></path>
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 mb-20 flex flex-col items-center text-center space-y-4 relative z-10">
        <span className="text-gold-muted uppercase tracking-[0.4em] text-[11px] font-bold">Community Voices</span>
        <h3 className="text-5xl md:text-6xl serif-text dark:text-white">Grown Together</h3>
      </div>

      <div className="mask-fade overflow-hidden flex">
        <div className="flex gap-12 animate-scroll">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
            <div key={`${t.id}-${idx}`} className={`min-w-[450px] bg-white/50 dark:bg-background-dark/50 backdrop-blur-sm p-12 organic-border border border-sage/5 space-y-8 ${idx % 3 === 0 ? 'rotate-2' : idx % 3 === 1 ? '-rotate-2' : 'rotate-0'}`}>
            <div className="flex text-gold-muted gap-1 p-3">
              {[...Array(Math.floor(t.ratings || 5))].map((_, i) => (
                <Star key={i} color={COLOR.TEXT.HIGHLIGHT} fill={COLOR.TEXT.HIGHLIGHT} size={ICONS.SIZE.SM} />
              ))}
              {(t.ratings % 1 !== 0) && (
                <StarHalf color={COLOR.TEXT.HIGHLIGHT} fill={COLOR.TEXT.HIGHLIGHT} size={ICONS.SIZE.SM} />
              )}
            </div>
            <p className="text-xl italic serif-text leading-relaxed whitespace-normal text-sage dark:text-gray-200">
              "{t.content}"
            </p>
            <div className="flex items-center gap-5">
              <div className="size-14 rounded-full bg-gold-muted/20 flex items-center justify-center font-bold text-gold-muted text-lg">
                {t.initials}
              </div>
              <div>
                <h5 className="text-sm font-bold uppercase tracking-widest dark:text-white">{t.name}</h5>
                <p className="text-[10px] text-sage/60 uppercase font-semibold">{t.role}</p>
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
