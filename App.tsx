
import React, { useEffect } from 'react';
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
import { useState } from 'react';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

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
        <Header onCartClick={() => setIsCartOpen(!isCartOpen)} />
        
        <CartNav isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        
        <main className="transition-opacity duration-500">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ProductsOverviewPage />} />
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
