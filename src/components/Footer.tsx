import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-950 border-t border-yellow-500/20 overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Logo size="md" />
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Premium Islamic lifestyle fashion for the modern Muslim.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://www.facebook.com/share/18XaQe7LQt/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-yellow-500/30 hover:border-blue-500 bg-black hover:bg-blue-500/20 flex items-center justify-center text-yellow-500 hover:text-blue-400 transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://wa.me/8801952992022" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-yellow-500/30 hover:border-emerald-500 bg-black hover:bg-emerald-500/20 flex items-center justify-center text-yellow-500 hover:text-emerald-400 transition-all">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://m.me/YOUR_PAGE_USERNAME_OR_ID" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-yellow-500/30 hover:border-blue-400 bg-black hover:bg-blue-400/20 flex items-center justify-center text-yellow-500 hover:text-blue-300 transition-all">
                <i className="fab fa-facebook-messenger"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-cinzel text-white font-bold mb-4 flex items-center gap-2">
              <i className="fas fa-link text-yellow-500 text-sm"></i>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {['Home', 'Collection', 'Features', 'About'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-cinzel text-white font-bold mb-4 flex items-center gap-2">
              <i className="fas fa-tags text-yellow-500 text-sm"></i>
              Categories
            </h4>
            <ul className="space-y-2.5">
              {['Premium Collection', 'Best Sellers', 'Royal Collection'].map((link) => (
                <li key={link}>
                  <a href="#collection" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-cinzel text-white font-bold mb-4 flex items-center gap-2">
              <i className="fas fa-headset text-yellow-500 text-sm"></i>
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <i className="fas fa-phone text-yellow-500 mt-1"></i>
                <a href="tel:+8801952992022" className="text-gray-300 hover:text-yellow-500">+880 1952-992022</a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fab fa-facebook text-yellow-500 mt-1"></i>
                <a href="https://www.facebook.com/share/18XaQe7LQt/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500">Urban Libas</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-yellow-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2026 <span className="text-yellow-500 font-semibold">Urban Libas</span>. All rights reserved.
            {' • '}
            <a href="#admin" className="text-gray-600 hover:text-yellow-500" title="Admin">
              <i className="fas fa-lock text-[10px]"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="h-1 gold-gradient"></div>
    </footer>
  );
                                                               }
