import React from 'react';
import ProductListHeader from './components/ProductListHeader';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';

const ProductsListPage: React.FC = () => {
  return (
    <main className="pt-8 pb-24">
      <ProductListHeader />

      <section className="px-6 lg:px-20 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <FilterSidebar />
        <ProductGrid />
      </section>
    </main>
  );
};

export default ProductsListPage;
