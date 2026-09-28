import { Reveal } from '@/components/Reveal';

export function QuemSomos() {
  return (
    <section id="quem-somos" className="py-24 bg-brand-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-sm tracking-[0.25em] uppercase text-brand-600 font-medium mb-3">
            Quem Somos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-900 font-semibold tracking-wide">
            Um novo padrão de cuidado odontológico
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Green card with photo placeholder + story */}
          <Reveal>
            <div className="bg-brand-700 text-white rounded-3xl p-10 lg:p-12 shadow-xl shadow-brand-900/10">
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-brand-300/60 mb-6 shadow-lg shadow-brand-950/10">
                <img
                  src="/images/quem-somos/Dra_Milla.jpg"
                  alt="Dra. Milla Bernat"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="font-serif text-lg leading-relaxed text-brand-50 italic mb-5">
                &ldquo;Tudo começou em 2007, na clínica da minha mãe, que é
                fonoaudióloga. Foi ali que comecei a construir minha história na
                Odontologia. Aos poucos, foi nascendo o sonho de ter um espaço que reunisse tudo o
                que amo: a clínica, a ciência, o ensino e o cuidado com as pessoas. Hoje, esse
                sonho é o Instituto Bernat.&rdquo;
              </p>
              <p className="text-sm text-brand-200 font-medium">Dra. Milla Bernat</p>

              <div className="mt-8 pt-6 border-t border-brand-600/50">
                <p className="text-xs uppercase tracking-wider text-brand-300 mb-2">Diretora Clínica</p>
                <p className="text-sm text-brand-100 mb-1">CRO-DF 7915</p>
                <p className="text-sm text-brand-100 mb-1">Mestra em Odontologia pela Universidade de Brasília (UnB)</p>
                <p className="text-sm text-brand-100 mb-1">Especialista em Periodontia, Implantodontia e Odontologia do Esporte</p>
                <p className="text-sm text-brand-100 mb-3">Professora universitária</p>
                <a href="#equipe" className="text-sm text-brand-300 hover:text-white transition-colors underline underline-offset-4">
                  Conheça a Dra. Milla &rarr;
                </a>
              </div>
            </div>
          </Reveal>

          {/* Main text */}
          <Reveal delay={150}>
            <div className="space-y-5 text-brand-800/80 leading-relaxed">
              <p>
                O Instituto Bernat é resultado de uma trajetória construída desde 2007,
                que cresceu junto com a experiência clínica, o conhecimento e uma forma de
                enxergar uma Odontologia que vai muito além dos dentes.
              </p>
              <p>
                Hoje, reunimos diferentes especialidades em um espaço dedicado ao cuidado integral
                da saúde bucal, aproximando prática clínica, ciência e ensino.
                Cada paciente é cuidado de forma individualizada, considerando não apenas suas
                necessidades odontológicas, mas também sua história, seus objetivos e
                seu estilo de vida.
              </p>
              <p>
                Acreditamos em uma Odontologia feita com ciência, escuta, respeito e empatia. Um
                cuidado que busca saúde, função e estética, sem perder de vista
                aquilo que está no centro de tudo: o paciente.
              </p>

              <div className="mt-8 p-6 bg-white rounded-2xl border border-brand-100 shadow-sm">
                <p className="font-serif text-lg text-brand-900 font-semibold tracking-wide mb-2">
                  Nossa experiência começa antes da consulta
                </p>
                <p className="text-sm text-brand-800/70 leading-relaxed">
                  No Instituto Bernat, o cuidado começa no primeiro contato. Da chegada ao Instituto
                  ao atendimento clínico, cada detalhe é pensado para que você se sinta
                  acolhido, respected, e confiante. Porque, para nós, cuidar também está
                  na forma como recebemos, ouvimos e acompanhamos cada paciente.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Missão / Visão / Valores */}
        <Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-2xl border border-brand-100 shadow-sm">
              <h3 className="font-serif text-xl text-brand-900 mb-3 font-semibold tracking-wide">Missão</h3>
              <p className="text-sm text-brand-800/70 leading-relaxed">
                Cuidar da saúde bucal de forma integral e individualizada, unindo ciência,
                excelência clínica, escuta e empatia para promover saúde, função,
                estética e qualidade de vida.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-brand-100 shadow-sm">
              <h3 className="font-serif text-xl text-brand-900 mb-3 font-semibold tracking-wide">Visão</h3>
              <p className="text-sm text-brand-800/70 leading-relaxed">
                Ser referência em Odontologia integrada, reconhecida pela excelência
                clínica, pelo cuidado com o paciente e pela integração entre
                assistência, ciência e ensino.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-brand-100 shadow-sm">
              <h3 className="font-serif text-xl text-brand-900 mb-3 font-semibold tracking-wide">Valores</h3>
              <p className="text-sm text-brand-800/70 leading-relaxed">
                Ciência &middot; Ética &middot; Cuidado &middot; Escuta &middot; Empatia &middot;
                Respeito &middot; Excelência &middot; Ensino
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
