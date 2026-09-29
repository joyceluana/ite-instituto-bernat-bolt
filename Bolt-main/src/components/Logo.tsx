interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function Logo({ className = '', variant = 'dark' }: LogoProps) {
  // Se a variante for 'dark' (menu rolado com fundo branco), aplica um filtro para tornar a logo branca em escura/verde
  const logoFilter = variant === 'dark' 
    ? 'invert(24%) sepia(48%) saturate(738%) hue-rotate(113deg) brightness(93%) contrast(92%)' 
    : 'none';

  return (
    <div className={`flex items-center ${className}`}>
      {/* Carrega a sua logo completa em PNG e remove a escrita duplicada em código */}
      <img
        src="/images/logo-topo.png"
        alt="Instituto Bernat"
        className="h-11 w-auto object-contain shrink-0 transition-all duration-300"
        style={{ filter: logoFilter }}
      />
    </div>
  );
}
