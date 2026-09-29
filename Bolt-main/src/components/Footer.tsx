import { Instagram, Mail, MessageCircle, Phone } from 'lucide-react';
import { Logo } from '@/components/Logo';

const whatsappUrl = 'https://wa.me/5561996586589';

export function Footer() {
  return (
    <footer className="bg-[#918062] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Logo variant="light" />
            <p className="text-sm text-white/90 mt-5 max-w-xs leading-relaxed">
              Odontologia Esportiva e Integrada
            </p>
            <p className="text-sm text-white/90 mt-2 max-w-xs leading-relaxed">
              Ciência, esporte e odontologia integrados para a sua saúde.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white shrink-0" />
                <a href="tel:+556133404046" className="hover:text-white/70 transition-colors">Telefone: (61) 3340-4046</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-white shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">WhatsApp: (61) 99658-6589</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white shrink-0" />
                <a href="mailto:contato@institutobernat.com.br" className="hover:text-white/70 transition-colors">E-mail: contato@institutobernat.com.br</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} className="text-white shrink-0" />
                <span>Instagram: @institutobernat</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold text-white mb-4 uppercase tracking-wider">Instituto Bernat</h4>
            <p className="text-sm text-white/90 leading-relaxed">
              Odontologia Esportiva e Integrada
            </p>
            <p className="text-sm text-white/90 mt-2 leading-relaxed">
              Ciência, esporte e odontologia integrados para a sua saúde.
            </p>
            <p className="text-sm text-white/80 mt-4 leading-relaxed">
              Fundada dia 01 de fevereiro de 2007, Brasília/DF
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-xs text-white/70">
            &copy; {new Date().getFullYear()} Instituto Bernat. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
