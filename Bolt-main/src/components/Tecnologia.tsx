import { Reveal } from '@/components/Reveal';
import { technologies } from '@/data/technology';

export function Tecnologia() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-900 mb-4">
            Tecnologia a servi&ccedil;o do cuidado
          </h2>
          <p className="text-brand-800/70 leading-relaxed">
            Investimos em tecnologia para tornar o diagn&oacute;stico e o tratamento mais precisos,
            confort&aacute;veis e individualizados.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {technologies.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 70}>
              <div className="h-full p-6 rounded-2xl bg-brand-50/40 border border-brand-100 hover:border-brand-300 hover:bg-white hover:shadow-lg transition-all duration-300">
                <h3 className="font-serif text-base font-semibold text-brand-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-brand-800/60 leading-relaxed">{tech.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
