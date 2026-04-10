import React from 'react';
import { Leaf, Heart, Recycle, Droplets } from 'lucide-react';
import { COLOR, ICONS } from '../../../core/constants';

const Promises: React.FC = () => {
  const promises = [
    { icon: Leaf, title: '100% Organic', desc: 'Wild-harvested ingredients from native soil.' },
    { icon: Heart, title: 'Cruelty Free', desc: 'Never tested on animals, only on willing rituals.' },
    { icon: Recycle, title: 'Zero Waste', desc: 'Infinite glass packaging & recycled paper.' },
    { icon: Droplets, title: 'Waterless', desc: 'Concentrated formulas for maximum potency.' }
  ];

  return (
    <section className="bg-cream py-24 px-6 lg:px-20 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1 space-y-6">
          <span className="text-gold-muted uppercase tracking-[0.4em] text-[10px] font-bold">Our Promise</span>
          <h3 className="text-5xl font-serif text-sage dark:text-white leading-snug">
            Clean. <br/>Conscious. <br/>Eternal.
          </h3>
          <p className="text-sage dark:text-gray-300 leading-relaxed font-light text-lg">
            Our commitment to the planet is as deep as our commitment to your skin. We believe luxury shouldn't cost the earth.
          </p>
          <button className="bg-moss-green text-white hover:bg-moss-green/90 px-10 py-4 rounded-full font-bold text-[11px] tracking-widest uppercase transition-all shadow-lg">
            Sustainability Report
          </button>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
          {promises.map((promise) => {
            const IconComponent = promise.icon;
            return (
              <div key={promise.title} className="flex flex-col items-center text-center space-y-4">
                <div className="w-32 h-32 rounded-full border border-gold-muted/20 hover:border-gold-muted flex flex-col items-center justify-center p-4 group transition-colors cursor-default">
                  <IconComponent className="text-gold-muted mb-2" size={ICONS.SIZE.LG} />
                  <span className="text-[9px] uppercase tracking-widest font-bold dark:text-gray-300">{promise.title}</span>
                </div>
                <p className="text-[10px] text-sage dark:text-gray-400 leading-tight">{promise.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Promises;
