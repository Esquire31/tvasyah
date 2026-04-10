import React from 'react';

const ProductDetails: React.FC = () => {
  return (
    <div className="lg:col-span-5 lg:sticky lg:top-40">
      <span className="text-gold-muted text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">
        Collection: Earthly Restoratives
      </span>
      <h1 className="text-6xl md:text-7xl font-serif text-moss-green leading-tight mb-8 italic dark:text-white">
        Tvasyah <br/><span className="not-italic font-normal">Radiance Nectar</span>
      </h1>
      <div className="mb-12 space-y-6">
        <p className="text-lg text-sage dark:text-gray-300 opacity-70 leading-relaxed max-w-lg">
          A botanical archive of sixteen rare Ayurvedic herbs, slow-infused over lunar cycles to restore the skin's natural rhythm.
        </p>
        <div className="text-3xl font-serif text-moss-green dark:text-white italic">$124.00</div>
      </div>
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-sage/10 pb-4">
          <span className="text-xs uppercase tracking-widest text-sage/60 dark:text-gray-400">Size</span>
          <span className="font-serif italic dark:text-white">30ml / 1.01 fl. oz</span>
        </div>
        <button className="w-full py-5 bg-moss-green text-white rounded-full uppercase tracking-[0.3em] text-[11px] font-medium hover:bg-moss-green/90 transition-all shadow-xl shadow-emerald-green/10 active:scale-[0.98]">
          Add to Cart
        </button>
        <div className="flex gap-8 pt-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest opacity-70 dark:text-gray-400">Ethically Sourced</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest opacity-70 dark:text-gray-400">Hand-Blended</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
