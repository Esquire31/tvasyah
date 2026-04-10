import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { fetchProductById } from '../../../constants';
import { Product } from '../../../types';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import ProductIngredients from './components/ProductIngredients';
import ProductFeatures from './components/ProductFeatures';

interface ProductsOverviewPageProps {
  onAddToCart: (product: Product) => void;
}

const ProductsOverviewPage: React.FC<ProductsOverviewPageProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetchProductById(id).then((result) => {
      setProduct(result || null);
      setLoading(false);
    });
  }, [id]);

  if (!id) {
    return <Navigate to="/shop" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-sage">Loading product details…</div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-sage">
        Product not found. Please return to the shop.
      </div>
    );
  }

  return (
    <main className="bg-cream pt-8">
      <section className="max-w-[1440px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start pb-32">
        <ProductGallery product={product} />
        <ProductDetails product={product} onAddToCart={onAddToCart} />
      </section>

      <ProductIngredients ingredients={product.ingredients ?? []} />
      <ProductFeatures />
    </main>
  );
};

export default ProductsOverviewPage;
