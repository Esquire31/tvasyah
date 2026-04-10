import React from 'react';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import ProductFeatures from './components/ProductFeatures';

const ProductsOverviewPage: React.FC = () => {
  return (
    <main className="pt-8">
      {/* Hero Product Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start pb-32">
        <ProductGallery />
        <ProductDetails />
      </section>

      <ProductFeatures />
    </main>
  );
};

export default ProductsOverviewPage;
