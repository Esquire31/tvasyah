import React from 'react';
import { Play } from 'lucide-react';
import { COLOR, ICONS } from '../../../core/constants';

const RitualSection: React.FC = () => {
  return (
    <section className="bg-emerald-deep text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <img 
            alt="Skin Ritual Cinematic" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO2BtGmQJXVvRE6XiGOrg6d9H9JUAcjpYH6UFA2Yzta_TZDH5th9HF5tDO2Sd_RVQBpXAeG4ptYvHQQedapduqVDnQb4ZB9bjVyp4lv3958_pk2N1MBIbUXDvi9VWqlmAmKqrOILhWCTDNHAOQrKhz2p5q7QoDhfv4VaLrEvWb4EZy9nPQGl7kv_Sbt7a5qVMpADteQpOV0gO03buu_zCwjsQf3HBom_dYCcW6uF92nKzZGNiZbohkKXHa6Ab3oieomq1DwufbPw"
          />
          <div className="absolute inset-0 bg-emerald-deep/40 flex items-center justify-center">
            <button className="group relative">
              <div className="absolute -inset-8 rounded-full border border-white/20 scale-100 group-hover:scale-125 transition-transform duration-700"></div>
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all">
                <Play color={COLOR.TEXT.MUTED} size={ICONS.SIZE.LG} />
              </div>
            </button>
          </div>
        </div>
        <div className="py-24 px-8 lg:px-20 space-y-12 flex flex-col justify-center">
          <div className="space-y-4">
            <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">The Daily Ceremony</span>
            <h2 className="text-4xl md:text-5xl serif-text">The Morning <i className="italic font-normal">Sattvic</i> Ritual</h2>
          </div>
          <div className="space-y-10">
            {[
              { num: '01', title: 'Purify', desc: 'Begin with our Silk Cleansing Balm to remove toxins accumulated overnight while preserving vital moisture.' },
              { num: '02', title: 'Illuminate', desc: 'Apply 3 drops of the 24K Radiance Oil. Massage in upward strokes to stimulate Marma points and awaken circulation.' },
              { num: '03', title: 'Seal', desc: 'Lock in the elixirs with our Saffron Infused Day Cream, creating a breathable barrier against urban pollutants.' }
            ].map((step) => (
              <div key={step.num} className="flex gap-8 group">
                <span className="text-gold-muted font-serif text-3xl opacity-50 group-hover:opacity-100 transition-opacity">{step.num}</span>
                <div className="space-y-2 border-l border-white/10 pl-8">
                  <h4 className="text-lg font-medium tracking-wide uppercase">{step.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed max-w-md">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-fit border border-gold-muted/50 text-gold-muted px-10 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-gold-muted hover:text-emerald-deep transition-all">
            View Full Ritual Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default RitualSection;
