import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(17, 33, 29, 0.4), rgba(17, 33, 29, 0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuATEolMLbSFMoXYrknEyBVsB_v0BVEie7laaWzFX03Kf1PS1udwB2aghS1c6GvmI34Sjw6e-IObk7IHaoH0AwQnW3sywd9I-1kXTxjhh7FCD4LuMjITym9zBidop1lNqzz8_byeestkT5LwCtIuin24o7bVE23Qk6h_kBrI50NTUshkTMTtxV4-UdkFcK7Dp0LZwCynd4Uw83XBD6zxKgeVnjl3s0sF3nSLpWFVsdEh6yjYoJGSMPGuerc1JH59v46bRrzQOqllGA')` 
        }}
      ></div>
      <div className="relative h-full max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col justify-center items-center text-center">
        <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-6">Our Heritage</span>
        <h2 className="text-6xl md:text-8xl serif-text text-white leading-tight mb-8">
          Wisdom of the <br/><i className="font-normal">Ancients.</i>
        </h2>
        <p className="text-white/80 text-xl max-w-2xl leading-relaxed font-light mx-auto">
          Tvasyah was born from a singular vision: to honor the sacred alchemy of Ayurveda while embracing the precision of modern clinical science.
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default AboutHero;
