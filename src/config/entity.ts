export const ENTITIES = {
  organization: {
    "@id": "https://rauvia.com.mx/#organization",
    name: "RAUVIA",
    legalName: "RAUVIA CONSULTORIA Y DESARROLLO TECNOLOGICO",
    url: "https://rauvia.com.mx",
    logo: "https://rauvia.com.mx/media/RAUVIA_CONSULTING_LOGO.png",
    description: "Firma mexicana de consultoría estratégica y desarrollo tecnológico que diseña sistemas comerciales, estructuras operativas y activos digitales para empresas que necesitan crecer con mayor claridad, control y capacidad de ejecución.",
    sameAs: [
      // "https://www.linkedin.com/company/rauvia" // Pendiente de validación oficial (Acción Manual)
    ]
  },
  website: {
    "@id": "https://rauvia.com.mx/#website",
    name: "RAUVIA",
    url: "https://rauvia.com.mx"
  },
  founder: {
    "@id": "https://rauvia.com.mx/#founder",
    name: "Raúl Morales",
    jobTitle: "Fundador y Consultor Estratégico",
    url: "https://rauvia.com.mx/nosotros",
    sameAs: [
      // "https://www.linkedin.com/in/raul-morales-rauvia" // Pendiente de validación (Acción Manual)
    ]
  },
  system: {
    "@id": "https://rauvia.com.mx/aethryon/#entity",
    name: "AETHRYON",
    description: "Sistema de análisis y convergencia desarrollado por RAUVIA para estructurar decisiones.",
    url: "https://rauvia.com.mx/aethryon"
  }
};

export const RAUVIA_ENTITY = ENTITIES.organization;
export const AETHRYON_ENTITY = ENTITIES.system;
