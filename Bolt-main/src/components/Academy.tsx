import { Reveal } from '@/components/Reveal';

const cards = [
  {
    title: 'Cursos e Imers&otilde;es',
    subtitle: 'Forma&ccedil;&atilde;o te&oacute;rico-pr&aacute;tica',
    text: 'Conte&uacute;do cient&iacute;fico aliado &agrave; experi&ecirc;ncia cl&iacute;nica, com cursos e imers&otilde;es desenvolvidos para aprofundar conhecimentos e aprimorar a tomada de decis&atilde;o e a pr&aacute;tica profissional.',
  },
  {
    title: 'Pr&aacute;tica Cl&iacute;nica',
    subtitle: 'Hands-on e treinamento pr&aacute;tico',
    text: 'Treinamentos voltados ao desenvolvimento de habilidades t&eacute;cnicas, com pr&aacute;tica orientada e aplica&ccedil;&atilde;o dos conhecimentos &agrave; realidade cl&iacute;nica.',
  },
  {
    title: 'Forma&ccedil;&atilde;o Individualizada',
    subtitle: 'Mentorias individuais',
    text: 'Uma experi&ecirc;ncia constru&iacute;da a partir das necessidades de cada profissional, unindo conte&uacute;do te&oacute;rico personalizado, cirurgia demonstrativa e pr&aacute;tica cl&iacute;nica em paciente.',
  },
];

export function Academy() {
  return (
    <section id="academy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm tracking-[0.25em] uppercase text-brand-600 font-medium mb-3">
            Educa&ccedil;&atilde;o &amp; Desenvolvimento Profissional
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-900 mb-4">
            Instituto Bernat Academy
          </h2>
          <p className="text-brand-800/70 leading-relaxed">
            A experi&ecirc;ncia do Instituto Bernat tamb&eacute;m se transforma em conhecimento.
            Por meio de cursos, imers&otilde;es e mentorias, integramos ci&ecirc;ncia e pr&aacute;tica
            cl&iacute;nica na forma&ccedil;&atilde;o e no desenvolvimento de profissionais da Odontologia.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <div className="h-full p-8 rounded-2xl bg-brand-50/40 border border-brand-100 hover:border-brand-300 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-1 bg-brand-500 rounded-full mb-5" />
                <h3 className="font-serif text-xl text-brand-900 font-semibold mb-1" dangerouslySetInnerHTML={{ __html: card.title }} />
                <p className="text-xs tracking-wide uppercase text-brand-600 font-medium mb-4">{card.subtitle}</p>
                <p className="text-sm text-brand-800/70 leading-relaxed">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
