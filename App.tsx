
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import FairyDustCursor from './components/ui/cursor/FairyDustCursor';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import HomePage from './pages/homepage';
import AboutPage from './pages/about';
import ProductsListPage from './pages/products/list';
import ProductsOverviewPage from './pages/products/overview';
import CartNav from './components/cart/CartNav';
import { Product } from './types';

interface CartItem extends Product {
  quantity: number;
}

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...current, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleQuantityChange = (id: string, delta: number) => {
    setCartItems((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((current) => current.filter((item) => item.id !== id));
  };

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <FairyDustCursor />
        <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(!isCartOpen)} />

        <CartNav
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onQuantityChange={handleQuantityChange}
          onRemove={handleRemoveFromCart}
        />

        <main className="transition-opacity duration-500">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ProductsListPage />} />
            <Route path="/shop/:id" element={<ProductsOverviewPage onAddToCart={handleAddToCart} />} />
            <Route path="/collection" element={<ProductsListPage />} />
            <Route path="/rituals" element={<ProductsListPage />} />
            <Route path="/journal" element={<ProductsListPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
