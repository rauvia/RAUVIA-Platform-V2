import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { RAUVIA_ENTITY, AETHRYON_ENTITY } from '../config/entity';
import { ArrowRight, Target, Hexagon, Filter, Route, Box, AlertCircle, TrendingUp, Compass, Network, Activity, FileText, CheckCircle2, ChevronDown, MonitorPlay } from 'lucide-react';
import FadeInUp from '../components/FadeInUp';
import Footer from '../components/Footer';

export default function AethryonPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://rauvia.com.mx/aethryon/#webpage",
    "name": AETHRYON_ENTITY.name + " - " + RAUVIA_ENTITY.name,
    "url": AETHRYON_ENTITY.url,
    "description": AETHRYON_ENTITY.description,
    "publisher": {
      "@id": "https://rauvia.com.mx/#organization"
    },
    "mainEntity": {
      "@type": "Thing",
      "@id": "https://rauvia.com.mx/aethryon/#entity",
      "name": AETHRYON_ENTITY.name,
      "description": AETHRYON_ENTITY.description
    }
  };

  return (
    <>
      <SEO 
        title="RAUVIA Consulting | AETHRYON"
        description="AETHRYON es el sistema de análisis de RAUVIA para identificar qué está frenando el crecimiento de una empresa y convertirlo en una ruta de acción."
        canonicalUrl="/aethryon"
      />
      <JsonLd data={structuredData} />

      {/* SECCIÓN 1 — HERO */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden relative bg-rauvia-bg">
        <div className="absolute inset-0 pointer-events-none opacity-20" 
             style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 xl:col-span-5 space-y-6 relative z-20">
              <div className="inline-block">
                <span className="text-xs font-bold tracking-widest text-rauvia-blue uppercase bg-blue-50 px-3 py-1 rounded">
                  SISTEMA DE ANÁLISIS Y DECISIÓN
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-rauvia-navy leading-[1.1]">
                IDENTIFICA QUÉ ESTÁ <br className="hidden lg:block"/>
                <span className="text-rauvia-blue">FRENANDO EL CRECIMIENTO</span> <br className="hidden lg:block"/>
                DE TU EMPRESA<span className="text-rauvia-gold">.</span>
              </h1>
              
              <div className="space-y-4 text-slate-600 text-base xl:text-lg max-w-md">
                <p>Quieres hacer crecer tu empresa, pero quizá no está claro qué problema debes resolver primero, dónde invertir o qué iniciativa puede generar mayor avance.</p>
                <p className="font-semibold text-rauvia-navy">AETHRYON organiza esa situación y la convierte en una ruta de acción.</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/525586494076" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-rauvia-navy hover:bg-rauvia-navy-dark text-white px-6 py-3 rounded text-sm font-bold tracking-wider transition-all shadow-lg min-h-[52px]">
                  ANALIZAR MI SITUACIÓN
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#como-funciona" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-rauvia-navy px-6 py-3 rounded text-sm font-bold tracking-wider transition-all min-h-[52px]">
                  VER CÓMO FUNCIONA
                  <MonitorPlay className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 xl:col-span-7 flex justify-center relative z-0 mt-12 lg:mt-0">
               <img 
                 src="/media/aethryon-hero-orbital-v2-clean.svg" 
                 alt="AETHRYON" 
                 className="w-full object-contain" 
               />
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — IDENTIFICACIÓN DEL CASO */}
      <FadeInUp>
      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 block">LA SITUACIÓN</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-rauvia-navy leading-tight mb-6">
              QUIERES HACER CRECER TU EMPRESA, <br className="hidden md:block"/>
              PERO NO SABES QUÉ RESOLVER PRIMERO.
            </h2>
            <div className="text-slate-600 text-lg space-y-4">
              <p>Puede haber oportunidades comerciales, problemas operativos, tecnología sin integrar, procesos que dependen de personas específicas o varias iniciativas compitiendo por los mismos recursos.</p>
              <p className="font-semibold text-rauvia-navy">El problema no siempre es la falta de capacidad. Con frecuencia es no saber dónde intervenir primero.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ESCENARIO 01 */}
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl hover:shadow-md hover:border-rauvia-blue/30 transition-all group flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <Activity className="w-6 h-6 text-rauvia-blue" />
              </div>
              <h3 className="text-lg font-bold text-rauvia-navy mb-3">HAY OPORTUNIDADES, PERO NO AVANZAN</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Existen clientes, proyectos o ideas, pero no está claro cuál merece atención inmediata ni qué condiciones deben cumplirse para avanzar.</p>
            </div>
            
            {/* ESCENARIO 02 */}
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl hover:shadow-md hover:border-rauvia-blue/30 transition-all group flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <AlertCircle className="w-6 h-6 text-rauvia-gold" />
              </div>
              <h3 className="text-lg font-bold text-rauvia-navy mb-3">LA OPERACIÓN GENERA FRICCIÓN</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Los procesos dependen de personas, existe retrabajo o cada intento de crecer aumenta el desorden y la presión sobre el equipo.</p>
            </div>

            {/* ESCENARIO 03 */}
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl hover:shadow-md hover:border-rauvia-blue/30 transition-all group flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <Network className="w-6 h-6 text-rauvia-navy" />
              </div>
              <h3 className="text-lg font-bold text-rauvia-navy mb-3">HAY DEMASIADAS DECISIONES ABIERTAS</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">Se distribuyen tiempo, dinero y atención entre distintas iniciativas sin saber cuál puede producir mayor impacto.</p>
            </div>
          </div>
        </div>
      </section>
      </FadeInUp>

      {/* SECCIÓN 3 — REVELACIÓN DEL PROBLEMA */}
      <FadeInUp>
      <section className="py-16 md:py-24 bg-rauvia-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 block">LA CAUSA</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-rauvia-navy leading-tight mb-8">
            NO SIEMPRE FALTA UNA SOLUCIÓN.<br/>
            <span className="text-rauvia-blue">FALTA SABER QUÉ DEBE RESOLVERSE PRIMERO.</span>
          </h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>Una empresa puede tener talento, conocimiento, tecnología, clientes y oportunidades y, aun así, no conseguir avanzar.</p>
            <p>Cuando las señales están dispersas, las prioridades compiten y las dependencias no son visibles, tomar una decisión se vuelve más difícil.</p>
            <p className="font-bold text-rauvia-navy">Antes de construir una solución, es necesario identificar la intervención correcta.</p>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
             <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex flex-col items-center w-full md:w-auto">
               <span className="text-xs font-bold text-slate-400 uppercase mb-1">Información</span>
               <span className="text-sm font-medium text-slate-700">Dispersa</span>
             </div>
             <ArrowRight className="w-5 h-5 text-slate-300 rotate-90 md:rotate-0 flex-shrink-0" />
             <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex flex-col items-center w-full md:w-auto">
               <span className="text-xs font-bold text-slate-400 uppercase mb-1">Decisiones</span>
               <span className="text-sm font-medium text-slate-700">Abiertas</span>
             </div>
             <ArrowRight className="w-5 h-5 text-rauvia-blue rotate-90 md:rotate-0 flex-shrink-0" />
             <div className="bg-rauvia-navy border border-rauvia-navy-dark p-4 rounded-lg shadow-md flex flex-col items-center w-full md:w-auto">
               <span className="text-xs font-bold text-rauvia-gold uppercase mb-1">Prioridad</span>
               <span className="text-sm font-bold text-white">Visible</span>
             </div>
          </div>
        </div>
      </section>
      </FadeInUp>

      {/* SECCIÓN 4 — PRESENTACIÓN DE AETHRYON */}
      <FadeInUp>
      <section className="py-16 md:py-24 bg-rauvia-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                 <pattern id="hex" x="0" y="0" width="60" height="103.923" patternUnits="userSpaceOnUse">
                    <path d="M30 0L60 17.3205V51.9615L30 69.282L0 51.9615V17.3205L30 0Z" stroke="white" strokeWidth="1" fill="none"/>
                    <path d="M30 103.923L60 86.6025V51.9615L30 69.282L0 51.9615V86.6025L30 103.923Z" stroke="white" strokeWidth="1" fill="none"/>
                 </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hex)" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold tracking-widest text-rauvia-gold uppercase mb-4 block">AETHRYON</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-8">
            CONVIERTE INFORMACIÓN DISPERSA<br/>
            EN UNA DECISIÓN EJECUTABLE.
          </h2>
          
          <div className="max-w-3xl mx-auto bg-slate-800/50 border border-slate-700 p-8 rounded-xl mb-16 backdrop-blur-sm">
            <p className="text-xl font-bold text-white mb-4">
              AETHRYON es el sistema de análisis de RAUVIA para identificar qué está frenando el crecimiento de una empresa y convertirlo en una ruta de acción.
            </p>
            <p className="text-slate-300">
              No sustituye la experiencia del dueño o del equipo directivo. La organiza, la contrasta y ayuda a distinguir qué necesita atención inmediata, qué puede esperar y qué no conviene ejecutar todavía.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900/50 border border-slate-700/50 p-6 rounded-lg text-left">
              <div className="text-xs font-bold text-slate-400 mb-2 font-mono">01</div>
              <h3 className="text-lg font-bold text-white mb-2">ORDENA</h3>
              <p className="text-sm text-slate-400">Reúne señales, problemas, restricciones y oportunidades.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-700/50 p-6 rounded-lg text-left">
              <div className="text-xs font-bold text-slate-400 mb-2 font-mono">02</div>
              <h3 className="text-lg font-bold text-white mb-2">EVALÚA</h3>
              <p className="text-sm text-slate-400">Analiza las condiciones reales para avanzar y los obstáculos que podrían impedirlo.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-700/50 p-6 rounded-lg text-left">
              <div className="text-xs font-bold text-slate-400 mb-2 font-mono">03</div>
              <h3 className="text-lg font-bold text-rauvia-gold mb-2">PRIORIZA</h3>
              <p className="text-sm text-slate-400">Distingue qué debe atenderse ahora, después o descartarse.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-700/50 p-6 rounded-lg text-left">
              <div className="text-xs font-bold text-slate-400 mb-2 font-mono">04</div>
              <h3 className="text-lg font-bold text-rauvia-blue mb-2">CONVIERTE</h3>
              <p className="text-sm text-slate-400">Transforma la prioridad en acciones, responsables, dependencias e indicadores.</p>
            </div>
          </div>
        </div>
      </section>
      </FadeInUp>

      {/* SECCIÓN 5 — CÓMO FUNCIONA */}
      <FadeInUp>
      <section id="como-funciona" className="py-16 md:py-24 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 block">PROCESO</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-rauvia-navy leading-tight mb-6">
              CÓMO FUNCIONA AETHRYON
            </h2>
            <p className="text-slate-600 text-lg">
              El análisis se desarrolla en cuatro pasos. Cada uno reduce una parte de la incertidumbre hasta convertir una situación ambigua en una ruta ejecutable.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line for Desktop */}
            <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-slate-100 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              
              {/* PASO 01 */}
              <div className="flex flex-col items-center text-center">
                <div className="hidden lg:flex w-12 h-12 bg-white border-2 border-slate-200 rounded-full items-center justify-center mb-6 z-10 text-slate-400 font-bold">1</div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex-grow flex flex-col items-center">
                  <span className="lg:hidden text-xs font-bold text-slate-400 mb-2">PASO 01</span>
                  <h3 className="text-base font-bold text-rauvia-navy mb-3">ENTENDER LA SITUACIÓN</h3>
                  <p className="text-sm text-slate-600 mb-6 flex-grow text-justify">Reunimos el contexto, el objetivo, las señales disponibles y las restricciones reales de la empresa.</p>
                  <div className="bg-white border border-slate-100 p-3 rounded-lg mt-auto w-full">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Resultado</span>
                    <span className="text-sm font-semibold text-rauvia-navy">Una definición clara del problema.</span>
                  </div>
                </div>
              </div>

              {/* PASO 02 */}
              <div className="flex flex-col items-center text-center">
                <div className="hidden lg:flex w-12 h-12 bg-white border-2 border-slate-200 rounded-full items-center justify-center mb-6 z-10 text-slate-400 font-bold">2</div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex-grow flex flex-col items-center relative">
                  {/* Vertical connector for mobile */}
                  <div className="lg:hidden absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-200"></div>
                  <span className="lg:hidden text-xs font-bold text-slate-400 mb-2">PASO 02</span>
                  <h3 className="text-base font-bold text-rauvia-navy mb-3">EVALUAR LAS CONDICIONES</h3>
                  <p className="text-sm text-slate-600 mb-6 flex-grow text-justify">Analizamos si existe una necesidad real, qué obstáculos pueden presentarse y qué tan preparada está la empresa para actuar.</p>
                  <div className="bg-white border border-slate-100 p-3 rounded-lg mt-auto w-full">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Resultado</span>
                    <span className="text-sm font-semibold text-rauvia-navy">Una lectura objetiva de viabilidad y riesgo.</span>
                  </div>
                </div>
              </div>

              {/* PASO 03 */}
              <div className="flex flex-col items-center text-center">
                <div className="hidden lg:flex w-12 h-12 bg-white border-2 border-rauvia-gold rounded-full items-center justify-center mb-6 z-10 text-rauvia-gold font-bold">3</div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex-grow flex flex-col items-center relative">
                  <div className="lg:hidden absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-200"></div>
                  <span className="lg:hidden text-xs font-bold text-slate-400 mb-2">PASO 03</span>
                  <h3 className="text-base font-bold text-rauvia-navy mb-3">ENCONTRAR LA PRIORIDAD</h3>
                  <p className="text-sm text-slate-600 mb-6 flex-grow text-justify">Comparamos problemas, oportunidades y dependencias para identificar qué intervención puede producir mayor avance.</p>
                  <div className="bg-orange-50 border border-rauvia-gold/30 p-3 rounded-lg mt-auto w-full">
                    <span className="text-[10px] font-bold text-rauvia-gold uppercase block mb-1">Resultado</span>
                    <span className="text-sm font-bold text-rauvia-navy">Una prioridad justificada.</span>
                  </div>
                </div>
              </div>

              {/* PASO 04 */}
              <div className="flex flex-col items-center text-center">
                <div className="hidden lg:flex w-12 h-12 bg-rauvia-navy border-2 border-rauvia-navy rounded-full items-center justify-center mb-6 z-10 text-white font-bold">4</div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex-grow flex flex-col items-center relative shadow-sm">
                  <div className="lg:hidden absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-200"></div>
                  <span className="lg:hidden text-xs font-bold text-slate-400 mb-2">PASO 04</span>
                  <h3 className="text-base font-bold text-rauvia-navy mb-3">DISEÑAR LA RUTA</h3>
                  <p className="text-sm text-slate-600 mb-6 flex-grow text-justify">Convertimos la prioridad en una secuencia de acciones, responsables, dependencias e indicadores.</p>
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg mt-auto w-full">
                    <span className="text-[10px] font-bold text-rauvia-blue uppercase block mb-1">Resultado</span>
                    <span className="text-sm font-bold text-rauvia-navy">Una ruta ejecutable.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      </FadeInUp>

      {/* SECCIÓN 6 — QUÉ OBSERVA */}
      <FadeInUp>
      <section className="py-16 md:py-24 bg-rauvia-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 block">CRITERIOS DE ANÁLISIS</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-rauvia-navy leading-tight">
              AETHRYON OBSERVA<br/>CINCO CONDICIONES.
            </h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50">
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-xs font-mono font-bold text-slate-400">01</div>
                  <h3 className="text-lg font-bold text-rauvia-navy text-center">CLARIDAD</h3>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                <p className="text-justify">¿El problema y el resultado esperado están definidos con suficiente precisión?</p>
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50">
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-xs font-mono font-bold text-slate-400">02</div>
                  <h3 className="text-lg font-bold text-rauvia-navy text-center">DIFICULTADES</h3>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                <p className="text-justify">¿Qué obstáculos internos o externos pueden impedir que la iniciativa avance?</p>
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50">
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-xs font-mono font-bold text-slate-400">03</div>
                  <h3 className="text-lg font-bold text-rauvia-navy text-center">ALINEACIÓN</h3>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                <p className="text-justify">¿Las condiciones, actores y recursos necesarios comienzan a coincidir?</p>
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50">
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-xs font-mono font-bold text-slate-400">04</div>
                  <h3 className="text-lg font-bold text-rauvia-navy text-center">OPORTUNIDAD</h3>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                <p className="text-justify">¿Existe un momento favorable para actuar o conviene esperar?</p>
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50">
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-xs font-mono font-bold text-slate-400">05</div>
                  <h3 className="text-lg font-bold text-rauvia-navy text-center">CAPACIDAD DE EJECUCIÓN</h3>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                <p className="text-justify">¿La empresa cuenta con responsables, recursos y condiciones para implementar la decisión?</p>
              </div>
            </details>
          </div>

          <div className="mt-8 p-4 bg-slate-100/50 border border-slate-200 rounded-lg flex justify-center">
            <p className="text-xs text-slate-500 text-center">
              Nota: Dentro del sistema, estas condiciones se modelan mediante indicadores.
            </p>
          </div>
        </div>
      </section>
      </FadeInUp>

      {/* SECCIÓN 7 — QUÉ RECIBE LA EMPRESA */}
      <FadeInUp>
      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 block">RESULTADO</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-rauvia-navy leading-tight mb-6">
              NO RECIBES SOLO UN DIAGNÓSTICO.<br/>
              <span className="text-rauvia-blue">RECIBES UNA DECISIÓN ESTRUCTURADA.</span>
            </h2>
            <p className="text-slate-600 text-lg">
              El valor del análisis no está en describir el problema, sino en convertirlo en una decisión que pueda ejecutarse y medirse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* 01 */}
            <div className="border border-slate-200 p-6 rounded-lg bg-slate-50">
              <span className="text-[10px] font-mono font-bold text-slate-400 block mb-2">01</span>
              <h3 className="text-sm font-bold text-rauvia-navy mb-2 uppercase tracking-wide">Definición del Problema</h3>
              <p className="text-sm text-slate-600">Qué está ocurriendo y por qué necesita atención.</p>
            </div>
            
            {/* 02 */}
            <div className="border border-slate-200 p-6 rounded-lg bg-slate-50">
              <span className="text-[10px] font-mono font-bold text-slate-400 block mb-2">02</span>
              <h3 className="text-sm font-bold text-rauvia-navy mb-2 uppercase tracking-wide">Mapa de Señales y Restricciones</h3>
              <p className="text-sm text-slate-600">Qué información respalda la situación y qué puede bloquearla.</p>
            </div>

            {/* 03 */}
            <div className="border border-rauvia-gold/30 p-6 rounded-lg bg-orange-50/50 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 w-16 h-16 bg-rauvia-gold/10 rounded-bl-full -z-10"></div>
              <span className="text-[10px] font-mono font-bold text-rauvia-gold block mb-2">03</span>
              <h3 className="text-sm font-bold text-rauvia-navy mb-2 uppercase tracking-wide">Prioridad Recomendada</h3>
              <p className="text-sm text-slate-600">Qué conviene resolver primero y con qué justificación.</p>
            </div>

            {/* 04 */}
            <div className="border border-slate-200 p-6 rounded-lg bg-slate-50">
              <span className="text-[10px] font-mono font-bold text-slate-400 block mb-2">04</span>
              <h3 className="text-sm font-bold text-rauvia-navy mb-2 uppercase tracking-wide">Escenarios y Riesgos</h3>
              <p className="text-sm text-slate-600">Qué puede ocurrir y qué condiciones deben vigilarse.</p>
            </div>

            {/* 05 */}
            <div className="border border-rauvia-blue/30 p-6 rounded-lg bg-blue-50/50 shadow-sm">
              <span className="text-[10px] font-mono font-bold text-rauvia-blue block mb-2">05</span>
              <h3 className="text-sm font-bold text-rauvia-navy mb-2 uppercase tracking-wide">Ruta de Acción</h3>
              <p className="text-sm text-slate-600">Qué debe hacerse, en qué orden y con qué responsables.</p>
            </div>

            {/* 06 */}
            <div className="border border-slate-200 p-6 rounded-lg bg-slate-50">
              <span className="text-[10px] font-mono font-bold text-slate-400 block mb-2">06</span>
              <h3 className="text-sm font-bold text-rauvia-navy mb-2 uppercase tracking-wide">Indicadores de Seguimiento</h3>
              <p className="text-sm text-slate-600">Cómo saber si la decisión comienza a producir avance.</p>
            </div>
          </div>
        </div>
      </section>
      </FadeInUp>

      {/* SECCIÓN 8 — EJEMPLO */}
      <FadeInUp>
      <section className="py-16 md:py-24 bg-rauvia-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-rauvia-gold uppercase mb-4 block">CASO DE USO</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
              UNA EMPRESA QUIERE CRECER,<br/>
              PERO TIENE TRES OPCIONES.
            </h2>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
            <div className="p-8 border-b border-slate-700">
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Situación</h3>
              <p className="text-lg font-medium">Invertir en marketing, contratar personal o automatizar su operación.</p>
            </div>
            
            <div className="p-8 border-b border-slate-700 bg-slate-800/50">
              <h3 className="text-xs font-bold tracking-widest text-rauvia-blue uppercase mb-2">Análisis AETHRYON</h3>
              <p className="text-slate-300">El análisis muestra que la empresa ya recibe demanda suficiente, pero su operación depende de tareas manuales y no puede absorber más trabajo sin aumentar errores y presión sobre el equipo.</p>
            </div>

            <div className="p-8 border-b border-slate-700 bg-slate-900 flex items-start gap-4">
              <Target className="w-6 h-6 text-rauvia-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xs font-bold tracking-widest text-rauvia-gold uppercase mb-2">Prioridad</h3>
                <p className="text-lg font-bold">Estructurar y automatizar el proceso operativo antes de aumentar la captación.</p>
              </div>
            </div>

            <div className="p-8 bg-blue-900/20">
              <h3 className="text-xs font-bold tracking-widest text-rauvia-blue uppercase mb-2">Resultado</h3>
              <p className="text-slate-200">La empresa evita invertir en crecimiento antes de contar con la capacidad necesaria para sostenerlo.</p>
            </div>
          </div>
        </div>
      </section>
      </FadeInUp>

      {/* SECCIÓN 9 — CUÁNDO UTILIZARLO */}
      <FadeInUp>
      <section className="py-16 md:py-24 bg-rauvia-bg border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 block">APLICACIÓN</span>
            <h2 className="text-3xl font-extrabold text-rauvia-navy">AETHRYON ES ÚTIL CUANDO...</h2>
          </div>

          <div className="space-y-3">
            {[
              "Quieres hacer crecer tu empresa, pero no sabes qué resolver primero.",
              "Tienes varias iniciativas compitiendo por tiempo y recursos.",
              "Detectaste una oportunidad, pero no sabes si el momento es adecuado.",
              "La empresa crece, pero también aumenta la complejidad.",
              "Necesitas justificar una decisión antes de invertir.",
              "Quieres convertir un problema ambiguo en una ruta clara.",
              "Necesitas distinguir entre una señal real y una percepción interna.",
              "Existen distintas opiniones y no hay un criterio común para decidir."
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-rauvia-blue flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInUp>

      {/* SECCIÓN 10 — RELACIÓN CON RAUVIA */}
      <FadeInUp>
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 block">DE LA DECISIÓN A LA EJECUCIÓN</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-rauvia-navy leading-tight mb-8">
            AETHRYON IDENTIFICA LA PRIORIDAD.<br/>
            <span className="text-rauvia-blue">RAUVIA CONSTRUYE LA SOLUCIÓN.</span>
          </h2>
          <p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
            El análisis define qué necesita atención y qué resultado debe buscarse. A partir de esa prioridad, RAUVIA puede diseñar e implementar el activo digital, sistema comercial, estructura operativa o solución tecnológica necesaria.
          </p>

          <div className="flex flex-col items-center justify-center max-w-lg mx-auto">
            {/* AETHRYON Block */}
            <div className="w-full bg-rauvia-navy text-white p-6 rounded-t-xl border-b border-slate-700">
              <span className="text-xs font-bold text-rauvia-gold uppercase tracking-wider block mb-1">AETHRYON</span>
              <span className="text-lg font-bold">Análisis y prioridad</span>
            </div>
            
            <div className="w-px h-8 bg-slate-300"></div>
            <ArrowRight className="w-4 h-4 text-slate-300 rotate-90 -mt-2 mb-2" />
            
            {/* Solución Block */}
            <div className="w-full bg-slate-50 border border-slate-200 p-6 rounded-lg relative z-10">
              <span className="text-xs font-bold text-rauvia-blue uppercase tracking-wider block mb-1">SOLUCIÓN RAUVIA</span>
              <span className="text-lg font-bold text-rauvia-navy">Activo, sistema o estructura</span>
            </div>
            
            <div className="w-px h-8 bg-slate-300"></div>
            <ArrowRight className="w-4 h-4 text-slate-300 rotate-90 -mt-2 mb-2" />
            
            {/* Ejecución Block */}
            <div className="w-full bg-white border border-slate-200 p-6 rounded-b-xl shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">IMPLEMENTACIÓN</span>
              <span className="text-lg font-bold text-rauvia-navy">Ejecución, medición y mejora</span>
            </div>
          </div>

          <div className="mt-12">
            <a href="/soluciones" className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-rauvia-navy px-6 py-3 rounded text-sm font-bold tracking-wider transition-all min-h-[52px]">
              CONOCER LAS SOLUCIONES
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      </FadeInUp>

      {/* SECCIÓN 11 — CIERRE (Footer integration takes care of this partially, but we add the specific CTA block here) */}
      <FadeInUp>
      <section className="bg-rauvia-navy-dark text-white pt-16 md:pt-24 pb-12 relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-12">
              NO NECESITAS TENER<br/>
              TODAS LAS RESPUESTAS.<br/>
              <span className="text-rauvia-blue mt-4 block">
                NECESITAS SABER<br/>
                CUÁL ES LA SIGUIENTE<br/>
                DECISIÓN CORRECTA.
              </span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/525586494076" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-rauvia-blue hover:bg-rauvia-blue/90 text-white px-8 py-4 rounded text-sm font-bold tracking-wider transition-all shadow-lg min-h-[52px] w-full sm:w-auto">
                ANALIZAR MI SITUACIÓN
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/525586494076" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 py-4 rounded text-sm font-bold tracking-wider transition-all min-h-[52px] w-full sm:w-auto">
                HABLAR CON RAUVIA
              </a>
            </div>
         </div>
      </section>
      </FadeInUp>

      <Footer variant="soluciones" /> {/* Reusing the layout that hides the big CTA in the footer itself since we just added it above */}
    </>
  );
}
