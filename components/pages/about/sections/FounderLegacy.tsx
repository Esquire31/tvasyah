
import React from 'react';

const FounderLegacy: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-20 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-terracotta-gold uppercase tracking-[0.4em] text-[10px] font-bold">The Visionary</span>
            <h3 className="text-5xl serif-text leading-tight text-emerald-deep dark:text-white">The Founder's <br/>Legacy</h3>
          </div>
          <div className="relative pl-12 border-l-2 border-gold-muted/30 py-4">
            <span className="material-symbols-outlined absolute left-0 top-0 text-gold-muted text-4xl opacity-50">format_quote</span>
            <p className="serif-text italic text-2xl text-sage dark:text-gray-300 leading-relaxed">
              "We didn't just want to create another skincare brand. We wanted to create a portal to self-reverence, using the same botanical gold that graced the altars of our ancestors."
            </p>
            <div className="mt-8">
              <h4 className="font-bold text-sm tracking-[0.2em] uppercase text-emerald-deep dark:text-white">Ananya Sharma</h4>
              <p className="text-xs text-sage uppercase tracking-widest mt-1">Founder & Master Formulator</p>
            </div>
          </div>
          <p className="text-sage dark:text-gray-400 leading-loose text-lg font-light">
            Raised in the lush foothills of the Himalayas, Ananya spent her childhood in her grandmother's apothecary gardens. Tvasyah is the culmination of those memories—blending rare wild-harvested herbs with 24K gold leaf to create elixirs that feed both the skin and the soul.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-gold-muted/5 rounded-full blur-3xl"></div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img alt="The Founder" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO2BtGmQJXVvRE6XiGOrg6d9H9JUAcjpYH6UFA2Yzta_TZDH5th9HF5tDO2Sd_RVQBpXAeG4ptYvHQQedapduqVDnQb4ZB9bjVyp4lv3958_pk2N1MBIbUXDvi9VWqlmAmKqrOILhWCTDNHAOQrKhz2p5q7QoDhfv4VaLrEvWb4EZy9nPQGl7kv_Sbt7a5qVMpADteQpOV0gO03buu_zCwjsQf3HBom_dYCcW6uF92nKzZGNiZbohkKXHa6Ab3oieomq1DwufbPw"/>
          </div>
          <div className="absolute -bottom-8 -right-8 bg-emerald-deep p-10 rounded-xl zen-shadow max-w-xs text-white">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4">The Standard</p>
            <p className="text-sm font-light leading-relaxed">Every formulation undergoes a 108-day maturation process to ensure energetic potency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderLegacy;
