import Logo from "./Logo";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FooterProps {
  variant?: 'home' | 'nosotros' | 'soluciones';
}

export default function Footer({ variant = 'home' }: FooterProps) {
  const isHome = variant === 'home';
  const isNosotros = variant === 'nosotros';
  const isSoluciones = variant === 'soluciones';
  
  return (
    <footer className="bg-rauvia-navy-dark text-white relative overflow-hidden flex flex-col min-h-[100svh] justify-between">
      
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 overflow-hidden">
         <Link to="/aethryon" className="absolute inset-0 block group cursor-pointer" title="Conocer más sobre AETHRYON">
           <img 
               src="/media/aethryon-end-screen-blueprint.svg" 
               alt="AETHRYON Blueprint" 
               className={`w-[200%] h-[200%] md:w-full md:h-full object-cover object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-[1.01] transition-transform ${isHome ? 'opacity-40 md:opacity-100' : 'opacity-20 md:opacity-50'}`}
           />
         </Link>
      </div>

      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 md:pt-32 pb-16 relative z-10 flex-grow flex flex-col justify-center">
        
        {isHome ? (
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full">
            {/* Left Text / Main Message */}
            <div className="w-full lg:col-span-5 xl:col-span-4 order-1 lg:order-none text-center lg:text-left">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug text-slate-300">
                No conectamos herramientas.<br className="hidden sm:block"/>
                Conectamos estrategia,<br className="hidden sm:block"/>
                procesos, tecnología y personas<br className="hidden sm:block"/>
                en un sistema <span className="text-rauvia-gold font-bold">que genera resultados.</span>
              </p>
            </div>

            {/* Spacer */}
            <div className="w-full h-48 lg:h-auto lg:col-span-2 xl:col-span-4 order-2 lg:order-none flex justify-center items-center">
            </div>

            {/* Right Text / Definition & CTA */}
            <div className="w-full lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 border-t lg:border-t-0 lg:border-l border-slate-700/50 pt-8 lg:pt-0 lg:pl-10 order-3 lg:order-none">
              <div>
                <span className="text-rauvia-gold font-bold tracking-widest text-sm uppercase block mb-3">AETHYRON</span>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
                  El núcleo que transforma capacidad en estructura y estructura en crecimiento.
                </p>
              </div>
              <a 
                href="https://wa.me/525586494076" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-white hover:bg-slate-200 text-rauvia-navy-dark px-8 py-4 rounded text-sm font-bold tracking-wider transition-all min-h-[52px] w-full sm:w-auto"
              >
                INICIAR CONVERSACIÓN
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              {isSoluciones ? (
                <>
                  NO TODAS LAS EMPRESAS NECESITAN<br/>
                  EL MISMO ACTIVO.<br/>
                  <span className="text-rauvia-blue mt-4 block">
                    PERO TODAS NECESITAN<br/>
                    UNA ESTRUCTURA.
                  </span>
                </>
              ) : (
                <>
                  EL CRECIMIENTO NO COMIENZA<br/>
                  CON MÁS HERRAMIENTAS.<br/>
                  <span className="text-rauvia-blue mt-4 block">
                    COMIENZA CON UNA ESTRUCTURA<br/>
                    QUE PUEDA SOSTENERLO.
                  </span>
                </>
              )}
            </h2>
            <a 
              href="https://wa.me/525586494076" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-rauvia-blue hover:bg-rauvia-blue/90 text-white px-8 py-4 rounded text-sm font-bold tracking-wider transition-all min-h-[52px] w-full sm:w-auto shadow-lg shadow-rauvia-blue/20"
            >
              HABLAR CON RAUVIA
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}

      </div>

      {/* Bottom Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-8 relative z-10">
        <div className="max-w-[1600px] mx-auto flex flex-col md:grid md:grid-cols-3 items-center gap-8 md:gap-6 pt-8 border-t border-slate-800">
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <Logo variant="footer" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 order-1 md:order-2">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs tracking-wider uppercase transition-colors">Aviso de Privacidad</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs tracking-wider uppercase transition-colors">Términos</a>
          </div>
          <div className="flex justify-center md:justify-end text-center md:text-right order-3 md:order-3">
            <span className="text-slate-600 text-[10px] sm:text-xs font-mono">
              {isHome ? '© 2026 RAUVIA CONSULTORIA Y DESARROLLO TECNOLÓGICO S.A.S. DE C.V.' : 'RAUVIA Consulting © 2026'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
