
import React from 'react';
import { PRODUCTS } from '../../../constants';
import { COLOR, ICONS } from '../../../core/constants';
import { MoveRight, MoveLeft, Star } from 'lucide-react';

const Bestsellers: React.FC = () => {
  return (
    <section className="bg-cream dark:bg-[#0d1a17] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <span className="text-gold-muted text-[10px] font-bold tracking-[0.4em] uppercase">Curated Favorites</span>
            <h3 className="text-4xl serif-text text-sage dark:text-white">The Bestsellers</h3>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-sage/20 flex items-center justify-center text-sage hover:bg-gold-muted hover:text-white transition-all">
              <MoveLeft color={COLOR.TEXT.PRIMARY} size={ICONS.SIZE.MD} />
            </button>
            <button className="w-12 h-12 rounded-full border border-sage/20 flex items-center justify-center text-sage hover:bg-gold-muted hover:text-white transition-all">
              <MoveRight color={COLOR.TEXT.PRIMARY} size={ICONS.SIZE.MD} />
            </button>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-8 pb-12 snap-x no-scrollbar">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="min-w-[320px] snap-start group">
              <div className="relative aspect-[4/5] overflow-hidden organic-border bg-cream-soft dark:bg-background-dark mb-6 shadow-2xl">
                <img 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={product.image}
                />
                <div className="absolute inset-0 bg-sage/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="w-full bg-cream-soft text-sage py-4 rounded-full font-bold text-xs tracking-widest uppercase shadow-xl">
                    {product.tagline}
                  </button>
                </div>
              </div>
              <div className="text-center space-y-2">
                <h4 className="serif-text text-lg text-sage dark:text-white">{product.name}</h4>
                <p className="text-[11px] text-sage/60 dark:text-gray-400 uppercase tracking-widest font-semibold">{product.category}</p>
                <div className="pt-2 flex justify-center gap-1 text-gold-muted opacity-60">
                  {[...Array(product.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined !text-sm">
                      <Star color={COLOR.TEXT.HIGHLIGHT} fill={COLOR.TEXT.HIGHLIGHT} size={ICONS.SIZE.SM} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
