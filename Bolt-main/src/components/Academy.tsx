import { Reveal } from '@/components/Reveal';

const cards = [
  {
    title: 'Cursos e Imersões',
    subtitle: 'FORMAÇÃO TEÓRICO-PRÁTICA',
    text: 'Conteúdo científico aliado à experiência clínica, com cursos e imersões desenvolvidos para aprofundar conhecimentos e aprimorar a tomada de decisão e a prática profissional.',
  },
  {
    title: 'Prática Clínica',
    subtitle: 'HANDS-ON E TREINAMENTO PRÁTICO',
    text: 'Treinamentos voltados ao desenvolvimento de habilidades técnicas, com prática orientada e aplicação dos conhecimentos à realidade clínica.',
  },
  {
    title: 'Formação Individualizada',
    subtitle: 'MENTORIAS INDIVIDUAIS',
    text: 'Uma experiência construída a partir das necessidades de cada profissional, unindo conteúdo teórico personalizado, cirurgia demonstrativa e prática clínica em paciente.',
  },
];

export function Academy() {
  return (
    <section id="academy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm tracking-[0.25em] uppercase text-brand-600 font-medium mb-3">
            Educação & Desenvolvimento Profissional
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-900 font-semibold tracking-wide mb-4">
            Instituto Bernat Academy
          </h2>
          <p className="text-brand-800/70 leading-relaxed text-justify">
            A experiência do Instituto Bernat também se transforma em conhecimento.
            Por meio de cursos, imersões e mentorias, integramos ciência e prática
            clínica na formação e no desenvolvimento de profissionais da Odontologia.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              {/* ALTERADO: Substituição do fundo verde bg-brand-50/40 por bg-[#F6F2EB] e ajuste de borda */}
              <div className="h-full p-8 rounded-2xl bg-[#F6F2EB] border border-[#EDE6DB] hover:border-brand-300 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-1 bg-brand-500 rounded-full mb-5" />
                <h3 className="font-serif text-xl text-brand-900 font-semibold tracking-wide mb-1">
                  {card.title}
                </h3>
                <p className="text-xs tracking-wide uppercase text-brand-600 font-medium mb-4">
                  {card.subtitle}
                </p>
                <p className="text-sm text-brand-800/70 leading-relaxed text-justify">
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
