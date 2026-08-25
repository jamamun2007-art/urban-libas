export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden gold-border glow-gold-strong">
              <img src="/logo.png" alt="Urban Libas" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold mb-4 text-white leading-tight">
              Redefining <span className="gold-text">Islamic</span> Fashion
            </h3>
            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
              <span className="text-yellow-500 font-semibold">Urban Libas</span> is more than just a clothing brand—it's a celebration of Islamic lifestyle fashion. We craft premium Jubbas that honor our faith while embracing modern aesthetics.
            </p>
            <p className="text-gray-400 text-xs mb-5 leading-relaxed">
              Every piece is thoughtfully designed using premium fabrics, ensuring you look your best during prayers, Jummah, Eid, and special occasions.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/8801952992022" target="_blank" rel="noopener noreferrer" className="btn-shine gold-gradient text-black font-bold px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 text-sm">
                <i className="fab fa-whatsapp"></i>Get in Touch
              </a>
              <a href="https://www.facebook.com/share/18XaQe7LQt/" target="_blank" rel="noopener noreferrer" className="border border-yellow-500/40 hover:border-yellow-400 text-white px-5 py-2.5 rounded-full transition-all flex items-center gap-2 font-semibold text-sm">
                <i className="fab fa-facebook text-blue-400"></i>Follow Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
