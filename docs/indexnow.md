# IndexNow - RAUVIA Consulting

## Estado de la Implementación
IndexNow permite notificar instantáneamente a motores de búsqueda (Bing, Yandex, Seznam, Naver) sobre cambios, creaciones o eliminaciones de URLs.

Dado que la arquitectura principal actual de RAUVIA es un front-end estático (SPA renderizada durante el build), la implementación automatizada de IndexNow en cada guardado de contenido dependerá del CMS backend (WordPress).

## Documentación del Procedimiento

### Vía WordPress (Recomendado)
Puesto que los cambios editoriales de alto volumen provienen de WordPress (Blog):
1. Instalar un plugin oficial compatible con IndexNow en el panel de WordPress (ej. "IndexNow" de Microsoft Bing o integración en RankMath / Yoast).
2. Generar y alojar el archivo `.txt` de la API key de IndexNow en el directorio raíz servido por la API.
3. El plugin notificará automáticamente a Bing cada vez que se publique o actualice una entrada del blog.

### Vía CI/CD (Cambios Estructurales de React)
Si se desea notificar de cambios estructurales (rutas `/nosotros`, `/soluciones`):
1. Crear una clave API de IndexNow (mínimo 8 caracteres, alfanumérico).
2. Colocar la clave en un archivo `.txt` en la raíz (ej. `[clave-api].txt`).
3. Tras finalizar el pipeline de despliegue en producción, ejecutar una llamada cURL al endpoint de IndexNow:
   \`\`\`bash
   curl "https://api.indexnow.org/indexnow?url=https://rauvia.com.mx/soluciones&key=[clave-api]"
   \`\`\`

## Precauciones
- **No exponer secretos:** La clave de IndexNow no requiere ocultarse, ya que el archivo TXT alojado en la raíz demuestra propiedad de dominio. Sin embargo, no se deben usar contraseñas corporativas como clave de IndexNow.
- Evitar hacer ping a la API por cada pequeño commit o ajuste de CSS; reservar para despliegues de contenido sustantivo y nuevas URLs.
