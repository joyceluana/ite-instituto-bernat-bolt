interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function Logo({ className = '', variant = 'dark' }: LogoProps) {
  // Troca inteligente: se o menu rolar (fundo branco), mostra a logo verde certa.
  // Se estiver no topo do banner escuro, mostra a logo branca (logo-topo).
  const logoSrc = variant === 'dark' 
    ? '/images/logo-verde.png' 
    : '/images/logo-topo.png';

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="Instituto Bernat"
        className="h-11 w-auto object-contain shrink-0 transition-all duration-300"
      />
    </div>
  );
}
