import React from 'react';
import { COLOR, ICONS } from '../../../core/constants';
import { Sprout, FlaskConical } from 'lucide-react';

const AlchemySection: React.FC = () => {
  return (
    <section className="bg-cream py-24 px-6 lg:px-20 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-gold-muted/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 aspect-[4/5] overflow-hidden organic-border shadow-2xl rotate-[-2deg]">
            <img 
              alt="Ayurvedic Ingredients" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO2BtGmQJXVvRE6XiGOrg6d9H9JUAcjpYH6UFA2Yzta_TZDH5th9HF5tDO2Sd_RVQBpXAeG4ptYvHQQedapduqVDnQb4ZB9bjVyp4lv3958_pk2N1MBIbUXDvi9VWqlmAmKqrOILhWCTDNHAOQrKhz2p5q7QoDhfv4VaLrEvWb4EZy9nPQGl7kv_Sbt7a5qVMpADteQpOV0gO03buu_zCwjsQf3HBom_dYCcW6uF92nKzZGNiZbohkKXHa6Ab3oieomq1DwufbPw"
            />
          </div>
          <div className="absolute bottom-8 -right-8 z-20 bg-cream-soft dark:bg-background-dark p-8 rounded-lg zen-shadow max-w-xs border border-gold-muted/20">
            <p className="serif-text italic text-gold-muted text-xl mb-2">"Purity is not an option, it is our lineage."</p>
            <span className="text-[10px] uppercase tracking-widest text-sage">Tvasyah Founders</span>
          </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-4xl serif-text font-bold text-sage dark:text-white leading-snug">
              The Alchemy of <span className="gold-leaf-gradient">24K Gold</span> <br/>& Botanical Brilliance
            </h3>
            <div className="w-20 h-1 bg-gold-muted/30"></div>
          </div>
          <p className="text-sage dark:text-gray-300 leading-loose text-lg font-light">
            For centuries, gold was the secret to the glow of royalty. At Tvasyah, we combine high-purity gold leaf with hand-picked herbs, cold-pressed to retain their vibrational energy. Our formulations are modern masterpieces that speak the language of your skin.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div className="space-y-2">
              <span className="material-symbols-outlined text-gold-muted text-3xl">
                <Sprout color={COLOR.TEXT.SUBTLE} size={ICONS.SIZE.LG} />
              </span>
              <h4 className="font-bold text-xs uppercase tracking-widest dark:text-white">Vedic Origins</h4>
              <p className="text-sm text-sage/70 dark:text-gray-400">Authentic recipes from the ancient texts.</p>
            </div>
            <div className="space-y-2">
              <span className="material-symbols-outlined text-primary text-3xl">
                <FlaskConical color={COLOR.TEXT.MUTED} size={ICONS.SIZE.LG} />
              </span>
              <h4 className="font-bold text-xs uppercase tracking-widest dark:text-white">Modern Bio-tech</h4>
              <p className="text-sm text-sage/70 dark:text-gray-400">Dermatologically tested for results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlchemySection;
