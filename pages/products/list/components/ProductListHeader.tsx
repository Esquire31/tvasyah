import React from 'react';

const ProductListHeader: React.FC = () => {
  return (
    <header className="px-6 lg:px-20 mb-16 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-sage/5 pb-12">
        <div className="max-w-2xl">
          <span className="text-gold-muted text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Archive: Tvasyah</span>
          <h1 className="text-6xl md:text-7xl font-serif leading-[0.9] tracking-tighter mb-6 italic dark:text-white">The Botanical<br/>Collection</h1>
          <p className="text-lg leading-relaxed text-sage/70 dark:text-gray-300 max-w-lg">A curated selection of high-performance botanical serums and oils, harvested with intention and formulated for transformative dermal health.</p>
        </div>
        <div className="text-right">
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-50 dark:text-gray-400 block mb-1">Items Found</span>
          <span className="text-2xl font-serif italic dark:text-white">24</span>
        </div>
      </div>
    </header>
  );
};

export default ProductListHeader;
