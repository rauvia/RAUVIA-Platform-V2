# Arquitectura de URLs por Entidad

| Entidad / Concepto | URL | Acción en Fase 2 | Tipo de Página |
| --- | --- | --- | --- |
| RAUVIA (Organización) | `/` | Conservar, actualizar JSON-LD | Organización / WebSite |
| Nosotros / RAUVIA Fundamentos | `/nosotros` | Conservar, actualizar JSON-LD a AboutPage | Acerca de |
| AETHRYON | `/aethryon` | Conservar, actualizar JSON-LD a WebPage/Thing | Detalle de Sistema |
| Portafolio de Soluciones | `/soluciones` | Conservar, actualizar JSON-LD a CollectionPage | Colección / Catálogo |
| Raúl Morales (Fundador) | Ninguna (incluido en JSON-LD y `/nosotros`) | No crear nueva URL por ahora | Entidad anidada |
| Soluciones Específicas (FCE, Ruta 90) | Ninguna aislada por ahora (viven en `/soluciones`) | No crear (solo cuando haya contenido denso) | Fragmentos de UI |

## Justificación
No se crean páginas vacías para soluciones específicas. Hasta que no se cuente con un volumen de información sustancial (ej. qué problema resuelve en detalle, metodología paso a paso de esa solución específica), seguirán existiendo como capacidades descritas dentro del Portafolio (`/soluciones`).
