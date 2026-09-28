import { Reveal } from '@/components/Reveal';

const cards = [
  {
    kicker: 'Desde o primeiro contato',
    title: 'Presen&ccedil;a em cada etapa',
    text: 'Nossa equipe est&aacute; preparada para receber voc&ecirc; com aten&ccedil;&atilde;o, compreender suas necessidades e cuidar de cada detalhe, do primeiro contato &agrave; sua chegada ao Instituto.',
  },
  {
    kicker: 'Cuidado individualizado',
    title: 'Escuta, respeito e empatia',
    text: 'Cada paciente tem sua hist&oacute;ria, suas necessidades e seu pr&oacute;prio tempo. Por isso, valorizamos uma escuta atenta e um atendimento baseado em respeito, empatia e confian&ccedil;a, do in&iacute;cio ao fim.',
  },
  {
    kicker: 'Em cada detalhe',
    title: 'Uma experi&ecirc;ncia de cuidado',
    text: 'Do ambiente &agrave; forma como voc&ecirc; &eacute; recebido, cada detalhe foi pensado para proporcionar conforto, tranquilidade e uma experi&ecirc;ncia de cuidado compat&iacute;vel com a excel&ecirc;ncia que buscamos em nossos atendimentos.',
  },
];

export function Cuidado() {
  return (
    <section id="cuidado" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm tracking-[0.25em] uppercase text-brand-600 font-medium mb-3">
            Um cuidado pensado em voc&ecirc;
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-900 mb-4">
            Cada paciente &eacute; &uacute;nico. E o nosso cuidado tamb&eacute;m.
          </h2>
          <p className="text-brand-800/70 leading-relaxed">
            No Instituto Bernat, o cuidado come&ccedil;a antes da consulta. Desde o primeiro contato,
            queremos conhecer voc&ecirc;, ouvir suas necessidades e tornar cada etapa da sua
            experi&ecirc;ncia acolhedora, atenciosa e individualizada.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={card.kicker} delay={i * 100}>
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
                <p className="text-xs tracking-[0.2em] uppercase text-brand-500 font-semibold mb-4">
                  {card.kicker}
                </p>
                <h3
                  className="font-serif text-xl text-brand-900 mb-3 font-semibold"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />
                <p
                  className="text-sm text-brand-800/70 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: card.text }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
