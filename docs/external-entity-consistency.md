# Consistencia de Entidades Externas y SameAs

Para que el Knowledge Graph se consolide correctamente en torno a RAUVIA y su fundador, es crítico enlazar perfiles externos verificados. 

## Estado Actual
- El código base `src/config/entity.ts` tiene la propiedad `sameAs` preparada, pero vacía, porque los perfiles exactos no han sido confirmados en este sprint de código (requieren validación del cliente).

## Acciones Pendientes (Manuales)
1. **Identificar Perfiles Oficiales:**
   - LinkedIn de RAUVIA.
   - LinkedIn de Raúl Morales.
   - Perfil de Google Business (si existe un localizador comercial).
2. **Asegurar Consistencia de Datos:**
   - La descripción en el LinkedIn de la empresa debe reflejar: "Firma de consultoría y desarrollo tecnológico..."
   - El sitio web vinculado debe ser exactamente `https://rauvia.com.mx` (con HTTPS).
3. **Inyectar en Código:**
   - Una vez validados, agregar las URLs al array `sameAs` de `RAUVIA_ENTITY` en `src/config/entity.ts`.
