import { Helmet } from 'react-helmet-async';
import FadeInUp from '../components/FadeInUp';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import MethodologySection from '../components/MethodologySection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import ImpactSection from '../components/ImpactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "RAUVIA Consulting",
    "url": "https://www.rauvia.com.mx",
    "logo": "https://www.rauvia.com.mx/logo.png",
    "description": "Consultoría y Desarrollo Tecnológico. Diseñamos activos digitales, sistemas comerciales y estructuras operativas para empresas que necesitan crecer con claridad y control.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ciudad de México",
      "addressRegion": "CDMX",
      "addressCountry": "MX"
    },
    "slogan": "Tecnología del futuro para operaciones reales.",
    "knowsAbout": ["Estrategia Digital", "Sistemas Comerciales", "Desarrollo Tecnológico", "Automatización", "Datos y Analytics"]
  };

  return (
    <>
      <Helmet>
        <title>RAUVIA Consulting | Tecnología del futuro para operaciones reales</title>
        <meta name="description" content="Diseñamos activos digitales, sistemas comerciales y estructuras operativas para empresas que necesitan crecer con claridad y control." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <FadeInUp>
        <HeroSection />
      </FadeInUp>
      <FadeInUp>
        <ProblemSection />
      </FadeInUp>
      <FadeInUp>
        <MethodologySection />
      </FadeInUp>
      <FadeInUp>
        <CapabilitiesSection />
      </FadeInUp>
      <FadeInUp>
        <ImpactSection />
      </FadeInUp>
      <FadeInUp>
        <Footer variant="home" />
      </FadeInUp>
    </>
  );
}
