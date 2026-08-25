import { useState, useEffect } from 'react';
import { useCart, type CartItem } from '../context/CartContext';
import { formatPrice } from '../utils/format';

type PaymentMethod = 'cod' | 'bkash' | 'nagad' | 'rocket' | 'bank';

const paymentMethods = [
  { id: 'cod', name: 'Cash on Delivery', icon: 'fa-money-bill-wave', color: 'emerald', account: '' },
  { id: 'bkash', name: 'bKash', icon: 'fa-mobile-alt', color: 'pink', account: '01952-992022' },
  { id: 'nagad', name: 'Nagad', icon: 'fa-mobile-alt', color: 'orange', account: '01952-992022' },
  { id: 'rocket', name: 'Rocket', icon: 'fa-rocket', color: 'purple', account: '01952-992022' },
  { id: 'bank', name: 'Bank Transfer', icon: 'fa-university', color: 'blue', account: '1234-5678-9012' },
];

export default function CheckoutModal({ onClose }: { onClose: () => void }) {
  const { items, subtotal, deliveryCharge, total, totalSavings, clearCart } = useCart();
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('cod');
  const [transactionId, setTransactionId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Dhaka');
  const [area, setArea] = useState('');

  useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = ''; }; }, []);

  if (items.length === 0 && step !== 'success') { onClose(); return null; }

  const handlePlaceOrder = () => setStep('success');

  const sendToWhatsApp = () => {
    const itemsList = items.map((item, i) => `${i + 1}. ${item.product.name} (Size: ${item.size}, Qty: ${item.quantity}, ${formatPrice(item.product.numericPrice * item.quantity)})`).join('\n');
    const payInfo = paymentMethods.find(p => p.id === selectedPayment);
    let msg = `🛍️ New Order - Urban Libas\n\nItems:\n${itemsList}\n\nSubtotal: ${formatPrice(subtotal)}`;
    if (totalSavings > 0) msg += `\nSaved: ${formatPrice(totalSavings)}`;
    msg += `\nDelivery: ${deliveryCharge === 0 ? 'FREE' : formatPrice(deliveryCharge)}\nTotal: ${formatPrice(total)}\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}, ${area}, ${city}\n\nPayment: ${payInfo?.name}`;
    if (selectedPayment !== 'cod' && transactionId) msg += `\nTransaction ID: ${transactionId}`;
    window.open(`https://wa.me/8801952992022?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md" onClick={onClose}>
      <div className="relative w-full max-w-4xl max-h-[95vh] bg-gradient-to-b from-gray-900 to-black border border-yellow-500/40 rounded-2xl overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-5 border-b border-yellow-500/20">
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            {step === 'success' ? <><i className="fas fa-check-circle text-emerald-400"></i>Order Confirmed</> : <><i className="fas fa-lock text-yellow-500"></i>Secure Checkout</>}
          </h2>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-black/50 border border-yellow-500/30 text-yellow-500">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {step === 'info' && (
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-3 p-5 space-y-4">
                <h3 className="font-cinzel text-lg font-bold text-white">Shipping Information</h3>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white" />
                <div className="grid grid-cols-2 gap-3">
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white" />
                  <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white">
                    {['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Other'].map(c => <option key={c} value={c} className="bg-black">{c}</option>)}
                  </select>
                </div>
                <input type="text" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Area" className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white" />
                <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Full Address" rows={2} className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white"></textarea>
                <button onClick={() => setStep('payment')} disabled={!name || !phone || !address || !area} className="w-full gold-gradient text-black font-bold py-3.5 rounded-xl disabled:opacity-50">
                  Continue to Payment <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
              <div className="lg:col-span-2 p-5 border-t lg:border-t-0 lg:border-l border-yellow-500/10">
                <h3 className="font-cinzel text-lg font-bold text-white mb-4">Order Summary</h3>
                <div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
                  {items.map((item) => <CheckoutItem key={`${item.product.id}-${item.size}`} item={item} />)}
                </div>
                <div className="space-y-2 pt-3 border-t border-yellow-500/20 text-sm">
                  <div className="flex justify-between text-gray-400"><span>Subtotal</span><span className="text-white">{formatPrice(subtotal)}</span></div>
                  <div className="flex justify-between text-gray-400"><span>Delivery</span><span className={deliveryCharge === 0 ? 'text-emerald-400' : 'text-white'}>{deliveryCharge === 0 ? 'FREE' : formatPrice(deliveryCharge)}</span></div>
                  <div className="flex justify-between pt-3 border-t border-yellow-500/20">
                    <span className="font-cinzel text-white font-bold">Total</span>
                    <span className="font-cinzel gold-text font-bold text-xl">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {step === 'payment' && (
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-3 p-5 space-y-4">
                <h3 className="font-cinzel text-lg font-bold text-white">Select Payment Method</h3>
                <div className="space-y-2">
                  {paymentMethods.map((m) => (
                    <button key={m.id} onClick={() => setSelectedPayment(m.id as PaymentMethod)} className={`w-full text-left p-4 rounded-xl border-2 ${selectedPayment === m.id ? 'border-yellow-500 bg-yellow-500/10' : 'border-yellow-500/20'}`}>
                      <div className="flex items-center gap-3">
                        <i className={`fas ${m.icon} text-yellow-500 text-lg`}></i>
                        <div className="flex-1">
                          <div className="font-bold text-white">{m.name}</div>
                          {m.account && <div className="text-xs text-gray-400">Send to: {m.account}</div>}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                {selectedPayment !== 'cod' && (
                  <input type="text" value={transactionId} onChange={(e) => setTransactionId(e.target.value)} placeholder="Transaction ID" className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg text-white" />
                )}
                <div className="flex gap-3">
                  <button onClick={() => setStep('info')} className="px-6 py-3.5 border border-yellow-500/30 text-white rounded-xl">Back</button>
                  <button onClick={handlePlaceOrder} disabled={selectedPayment !== 'cod' && !transactionId} className="flex-1 gold-gradient text-black font-bold py-3.5 rounded-xl disabled:opacity-50">
                    Place Order
                  </button>
                </div>
              </div>
              <div className="lg:col-span-2 p-5 border-t lg:border-t-0 lg:border-l border-yellow-500/10">
                <h3 className="font-cinzel text-lg font-bold text-white mb-4">Order Summary</h3>
                <div className="space-y-2 mb-4">
                  {items.map((item) => <div key={`${item.product.id}-${item.size}`} className="flex gap-2 text-sm">
                    <div className="w-12 h-14 rounded overflow-hidden border border-yellow-500/20 flex-shrink-0"><img src={item.product.image} className="w-full h-full object-cover" /></div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-xs line-clamp-1">{item.product.name}</div>
                      <div className="text-[10px] text-gray-400">Size: {item.size} × {item.quantity}</div>
                    </div>
                    <div className="text-yellow-500 font-bold text-xs">{formatPrice(item.product.numericPrice * item.quantity)}</div>
                  </div>)}
                </div>
                <div className="space-y-2 pt-3 border-t border-yellow-500/20 text-sm">
                  <div className="flex justify-between text-gray-400"><span>Subtotal</span><span className="text-white">{formatPrice(subtotal)}</span></div>
                  <div className="flex justify-between text-gray-400"><span>Delivery</span><span className={deliveryCharge === 0 ? 'text-emerald-400' : 'text-white'}>{deliveryCharge === 0 ? 'FREE' : formatPrice(deliveryCharge)}</span></div>
                  <div className="flex justify-between pt-3 border-t border-yellow-500/20">
                    <span className="font-cinzel text-white font-bold">Total</span>
                    <span className="font-cinzel gold-text font-bold text-xl">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {step === 'success' && (
            <div className="p-8 sm:p-12 text-center max-w-2xl mx-auto">
              <div className="w-24 h-24 mx-auto rounded-full gold-gradient flex items-center justify-center mb-6">
                <i className="fas fa-check text-black text-4xl"></i>
              </div>
              <h3 className="font-cinzel text-3xl font-bold text-white mb-3">Order Placed <span className="gold-text">Successfully!</span></h3>
              <p className="text-gray-300 mb-2">Thank you, <span className="text-yellow-500 font-semibold">{name}</span>!</p>
              <p className="text-sm text-gray-400 mb-8">Click below to confirm via WhatsApp.</p>
              <button onClick={sendToWhatsApp} className="btn-shine gold-gradient text-black font-bold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 mx-auto">
                <i className="fab fa-whatsapp text-lg"></i>Confirm on WhatsApp
              </button>
              <button onClick={() => { clearCart(); onClose(); }} className="block mx-auto mt-3 border border-yellow-500/40 text-white px-8 py-3.5 rounded-full">
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CheckoutItem({ item }: { item: CartItem }) {
  return (
    <div className="flex gap-3 p-2 rounded-lg bg-black/30 border border-yellow-500/10">
      <div className="w-14 h-16 rounded overflow-hidden border border-yellow-500/20 flex-shrink-0">
        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-white text-xs font-semibold line-clamp-1">{item.product.name}</div>
        <div className="text-[10px] text-gray-400">Size: {item.size} • Qty: {item.quantity}</div>
        <div className="text-yellow-500 font-bold text-xs mt-0.5">{formatPrice(item.product.numericPrice * item.quantity)}</div>
      </div>
    </div>
  );
  }
