# Arquitectura de Resúmenes Machine-Readable

## Objetivo
Alimentar a los agentes de IA (OpenAI, Anthropic, Google) con conocimiento profundo y oficial sin que tengan que hacer scraping profundo (lo cual muchas veces falla por límites de tokens o CSR).

## Implementación: `llms-full.txt`
Se crea el archivo `public/llms-full.txt` que incluye:
1. La identidad de RAUVIA (de `llms.txt`).
2. Las definiciones aprobadas del glosario.
3. El bloque oficial de "Preguntas Frecuentes" (FAQ).

Este archivo actúa como un documento "RAG-ready" (Retrieval-Augmented Generation) para que cualquier bot extraiga conocimiento de la fuente principal de RAUVIA.
