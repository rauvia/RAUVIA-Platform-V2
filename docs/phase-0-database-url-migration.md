# Migración de URLs en Base de Datos

Uso recomendado de WP-CLI:

```bash
# Dry Run primero
wp search-replace 'https://rauvia.com.mx/wp-content/' 'https://rauvia.com.mx/blog/wp-content/' --all-tables-with-prefix --precise --dry-run
wp search-replace 'https://rauvia.com.mx/wp-includes/' 'https://rauvia.com.mx/blog/wp-includes/' --all-tables-with-prefix --precise --dry-run

# Ejecución real
wp search-replace 'https://rauvia.com.mx/wp-content/' 'https://rauvia.com.mx/blog/wp-content/' --all-tables-with-prefix --precise
wp search-replace 'https://rauvia.com.mx/wp-includes/' 'https://rauvia.com.mx/blog/wp-includes/' --all-tables-with-prefix --precise
```

*Nota: No reemplazar el dominio completo `https://rauvia.com.mx` sin la ruta específica de WP, ya que afectaría URLs que ahora son de React.*
