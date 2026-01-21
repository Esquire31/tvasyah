
import React from 'react';

const Promises: React.FC = () => {
  const promises = [
    { icon: 'eco', title: '100% Organic', desc: 'Wild-harvested ingredients from native soil.' },
    { icon: 'cruelty_free', title: 'Cruelty Free', desc: 'Never tested on animals, only on willing rituals.' },
    { icon: 'recycling', title: 'Zero Waste', desc: 'Infinite glass packaging & recycled paper.' },
    { icon: 'water_drop', title: 'Waterless', desc: 'Concentrated formulas for maximum potency.' }
  ];

  return (
    <section className="py-32 px-6 lg:px-20 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1 space-y-6">
          <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">Our Promise</span>
          <h3 className="text-4xl serif-text text-emerald-deep dark:text-white">Clean. <br/>Conscious. <br/>Eternal.</h3>
          <p className="text-sage dark:text-gray-400 leading-relaxed font-light">
            Our commitment to the planet is as deep as our commitment to your skin. We believe luxury shouldn't cost the earth.
          </p>
          <button className="bg-emerald-deep dark:bg-primary dark:text-emerald-deep text-white px-8 py-4 rounded-lg font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-all">
            Sustainability Report
          </button>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
          {promises.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center space-y-4">
              <div className="w-32 h-32 rounded-full border border-gold-muted/30 flex flex-col items-center justify-center p-4 group hover:border-gold-muted transition-colors cursor-default">
                <span className="material-symbols-outlined text-gold-muted text-4xl">{p.icon}</span>
                <span className="text-[9px] uppercase tracking-widest mt-2 font-bold dark:text-gray-300">{p.title}</span>
              </div>
              <p className="text-[10px] text-sage dark:text-gray-400 leading-tight">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promises;
