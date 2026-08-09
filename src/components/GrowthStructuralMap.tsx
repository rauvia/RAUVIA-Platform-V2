import { Link } from 'react-router';

export default function GrowthStructuralMap() {
  return (
    <Link 
      to="/aethryon" 
      className="block group cursor-pointer w-full max-w-6xl mx-auto px-4"
      title="Conocer más sobre AETHRYON"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1600 500" 
        role="img" 
        aria-labelledby="title desc"
        className="w-full h-auto object-contain drop-shadow-sm group-hover:scale-[1.01] transition-transform duration-300"
      >
        <title id="title">Mapa de Crecimiento Estructural - RAUVIA & AETHRYON</title>
        <desc id="desc">Mapa interactivo de crecimiento estructural en secuencia de 5 etapas.</desc>

        <defs>
          <filter id="softGlowMap" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#0B3A53" floodOpacity=".18"/>
          </filter>
          <filter id="goldGlowMap" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#F4B942" floodOpacity=".5"/>
          </filter>

          <style>
            {`
              .map-font { font-family: Inter, system-ui, sans-serif; }
              .stage-card { transition: transform 0.3s ease; }
              .stage-bg { fill: #FFFFFF; stroke: #E2E8F0; stroke-width: 2; transition: all 0.3s ease; }
              .stage-card:hover .stage-bg { stroke: #2563EB; fill: #F8FAFC; filter: url(#softGlowMap); }
            `}
          </style>
        </defs>

        {/* Background Grid & Wave */}
        <rect width="100%" height="100%" fill="#FFFFFF" rx="16"/>
        <path d="M 100 250 Q 400 150 800 250 T 1500 250" fill="none" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4"/>

        {/* Connecting Line */}
        <line x1="200" y1="230" x2="1400" y2="230" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="8 8"/>

        {/* Stage 1 */}
        <g className="stage-card" transform="translate(100, 140)">
          <rect width="220" height="180" rx="16" className="stage-bg"/>
          <circle cx="110" cy="50" r="26" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1.5"/>
          <polygon points="110,34 123,42 123,58 110,66 97,58 97,42" fill="#0B3A53" stroke="#F4B942" strokeWidth="1.5"/>
          <text x="110" y="105" textAnchor="middle" fontSize="12" fontWeight="700" fill="#64748B" className="map-font">ETAPA 01</text>
          <text x="110" y="125" textAnchor="middle" fontSize="16" fontWeight="800" fill="#0F172A" className="map-font">Frente Comercial</text>
          <text x="110" y="145" textAnchor="middle" fontSize="12" fill="#475569" className="map-font">Captación y Diagnóstico</text>
        </g>

        {/* Stage 2 */}
        <g className="stage-card" transform="translate(400, 140)">
          <rect width="220" height="180" rx="16" className="stage-bg"/>
          <circle cx="110" cy="50" r="26" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1.5"/>
          <polygon points="110,34 123,42 123,58 110,66 97,58 97,42" fill="#0B3A53" stroke="#F4B942" strokeWidth="1.5"/>
          <text x="110" y="105" textAnchor="middle" fontSize="12" fontWeight="700" fill="#64748B" className="map-font">ETAPA 02</text>
          <text x="110" y="125" textAnchor="middle" fontSize="16" fontWeight="800" fill="#0F172A" className="map-font">Ruta 90</text>
          <text x="110" y="145" textAnchor="middle" fontSize="12" fill="#475569" className="map-font">Plan de Ejecución Ágil</text>
        </g>

        {/* Stage 3 (AETHRYON Core Highlighted) */}
        <g className="stage-card" transform="translate(700, 125)">
          <rect width="220" height="210" rx="16" fill="#0B3A53" stroke="#F4B942" strokeWidth="2.5" filter="url(#softGlowMap)"/>
          <circle cx="110" cy="55" r="32" fill="#1E293B" stroke="#F4B942" strokeWidth="2" filter="url(#goldGlowMap)"/>
          <polygon points="110,37 127,47 127,67 110,77 93,67 93,47" fill="#0B3A53" stroke="#F4B942" strokeWidth="2"/>
          <text x="110" y="115" textAnchor="middle" fontSize="12" fontWeight="800" fill="#F4B942" className="map-font">ETAPA 03 • NÚCLEO</text>
          <text x="110" y="140" textAnchor="middle" fontSize="18" fontWeight="800" fill="#FFFFFF" className="map-font">AETHRYON</text>
          <text x="110" y="162" textAnchor="middle" fontSize="12" fill="#94A3B8" className="map-font">Arquitectura Directiva</text>
          <text x="110" y="182" textAnchor="middle" fontSize="11" fontWeight="600" fill="#38BDF8" className="map-font">Ver interactivo →</text>
        </g>

        {/* Stage 4 */}
        <g className="stage-card" transform="translate(1000, 140)">
          <rect width="220" height="180" rx="16" className="stage-bg"/>
          <circle cx="110" cy="50" r="26" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1.5"/>
          <polygon points="110,34 123,42 123,58 110,66 97,58 97,42" fill="#0B3A53" stroke="#F4B942" strokeWidth="1.5"/>
          <text x="110" y="105" textAnchor="middle" fontSize="12" fontWeight="700" fill="#64748B" className="map-font">ETAPA 04</text>
          <text x="110" y="125" textAnchor="middle" fontSize="16" fontWeight="800" fill="#0F172A" className="map-font">Sistema Comercial</text>
          <text x="110" y="145" textAnchor="middle" fontSize="12" fill="#475569" className="map-font">Automatización y Escala</text>
        </g>

        {/* Stage 5 */}
        <g className="stage-card" transform="translate(1280, 140)">
          <rect width="220" height="180" rx="16" className="stage-bg"/>
          <circle cx="110" cy="50" r="26" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1.5"/>
          <polygon points="110,34 123,42 123,58 110,66 97,58 97,42" fill="#0B3A53" stroke="#F4B942" strokeWidth="1.5"/>
          <text x="110" y="105" textAnchor="middle" fontSize="12" fontWeight="700" fill="#64748B" className="map-font">ETAPA 05</text>
          <text x="110" y="125" textAnchor="middle" fontSize="16" fontWeight="800" fill="#0F172A" className="map-font">Growth Partner</text>
          <text x="110" y="145" textAnchor="middle" fontSize="12" fill="#475569" className="map-font">Consolidación y Dirección</text>
        </g>
      </svg>
    </Link>
  );
}
