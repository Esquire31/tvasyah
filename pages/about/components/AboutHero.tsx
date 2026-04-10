import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center bg-[#E5E1D8] pt-4 pb-8">
      <div className="absolute right-0 top-0 h-full w-full lg:w-[65%] overflow-hidden">
        <img 
          alt="Our Heritage" 
          className="h-full w-full object-cover scale-110 lg:scale-100" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuATEolMLbSFMoXYrknEyBVsB_v0BVEie7laaWzFX03Kf1PS1udwB2aghS1c6GvmI34Sjw6e-IObk7IHaoH0AwQnW3sywd9I-1kXTxjhh7FCD4LuMjITym9zBidop1lNqzz8_byeestkT5LwCtIuin24o7bVE23Qk6h_kBrI50NTUshkTMTtxV4-UdkFcK7Dp0LZwCynd4Uw83XBD6zxKgeVnjl3s0sF3nSLpWFVsdEh6yjYoJGSMPGuerc1JH59v46bRrzQOqllGA"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E5E1D8] via-[#E5E1D8]/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-20 w-full">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-[1px] bg-terracotta-gold"></span>
            <span className="text-terracotta-gold uppercase tracking-[0.3em] text-[11px] font-bold">Our Heritage</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-serif text-moss-green leading-[0.95] mb-8 italic dark:text-white">
            Wisdom of the <br/><span className="not-italic font-normal">Ancients.</span>
          </h2>
          <p className="text-sage text-lg max-w-md leading-relaxed mb-10 font-light dark:text-gray-300">
            Tvasyah was born from a singular vision: to honor the sacred alchemy of Ayurveda while embracing the precision of modern clinical science.
          </p>
          <button className="bg-moss-green text-gold-muted hover:text-text-green hover:bg-gold-muted px-10 py-5 rounded-full font-semibold text-[13px] tracking-widest uppercase transition-all shadow-xl shadow-emerald-green/10">
            Discover Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
