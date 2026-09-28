import { Reveal } from '@/components/Reveal';

export function CtaSection() {
  return (
    <section className="py-20 bg-brand-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-600/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-wide mb-4 leading-tight">
            Cuidado de verdade, desde o primeiro contato.
          </h2>
          <p className="text-lg text-brand-100 mb-8 font-light">
            Tecnologia para facilitar. Pessoas para ouvir, acolher e cuidar.
          </p>
          <a
            href="https://wa.me/5561996586589"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-brand-700 font-medium rounded-full hover:bg-brand-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Fale com nossa equipe &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  );
}
