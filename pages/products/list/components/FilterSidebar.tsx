import React from 'react';

const FilterSidebar: React.FC = () => {
  return (
    <aside className="lg:col-span-3 space-y-12">
      <div>
        <h3 className="text-[10px] uppercase tracking-[0.3em] mb-8 text-sage/40 dark:text-gray-500">Skin Concern</h3>
        <ul className="space-y-4">
          {['Luminosity & Glow', 'Dermal Barrier Repair', 'Ageless Elasticity', 'Botanical Calming'].map((item, i) => (
            <li key={i} className="flex items-center justify-between group cursor-pointer">
              <span className="text-sm border-b border-transparent group-hover:border-gold-muted transition-all italic dark:text-gray-300">{item}</span>
              <span className="text-[10px] opacity-30 group-hover:opacity-100 transition-opacity dark:text-gray-400">({(Math.random() * 15).toFixed(0).padStart(2, '0')})</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-[10px] uppercase tracking-[0.3em] mb-8 text-sage/40 dark:text-gray-500">Active Botanicals</h3>
        <div className="flex flex-wrap gap-2">
          {['Bakuchiol', 'Sea Buckthorn', 'Rosehip', 'Centella', 'Squalane'].map((item, i) => (
            <button key={i} className="px-4 py-2 text-[11px] uppercase tracking-widest border border-sage/10 hover:border-gold-muted hover:text-gold-muted transition-colors dark:text-gray-300 dark:border-sage/30">{item}</button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
