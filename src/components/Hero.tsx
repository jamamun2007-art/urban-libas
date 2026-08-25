export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      <div className="absolute inset-0 islamic-pattern opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-yellow-500/40 bg-yellow-500/5 backdrop-blur-sm mb-4 animate-fade-up">
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></span>
              <span className="text-yellow-500 text-[10px] font-bold tracking-widest uppercase">
                New Collection 2026
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 animate-fade-up delay-100">
              <span className="text-white block">Elevate Your</span>
              <span className="gold-text text-shadow-gold">Modest</span>
              <span className="text-white block">Wardrobe</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed animate-fade-up delay-200">
              Discover our exclusive premium <span className="text-yellow-500 font-semibold">Jubba collection</span>—where timeless Islamic tradition meets contemporary elegance.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-up delay-300">
              <a href="#collection" className="btn-shine gold-gradient text-black font-bold px-6 py-3 rounded-full shadow-2xl shadow-yellow-500/30 flex items-center gap-2 group text-sm">
                Explore Collection
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform text-xs"></i>
              </a>
              <a href="https://www.facebook.com/share/18XaQe7LQt/" target="_blank" rel="noopener noreferrer" className="border-2 border-yellow-500/40 hover:border-yellow-500 hover:bg-yellow-500/10 text-white px-6 py-3 rounded-full transition-all flex items-center gap-2 font-semibold text-sm">
                <i className="fab fa-facebook text-blue-400"></i>
                Visit Page
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-yellow-500/20 animate-fade-up delay-400">
              <div>
                <div className="font-cinzel text-2xl font-bold gold-text">500+</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="font-cinzel text-2xl font-bold gold-text">50+</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Designs</div>
              </div>
              <div>
                <div className="font-cinzel text-2xl font-bold gold-text">4.9★</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Rating</div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center animate-scale-in delay-300">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-full border-2 border-dashed border-yellow-500/30 animate-spin" style={{ animationDuration: '30s' }}></div>
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-3xl overflow-hidden gold-border glow-gold-strong animate-float">
                <img src="/logo.png" alt="Urban Libas" className="w-full h-full object-cover p-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
      }
