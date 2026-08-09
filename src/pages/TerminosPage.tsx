import React from 'react';
import SEO from '../components/SEO';
import FadeInUp from '../components/FadeInUp';
import Footer from '../components/Footer';

export default function TerminosPage() {
  return (
    <>
      <SEO 
        title="Términos y Condiciones | RAUVIA"
        description="Términos y condiciones de RAUVIA Consulting."
        canonicalUrl="/terminos"
      />
      <section className="pt-32 pb-24 bg-rauvia-bg min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <h1 className="text-3xl md:text-5xl font-extrabold text-rauvia-navy mb-8">Términos y Condiciones</h1>
            <div className="prose prose-rauvia max-w-none text-slate-600">
              <p>Estos son los términos y condiciones de RAUVIA Consulting. El contenido legal detallado estará disponible próximamente en esta sección.</p>
            </div>
          </FadeInUp>
        </div>
      </section>
      <Footer />
    </>
  );
}
