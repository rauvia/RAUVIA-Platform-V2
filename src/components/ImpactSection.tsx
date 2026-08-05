import React from 'react';

export default function ImpactSection() {
  const metrics = [
    { num: "+25", label: "SISTEMAS\nDESARROLLADOS" },
    { num: "+12", label: "INDUSTRIAS\nATENDIDAS" },
    { num: "+98%", label: "CLIENTES\nSATISFECHOS" },
    { num: "100%", label: "ENFOQUE EN\nRESULTADOS" }
  ];

  return (
    <section className="bg-rauvia-bg border-t border-slate-100 relative overflow-hidden w-full">
      {/* Desktop SVG */}
      <div className="hidden lg:flex w-full justify-center">
         <img src="/media/rauvia-impact-section.svg" alt="Impact Graphic" className="w-full h-auto object-cover" />
      </div>

      {/* Mobile HTML Version */}
      <div className="lg:hidden w-full px-4 sm:px-6 py-20 bg-white">
        <div className="max-w-md mx-auto">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-widest text-rauvia-blue uppercase block">
              IMPACTO QUE GENERAMOS
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-12">
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-4xl sm:text-5xl font-black text-rauvia-navy mb-3 tracking-tight">
                  {metric.num}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest whitespace-pre-line leading-relaxed">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
