import { Reveal } from '@/components/Reveal';

const cards = [
  {
    kicker: 'Desde o primeiro contato',
    title: 'Presença em cada etapa',
    text: 'Nossa equipe está preparada para receber você com atenção, compreender suas necessidades e cuidar de cada detalhe, do primeiro contato à sua chegada ao Instituto.',
  },
  {
    kicker: 'Cuidado individualizado',
    title: 'Escuta, respeito e empatia',
    text: 'Cada paciente tem sua história, suas necessidades e seu próprio tempo. Por isso, valorizamos uma escuta atenta e um atendimento baseado em respeito, empatia e confiança, do início ao fim.',
  },
  {
    kicker: 'Em cada detalhe',
    title: 'Uma experiência de cuidado',
    text: 'Do ambiente à forma como você é recebido, cada detalhe foi pensado para proporcionar conforto, tranquilidade e uma experiência de cuidado compatível com a excelência que buscamos em nossos atendimentos.',
  },
];

export function Cuidado() {
  return (
    <section id="cuidado" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm tracking-[0.25em] uppercase text-brand-600 font-medium mb-3">
            Um cuidado pensado em você
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-900 font-semibold tracking-wide mb-4">
            Cada paciente é único. 
            E o nosso cuidado também.
          </h2>
          <p className="text-brand-800/70 leading-relaxed">
            No Instituto Bernat, o cuidado começa antes da consulta. Desde o primeiro contato,
            queremos conhecer você, ouvir suas necessidades e tornar cada etapa da sua
            experiência acolhedora, atenciosa e individualizada.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={card.kicker} delay={i * 100}>
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
                <p className="text-xs tracking-[0.2em] uppercase text-brand-500 font-medium mb-4">
                  {card.kicker}
                </p>
                <h3 className="font-serif text-xl text-brand-900 font-semibold tracking-wide mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-brand-800/70 leading-relaxed">
                  {card.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
