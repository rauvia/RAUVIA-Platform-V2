import React from 'react';
import SEO from '../components/SEO';
import FadeInUp from '../components/FadeInUp';
import Footer from '../components/Footer';

export default function AvisoPrivacidadPage() {
  return (
    <>
      <SEO 
        title="Aviso de Privacidad | RAUVIA"
        description="Aviso de privacidad de RAUVIA Consulting."
        canonicalUrl="/aviso-de-privacidad"
      />
      <section className="pt-32 pb-24 bg-rauvia-bg min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <h1 className="text-3xl md:text-5xl font-extrabold text-rauvia-navy mb-8">Aviso de Privacidad</h1>
            <div className="prose prose-rauvia max-w-none text-slate-600">
              <p>Este es el aviso de privacidad de RAUVIA Consulting. El contenido legal detallado estará disponible próximamente en esta sección.</p>
            </div>
          </FadeInUp>
        </div>
      </section>
      <Footer />
    </>
  );
}
