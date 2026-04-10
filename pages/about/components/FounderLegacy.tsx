import React from 'react';
import { Quote } from 'lucide-react';
import { COLOR, ICONS } from '../../../core/constants';

const FounderLegacy: React.FC = () => {
  return (
    <section className="bg-cream dark:bg-[#0d1a17] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-gold-muted uppercase tracking-[0.4em] text-[10px] font-bold">The Visionary</span>
              <h3 className="text-5xl font-serif leading-tight text-sage dark:text-white">The Founder's <br/>Legacy</h3>
            </div>
            <div className="relative pl-12 border-l-2 border-gold-muted/30 py-4">
              <Quote className="absolute left-0 top-0 text-gold-muted opacity-50" size={ICONS.SIZE.LG} />
              <p className="font-serif italic text-xl text-sage dark:text-gray-300 leading-relaxed">
                "We didn't just want to create another skincare brand. We wanted to create a portal to self-reverence, using the same botanical gold that graced the altars of our ancestors."
              </p>
              <div className="mt-8">
                <h4 className="font-bold text-sm tracking-[0.2em] uppercase text-moss-green dark:text-white">Anvi Aggarwal</h4>
                <p className="text-xs text-sage/60 dark:text-gray-400 uppercase tracking-widest mt-1">Founder & Master Formulator</p>
              </div>
            </div>
            <p className="text-sage dark:text-gray-300 leading-loose text-lg font-light">
              Raised in the lush foothills of the Himalayas, Ananya spent her childhood in her grandmother's apothecary gardens. Tvasyah is the culmination of those memories—blending rare wild-harvested herbs with 24K gold leaf to create elixirs that feed both the skin and the soul.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-gold-muted/10 rounded-full blur-3xl"></div>
            <div className="relative cursor-hover z-10 aspect-[4/5] overflow-hidden organic-border shadow-2xl">
              <img alt="The Founder" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO2BtGmQJXVvRE6XiGOrg6d9H9JUAcjpYH6UFA2Yzta_TZDH5th9HF5tDO2Sd_RVQBpXAeG4ptYvHQQedapduqVDnQb4ZB9bjVyp4lv3958_pk2N1MBIbUXDvi9VWqlmAmKqrOILhWCTDNHAOQrKhz2p5q7QoDhfv4VaLrEvWb4EZy9nPQGl7kv_Sbt7a5qVMpADteQpOV0gO03buu_zCwjsQf3HBom_dYCcW6uF92nKzZGNiZbohkKXHa6Ab3oieomq1DwufbPw"/>
            </div>
            <div className="absolute bottom-8 -right-8 z-20 bg-cream-soft dark:bg-background-dark p-8 rounded-lg zen-shadow max-w-xs border border-gold-muted/20">
              <p className="font-serif italic text-gold-muted text-lg mb-2">"Every formulation undergoes a 108-day maturation process."</p>
              <span className="text-[10px] uppercase tracking-widest text-sage dark:text-gray-400">Tvasyah Standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderLegacy;
