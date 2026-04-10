import React, { useEffect, useState } from 'react';
import ProductListHeader from './components/ProductListHeader';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import { fetchProducts } from '../../../constants';
import { Product } from '../../../types';

const ProductsListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <main className=" bg-cream pt-8 pb-24">
      <ProductListHeader count={products.length} />

      <section className="px-6 lg:px-20 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <FilterSidebar />
        <ProductGrid products={products} />
      </section>
    </main>
  );
};

export default ProductsListPage;
