# Analítica de Tráfico desde IA (AI Referral Tracking) - RAUVIA Consulting

## Fuentes a Observar
Los motores conversacionales y de búsqueda asistida están redirigiendo tráfico con atributos específicos en las cabeceras HTTP Referer. Se recomienda crear una agrupación de canal personalizada ("AI Referral") en Google Analytics (GA4) u otra plataforma analítica utilizando los siguientes dominios referenciadores:

- `chatgpt.com`
- `openai.com`
- `perplexity.ai`
- `claude.ai`
- `anthropic.com`
- `copilot.microsoft.com`
- `gemini.google.com`
- `poe.com`

## Reglas de Clasificación (GA4 Custom Channel Grouping)
En la configuración de GA4 > Admin > Data Settings > Channel Groups, crear "AI Referral":
- **Source** exactly matches o contains: `chatgpt.com`, `perplexity.ai`, `claude.ai`, `copilot.microsoft.com`, `gemini.google.com`, `poe.com`

## Limitaciones del Referrer
Debido a políticas de privacidad (ej. `Referrer-Policy: strict-origin-when-cross-origin` en plataformas origen), muchos motores de IA ocultan el path específico, pero usualmente reportan el host raíz. No obstante, algunas interacciones (especialmente desde apps nativas de móvil) podrían carecer de referrer, pasando como tráfico "Directo".

## Parámetros UTM Recomendados
Si RAUVIA entrega enlaces dentro de sus propios perfiles o custom GPTs, se recomienda forzar el etiquetado UTM:
- `?utm_source=chatgpt&utm_medium=ai_referral&utm_campaign=rauvia_bot`

## Eventos Existentes
La creación de esta agrupación no debe romper los eventos existentes de captura de leads. Los eventos comerciales deben heredar correctamente la sesión inicial atribuida a la fuente de IA.
