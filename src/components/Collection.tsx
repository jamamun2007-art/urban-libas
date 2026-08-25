import { useState } from 'react';
import type { Product } from '../data';
import { useProducts } from '../context/ProductContext';
import ProductCard from './ProductCard';
import AddToCartModal from './AddToCartModal';
import CheckoutModal from './CheckoutModal';
import { useCart } from '../context/CartContext';

const categories = ['All', 'Premium Collection', 'Best Sellers', 'Royal Collection'];

export default function Collection() {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addToCartProduct, setAddToCartProduct] = useState<Product | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => setAddToCartProduct(product);
  const handleBuyNow = (product: Product) => {
    addToCart(product, product.sizes?.[1] || 'M', 1);
    setShowCheckout(true);
  };
  const handleGoToCheckout = () => {
    setAddToCartProduct(null);
    setShowCheckout(true);
  };

  return (
    <section id="collection" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold mb-3 text-white">
            Premium <span className="gold-text">Jubba</span> Collection
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm">
            Handcrafted with premium fabric for daily prayers, Jummah, and special occasions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              selectedCategory === category
                ? 'gold-gradient text-black shadow-lg shadow-yellow-500/30'
                : 'border border-yellow-500/30 text-gray-300 hover:border-yellow-500 hover:text-yellow-500'
            }`}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} />
          ))}
        </div>
      </div>
      {addToCartProduct && <AddToCartModal product={addToCartProduct} onClose={() => setAddToCartProduct(null)} onGoToCheckout={handleGoToCheckout} />}
      {showCheckout && <CheckoutModal onClose={() => setShowCheckout(false)} />}
    </section>
  );
          }
