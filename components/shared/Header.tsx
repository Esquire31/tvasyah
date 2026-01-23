import React, { useState } from 'react';
import { NAV_ITEMS } from '../../constants';
import { Search, CircleUser, ShoppingCart } from 'lucide-react';
import { COLOR, ICONS } from '../../core/constants';

interface HeaderProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      console.log('[Header] scrollY:', window.scrollY, 'scrolled:', scrolled);
      setIsScrolled(scrolled);
    };

    handleScroll(); // initialize on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-cream-60 dark:bg-background-dark/75 py-5 shadow-sm' 
        : 'bg-cream-header-90 dark:bg-background-dark/90 py-6'
    } backdrop-blur-md border-b border-sage/10 px-6 lg:px-20`}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 text-moss-green">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
              </svg>
            </div>
            <h1 className="text-xl font-serif font-bold tracking-widest uppercase dark:text-white">Tvasyah</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8 uppercase text-[11px] tracking-[0.2em] font-medium text-sage dark:text-gray-400">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.label} 
                className={`hover:text-gold-muted transition-colors uppercase tracking-widest ${currentView === item.href ? 'text-primary font-bold' : ''}`}
                onClick={() => onNavigate(item.href)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <button className="transition-all duration-200 group">
              <CircleUser className="text-sage transition-colors group-hover:text-gold-muted" size={ICONS.SIZE.MD} />
            </button>
            <button className="relative transition-all duration-200 group">
              <ShoppingCart className="text-sage transition-colors group-hover:text-gold-muted" size={ICONS.SIZE.MD} />
              <span className="absolute -top-1 -right-1 bg-moss-green text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
