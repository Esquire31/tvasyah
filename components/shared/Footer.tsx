import React from 'react';
import { COLOR, ICONS } from '../../core/constants';
import { MoveRight, BadgeCheck, Leaf, Globe, Share2, Camera } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-green text-white">
      <section className="relative py-32 px-6 lg:px-20 border-b border-white/10 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-4">
            <span className="text-gold-muted uppercase tracking-[0.4em] text-[10px] font-bold">The Conscious Circle</span>
            <h2 className="text-4xl md:text-6xl serif-text leading-tight">
              Receive poetic updates on <br/>
              <i className="italic font-normal">rituals</i> and natural beauty.
            </h2>
          </div>
          <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="flex-1 bg-transparent border-b border-white/30 focus:border-primary px-4 py-4 text-white placeholder:text-white/40 focus:ring-0 transition-colors" 
              placeholder="Your email address" 
              type="email"
            />
            <button className="bg-primary text-emerald-deep px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
              Join 
              <span className="material-symbols-outlined !text-base">
                <MoveRight color={COLOR.TEXT.BLACK} size={ICONS.SIZE.SM} />
              </span>
            </button>
          </form>
          <p className="text-white/40 text-[10px] uppercase tracking-widest">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </section>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold tracking-[0.3em] uppercase text-gold-muted">TVASYAH</h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs font-light">
                Crafting premium Ayurvedic skincare rooted in ancient wisdom and modern conscious living. Born from the earth, curated for your soul.
              </p>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center">
                  <BadgeCheck color={COLOR.TEXT.SUBTLE} size={ICONS.SIZE.LG} />
                </div>
                <span className="text-[9px] uppercase tracking-widest text-white/40 text-center">Certified<br/>Natural</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center">
                  <Leaf color={COLOR.TEXT.SUBTLE} size={ICONS.SIZE.LG} />
                </div>
                <span className="text-[9px] uppercase tracking-widest text-white/40 text-center">Cruelty<br/>Free</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">Collections</h5>
            <ul className="space-y-5 text-sm text-white/70 font-light">
              {['Face Rituals', 'Body Care', 'Hair Elixirs', 'Gifting Suites', 'Travel Sets'].map(item => (
                <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">Philosophy</h5>
            <ul className="space-y-5 text-sm text-white/70 font-light">
              {['Our Story', 'Ayurvedic Roots', 'Sustainability', 'Ingredient Sourcing', 'Community'].map(item => (
                <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">Support</h5>
            <ul className="space-y-5 text-sm text-white/70 font-light">
              {['Shipping Info', 'Returns & Exchanges', 'Contact Us', 'Store Locator', 'FAQ'].map(item => (
                <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-10 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/40">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-white transition-colors" href="#">Cookie Settings</a>
          </div>
          <div className="flex gap-6">
            <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all" href="#">
              <Globe color={COLOR.TEXT.MUTED} size={ICONS.SIZE.MD} />
            </a>
            <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all" href="#">
              <Share2 color={COLOR.TEXT.MUTED} size={ICONS.SIZE.MD} />
            </a>
            <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all" href="#">
              <Camera color={COLOR.TEXT.MUTED} size={ICONS.SIZE.MD} />
            </a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            © 2024 TVASYAH BOTANICALS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
