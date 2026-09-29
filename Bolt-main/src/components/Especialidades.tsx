import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { specialties, type Specialty } from '@/data/specialties';

export function Especialidades() {
  const [selected, setSelected] = useState<Specialty | null>(null);
  const highlighted = specialties.filter((s) => s.highlighted);
  const others = specialties.filter((s) => !s.highlighted);

  return (
    <section id="especialidades" className="py-24 bg-brand-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <p className="text-sm tracking-[0.25em] uppercase text-brand-600 font-medium mb-3">
            Cuidado Integrado
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-900 font-semibold tracking-wide mb-4">
            Atendimento completo em todas as especialidades
          </h2>
          <p className="text-brand-800/70 max-w-2xl mx-auto leading-relaxed">
            Diferentes especialidades trabalhando de forma integrada para cuidar da sua saúde
            bucal em todas as fases do tratamento.
          </p>
        </Reveal>

        {/* Highlighted specialties */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
          {highlighted.map((spec, i) => (
            <Reveal key={spec.id} delay={i * 80}>
              <button
                onClick={() => setSelected(spec)}
                className="group h-full w-full text-left p-6 rounded-2xl bg-brand-600 text-white hover:bg-brand-700 transition-all duration-300 hover:shadow-xl hover:shadow-brand-900/15 hover:-translate-y-1"
              >
                <h3 className="font-serif text-lg font-semibold tracking-wide mb-2">{spec.name}</h3>
                <p className="text-xs text-brand-100/90 line-clamp-3 mb-4 text-justify">{spec.shortDescription}</p>
                <span className="text-xs text-brand-200 group-hover:text-white transition-colors inline-flex items-center gap-1">
                  Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Other specialties */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((spec, i) => (
            <Reveal key={spec.id} delay={i * 60}>
              <button
                onClick={() => setSelected(spec)}
                className="group h-full w-full text-left p-6 rounded-2xl bg-white border border-brand-100 hover:border-brand-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <h3 className="font-serif text-lg font-semibold text-brand-900 tracking-wide mb-2">{spec.name}</h3>
                <p className="text-xs text-brand-800/60 line-clamp-3 mb-4 text-justify">{spec.shortDescription}</p>
                <span className="text-xs text-brand-600 group-hover:text-brand-700 inline-flex items-center gap-1">
                  Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <SpecialtyModal specialty={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function SpecialtyModal({ specialty, onClose }: { specialty: Specialty; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] bg-brand-950/60 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full my-8 shadow-2xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white rounded-t-3xl border-b border-brand-100 px-8 py-5 flex items-center justify-between z-10">
          <h3 className="font-serif text-2xl text-brand-900 font-semibold tracking-wide">{specialty.name}</h3>
          <button
            onClick={onClose}
            className="text-brand-600 hover:bg-brand-50 rounded-full p-2 transition-colors"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-8 py-6 max-h-[70vh] overflow-y-auto">
          {specialty.tagline && (
            <p className="font-serif text-lg text-brand-700 italic tracking-wide mb-5 text-justify">{specialty.tagline}</p>
          )}
          {specialty.intro && (
            <p className="text-sm text-brand-800/80 leading-relaxed mb-6 text-justify">{specialty.intro}</p>
          )}

          {specialty.services && (
            <>
              <p className="text-sm font-semibold text-brand-900 mb-4">
                {specialty.id === 'odontologia-esporte' ? 'Principais serviços:' : 'Entre os principais tratamentos estão:'}
              </p>
              <ul className="space-y-3 mb-6">
                {specialty.services.map((srv, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-brand-500 mt-1 shrink-0">
                      <ArrowRight size={16} />
                    </span>
                    <div>
                      <span className="text-sm font-medium text-brand-900">{srv.name}</span>
                      {srv.description && (
                        <span className="text-sm text-brand-800/60"> &mdash; {srv.description}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}

          {specialty.closingText && (
            <p className="font-serif text-base text-brand-700 italic tracking-wide mb-6 text-justify">{specialty.closingText}</p>
          )}

          {specialty.cta && (
            <a
              href="https://wa.me/5561996586589"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white text-sm font-medium rounded-full hover:bg-brand-700 transition-colors"
            >
              {specialty.cta} <ArrowRight size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
