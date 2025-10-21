
import MalerHero from './MalerHero';
import MalerServices from './MalerServices';
import MalerProcess from './MalerProcess';
import MalerBenefits from './MalerBenefits';
import MalerProjects from './MalerProjects';

export const metadata = {
  title: 'Malerarbeiten München & Umgebung | Professioneller Malerbetrieb',
  description: 'Professionelle Malerarbeiten in München und Umgebung. Innen- und Außenmalerei, Renovierung, Fassadenanstriche. Kostenloser Kostenvoranschlag für Schwabing, Maxvorstadt, Lehel und alle Münchner Stadtteile.',
  keywords: 'Malerarbeiten München, Malerbetrieb München, Innenmalerei München, Außenmalerei München, Fassadenanstrich München, Renovierung München, Maler Schwabing, Maler Maxvorstadt, Maler Lehel, Malerarbeiten Umgebung München'
};

export default function MalerarbeitenPage() {
  return (
    <>
      <MalerHero />
      <MalerServices />
      <MalerProjects />
      <MalerProcess />
      <MalerBenefits />
    </>
  );
}
