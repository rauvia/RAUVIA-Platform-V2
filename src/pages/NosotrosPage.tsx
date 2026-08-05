import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, ShieldCheck, Target, Layers, Settings, BarChart3, TrendingUp, Hexagon } from 'lucide-react';
import FadeInUp from '../components/FadeInUp';
import Footer from '../components/Footer';

export default function NosotrosPage() {
  return (
    <>
      <Helmet>
        <title>RAUVIA Consulting | Nosotros</title>
        <meta name="description" content="RAUVIA es una firma de consultoría y desarrollo tecnológico que conecta estrategia, procesos, tecnología y ejecución." />
      </Helmet>

      {/* SECCIÓN 1 — HERO */}
      <section className="pt-32 pb-20 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-10">
          <div className="w-[800px] h-[800px] border border-slate-300 rounded-full"></div>
          <div className="absolute w-[600px] h-[600px] border border-slate-300 rounded-full"></div>
        </div>
        
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 xl:col-span-5 space-y-6 relative z-20">
              <div className="inline-block">
                <span className="text-xs font-bold tracking-widest text-rauvia-blue uppercase">
                  RAUVIA CONSULTING
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-rauvia-navy leading-[1.1]">
                CONSTRUIMOS LA ESTRUCTURA <br/>
                QUE PERMITE A LAS EMPRESAS <br/>
                <span className="text-rauvia-blue">CRECER CON CLARIDAD</span><span className="text-rauvia-gold">.</span>
              </h1>
              
              <p className="text-slate-600 text-base xl:text-lg max-w-md">
                RAUVIA es una firma de consultoría y desarrollo tecnológico que conecta estrategia, procesos, tecnología y ejecución para transformar capacidades dispersas en sistemas que generan resultados.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                   href="https://wa.me/525586494076" 
                   target="_blank" 
                   rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-rauvia-navy hover:bg-rauvia-navy-dark text-white px-5 py-3 rounded text-xs xl:text-sm font-semibold tracking-wide transition-all shadow-lg shadow-rauvia-navy/20 min-h-[52px]"
                >
                  HABLAR CON RAUVIA
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button className="flex items-center justify-center gap-2 text-rauvia-navy hover:text-rauvia-blue px-4 py-3 rounded text-xs xl:text-sm font-semibold tracking-wide transition-all whitespace-nowrap min-h-[52px]">
                  <PlayCircle className="w-5 h-5 text-rauvia-blue" />
                  CONOCER CÓMO TRABAJAMOS
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 xl:col-span-7 flex justify-center relative z-0 mt-12 lg:mt-0">
               {/* Hero Custom Graphic */}
               <div className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center">
                 <div className="absolute inset-0 flex items-center justify-between px-8 lg:px-12">
                   <div className="flex flex-col gap-8 opacity-40">
                     <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
                     <div className="w-4 h-4 bg-slate-400 rounded-full ml-8"></div>
                     <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
                   </div>
                   <div className="h-[2px] w-1/4 bg-slate-300"></div>
                   <div className="w-16 h-16 border-2 border-rauvia-blue rounded flex items-center justify-center text-rauvia-blue font-mono text-xs">
                     ANÁLISIS
                   </div>
                   <div className="h-[2px] w-1/4 bg-slate-300"></div>
                   <div className="w-20 h-20 bg-rauvia-navy rounded-xl flex items-center justify-center">
                      <Hexagon className="w-10 h-10 text-rauvia-gold" strokeWidth={1.5} />
                   </div>
                   <div className="h-[2px] w-1/4 bg-slate-300"></div>
                   <div className="w-24 h-24 bg-white border border-slate-200 shadow-xl rounded-lg flex items-center justify-center flex-col">
                      <span className="text-[10px] font-bold text-slate-400 mb-1">RESULTADO</span>
                      <Target className="w-8 h-8 text-rauvia-blue" />
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — ORIGEN DEL PROBLEMA */}
      <FadeInUp>
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-rauvia-navy leading-tight mb-6">
                LAS EMPRESAS NO SIEMPRE CARECEN DE CAPACIDAD.<br/>
                <span className="text-rauvia-blue">CON FRECUENCIA CARECEN DE ESTRUCTURA.</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-base lg:text-lg leading-relaxed">
                <p>Muchas organizaciones tienen conocimiento, clientes, experiencia y oportunidades.</p>
                <p>Sin embargo, sus capacidades permanecen separadas: la estrategia no llega a la operación, los procesos dependen de personas específicas, la tecnología se incorpora sin una arquitectura común y el crecimiento aumenta la complejidad.</p>
                <p className="font-semibold text-rauvia-navy">RAUVIA nace para intervenir en ese punto.</p>
              </div>
            </div>

            <div className="flex justify-center">
              {/* Visual Origen */}
              <div className="relative w-full max-w-md aspect-square bg-slate-50 rounded-full border border-slate-200 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full border border-slate-300 border-dashed animate-spin-slow"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-full border border-slate-300 animate-spin-reverse-slow"></div>
                </div>
                
                <div className="absolute top-10 left-1/4 w-3 h-3 bg-slate-400 rounded-full"></div>
                <div className="absolute bottom-12 right-1/4 w-3 h-3 bg-slate-400 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-3 h-3 bg-slate-400 rounded-full"></div>
                
                <div className="relative z-10 w-32 h-32 bg-rauvia-navy rounded-full flex items-center justify-center text-white text-center shadow-2xl">
                  <span className="text-xs font-bold tracking-widest leading-tight">SISTEMA<br/>OPERATIVO</span>
                </div>
                
                {/* Converging lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                  <line x1="25" y1="10" x2="50" y2="50" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="75" y1="88" x2="50" y2="50" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="4" y1="50" x2="50" y2="50" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>
      </FadeInUp>

      {/* SECCIÓN 3 — QUÉ HACE RAUVIA */}
      <FadeInUp>
      <section className="py-24 bg-rauvia-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-rauvia-navy leading-tight">
              NO CONECTAMOS HERRAMIENTAS.<br/>
              <span className="text-rauvia-blue">CONECTAMOS CAPACIDADES.</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Connectors */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-slate-200 -translate-y-1/2"></div>
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
            
            {/* Core */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-slate-200 rounded-full items-center justify-center z-10 shadow-sm">
              <Hexagon className="w-6 h-6 text-rauvia-gold" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {[
                { title: 'ESTRATEGIA', desc: 'Define dirección, prioridades y decisiones.' },
                { title: 'PROCESOS', desc: 'Convierte conocimiento y experiencia en una forma repetible de operar.' },
                { title: 'TECNOLOGÍA', desc: 'Construye activos e infraestructura que sostienen la ejecución.' },
                { title: 'MEDICIÓN', desc: 'Hace visible el desempeño y permite decidir con evidencia.' }
              ].map((item, i) => (
                <div key={i} className="relative z-20 bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
                  <div className="text-xs font-bold text-slate-300 mb-2 font-mono">0{i+1}</div>
                  <h3 className="text-lg font-bold text-rauvia-navy mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </FadeInUp>

      {/* SECCIÓN 4 — FORMA DE TRABAJO */}
      <FadeInUp>
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-rauvia-navy leading-tight mb-6">
              DE LA AMBIGÜEDAD A<br/>
              <span className="text-rauvia-blue">UN SISTEMA EJECUTABLE.</span>
            </h2>
            <p className="text-slate-600 max-w-2xl text-base lg:text-lg leading-relaxed">
              No comenzamos por una herramienta ni por una solución predeterminada. Comenzamos por entender qué está impidiendo que la empresa avance, qué capacidades ya existen y qué estructura debe construirse para convertirlas en resultados.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal line desktop */}
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-slate-200"></div>
            {/* Vertical line mobile */}
            <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-slate-200"></div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between relative z-10">
              {['Comprender', 'Delimitar', 'Diseñar', 'Construir', 'Implementar', 'Medir'].map((step, idx) => (
                <div key={idx} className="group relative flex lg:flex-col items-center lg:items-start gap-4 lg:gap-6 pl-4 lg:pl-0 cursor-pointer w-full lg:w-[15%]">
                  <div className="w-4 h-4 bg-white border-2 border-slate-300 rounded-full group-hover:border-rauvia-blue group-hover:scale-125 transition-all z-10 flex-shrink-0 relative -left-[1.35rem] lg:left-0 lg:mx-auto"></div>
                  <div>
                    <div className="text-rauvia-gold font-mono text-xs font-bold mb-1">0{idx + 1}</div>
                    <div className="font-bold text-slate-700 group-hover:text-rauvia-navy transition-colors text-sm uppercase tracking-wider">{step}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </FadeInUp>

      {/* SECCIÓN 5 — PRINCIPIOS */}
      <FadeInUp>
      <section className="py-24 bg-rauvia-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-16 text-center tracking-tight">PRINCIPIOS DE TRABAJO</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'CLARIDAD ANTES QUE COMPLEJIDAD', desc: 'Una solución debe poder comprenderse antes de poder ejecutarse.', icon: 'M4 4h16v16H4z M10 10h4v4h-4z' },
              { title: 'ESTRUCTURA ANTES QUE ESCALA', desc: 'Crecer sin estructura aumenta fricción, dependencia y costo.', icon: 'M4 20h16v-4H4z M8 12h8v-4H8z M10 4h4v4h-4z' },
              { title: 'TECNOLOGÍA CON PROPÓSITO', desc: 'La tecnología debe resolver una necesidad operativa concreta.', icon: 'M12 4L4 20h16z M12 12v4' },
              { title: 'EVIDENCIA ANTES QUE CERTEZA ARTIFICIAL', desc: 'Diferenciamos hechos, hipótesis e inferencias antes de recomendar una decisión.', icon: 'M12 22A10 10 0 10 12 2a10 10 0 000 20z M12 6v6l4 2' },
              { title: 'EJECUCIÓN SOBRE PRESENTACIÓN', desc: 'Un diagnóstico solo tiene valor cuando puede convertirse en una ruta de acción.', icon: 'M5 12l5 5L20 7' }
            ].map((p, i) => (
              <div key={i} className="p-8 border border-slate-700 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors">
                <svg className="w-8 h-8 text-rauvia-gold mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d={p.icon} />
                </svg>
                <h3 className="text-sm font-bold tracking-widest text-slate-200 mb-3 uppercase leading-relaxed">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInUp>

      {/* SECCIÓN 6 — AETHRYON */}
      <FadeInUp>
      <section className="py-24 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest text-rauvia-gold uppercase block mb-6">NÚCLEO DE INTELIGENCIA ESTRATÉGICA</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-rauvia-navy leading-tight mb-6">
                AETHRYON HACE VISIBLE<br/>
                LO QUE UNA ORGANIZACIÓN<br/>
                <span className="text-rauvia-blue">NECESITA CONECTAR.</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
                <p>AETHRYON es el sistema de análisis y convergencia desarrollado por RAUVIA para interpretar señales, identificar fricción, evaluar oportunidades y estructurar decisiones ejecutables.</p>
                <p>No sustituye la experiencia directiva.</p>
                <p>La organiza, la contrasta y la convierte en una arquitectura de acción.</p>
              </div>
              <Link to="/aethryon" className="inline-flex items-center gap-2 text-rauvia-navy hover:text-rauvia-blue font-bold tracking-wider text-sm transition-colors uppercase">
                CONOCER AETHRYON <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex justify-center relative">
               <Link to="/aethryon" className="w-full max-w-lg block group cursor-pointer" title="Conocer más sobre AETHRYON">
                 <img src="/media/aethryon-convergence-animated.svg" alt="AETHRYON" className="w-full object-contain group-hover:scale-[1.01] transition-transform" />
               </Link>
            </div>
          </div>
        </div>
      </section>
      </FadeInUp>

      {/* SECCIÓN 7 — FUNDADOR */}
      <FadeInUp>
      <section className="py-24 bg-rauvia-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-rauvia-navy leading-tight mb-6">
              RAUVIA FUE CONSTRUIDA DESDE LA INTERSECCIÓN ENTRE <span className="text-rauvia-blue">NEGOCIO, OPERACIÓN Y TECNOLOGÍA.</span>
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>RAUVIA fue fundada por Raúl Morales, consultor estratégico con experiencia en análisis de negocio, transformación digital, arquitectura funcional y ejecución operativa.</p>
              <p>Su formación combina ingeniería, dirección de organizaciones, análisis de negocio, innovación y desarrollo tecnológico.</p>
              <p>Esta combinación define la forma de trabajo de RAUVIA: comprender el negocio, modelar el sistema y acompañar su implementación.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'INGENIERÍA', desc: 'Pensamiento sistémico y resolución estructurada.' },
              { title: 'DIRECCIÓN', desc: 'Estrategia, organización y toma de decisiones.' },
              { title: 'TECNOLOGÍA', desc: 'Arquitectura funcional y desarrollo de activos digitales.' },
              { title: 'EJECUCIÓN', desc: 'Implementación en operaciones y proyectos reales.' }
            ].map((b, i) => (
              <div key={i} className="bg-white p-6 border border-slate-100 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-rauvia-blue rounded-full"></div>
                </div>
                <h3 className="text-sm font-bold text-rauvia-navy uppercase tracking-widest mb-2">{b.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInUp>

      {/* SECCIÓN 8 — RELACIÓN CON EL CLIENTE */}
      <FadeInUp>
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 flex flex-col sm:flex-row gap-8 justify-center">
              {/* Antes */}
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 flex-1 text-center flex flex-col items-center">
                <div className="text-xs font-bold tracking-widest text-slate-400 mb-6 uppercase">Antes</div>
                <div className="flex gap-2 justify-center mb-6 opacity-40">
                  <div className="w-6 h-6 border-2 border-slate-400 rounded"></div>
                  <div className="w-6 h-6 border-2 border-slate-400 rounded-full"></div>
                  <div className="w-6 h-6 border-2 border-slate-400 rotate-45"></div>
                </div>
                <div className="text-sm font-medium text-slate-600">Dependencia,<br/>dispersión y fricción.</div>
              </div>
              
              {/* Después */}
              <div className="bg-white p-8 rounded-xl border border-rauvia-blue/30 shadow-lg flex-1 text-center flex flex-col items-center relative">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-rauvia-blue hidden sm:block">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold tracking-widest text-rauvia-blue mb-6 uppercase">Después</div>
                <div className="flex gap-2 justify-center mb-6">
                  <div className="w-6 h-6 bg-rauvia-navy rounded"></div>
                  <div className="w-6 h-6 bg-rauvia-navy rounded"></div>
                  <div className="w-6 h-6 bg-rauvia-navy rounded"></div>
                </div>
                <div className="text-sm font-bold text-rauvia-navy">Claridad, transferencia<br/>y medición.</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-rauvia-navy leading-tight mb-6">
                NO BUSCAMOS CONVERTIRNOS<br/>
                <span className="text-rauvia-blue">EN OTRA CAPA DE COMPLEJIDAD.</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>Trabajamos con dueños y equipos directivos que necesitan resolver un problema visible, construir una capacidad específica o preparar a la organización para una siguiente etapa.</p>
                <p>Cada intervención debe dejar una estructura más clara, transferible y medible que la que existía al comenzar.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      </FadeInUp>
      <FadeInUp>
        <Footer variant="nosotros" />
      </FadeInUp>
    </>
  );
}
