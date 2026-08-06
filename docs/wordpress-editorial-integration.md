# Integración Editorial con WordPress

- **Responsabilidades:**
  - `React (Frontend)`: Sirve la Interfaz, Pilares estáticos, Páginas Corporativas, y renderiza los componentes.
  - `WordPress (Backend/Headless)`: Gestor de contenidos para los redactores. API JSON de solo lectura.
- **Reglas de Oro:**
  - El frontend de React debe solicitar `status=publish`. **Los borradores NUNCA se indexan.**
  - Las URLs del blog (`/blog/mi-post`) deben canonicalizar hacia el propio frontend (`https://rauvia.com.mx/blog/mi-post`), asegurando que el dominio técnico de WP (ej. `wp.rauvia.com.mx`) no indexe o tenga un `robots.txt` que bloquee a todos los crawlers.
  - Las fechas se alimentan de WP (`post.date` y `post.modified`).
