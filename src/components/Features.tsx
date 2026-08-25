const features = [
  { icon: 'fa-medal', title: 'Premium Quality', description: 'Handpicked premium fabrics that ensure lasting comfort', color: 'gold' },
  { icon: 'fa-palette', title: 'Modern Designs', description: 'Contemporary Islamic fashion blending tradition with modern style', color: 'blue' },
  { icon: 'fa-truck-fast', title: 'Fast Delivery', description: 'Quick delivery across Bangladesh within 2-3 days', color: 'emerald' },
  { icon: 'fa-hand-holding-heart', title: 'Handcrafted', description: 'Each Jubba is carefully crafted with attention to detail', color: 'rose' },
  { icon: 'fa-tags', title: 'Affordable Price', description: 'Premium quality at the most competitive prices', color: 'gold' },
  { icon: 'fa-headset', title: '24/7 Support', description: 'Dedicated customer support via WhatsApp', color: 'blue' },
];

const colorMap: Record<string, string> = {
  gold: 'border-yellow-500/30 text-yellow-500',
  emerald: 'border-emerald-500/30 text-emerald-400',
  blue: 'border-blue-500/30 text-blue-400',
  rose: 'border-rose-500/30 text-rose-400',
};

export default function Features() {
  return (
    <section id="features" className="relative py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold mb-3 text-white">
            The <span className="gold-text">Urban Libas</span> Promise
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm">
            Excellence in every stitch, every design, and every customer interaction
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className={`group relative gold-border rounded-2xl p-5 hover:scale-105 transition-all duration-500`}>
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border ${colorMap[feature.color]} mb-3`}>
                <i className={`fas ${feature.icon} text-base`}></i>
              </div>
              <h4 className="font-cinzel text-base font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
          }
