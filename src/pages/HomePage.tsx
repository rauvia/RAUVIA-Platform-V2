import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { RAUVIA_ENTITY } from '../config/entity';
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
    "@type": "Organization",
    "@id": "https://rauvia.com.mx/#organization",
    "name": RAUVIA_ENTITY.legalName,
    "alternateName": RAUVIA_ENTITY.name,
    "url": RAUVIA_ENTITY.url,
    "logo": RAUVIA_ENTITY.logo,
    "description": RAUVIA_ENTITY.description,
    "founder": RAUVIA_ENTITY.founder,
    "sameAs": RAUVIA_ENTITY.sameAs
  };

  const webSiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://rauvia.com.mx/#website",
    "name": RAUVIA_ENTITY.name,
    "url": RAUVIA_ENTITY.url,
    "publisher": {
      "@id": "https://rauvia.com.mx/#organization"
    }
  };

  return (
    <>
      <SEO 
        title="RAUVIA Consulting | Tecnología del futuro para operaciones reales"
        description="Diseñamos activos digitales, sistemas comerciales y estructuras operativas para empresas que necesitan crecer con claridad y control."
        canonicalUrl="/"
      />
      <JsonLd data={structuredData} />
      <JsonLd data={webSiteData} />
      
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
