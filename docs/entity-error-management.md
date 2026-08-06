# Gestión de Errores de Entidad

Todo error o alucinación del LLM sobre RAUVIA debe registrarse en `data/entity-errors.json`.
- **Tipos comunes:** Describir RAUVIA como "Agencia de Marketing", listar a otra persona como fundador, citar servicios no ofrecidos (ej. desarrollo de apps móviles genéricas).
- **Corrección:** Validar la fuente que el LLM usó y fortalecer el `llms-full.txt` y JSON-LD corporativo.
