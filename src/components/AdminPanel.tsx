import { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import type { Product } from '../data';
import { formatPrice } from '../utils/format';

interface AdminPanelProps {
  onClose: () => void;
}

const emptyProduct: Omit<Product, 'id'> = {
  name: '', bengali: '', description: '', price: '', numericPrice: 0,
  badge: 'New', badgeColor: 'gold', features: ['Premium', 'Comfortable'],
  image: 'https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=800',
  category: 'Premium Collection', sizes: ['S', 'M', 'L', 'XL', 'XXL'],
};

export default function AdminPanel({ onClose }: AdminPanelProps) {
  const { products, addProduct, updateProduct, deleteProduct, resetProducts } = useProducts();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Omit<Product, 'id'>>(emptyProduct);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddNew = () => { setFormData(emptyProduct); setEditingProduct(null); setShowForm(true); };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({ name: product.name, bengali: product.bengali, description: product.description, price: product.price, numericPrice: product.numericPrice, oldPrice: product.oldPrice || '', numericOldPrice: product.numericOldPrice || 0, badge: product.badge, badgeColor: product.badgeColor, features: product.features, image: product.image, category: product.category, sizes: product.sizes });
    setShowForm(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) updateProduct(editingProduct.id, formData);
    else addProduct(formData);
    setShowForm(false); setEditingProduct(null);
  };

  const handleDelete = (id: number, name: string) => {
    if (confirm(`আপনি কি নিশ্চিত "${name}" মুছে ফেলতে চান?`)) deleteProduct(id);
  };

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.bengali.includes(searchTerm));

  return (
    <div className="fixed inset-0 z-[150] bg-gradient-to-b from-gray-950 to-black overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-yellow-500/20">
          <h1 className="font-cinzel text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
            <i className="fas fa-cog text-yellow-500"></i>Admin <span className="gold-text">Panel</span>
          </h1>
          <button onClick={onClose} className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm">ওয়েবসাইট দেখুন</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="gold-border rounded-xl p-3"><div className="text-[10px] text-gray-400 uppercase">মোট পণ্য</div><div className="font-cinzel text-2xl font-bold gold-text">{products.length}</div></div>
          <div className="gold-border rounded-xl p-3"><div className="text-[10px] text-gray-400 uppercase">ক্যাটাগরি</div><div className="font-cinzel text-2xl font-bold text-white">{new Set(products.map(p => p.category)).size}</div></div>
          <div className="gold-border rounded-xl p-3"><div className="text-[10px] text-gray-400 uppercase">সেল চলছে</div><div className="font-cinzel text-2xl font-bold text-rose-400">{products.filter(p => p.oldPrice).length}</div></div>
          <div className="gold-border rounded-xl p-3"><div className="text-[10px] text-gray-400 uppercase">গড় দাম</div><div className="font-cinzel text-lg font-bold gold-text">{formatPrice(Math.round(products.reduce((s, p) => s + p.numericPrice, 0) / Math.max(products.length, 1)))}</div></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="পণ্য খুঁজুন..." className="flex-1 pl-3 pr-4 py-2.5 bg-black/50 border border-yellow-500/30 rounded-lg text-white text-sm" />
          <button onClick={handleAddNew} className="btn-shine gold-gradient text-black font-bold px-5 py-2.5 rounded-lg text-sm"><i className="fas fa-plus mr-2"></i>নতুন পণ্য</button>
          <button onClick={() => { if (confirm('সব পণ্য ডিফল্ট ভ্যালুতে ফিরিয়ে আনবেন?')) resetProducts(); }} className="px-4 py-2.5 border border-yellow-500/30 text-yellow-500 rounded-lg text-sm">রিসেট</button>
        </div>
        <div className="space-y-2">
          {filteredProducts.length === 0 ? <div className="text-center py-12 gold-border rounded-xl"><i className="fas fa-box-open text-4xl text-yellow-500/30 mb-3"></i><p className="text-gray-400">কোনো পণ্য পাওয়া যায়নি</p></div> : filteredProducts.map((product) => (
            <div key={product.id} className="gold-border rounded-xl p-3 flex items-center gap-3">
              <img src={product.image} alt={product.name} className="w-16 h-20 object-cover rounded-lg border border-yellow-500/20 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-cinzel font-bold text-sm text-white line-clamp-1">{product.name}</h3>
                <p className="text-[10px] text-gray-400">{product.bengali} • {product.category}</p>
                <div className="text-yellow-500 font-bold text-sm">{product.price}</div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(product)} className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/40 text-blue-300 rounded-lg text-xs"><i className="fas fa-edit"></i> এডিট</button>
                <button onClick={() => handleDelete(product.id, product.name)} className="px-3 py-1.5 bg-rose-500/20 border border-rose-500/40 text-rose-300 rounded-lg text-xs"><i className="fas fa-trash"></i> মুছুন</button>
              </div>
            </div>
          ))}
        </div>
        {showForm && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 bg-black/90 backdrop-blur-md" onClick={() => setShowForm(false)}>
            <div className="bg-gradient-to-b from-gray-900 to-black border-2 border-yellow-500/40 rounded-2xl w-full max-w-2xl max-h-[95vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-gray-900 p-4 border-b border-yellow-500/20 flex items-center justify-between z-10">
                <h2 className="font-cinzel text-lg font-bold text-white">{editingProduct ? 'পণ্য এডিট করুন' : 'নতুন পণ্য যোগ করুন'}</h2>
                <button onClick={() => setShowForm(false)} className="w-8 h-8 rounded-full bg-black/50 border border-yellow-500/30 text-yellow-500"><i className="fas fa-times text-sm"></i></button>
              </div>
              <form onSubmit={handleSave} className="p-4 space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div><label className="block text-xs font-semibold text-yellow-500 mb-1">নাম (English)</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2 bg-black/50 border border-yellow-500/30 rounded-lg text-white text-sm" /></div>
                  <div><label className="block text-xs font-semibold text-yellow-500 mb-1">নাম (বাংলা)</label><input type="text" required value={formData.bengali} onChange={(e) => setFormData({ ...formData, bengali: e.target.value })} className="w-full px-3 py-2 bg-black/50 border border-yellow-500/30 rounded-lg text-white text-sm" /></div>
                </div>
                <div><label className="block text-xs font-semibold text-yellow-500 mb-1">বিবরণ</label><textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={2} className="w-full px-3 py-2 bg-black/50 border border-yellow-500/30 rounded-lg text-white text-sm" /></div>
                <div className="grid grid-cols-3 gap-3">
                  <div><label className="block text-xs font-semibold text-yellow-500 mb-1">দাম (৳)</label><input type="number" required value={formData.numericPrice} onChange={(e) => { const n = Number(e.target.value); setFormData({ ...formData, numericPrice: n, price: `৳ ${n.toLocaleString('en-IN')}` }); }} className="w-full px-3 py-2 bg-black/50 border border-yellow-500/30 rounded-lg text-white text-sm" /></div>
                  <div><label className="block text-xs font-semibold text-yellow-500 mb-1">আগের দাম</label><input type="number" value={formData.numericOldPrice || ''} onChange={(e) => { const n = Number(e.target.value); setFormData({ ...formData, numericOldPrice: n, oldPrice: n ? `৳ ${n.toLocaleString('en-IN')}` : '' }); }} className="w-full px-3 py-2 bg-black/50 border border-yellow-500/30 rounded-lg text-white text-sm" /></div>
                  <div><label className="block text-xs font-semibold text-yellow-500 mb-1">ক্যাটাগরি</label><select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-3 py-2 bg-black/50 border border-yellow-500/30 rounded-lg text-white text-sm"><option className="bg-black">Premium Collection</option><option className="bg-black">Best Sellers</option><option className="bg-black">Royal Collection</option></select></div>
                </div>
                <div><label className="block text-xs font-semibold text-yellow-500 mb-1">ছবির URL</label><input type="url" required value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full px-3 py-2 bg-black/50 border border-yellow-500/30 rounded-lg text-white text-sm" /></div>
                <div className="flex gap-3 pt-3">
                  <button type="button" onClick={() => setShowForm(false)} className="flex-1 px-4 py-2.5 border border-yellow-500/30 text-white rounded-lg text-sm">বাতিল</button>
                  <button type="submit" className="flex-1 gold-gradient text-black font-bold py-2.5 rounded-lg text-sm"><i className="fas fa-save mr-2"></i>{editingProduct ? 'আপডেট' : 'যোগ করুন'}</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
      }
