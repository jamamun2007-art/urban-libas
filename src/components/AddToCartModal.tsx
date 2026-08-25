import { useState, useEffect } from 'react';
import type { Product } from '../data';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

interface AddToCartModalProps {
  product: Product;
  onClose: () => void;
  onGoToCheckout: () => void;
}

export default function AddToCartModal({ product, onClose, onGoToCheckout }: AddToCartModalProps) {
  const [size, setSize] = useState(product.sizes?.[1] || 'M');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleAddToCart = () => {
    addToCart(product, size, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={onClose}>
      <div className="relative w-full max-w-lg bg-gradient-to-b from-gray-900 to-black border border-yellow-500/40 rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 border border-yellow-500/30 text-yellow-500 z-10">
          <i className="fas fa-times"></i>
        </button>
        <div className="p-6 border-b border-yellow-500/20">
          <div className="flex items-start gap-4">
            <div className="w-20 h-24 rounded-lg overflow-hidden border border-yellow-500/40 flex-shrink-0">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs text-yellow-500 uppercase font-bold mb-1">Add to Cart</p>
              <h3 className="font-cinzel text-lg font-bold text-white">{product.name}</h3>
              <p className="text-yellow-500 font-bold text-xl">{product.price}</p>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-5">
          <div>
            <label className="block text-xs font-semibold text-yellow-500 uppercase mb-2">Size</label>
            <div className="grid grid-cols-5 gap-2">
              {(product.sizes || ['S', 'M', 'L', 'XL', 'XXL']).map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`py-3 rounded-lg font-bold text-sm ${size === s ? 'gold-gradient text-black' : 'border border-yellow-500/30 text-gray-300'}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-yellow-500 uppercase mb-2">Quantity</label>
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-black/50 border border-yellow-500/30 rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 text-yellow-500">-</button>
                <span className="w-12 text-center text-white font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 text-yellow-500">+</button>
              </div>
              <div className="flex-1 text-right">
                <div className="text-xs text-gray-400">Item Total</div>
                <div className="text-yellow-500 font-bold text-lg">{formatPrice(product.numericPrice * quantity)}</div>
              </div>
            </div>
          </div>
          <button onClick={handleAddToCart} className="btn-shine w-full gold-gradient text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2">
            <i className="fas fa-cart-plus"></i>Add to Cart
          </button>
          <button onClick={onGoToCheckout} className="w-full border border-yellow-500/40 text-yellow-500 font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
            <i className="fas fa-bolt"></i>Buy Now
          </button>
        </div>
      </div>
    </div>
  );
                  }
