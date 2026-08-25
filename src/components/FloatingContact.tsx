import { useState, useEffect } from 'react';

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {showScrollTop && (
        <button onClick={scrollToTop} className="w-12 h-12 rounded-full bg-black border border-yellow-500/40 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all shadow-2xl shadow-yellow-500/20 flex items-center justify-center" aria-label="Scroll to top">
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-scale-in mb-1">
          <a href="https://wa.me/8801952992022" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
            <span className="bg-black border border-emerald-500/40 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full">WhatsApp</span>
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/30 flex items-center justify-center hover:scale-110 transition-transform">
              <i className="fab fa-whatsapp text-xl"></i>
            </div>
          </a>
          <a href="https://m.me/YOUR_PAGE_USERNAME_OR_ID" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
            <span className="bg-black border border-blue-500/40 text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full">Messenger</span>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-2xl shadow-blue-500/30 flex items-center justify-center hover:scale-110 transition-transform">
              <i className="fab fa-facebook-messenger text-xl"></i>
            </div>
          </a>
          <a href="https://www.facebook.com/share/18XaQe7LQt/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
            <span className="bg-black border border-blue-600/40 text-blue-300 text-xs font-bold px-3 py-1.5 rounded-full">Facebook</span>
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white shadow-2xl shadow-blue-600/30 flex items-center justify-center hover:scale-110 transition-transform">
              <i className="fab fa-facebook-f text-lg"></i>
            </div>
          </a>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className={`w-14 h-14 rounded-full gold-gradient text-black shadow-2xl shadow-yellow-500/40 flex items-center justify-center transition-all hover:scale-110 animate-pulse-gold ${isOpen ? 'rotate-45' : ''}`} aria-label="Contact">
        <i className={`fas ${isOpen ? 'fa-plus' : 'fa-comment-dots'} text-2xl transition-transform`}></i>
      </button>
    </div>
  );
        }
