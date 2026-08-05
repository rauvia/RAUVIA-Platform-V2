import { useState } from "react";
import { ArrowRight, PlayCircle, ShieldCheck, Clock, MonitorSmartphone, Target, ChevronDown } from "lucide-react";
import AethyronCore from "./AethyronCore";

export default function HeroSection() {
  const [isFichaExpanded, setIsFichaExpanded] = useState(false);

  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden relative">
      {/* Background decoration lines (simplified) */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-10">
        <div className="w-[800px] h-[800px] border border-slate-300 rounded-full"></div>
        <div className="absolute w-[600px] h-[600px] border border-slate-300 rounded-full"></div>
      </div>

      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6 relative z-20 order-1">
            <div className="inline-block">
              <span className="text-xs font-bold tracking-widest text-rauvia-blue uppercase">
                Consultoría & Desarrollo Tecnológico
              </span>
            </div>
            
            <h1 
              className="font-extrabold tracking-tight text-rauvia-navy leading-[1.1]"
              style={{ fontSize: "clamp(2.2rem, 9vw, 4.2rem)", letterSpacing: "-0.02em" }}
            >
              CONSTRUIMOS LA ESTRUCTURA <br />
              QUE PERMITE A LAS EMPRESAS <br />
              <span className="text-rauvia-blue">CRECER.</span>
            </h1>
            
            <p className="text-slate-600 text-base xl:text-lg max-w-sm">
              Diseñamos activos digitales, sistemas comerciales y estructuras operativas para empresas que necesitan crecer con claridad y control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                 href="https://wa.me/525586494076" 
                 target="_blank" 
                 rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-rauvia-navy hover:bg-rauvia-navy-dark text-white px-5 py-4 sm:py-3 rounded text-sm sm:text-xs xl:text-sm font-semibold tracking-wide transition-all shadow-lg shadow-rauvia-navy/20 min-h-[52px]"
              >
                CONOCER NUESTROS PRODUCTOS
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-rauvia-navy hover:text-rauvia-blue px-4 py-4 sm:py-3 rounded text-sm sm:text-xs xl:text-sm font-semibold tracking-wide transition-all whitespace-nowrap min-h-[52px]">
                <PlayCircle className="w-5 h-5 text-rauvia-blue" />
                CÓMO TRABAJAMOS
              </button>
            </div>
          </div>

          {/* Center Column: 3D Canvas */}
          <div className="lg:col-span-7 xl:col-span-5 flex flex-col items-center justify-center relative z-0 order-2">
             <AethyronCore />
          </div>

          {/* Right Column: Pricing Card */}
          <div className="lg:col-span-12 xl:col-span-3 flex justify-center lg:justify-end relative z-20 order-3 xl:order-3">
            <div className="glass-card rounded-xl p-6 xl:p-8 w-full max-w-md xl:max-w-sm border-t-4 border-t-rauvia-navy bg-white/90 backdrop-blur shadow-2xl">
              
              <div className="flex justify-between items-center mb-6 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2 text-slate-500">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-widest uppercase">Activo Principal</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">V 1.0</span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-rauvia-navy leading-tight mb-2">FRENTE COMERCIAL ESENCIAL</h2>
              <p className="text-slate-600 text-sm mb-6 lg:mb-8">Sitio comercial profesional para pequeñas empresas.</p>
              
              <div className="mb-6 lg:mb-8">
                <span className="text-xs font-bold text-slate-500 tracking-widest uppercase block mb-1">Inversión Única</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-rauvia-gold font-bold text-4xl">$9,900</span>
                  <span className="text-rauvia-navy font-bold text-sm">MXN</span>
                </div>
              </div>

              {/* Desktop Always Visible / Mobile Accordion */}
              <div className={`${isFichaExpanded ? 'block' : 'hidden'} lg:block`}>
                <ul className="space-y-4 mb-8 text-sm">
                  <li className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-rauvia-blue shrink-0" />
                    <div>
                      <span className="text-slate-900 font-semibold uppercase text-xs tracking-wider block">Entrega</span>
                      <span className="text-slate-600">10 días hábiles</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MonitorSmartphone className="w-5 h-5 text-rauvia-blue shrink-0" />
                    <div>
                      <span className="text-slate-900 font-semibold uppercase text-xs tracking-wider block">Páginas</span>
                      <span className="text-slate-600">Hasta 4 páginas profesionales</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Target className="w-5 h-5 text-rauvia-blue shrink-0" />
                    <div>
                      <span className="text-slate-900 font-semibold uppercase text-xs tracking-wider block">Integración</span>
                      <span className="text-slate-600">WhatsApp Business</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ShieldCheck className="w-5 h-5 text-rauvia-blue shrink-0" />
                    <div>
                      <span className="text-slate-900 font-semibold uppercase text-xs tracking-wider block">Incluye</span>
                      <span className="text-slate-600">Dominio, SEO & Analytics</span>
                    </div>
                  </li>
                </ul>
                <a 
                   href="https://wa.me/525586494076" 
                   target="_blank" 
                   rel="noopener noreferrer"
                  className="w-full py-4 text-sm font-bold bg-rauvia-navy text-white rounded hover:bg-rauvia-navy-dark transition-colors flex items-center justify-center gap-2"
                >
                  CONTRATAR AHORA
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Mobile Accordion Toggle */}
              <button 
                className="w-full py-4 text-sm font-bold text-rauvia-navy hover:text-rauvia-blue transition-colors flex lg:hidden items-center justify-center gap-2 border-t border-slate-200 mt-2"
                onClick={() => setIsFichaExpanded(!isFichaExpanded)}
                aria-expanded={isFichaExpanded}
              >
                {isFichaExpanded ? 'OCULTAR FICHA TÉCNICA' : 'VER FICHA TÉCNICA'}
                <ChevronDown className={`w-4 h-4 transition-transform ${isFichaExpanded ? 'rotate-180' : ''}`} />
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
