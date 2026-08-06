# Mapa de Enlazado Interno Semántico

Este documento rige la manera en que las páginas principales se vinculan entre sí para reforzar el PageRank interno y la semántica de la red.

| Origen | Destino | Relación | Sugerencia de Anchor (Ejemplo) | Prioridad |
| --- | --- | --- | --- | --- |
| Home | `/soluciones` | Catálogo de capacidades | "soluciones operativas y comerciales" | Alta |
| Home | `/nosotros` | Identidad corporativa | "nuestra visión y estrategia" | Media |
| Home | `/aethryon` | Sistema utilizado | "conoce el sistema de análisis AETHRYON" | Alta |
| Soluciones | `/` | Entidad raíz | Logo de RAUVIA | Alta |
| Soluciones | `/aethryon` | Metodología detrás de soluciones | "analizado mediante AETHRYON" | Media |
| Nosotros | `/soluciones` | Qué ofrecemos | "explora nuestras capacidades" | Alta |
| Aethryon | `/soluciones` | Implementación del análisis | "ver portafolio de ejecución" | Alta |

## Reglas de Implementación
- **Evitar anchors genéricos** como "Clic aquí", "Ver más".
- Usar texto descriptivo, ej. "Soluciones para estructurar el crecimiento", "Sistema de análisis AETHRYON".
