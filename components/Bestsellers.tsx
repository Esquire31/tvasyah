
import React from 'react';
import { PRODUCTS } from '../constants';

const Bestsellers: React.FC = () => {
  return (
    <section className="bg-background-light dark:bg-[#0d1a17] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Curated Favorites</span>
            <h3 className="text-4xl serif-text text-sage dark:text-white">The Bestsellers</h3>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-sage/20 flex items-center justify-center text-sage hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">west</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-sage/20 flex items-center justify-center text-sage hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-8 pb-12 snap-x no-scrollbar">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="min-w-[320px] snap-start bg-cream-soft dark:bg-background-dark rounded-xl overflow-hidden group border border-transparent hover:border-gold-muted/20 transition-all zen-shadow">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={product.image}
                />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-white dark:bg-primary text-background-dark py-3 rounded-lg font-bold text-xs tracking-[0.2em] uppercase shadow-lg">
                    {product.tagline}
                  </button>
                </div>
              </div>
              <div className="p-6 text-center space-y-1">
                <h4 className="serif-text text-xl text-sage dark:text-white">{product.name}</h4>
                <p className="text-xs text-sage/60 dark:text-gray-400 uppercase tracking-widest">{product.category}</p>
                <div className="pt-3 flex justify-center gap-1 text-gold-muted opacity-60">
                  {[...Array(product.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined !text-sm">star</span>
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
