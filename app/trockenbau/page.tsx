
import type { Metadata } from 'next';
import TrockenbauHero from './TrockenbauHero';
import TrockenbauServices from './TrockenbauServices';
import TrockenbauProcess from './TrockenbauProcess';
import TrockenbauBenefits from './TrockenbauBenefits';

export const metadata: Metadata = {
  title: 'Trockenbau München - Professionelle Trockenbaulösungen | DOMABAU',
  description: 'Professioneller Trockenbau in München und Umgebung. Raumaufteilung, Schallschutz, Deckenverkleidung vom Meisterbetrieb. Kostenlose Beratung ✓ Schnelle Umsetzung ✓',
};

export default function TrockenbauPage() {
  return (
    <>
      <TrockenbauHero />
      <TrockenbauServices />
      <TrockenbauProcess />
      <TrockenbauBenefits />
    </>
  );
}
