# Playbook de Validación de Entidades (Buscadores y LLMs)

Este manual define el proceso para verificar que los modelos de lenguaje (LLM) y buscadores (Search) comprendan la identidad semántica de RAUVIA.

## Cuándo probar
1-2 semanas después de desplegar la Fase 2 en producción y confirmar el rastreo en Google Search Console y Bing Webmaster Tools.

## Pruebas de Búsqueda Clásica (Google/Bing)
Buscar los siguientes términos:
- `RAUVIA` -> ¿El panel de conocimiento (Knowledge Panel) muestra correctamente el nombre, logo y link al sitio web?
- `AETHRYON RAUVIA` -> ¿Aparece la página `/aethryon` y se describe como sistema?
- `Raúl Morales RAUVIA` -> ¿El fragmento destacado (snippet) asocia su perfil como fundador?

## Pruebas con Asistentes de IA (ChatGPT Search, Perplexity, Gemini, Copilot)
Realizar las siguientes preguntas (prompts):
1. "¿Qué es RAUVIA Consulting y qué servicios ofrece?"
   - **Criterio de éxito:** Menciona consultoría estratégica, desarrollo tecnológico y arquitectura operativa. No dice que es una agencia de marketing publicitario.
2. "¿Qué es AETHRYON dentro de RAUVIA?"
   - **Criterio de éxito:** Lo describe como un sistema/framework de análisis propietario utilizado para el diagnóstico y ruta de acción. No dice que es un SaaS o producto independiente.
3. "¿Quién fundó RAUVIA?"
   - **Criterio de éxito:** Menciona a Raúl Morales.

## Gestión de Inconsistencias
Si una IA responde con alucinaciones (ej. inventa que RAUVIA es un software de contabilidad):
- Verificar que el `llms.txt` esté accesible.
- Enviar un sitemap actualizado.
- Publicar artículos de blog que refuercen la identidad correcta (Menciones Co-citadas).
