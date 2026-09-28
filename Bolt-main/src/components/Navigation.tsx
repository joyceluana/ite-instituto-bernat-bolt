import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/Logo';

const navLinks = [
  { label: 'O Jeito Bernat', href: '#jeito-bernat' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Cuidado', href: '#cuidado' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Academy', href: '#academy' },
  { label: 'Contato', href: '#contato' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="shrink-0">
          <Logo variant={scrolled ? 'dark' : 'light'} />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-sm font-medium transition-colors relative group ${
                scrolled ? 'text-brand-800 hover:text-brand-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                scrolled ? 'bg-brand-500' : 'bg-white'
              }`} />
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5561996586589"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans hidden lg:inline-flex items-center px-5 py-2.5 bg-brand-600 text-white text-sm font-medium rounded-full hover:bg-brand-700 transition-colors"
        >
          Agende sua Consulta
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-1 ${scrolled ? 'text-brand-800' : 'text-white'}`}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-white border-t border-brand-100 mt-3 animate-slide-down">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm font-medium text-brand-800 hover:text-brand-600 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5561996586589"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="font-sans inline-flex items-center justify-center px-5 py-2.5 bg-brand-600 text-white text-sm font-medium rounded-full mt-2"
            >
              Agende sua Consulta
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
