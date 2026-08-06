# Auditoría Editorial Inicial - RAUVIA Consulting (Fase 3)

## Estado Actual
- **Blog / Recursos:** Se asume gestionado vía WordPress (`/wp-json/wp/v2/posts`). Actualmente el sitemap solo mapea posts con `status=publish`.
- **Falta de Pilares:** La página web tiene páginas corporativas transaccionales sólidas (Home, Soluciones, Nosotros, Aethryon), pero carece de un índice editorial nativo fuerte en el frontend de React.
- **llms.txt:** La versión actual es un resumen fundacional, no contiene resúmenes editoriales de profundidad o glosario.
- **Riesgo P1 (Fragmentación):** Si los artículos en WP no están enlazados fuertemente desde React, los LLMs tendrán dificultades para encontrar el contexto semántico entre "Arquitectura Operativa" (concepto) y los servicios de RAUVIA.

## Decisiones
- Se crearán guías para páginas pilar que vivirán en React o en el frontend estructurado, mientras que los posts dinámicos vivirán en WP.
- Se implementará un `llms-full.txt` para incluir las definiciones del glosario.
