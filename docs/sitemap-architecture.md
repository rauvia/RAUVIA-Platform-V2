# Arquitectura de Sitemaps

- **Estrategia:** Un Sitemap unificado que consolide rutas de React y Posts de WordPress, o un Índice de Sitemaps.
- **Implementación Actual:** `public/sitemap.xml` generado en el build por `generate-sitemap.js`, que consulta la API de WordPress para incluir URLs de recursos, además de las rutas estáticas de React.
- **Exclusión:** No se indexan drafts ni URLs con parámetros o `/blog/wp-admin/`.
