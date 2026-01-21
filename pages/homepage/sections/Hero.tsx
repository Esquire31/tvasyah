
import React from 'react';
import { COLOR } from '@/core/constants/color';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000" 
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(17, 33, 29, 0.6), rgba(17, 33, 29, 0.1)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuATEolMLbSFMoXYrknEyBVsB_v0BVEie7laaWzFX03Kf1PS1udwB2aghS1c6GvmI34Sjw6e-IObk7IHaoH0AwQnW3sywd9I-1kXTxjhh7FCD4LuMjITym9zBidop1lNqzz8_byeestkT5LwCtIuin24o7bVE23Qk6h_kBrI50NTUshkTMTtxV4-UdkFcK7Dp0LZwCynd4Uw83XBD6zxKgeVnjl3s0sF3nSLpWFVsdEh6yjYoJGSMPGuerc1JH59v46bRrzQOqllGA')` 
        }}
      ></div>
      <div className="relative h-full max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col justify-center items-start">
        <div className="max-w-2xl space-y-6">
          <span className="inline-block text-primary uppercase tracking-[0.4em] text-xs font-bold bg-primary/10 px-3 py-1 rounded">
            Pure Gold Ayurveda
          </span>
          <h2 className="text-5xl md:text-7xl serif-text text-white leading-tight">
            Timeless Rituals, <br/><i className="font-normal opacity-90">Modern Science.</i>
          </h2>
          <p className="text-white/80 text-lg max-w-lg leading-relaxed font-light">
            Experience the fusion of ancient Vedic wisdom and advanced dermatology for a radiance that transcends time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-primary text-[#11211d] px-8 py-4 rounded-lg font-bold text-sm tracking-widest uppercase hover:bg-primary/90 transition-all zen-shadow">
              Shop The Collection
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all backdrop-blur-sm">
              Our Philosophy
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
