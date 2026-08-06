# Política de URLs Canónicas - RAUVIA Consulting

## 1. Dominio Canónico Principal
- El dominio canónico oficial es: `https://rauvia.com.mx`
- Se debe forzar HTTPS y redireccionar todas las peticiones desde `http://` a `https://`.
- Se debe redireccionar de `www.rauvia.com.mx` a `rauvia.com.mx` (o viceversa si la preferencia de infraestructura fuera www, pero la configuración actual asume raíz `rauvia.com.mx`).

## 2. Tratamiento de Slash Final (Trailing Slash)
- Todas las URLs canónicas se definen **sin slash final** (ej. `https://rauvia.com.mx/soluciones`).
- Si un usuario o rastreador accede a `https://rauvia.com.mx/soluciones/`, el componente SEO inyecta el canonical apuntando a la versión sin slash.

## 3. Tratamiento de Parámetros URL
- Las etiquetas canonical eliminan parámetros irrelevantes por defecto (como `?utm_source`, `?ref`, `?fbclid`).
- La canonical declarada en el componente SEO es absoluta y se deriva directamente de la ruta limpia.

## 4. Tratamiento de WordPress (Blog)
- El sitemap y los listados consumen los posts publicados a través de la API REST.
- Los posts de WordPress que sean consumidos y renderizados en la UI de React deberán tener una canonical que apunte a `https://rauvia.com.mx/blog/{slug}` en el futuro.
- Actualmente, si el blog vive en una ruta paralela o subdominio manejado por WordPress, se deberá asegurar que su propio plugin SEO (ej. Yoast, RankMath) emita canonicals correctas hacia `rauvia.com.mx`.

## 5. Reglas de Redirección (Configuración Host)
Se asume que la plataforma de hosting (o CDN como Cloudflare) gestionará:
- HTTP 301 de HTTP a HTTPS.
- HTTP 301 de WWW a no-WWW.
- HTTP 301 de URLs obsoletas a la nueva estructura si aplica.
