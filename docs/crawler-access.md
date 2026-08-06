# Acceso a Rastreadores (Crawlers) e IA - RAUVIA Consulting

## Bots Revisados y Permitidos
El archivo `robots.txt` de la raíz permite explícitamente el acceso a:
- **Googlebot** (Búsqueda de Google y ecosistema AI Overview)
- **Bingbot** (Búsqueda de Bing y ecosistema Copilot)
- **OAI-SearchBot** (Búsqueda nativa de ChatGPT)
- **ChatGPT-User** (Extracción manual de ChatGPT bajo demanda)

## Reglas Aplicadas
- Se ha expuesto el archivo `robots.txt` en la ruta `/robots.txt`.
- Se permite el rastreo general `/` a todos los agentes (`User-agent: *`).
- Se bloquean rutas administrativas irrelevantes (`/wp-admin/`, `/drafts/`, etc.).
- Se ha incluido la directiva `Sitemap: https://rauvia.com.mx/sitemap.xml`.

## Posibles Restricciones Externas (A verificar manual por el equipo de infra)
Aunque la aplicación permite el tráfico mediante `robots.txt`, es imperativo verificar los siguientes puntos en la capa de WAF, CDN y Hosting (ej. Cloudflare, Hostinger):
1. **Firewalls y Rate Limiting:** Confirmar que no se bloquean de manera automática las IPs pertenecientes a ASN de OpenAI o Microsoft por reglas de "Under Attack Mode" o similares.
2. **Desafíos CAPTCHA:** Confirmar que los bots verificados de Búsqueda (Googlebot, Bingbot) no reciban un desafío de Javascript que impida el acceso al Prerender HTML inicial.

## Acciones Manuales Pendientes
- En **Google Search Console**: Enviar el `sitemap.xml` para acelerar el descubrimiento.
- En **Bing Webmaster Tools**: Enviar el `sitemap.xml`.
- Verificar en la consola de CDN que las solicitudes con User-Agent `OAI-SearchBot` no sean bloqueadas por falsos positivos de protección Anti-Scraping.
