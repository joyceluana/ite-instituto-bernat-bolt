import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-900"
    >
      <img
        src="/images/Faixada_Instituto.jpg"
        alt="Recepção do Instituto Bernat"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-950/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/35 via-brand-950/45 to-brand-950/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-brand-300 font-medium mb-6 animate-fade-in">
          Odontologia Integrada &bull; Brasília &ndash; DF
        </p>

        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight tracking-tight mb-6 animate-fade-up hero-title-shadow">
          Odontologia que integra ciência, cuidado e saúde
        </h1>

        <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-3xl mx-auto mb-4 animate-fade-up font-light text-justify" style={{ animationDelay: '0.15s' }}>
          No Instituto Bernat, cada paciente é cuidado de forma individualizada, com excelência clínica, tecnologia e um olhar que considera sua saúde, seu estilo de vida e suas necessidades.
        </p>

        <p className="text-sm text-white/85 mb-10 animate-fade-up font-light" style={{ animationDelay: '0.25s' }}>
          Sob direção clínica da Dra. Milla Bernat — Mestra em Odontologia pela UnB e especialista em Periodontia, Implantodontia e Odontologia do Esporte.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.35s' }}>
          <a
            href="https://wa.link/fi8103"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-600 text-white font-medium rounded-full hover:bg-brand-700 transition-all duration-300 shadow-lg shadow-brand-600/20 hover:shadow-xl hover:shadow-brand-600/30 hover:-translate-y-0.5"
          >
            Agende sua consulta
          </a>
          <a
            href="#quem-somos"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/80 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Conheça o Instituto
          </a>
        </div>
      </div>

      <a
        href="#jeito-bernat"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
