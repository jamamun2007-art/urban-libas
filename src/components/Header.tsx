import { useState, useEffect } from 'react';
import Logo from './Logo';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/90 backdrop-blur-xl py-2 border-b border-yellow-500/20 shadow-2xl shadow-black/50' : 'bg-gradient-to-b from-black/80 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#home" className="flex-shrink-0">
          <Logo size="sm" />
        </a>
        <nav className="hidden lg:flex items-center space-x-10 text-sm font-semibold">
          <a href="#home" className="text-gray-200 hover:text-yellow-500 transition-colors">Home</a>
          <a href="#collection" className="text-gray-200 hover:text-yellow-500 transition-colors">Collection</a>
          <a href="#features" className="text-gray-200 hover:text-yellow-500 transition-colors">Features</a>
          <a href="#about" className="text-gray-200 hover:text-yellow-500 transition-colors">About</a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={openCart} className="relative w-10 h-10 rounded-full bg-black/50 border border-yellow-500/30 hover:border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 transition-all flex items-center justify-center" aria-label="Open cart">
            <i className="fas fa-shopping-cart text-sm"></i>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-bold rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <a href="https://wa.me/8801952992022" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white transition-all text-sm font-semibold shadow-lg shadow-emerald-500/30">
            <i className="fab fa-whatsapp text-base"></i>
            <span className="hidden md:inline">Order</span>
          </a>
        </div>
      </div>
    </header>
  );
                                                      }
