import type { Product } from '../data';

interface ProductCardProps {
  product: Product;
  index: number;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
}

const badgeStyles = {
  gold: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/40',
  emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
  blue: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
  rose: 'bg-rose-500/20 text-rose-400 border-rose-500/40',
};

export default function ProductCard({ product, index, onAddToCart, onBuyNow }: ProductCardProps) {
  return (
    <div className="product-card group relative bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/60 glow-gold animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="relative overflow-hidden aspect-[3/4] bg-gradient-to-br from-gray-800 to-black">
        <img src={product.image} alt={product.name} className="product-image w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <i className="fas fa-tshirt text-6xl text-yellow-500/30"></i>
        </div>
        <span className={`absolute top-2 left-2 backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-full border ${badgeStyles[product.badgeColor]}`}>
          {product.badge}
        </span>
        {product.oldPrice && (
          <span className="absolute top-2 right-2 bg-rose-500/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
            <i className="fas fa-tag mr-1"></i>Sale
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-[9px] text-yellow-500 uppercase tracking-widest font-bold mb-1">{product.category}</p>
        <h4 className="font-cinzel font-bold text-sm mb-0.5 text-white line-clamp-1">{product.name}</h4>
        <p className="text-[10px] text-gray-400 mb-1 line-clamp-1">{product.bengali}</p>
        <p className="text-[10px] text-gray-500 mb-2.5 line-clamp-2 min-h-[1.6rem]">{product.description}</p>
        <div className="flex items-end justify-between mb-3 pb-3 border-b border-yellow-500/10">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-yellow-500 font-cinzel font-bold text-lg">{product.price}</span>
              {product.oldPrice && <span className="text-gray-500 text-[10px] line-through">{product.oldPrice}</span>}
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-[9px] text-emerald-400 font-semibold uppercase tracking-wider">In Stock</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <button onClick={() => onAddToCart(product)} className="border-2 border-yellow-500/40 hover:border-yellow-500 hover:bg-yellow-500/10 text-yellow-500 font-bold py-2 rounded-lg transition-all text-xs flex items-center justify-center gap-1">
            <i className="fas fa-cart-plus text-[10px]"></i><span>Cart</span>
          </button>
          <button onClick={() => onBuyNow(product)} className="btn-shine gold-gradient text-black font-bold py-2 rounded-lg transition-all text-xs flex items-center justify-center gap-1">
            <i className="fas fa-bolt text-[10px]"></i><span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
