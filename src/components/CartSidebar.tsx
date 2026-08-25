import { useCart } from '../context/CartContext';
import { useEffect } from 'react';
import { formatPrice } from '../utils/format';

interface CartSidebarProps {
  onCheckout: () => void;
}

export default function CartSidebar({ onCheckout }: CartSidebarProps) {
  const { items, removeFromCart, updateQuantity, clearCart, subtotal, totalSavings, deliveryCharge, total, totalItems, isCartOpen, closeCart } = useCart();

  useEffect(() => {
    if (isCartOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]" onClick={closeCart}></div>
      <div className="fixed top-0 right-0 h-full w-full sm:w-[460px] bg-gradient-to-b from-gray-900 to-black border-l border-yellow-500/30 z-[95] flex flex-col shadow-2xl">
        <div className="flex items-center justify-between p-5 border-b border-yellow-500/20">
          <div>
            <h2 className="font-cinzel text-2xl font-bold text-white flex items-center gap-2">
              <i className="fas fa-shopping-cart text-yellow-500"></i>Your Cart
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">{totalItems} items in cart</p>
          </div>
          <button onClick={closeCart} className="w-10 h-10 rounded-full bg-black/50 border border-yellow-500/30 text-yellow-500">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <i className="fas fa-shopping-bag text-4xl text-yellow-500/30 mb-3"></i>
              <h3 className="font-cinzel text-xl font-bold text-white mb-2">Your cart is empty</h3>
              <p className="text-gray-400 text-sm mb-6">Add some premium Jubbas to your cart</p>
              <button onClick={closeCart} className="gold-gradient text-black font-bold px-6 py-3 rounded-full">Continue Shopping</button>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="gold-border rounded-xl p-3 flex gap-3">
                  <div className="w-20 h-24 rounded-lg overflow-hidden border border-yellow-500/20 flex-shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-cinzel font-bold text-sm text-white line-clamp-1">{item.product.name}</h4>
                    <p className="text-[10px] text-yellow-500 mb-1">Size: {item.size}</p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-yellow-500 font-bold text-sm">{item.product.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 bg-black/50 border border-yellow-500/30 rounded-lg">
                        <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)} className="w-7 h-7 text-yellow-500">-</button>
                        <span className="w-8 text-center text-white text-sm font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)} className="w-7 h-7 text-yellow-500">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id, item.size)} className="text-rose-400 text-xs">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={clearCart} className="w-full text-rose-400 text-xs py-2 border border-rose-500/20 rounded-lg">
                <i className="fas fa-trash-alt mr-1.5"></i>Clear all items
              </button>
            </>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t border-yellow-500/20 p-5 space-y-3">
            {totalSavings > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-emerald-400">You're saving</span>
                <span className="text-emerald-400 font-bold">{formatPrice(totalSavings)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Subtotal</span>
              <span className="text-white font-semibold">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Delivery</span>
              <span className={deliveryCharge === 0 ? 'text-emerald-400 font-semibold' : 'text-white'}>
                {deliveryCharge === 0 ? 'FREE' : formatPrice(deliveryCharge)}
              </span>
            </div>
            <div className="flex justify-between pt-3 border-t border-yellow-500/20">
              <span className="font-cinzel text-white font-bold text-lg">Total</span>
              <span className="font-cinzel gold-text font-bold text-2xl">{formatPrice(total)}</span>
            </div>
            <button onClick={onCheckout} className="btn-shine w-full gold-gradient text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2">
              <i className="fas fa-lock text-sm"></i>Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
                                                            }
