import { useState } from 'react';

interface AdminLoginProps {
  onLogin: () => void;
  onClose: () => void;
}

const ADMIN_PASSWORD = 'admin123';

export default function AdminLogin({ onLogin, onClose }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin_auth', 'true');
      onLogin();
    } else {
      setError('❌ ভুল পাসওয়ার্ড!');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={onClose}>
      <div className="relative w-full max-w-md bg-gradient-to-b from-gray-900 to-black border-2 border-yellow-500/40 rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 border border-yellow-500/30 text-yellow-500 z-10">
          <i className="fas fa-times"></i>
        </button>
        <div className="p-8 text-center">
          <div className="w-20 h-20 mx-auto rounded-full gold-gradient flex items-center justify-center mb-4">
            <i className="fas fa-lock text-black text-2xl"></i>
          </div>
          <h2 className="font-cinzel text-2xl font-bold text-white mb-1">Admin <span className="gold-text">Login</span></h2>
          <p className="text-gray-400 text-sm mb-6">ওয়েবসাইট পরিচালনা করতে পাসওয়ার্ড দিন</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="আপনার পাসওয়ার্ড লিখুন" className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white text-center" autoFocus />
            {error && <p className="text-rose-400 text-sm">{error}</p>}
            <button type="submit" className="btn-shine w-full gold-gradient text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2">
              <i className="fas fa-sign-in-alt"></i>লগইন করুন
            </button>
          </form>
          <p className="text-[10px] text-gray-500 mt-6">
            <i className="fas fa-info-circle text-yellow-500 mr-1"></i>
            ডিফল্ট পাসওয়ার্ড: <code className="text-yellow-500">admin123</code>
          </p>
        </div>
      </div>
    </div>
  );
}
