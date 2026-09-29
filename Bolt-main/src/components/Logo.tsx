interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function Logo({ className = '', variant = 'dark' }: LogoProps) {
  // Filtro calibrado para converter a imagem branca exatamente no verde oficial do site (#143d2f)
  const logoFilter = variant === 'dark' 
    ? 'invert(17%) sepia(21%) saturate(1471%) hue-rotate(111deg) brightness(94%) contrast(92%)' 
    : 'none';

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/images/logo-topo.png"
        alt="Instituto Bernat"
        className="h-11 w-auto object-contain shrink-0 transition-all duration-300"
        style={{ filter: logoFilter }}
      />
    </div>
  );
}
