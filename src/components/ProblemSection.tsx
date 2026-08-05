import { Database, Workflow, HelpCircle } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      title: "INFORMACIÓN DISPERSA",
      description: "Los datos existen, pero no están conectados ni organizados.",
      icon: <Database className="w-8 h-8 text-rauvia-blue" />
    },
    {
      title: "PROCESOS FRAGMENTADOS",
      description: "Cada área trabaja distinto, sin una estructura común que permita escalar.",
      icon: <Workflow className="w-8 h-8 text-rauvia-blue" />
    },
    {
      title: "DECISIONES SIN CLARIDAD",
      description: "Sin visibilidad en métricas confiables, es imposible tomar mejores decisiones.",
      icon: <HelpCircle className="w-8 h-8 text-rauvia-blue" />
    }
  ];

  return (
    <section className="bg-white border-y border-slate-100 relative overflow-hidden w-full" id="problema">
      {/* Desktop SVG */}
      <div className="hidden lg:flex w-full justify-center">
         <img src="/media/rauvia-problem-section-interactive-centered.svg" alt="Problema Graphic" className="w-full h-auto object-cover" />
      </div>

      {/* Mobile HTML Version */}
      <div className="lg:hidden max-w-md mx-auto px-4 sm:px-6 py-20">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest text-rauvia-blue uppercase block mb-6">
            EL PROBLEMA
          </span>
          <h2 className="text-3xl font-extrabold text-rauvia-navy leading-tight">
            Muchas empresas <br/> tienen capacidades. <br/>
            <span className="text-rauvia-blue">Pocas las convierten <br/> en resultados.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {problems.map((problem, idx) => (
            <div 
              key={idx} 
              className="glass-card bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col items-center text-center hover:shadow-lg hover:border-rauvia-blue/30 transition-all cursor-pointer active:scale-[0.98]"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 shadow-inner">
                {problem.icon}
              </div>
              <h3 className="text-lg font-bold text-rauvia-navy mb-4 tracking-wide uppercase">
                {problem.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
