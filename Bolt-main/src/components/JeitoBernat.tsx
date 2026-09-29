import { Reveal } from '@/components/Reveal';

const differentials = [
  {
    title: 'Cuidado completo',
    text: 'Todas as especialidades odontológicas reunidas para que cada paciente seja cuidado de forma integrada, do diagnóstico à prevenção e ao tratamento.',
  },
  {
    title: 'Ciência e especialização',
    text: 'Uma Odontologia baseada em evidências, conduzida por profissionais especializados, mestres e doutores, em constante atualização.',
  },
  {
    title: 'Cuidado individualizado',
    text: 'Cada paciente é único. Por isso, diagnóstico e planejamento são construídos considerando suas necessidades, rotina e objetivos.',
  },
  {
    title: 'Saúde além dos dentes',
    text: 'Entendemos a saúde bucal como parte da saúde integral, considerando sua relação com qualidade de vida, bem-estar e desempenho esportivo.',
  },
];

export function JeitoBernat() {
  return (
    <section id="jeito-bernat" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-sm tracking-[0.25em] uppercase text-brand-600 font-medium mb-3">
            Por que o Instituto Bernat?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-900 font-semibold tracking-wide mb-4">
            O Jeito Bernat de Cuidar
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="group h-full p-7 rounded-2xl bg-brand-50/50 border border-brand-100 hover:border-brand-300 hover:bg-white hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
                <div className="w-10 h-1 bg-brand-500 rounded-full mb-5 group-hover:w-16 transition-all duration-300" />
                <h3 className="font-serif text-xl text-brand-900 font-semibold tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-800/70 leading-relaxed text-justify">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
