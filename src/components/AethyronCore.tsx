import { Link } from 'react-router-dom';

export default function AethyronCore() {
  const coreFeatures = [
    { num: "01", title: "ESTRATEGIA", desc: "Claridad, foco y dirección" },
    { num: "02", title: "PROCESOS", desc: "Estructura clara y escalable" },
    { num: "03", title: "TECNOLOGÍA", desc: "Plataformas que funcionan" },
    { num: "04", title: "OPERACIÓN", desc: "Eficiencia diaria" },
    { num: "05", title: "RESULTADOS", desc: "Crecimiento medible" },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Container slightly shifted left on desktop to balance the right-labels in SVG. On mobile, we use a negative margin to center it since we hid the right labels in SVG. */}
      <Link to="/aethryon" className="w-full h-[400px] sm:h-[450px] lg:h-[550px] xl:h-[700px] relative flex items-center justify-center lg:justify-start xl:justify-center -ml-16 sm:-ml-24 lg:-ml-0 group cursor-pointer" title="Conocer más sobre AETHRYON">
        <img 
           src="/media/aethryon-convergence-animated.svg" 
           alt="Aethyron Core" 
           className="w-[150%] max-w-none lg:w-full h-full object-contain object-left lg:object-center group-hover:scale-[1.01] transition-transform"
        />
      </Link>

      {/* Mobile Vertical List */}
      <div className="w-full lg:hidden flex flex-col gap-4 mt-8 px-4">
        {coreFeatures.map((item, idx) => (
          <div key={idx} className="glass-card bg-white/90 border border-slate-100 rounded-lg p-4 flex items-center gap-4 shadow-sm active:scale-[0.98] transition-transform">
            <div className="text-xl font-black text-rauvia-blue">{item.num}</div>
            <div>
              <div className="text-sm font-bold text-rauvia-navy tracking-wide uppercase">{item.title}</div>
              <div className="text-xs text-slate-500">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
