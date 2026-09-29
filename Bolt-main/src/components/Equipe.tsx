import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { team } from '@/data/team';

export function Equipe() {
  return (
    <section id="equipe" className="py-24 bg-brand-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <img
              src="/images/quem-somos/495238181_17845680033471093_3592445627456577289_n.jpg"
              alt="Instituto Bernat"
              className="w-16 h-16 rounded-full object-cover ring-2 ring-brand-200"
            />
          </div>
          <p className="text-sm tracking-[0.25em] uppercase text-brand-600 font-medium mb-3">
            Instituto Bernat &middot; Odontologia Integrada
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-900 font-semibold tracking-wide mb-4">
            Excelência em cada especialidade
          </h2>
          <p className="text-brand-800/70 max-w-2xl mx-auto leading-relaxed">
            Um corpo clínico multidisciplinar, com profissionais especializados e diferentes
            áreas trabalhando em conjunto para oferecer um cuidado completo, individualizado e
            baseado em ciência.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {team.map((member, i) => (
            <Reveal key={member.id} delay={i * 80}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: (typeof team)[number] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`flip-card h-[690px] ${isFlipped ? 'is-flipped' : ''}`}>
      <div className="flip-card-inner relative w-full h-full">
        <div className="flip-card-front absolute inset-0 rounded-[22px] bg-[#faf9f5] border border-[#d9d2c4] shadow-[0_16px_35px_rgba(20,61,47,0.08)] p-3 flex flex-col">
          {/* Caixa da foto ajustada com zoom proporcional e enquadramento focado no topo da cabeça */}
          <div className="h-[390px] rounded-[17px] overflow-hidden bg-[#f4f1e9] shrink-0">
            {member.photo ? (
              <img 
                src={member.photo} 
                alt={member.name} 
                className="w-full h-full object-cover object-top" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-serif text-5xl text-brand-700 font-semibold">
                  {member.name.split(' ').slice(-2).map((namePart) => namePart[0]).join('')}
                </span>
              </div>
            )}
          </div>
          <div className="flex-1 px-4 pt-6 pb-3 flex flex-col">
            <p className="text-xs font-semibold tracking-wide text-[#8d7042] mb-3">{member.cro}</p>
            <h3 className="font-serif text-[1.55rem] leading-tight text-brand-800 mb-3 font-semibold tracking-wide">{member.name}</h3>
            <p className="text-sm uppercase font-semibold leading-snug text-brand-700 text-justify">{member.specialties}</p>
            <button
              type="button"
              onClick={() => setIsFlipped(true)}
              className="mt-auto self-start inline-flex items-center gap-2 text-brand-800 font-semibold hover:text-brand-600 transition-colors"
            >
              Ver currículo <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="flip-card-back absolute inset-0 rounded-[22px] bg-brand-800 text-white p-8 flex flex-col">
          <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/15">
            <div>
              <p className="text-xs uppercase tracking-wide text-[#d1ae65] font-semibold mb-3">Formação & experiência</p>
              <h3 className="font-serif text-2xl leading-tight font-semibold tracking-wide">{member.name}</h3>
            </div>
            <button
              type="button"
              onClick={() => setIsFlipped(false)}
              className="shrink-0 w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Voltar ao perfil"
            >
              <ArrowLeft size={18} />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto py-6 space-y-4 pr-2 team-credentials-scrollbar">
            {member.credentials.map((credential) => (
              <li key={credential} className="flex gap-3 text-sm leading-relaxed text-brand-50 text-justify">
                <span className="text-[#d1ae65] mt-1.5 shrink-0">•</span>
                <span>{credential}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setIsFlipped(false)}
            className="self-start inline-flex items-center gap-2 text-white font-semibold hover:text-brand-200 transition-colors"
          >
            <ArrowLeft size={18} /> Voltar ao perfil
          </button>
        </div>
      </div>
    </div>
  );
}
