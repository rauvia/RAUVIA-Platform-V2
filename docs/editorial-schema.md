# Datos Estructurados Editoriales (JSON-LD)

## Plantilla Base para `BlogPosting` / `Article`

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://rauvia.com.mx/blog/slug-del-articulo/#webpage"
  },
  "headline": "Título SEO del artículo",
  "description": "Respuesta directa o resumen ejecutivo de 160 caracteres.",
  "image": "https://rauvia.com.mx/media/article-cover.jpg",
  "author": {
    "@type": "Person",
    "name": "Raúl Morales",
    "url": "https://rauvia.com.mx/nosotros"
  },
  "publisher": {
    "@id": "https://rauvia.com.mx/#organization"
  },
  "datePublished": "2024-10-01T08:00:00+08:00",
  "dateModified": "2024-10-15T09:20:00+08:00"
}
```

- **Regla Estricta:** `dateModified` solo debe actualizarse si el contenido sufre una modificación editorial sustancial, no automáticamente en cada build.
