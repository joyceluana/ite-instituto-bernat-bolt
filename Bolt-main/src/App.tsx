import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { JeitoBernat } from '@/components/JeitoBernat';
import { QuemSomos } from '@/components/QuemSomos';
import { Cuidado } from '@/components/Cuidado';
import { CtaSection } from '@/components/CtaSection';
import { Especialidades } from '@/components/Especialidades';
import { Tecnologia } from '@/components/Tecnologia';
import { Equipe } from '@/components/Equipe';
import { Academy } from '@/components/Academy';
import { Contato } from '@/components/Contato';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <JeitoBernat />
        <QuemSomos />
        <Cuidado />
        <CtaSection />
        <Especialidades />
        <Tecnologia />
        <Equipe />
        <Academy />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
