import { Check, Clock, MapPin, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const checks = [
  'Escuta e atenção às suas necessidades',
  'Agilidade na comunicação e no agendamento',
  'Acompanhamento próximo em cada contato',
];

export function Contato() {
  return (
    <section id="contato" className="py-24 bg-brand-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm tracking-[0.25em] uppercase text-brand-600 font-medium mb-3">
            Contato & Atendimento
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-900 font-semibold tracking-wide mb-4">
            Agende sua avaliação
          </h2>
          <p className="text-brand-800/70 leading-relaxed">
            Um cuidado individualizado começa por conhecer você, suas necessidades e seus
            objetivos. Entre em contato com nossa equipe para agendamentos, informações ou
            orientações sobre seu atendimento.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* WhatsApp + checks */}
          <Reveal>
            <div className="h-full p-8 lg:p-10 bg-white rounded-3xl border border-brand-100 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <MessageCircle size={24} className="text-brand-600" />
                </div>
                <h3 className="font-serif text-2xl text-brand-900 font-semibold tracking-wide">
                  Fale com a nossa equipe
                </h3>
              </div>
              <p className="text-sm text-brand-800/70 leading-relaxed mb-6">
                Estamos aqui para cuidar de você. Entre em contato pelo WhatsApp para agendar sua
                avaliação ou tirar suas dúvidas. Nossa equipe estará à disposição para receber você e auxiliar em cada etapa do seu atendimento.
              </p>

              <ul className="space-y-3 mb-8">
                {checks.map((check) => (
                  <li key={check} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-brand-600" />
                    </span>
                    <span className="text-sm text-brand-800/80">
                      {check}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botão do WhatsApp atualizado com o wa.link gerado */}
              <a
                href="https://wa.link/fi8103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white text-sm font-medium rounded-full hover:bg-brand-700 transition-colors"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>

              <div className="mt-8 pt-6 border-t border-brand-100">
                <p className="text-sm text-brand-800/70">
                  Atendimento particular. Consulte nossa equipe para informações sobre
                  formas de pagamento e reembolso junto aos convênios.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Hours + Location */}
          <Reveal delay={150}>
            <div className="h-full flex flex-col gap-6">
              {/* Hours */}
              <div className="p-8 bg-white rounded-2xl border border-brand-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={22} className="text-brand-600" />
                  <h3 className="font-serif text-xl text-brand-900 font-semibold tracking-wide">
                    Horário de Atendimento
                  </h3>
                </div>
                <p className="text-sm text-brand-800/80 mb-2">Segunda a sexta, das 8h às 18h.</p>
                <p className="text-sm text-brand-800/60">
                  Sábados, domingos e feriados: atendimentos de urgência, mediante contato
                  prévio e disponibilidade da equipe.
                </p>
              </div>

              {/* Location */}
              <div className="p-8 bg-white rounded-2xl border border-brand-100 shadow-sm flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={22} className="text-brand-600" />
                  <h3 className="font-serif text-xl text-brand-900 font-semibold tracking-wide">
                    Localização
                  </h3>
                </div>
                <div className="text-sm text-brand-800/80 space-y-1 mb-4">
                  <p className="font-medium text-brand-900">Instituto Bernat</p>
                  <p>Odontologia Esportiva e Integrada</p>
                  <p>Odontologia especializada para quem busca saúde, performance e excelência</p>
                  <p>SDN conjunto A, torre verde, Shopping Conjunto Nacional</p>
                  <p>Salas 4001 e 4003</p>
                  <p>Asa norte</p>
                  <p>Brasília / DF</p>
                </div>

                {/* Link de localização atualizado para o ponto exato fornecido */}
                <a
                  href="https://www.google.com/maps/place/Instituto+Bernat/@-15.7921751,-47.8856625,17z/data=!3m1!4b1!4m6!3m5!1s0x935a3b00261772c5:0xffa641fa8160dde!8m2!3d-15.7921751!4d-47.8830876!16s%2Fg%2F11xvgg57gq?entry=ttu&g_ep=EgoyMDI2MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium"
                >
                  <MapPin size={16} />
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
