import { Instagram, Mail, MessageCircle, Phone } from 'lucide-react';
import { Logo } from '@/components/Logo';

const whatsappUrl = 'https://wa.me/5561996586589';

export function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Logo variant="light" />
            <p className="text-sm text-brand-300 mt-5 max-w-xs leading-relaxed">
              Odontologia Esportiva e Integrada
            </p>
            <p className="text-sm text-brand-300 mt-2 max-w-xs leading-relaxed">
              Ciência, esporte e odontologia integrados para a sua saúde.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold text-white mb-4 uppercase tracking-wider font-semibold tracking-wide">Contato</h4>
            <ul className="space-y-3 text-sm text-brand-300">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-400 shrink-0" />
                <a href="tel:+556133404046" className="hover:text-white transition-colors">Telefone: (61) 3340-4046</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-brand-400 shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp: (61) 99658-6589</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-400 shrink-0" />
                <a href="mailto:contato@institutobernat.com.br" className="hover:text-white transition-colors">E-mail: contato@institutobernat.com.br</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} className="text-brand-400 shrink-0" />
                <span>Instagram: @institutobernat</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold text-white mb-4 uppercase tracking-wider font-semibold tracking-wide">Instituto Bernat</h4>
            <p className="text-sm text-brand-300 leading-relaxed">
              Odontologia Esportiva e Integrada
            </p>
            <p className="text-sm text-brand-300 mt-2 leading-relaxed">
              Ciência, esporte e odontologia integrados para a sua saúde.
            </p>
            <p className="text-sm text-brand-400 mt-4 leading-relaxed">
              Brasília/DF
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-800 text-center">
          <p className="text-xs text-brand-400">
            &copy; {new Date().getFullYear()} Instituto Bernat. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
