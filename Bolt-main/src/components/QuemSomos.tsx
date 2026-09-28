import { Reveal } from '@/components/Reveal';

export function QuemSomos() {
  return (
    <section id="quem-somos" className="py-24 bg-brand-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-sm tracking-[0.25em] uppercase text-brand-600 font-medium mb-3">
            Quem Somos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-900">
            Um novo padr&atilde;o de cuidado odontol&oacute;gico
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
                &ldquo;Tudo come&ccedil;ou em 2007, na cl&iacute;nica da minha m&atilde;e, que &eacute;
                fonoaudi&oacute;loga. Foi ali que comecei a construir minha hist&oacute;ria na
                Odontologia. Aos poucos, foi nascendo o sonho de ter um espa&ccedil;o que reunisse tudo o
                que amo: a cl&iacute;nica, a ci&ecirc;ncia, o ensino e o cuidado com as pessoas. Hoje, esse
                sonho &eacute; o Instituto Bernat.&rdquo;
              </p>
              <p className="text-sm text-brand-200 font-medium">Dra. Milla Bernat</p>

              <div className="mt-8 pt-6 border-t border-brand-600/50">
                <p className="text-xs uppercase tracking-wider text-brand-300 mb-2">Diretora Cl&iacute;nica</p>
                <p className="text-sm text-brand-100 mb-1">CRO-DF 7915</p>
                <p className="text-sm text-brand-100 mb-1">Mestra em Odontologia pela Universidade de Bras&iacute;lia (UnB)</p>
                <p className="text-sm text-brand-100 mb-1">Especialista em Periodontia, Implantodontia e Odontologia do Esporte</p>
                <p className="text-sm text-brand-100 mb-3">Professora universit&aacute;ria</p>
                <a href="#equipe" className="text-sm text-brand-300 hover:text-white transition-colors underline underline-offset-4">
                  Conhe&ccedil;a a Dra. Milla &rarr;
                </a>
              </div>
            </div>
          </Reveal>

          {/* Main text */}
          <Reveal delay={150}>
            <div className="space-y-5 text-brand-800/80 leading-relaxed">
              <p>
                O Instituto Bernat &eacute; resultado de uma trajet&oacute;ria constru&iacute;da desde 2007,
                que cresceu junto com a experi&ecirc;ncia cl&iacute;nica, o conhecimento e uma forma de
                enxergar uma Odontologia que vai muito al&eacute;m dos dentes.
              </p>
              <p>
                Hoje, reunimos diferentes especialidades em um espa&ccedil;o dedicado ao cuidado integral
                da sa&uacute;de bucal, aproximando pr&aacute;tica cl&iacute;nica, ci&ecirc;ncia e ensino.
                Cada paciente &eacute; cuidado de forma individualizada, considerando n&atilde;o apenas suas
                necessidades odontol&oacute;gicas, mas tamb&eacute;m sua hist&oacute;ria, seus objetivos e
                seu estilo de vida.
              </p>
              <p>
                Acreditamos em uma Odontologia feita com ci&ecirc;ncia, escuta, respeito e empatia. Um
                cuidado que busca sa&uacute;de, fun&ccedil;&atilde;o e est&eacute;tica, sem perder de vista
                aquilo que est&aacute; no centro de tudo: o paciente.
              </p>

              <div className="mt-8 p-6 bg-white rounded-2xl border border-brand-100 shadow-sm">
                <p className="font-serif text-lg text-brand-900 mb-2">
                  Nossa experi&ecirc;ncia come&ccedil;a antes da consulta
                </p>
                <p className="text-sm text-brand-800/70 leading-relaxed">
                  No Instituto Bernat, o cuidado come&ccedil;a no primeiro contato. Da chegada ao Instituto
                  ao atendimento cl&iacute;nico, cada detalhe &eacute; pensado para que voc&ecirc; se sinta
                  acolhido, respeitado e confiante. Porque, para n&oacute;s, cuidar tamb&eacute;m est&aacute;
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
              <h3 className="font-serif text-xl text-brand-900 mb-3 font-semibold">Miss&atilde;o</h3>
              <p className="text-sm text-brand-800/70 leading-relaxed">
                Cuidar da sa&uacute;de bucal de forma integral e individualizada, unindo ci&ecirc;ncia,
                excel&ecirc;ncia cl&iacute;nica, escuta e empatia para promover sa&uacute;de, fun&ccedil;&atilde;o,
                est&eacute;tica e qualidade de vida.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-brand-100 shadow-sm">
              <h3 className="font-serif text-xl text-brand-900 mb-3 font-semibold">Vis&atilde;o</h3>
              <p className="text-sm text-brand-800/70 leading-relaxed">
                Ser refer&ecirc;ncia em Odontologia integrada, reconhecida pela excel&ecirc;ncia
                cl&iacute;nica, pelo cuidado com o paciente e pela integra&ccedil;&atilde;o entre
                assist&ecirc;ncia, ci&ecirc;ncia e ensino.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-brand-100 shadow-sm">
              <h3 className="font-serif text-xl text-brand-900 mb-3 font-semibold">Valores</h3>
              <p className="text-sm text-brand-800/70 leading-relaxed">
                Ci&ecirc;ncia &middot; &Eacute;tica &middot; Cuidado &middot; Escuta &middot; Empatia &middot;
                Respeito &middot; Excel&ecirc;ncia &middot; Ensino
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
