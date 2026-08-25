interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { img: 'h-10', text: 'text-base', sub: 'text-[10px]' },
    md: { img: 'h-14', text: 'text-xl', sub: 'text-xs' },
    lg: { img: 'h-20', text: 'text-3xl', sub: 'text-sm' },
  };
  const s = sizes[size];

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="absolute inset-0 gold-gradient-static rounded-lg blur-md opacity-50"></div>
        <img src="/logo.png" alt="Urban Libas Logo" className={`${s.img} relative rounded-lg`} />
      </div>
      {showText && (
        <div className="leading-tight">
          <h1 className={`font-cinzel ${s.text} font-bold tracking-wider text-white`}>
            URBAN LIBAS
          </h1>
          <p className={`text-yellow-500 ${s.sub} tracking-widest uppercase font-semibold`}>
            Islamic Lifestyle
          </p>
        </div>
      )}
    </div>
  );
          }
