# Auditoría Semántica Inicial - RAUVIA Consulting (Fase 2)

## 1. Identificación de Entidades y Hallazgos
Tras revisar el contenido actual de RAUVIA (Home, Nosotros, Soluciones, Aethryon y metadatos) se identifican los siguientes puntos:

### A. RAUVIA (Organización)
- **Consistencia de Naming:** En algunos lugares se menciona "RAUVIA Consulting", en otros "RAUVIA" y "RAUVIA CONSULTORIA Y DESARROLLO TECNOLOGICO".
- **Definición:** La definición base es clara: firma de consultoría y desarrollo tecnológico que conecta estrategia, procesos, tecnología y ejecución.
- **Hallazgo (P1):** Faltaba una configuración centralizada (Single Source of Truth) para la entidad (JSON-LD Organization) a través de las páginas. 

### B. AETHRYON (Sistema/Metodología)
- **Definición:** "Sistema de análisis de RAUVIA para identificar qué está frenando el crecimiento de una empresa y convertirlo en una ruta de acción."
- **Hallazgo (P0):** AETHRYON y RAUVIA a veces compiten semánticamente si no se vinculan correctamente. AETHRYON no es un producto físico ni un SaaS independiente, es un "Sistema" (Thing/Methodology) propiedad de RAUVIA. Se requiere asignarle una entidad anidada en el JSON-LD.

### C. Raúl Morales (Fundador)
- **Hallazgo (P2):** La identidad del fundador no estaba explícitamente marcada con JSON-LD en el grafo de conocimiento ni se presentaba como `founder` de `Organization`. 

### D. Soluciones (Catálogo/Servicios)
- **Hallazgo (P1):** La página de Soluciones listaba un catálogo, pero semánticamente no estaba marcado como `CollectionPage`.

## 2. Decisiones Tomadas
1. **Unificación Semántica:** Creación de `src/config/entity.ts` para contener la información corporativa estática de RAUVIA, Raúl Morales (Fundador) y AETHRYON.
2. **Grafo JSON-LD:** Las páginas ahora importan `RAUVIA_ENTITY` para generar el objeto de structured data. Se usan `@id` estables para vincular las páginas.
3. **llms.txt:** Actualizado para declarar explícitamente las diferencias entre RAUVIA y AETHRYON y mencionar a Raúl Morales como fundador.
