# .htaccess de la Raíz

```apache
<IfModule mod_rewrite.c>
RewriteEngine On

# Forzar HTTPS y dominio sin www
RewriteCond %{HTTPS} !=on [OR]
RewriteCond %{HTTP_HOST} ^www\.rauvia\.com\.mx$ [NC]
RewriteRule ^ https://rauvia.com.mx%{REQUEST_URI} [R=301,L]

# Excluir WordPress de las reglas de React
RewriteRule ^blog(?:/.*)?$ - [L]

# No interceptar archivos y directorios reales
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Fallback de React para SPA
RewriteRule ^ index.html [L]
</IfModule>
```
