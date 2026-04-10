import React from 'react';
import { PRODUCTS } from '../../../../constants';
import { Star } from 'lucide-react';
import { COLOR, ICONS } from '../../../../core/constants';

const ProductGrid: React.FC = () => {
  return (
    <div className="lg:col-span-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream-soft dark:bg-background-dark mb-6 shadow-lg">
              <img 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={product.image}
              />
              <div className="absolute inset-0 bg-sage/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <button className="w-full bg-cream-soft text-sage py-4 rounded-full font-bold text-xs tracking-widest uppercase shadow-xl hover:bg-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
            <div className="text-center space-y-2">
              <h4 className="font-serif text-lg text-sage dark:text-white">{product.name}</h4>
              <p className="text-[11px] text-sage/60 dark:text-gray-400 uppercase tracking-widest font-semibold">{product.category}</p>
              <p className="text-base font-serif text-moss-green dark:text-white">${product.price}</p>
              <div className="pt-2 flex justify-center gap-1 text-gold-muted opacity-60">
                {[...Array(product.rating)].map((_, i) => (
                  <span key={i}>
                    <Star color={COLOR.TEXT.HIGHLIGHT} fill={COLOR.TEXT.HIGHLIGHT} size={ICONS.SIZE.SM} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
