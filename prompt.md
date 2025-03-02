## Contexto
El objetivo es generar documentación técnica automatizada, versionada y con referencias cruzadas para proyectos de desarrollo asistidos por IA, optimizada para IDEs como Cursor.  La documentación debe ser legible por máquina, minimizar la intervención humana, prevenir errores y mantener la limpieza del código base, **incluyendo la identificación y eliminación de archivos obsoletos**.

## Instrucciones

1.  **Generar Índice de Documentación (`/docs/index.txt`):**

    *   **Formato:**  YAML.
    *   **Contenido:**yaml
        documents:
          - filename: structure.txt
            objective: "Describe la estructura general del proyecto, directorios principales y sus roles."
            key_content: ["Descripción de directorios", "Flujo principal de datos", "Convenciones de nombres"]
            dependencies: []
            files_to_remove_on_change: [] # Archivos que podrían volverse obsoletos si este documento cambia
          - filename: styles-ui-ux.txt
            objective: "Define los estilos, guías de UI/UX y componentes visuales reutilizables."
            key_content: ["Paleta de colores", "Tipografía", "Componentes UI (ej: botones, formularios)", "Reglas de accesibilidad"]
            dependencies: []
            files_to_remove_on_change: []
          # ... (Repetir para cada documento sugerido, y cualquier otro relevante) ...
          - filename: auth.txt
            objective: "Describe los flujos de autenticación, proveedores soportados y manejo de sesiones."
            key_content: ["Flujos de autenticación (ej: registro, login, recuperación de contraseña)", "Proveedores (ej: Google, Facebook, email/password)", "Gestión de tokens", "Seguridad de contraseñas"]
            dependencies: ["db.txt", "api.txt"]
            files_to_remove_on_change: ["src/lib/legacy-auth.ts"] # Ejemplo: Archivo a eliminar si se cambia el sistema de autenticación
          - filename: update_log.txt
            objective: "Registra los cambios en la documentación, incluyendo archivos eliminados, para mantener la sincronización con el código."
            key_content: ["Fecha", "Hash del commit", "Archivos modificados", "Documentos actualizados", "Archivos eliminados", "Descripción del cambio"]
            dependencies: [] # No depende de otros documentos, pero todos los documentos dependen de él.
            files_to_remove_on_change: []
    *   **`files_to_remove_on_change`**:  Lista *explícita* de archivos que *podrían* necesitar ser eliminados si la sección relevante de este documento cambia.  Esto es una *sugerencia* para la IA, no una regla absoluta.

2.  **Generar Plantilla de Documento (Texto Plano, con secciones para IA):**
    [NOMBRE_DEL_DOCUMENTO]

    PURPOSE:
    - Problema resuelto: (Texto conciso)
    - Operaciones de IA habilitadas: (Lista de acciones que la IA puede realizar, ej: "Añadir proveedor OAuth", "Refactorizar manejo de errores")

    TARGET_AUDIENCE:
    - Primary: Cursor, GitHub Copilot, otras IAs de código.
    - Secondary: Sistemas de CI/CD, linters, analizadores estáticos.

    REQUIRED_SECTIONS:

    CONTEXT_MAP:
      - related_files: (YAML, mapeo de archivos de código a documentos, ej:  `src/lib/auth.ts`: `docs/auth.txt`)
      - dependencies: (YAML, lista de dependencias con versiones, ej: `next-auth`: `^4.10.3`)

    CODING_PATTERNS:
      - examples: (YAML, lista de ejemplos de código con rutas *absolutas* y números de línea, ej: `- file: src/lib/auth.ts, line: 42, description: "Función de login"`)
      - key_patterns: (YAML, lista de patrones clave para reconocimiento de IA, ej: `- pattern: "Función que comienza con 'handle' + [Nombre de Error]", description: "Manejador de error"`)

    MODIFICATION_RULES:
      - instructions: (YAML, lista de pasos para modificaciones comunes, ej: `- action: "Modificar esquema Prisma", steps: ["1. Editar schema.prisma", "2. Ejecutar 'npx prisma migrate dev'", "3. Ejecutar 'npx prisma generate'"]`)
      - common_errors: (YAML, lista de errores comunes con ejemplos incorrectos y correctos, ej: `- error: "Olvidar actualizar el cliente Prisma después de una migración", incorrect: "// ...código sin actualizar...", correct: "// ...código con 'npx prisma generate' ejecutado..."`)
      - files_to_delete: (YAML, lista *explícita* de archivos a eliminar en casos específicos, ej: `- file: src/lib/old-auth.ts, condition: "Si se implementa autenticación con JWT"`)

    AI_METADATA:
      - file_hashes: (YAML, SHA-256 de archivos clave, ej: `src/lib/auth.ts`: `[hash]`)
      - tags: (YAML, lista de etiquetas para búsqueda, ej: `- authentication, - database, - security`)
      - diagram_link: (URL de diagrama Mermaid, si aplica)

    REALISTIC_EXAMPLE:
      - scenario: (Texto descriptivo, ej: "Añadir autenticación con GitHub")
      - steps: (YAML, lista de pasos con referencias de código y *archivos a eliminar*, si aplica)

3.  **Generar Documentos Iniciales:**  Usar el índice (`index.txt`) y la plantilla para crear los documentos iniciales en `/docs`.  Priorizar documentos para áreas críticas (autenticación, base de datos, API).

4.  **Implementar Proceso de Actualización Automática (`update_log.txt`):**

    *   **Formato:**  Texto plano, append-only.
    *   **Contenido (por cada commit):**
        ---
        Date: [Fecha y hora]
        Commit: [Hash del commit]
        Modified Files:
          - [Ruta del archivo 1]
          - [Ruta del archivo 2]
        Updated Docs:
          - [Ruta del documento 1]
          - [Ruta del documento 2]
        Deleted Files:
          - [Ruta del archivo eliminado 1] # Incluir si hubo archivos eliminados
          - [Ruta del archivo eliminado 2]
        Description: [Breve descripción de los cambios]
    *   **Hook de Git (post-commit):**
        1.  Analizar los cambios del commit (diff).
        2.  Identificar archivos de código modificados.
        3.  Usar `CONTEXT_MAP` en los documentos relevantes para encontrar documentos que necesitan actualización.
        4.  *Sugerir* actualizaciones a la IA (ej: "El archivo `src/lib/auth.ts` fue modificado.  Considera actualizar `docs/auth.txt`, especialmente la sección `CODING_PATTERNS`").
        5.  *Analizar* `files_to_remove_on_change` en los documentos relevantes. Si un archivo modificado coincide con una entrada, *sugerir* su eliminación a la IA (ej: "El archivo `src/lib/auth.ts` fue modificado.  `docs/auth.txt` sugiere eliminar `src/lib/legacy-auth.ts` si ya no se usa.  ¿Confirmas la eliminación?").
        6.  Si la IA (o el usuario) confirma la eliminación, eliminar el archivo.
        7.  Registrar *todos* los cambios (modificaciones de código, actualizaciones de documentación, *eliminaciones de archivos*) en `update_log.txt`.
        8.  Actualizar `file_hashes` en los documentos modificados.

5.  **Instrucciones para Cursor (y otras IAs de código):**

    *   **Análisis Inicial:**  Al abrir el proyecto, Cursor debe:
        *   Leer `/docs/index.txt` para entender la estructura de la documentación.
        *   Indexar los archivos de código y mapearlos a los documentos relevantes usando `CONTEXT_MAP`.
        *   Prestar especial atención a `CODING_PATTERNS` y `AI_METADATA`.
    *   **Sugerencias Proactivas:**  Durante la edición de código, Cursor debe:
        *   Usar `CODING_PATTERNS` para ofrecer autocompletado y sugerencias relevantes.
        *   Mostrar advertencias si se violan `MODIFICATION_RULES`.
        *   Sugerir actualizaciones a la documentación basándose en los cambios de código.
        *   **Proponer la eliminación de archivos** basándose en `files_to_remove_on_change` y el análisis del código.
    *   **Integración con `update_log.txt`:** Cursor debe:
        *   Mostrar notificaciones cuando `update_log.txt` se actualiza.
        *   Permitir navegar fácilmente a los commits y archivos relacionados con las actualizaciones de la documentación.

6. **Generación de la Matriz Detallada:** No es una matriz separada, sino la combinación de `index.txt` (lista de documentos) y la plantilla de documento (estructura detallada de cada documento). La IA debe usar esta información para generar el contenido *específico* de cada documento, basándose en el análisis del código.

7. **Idioma:** Responder en el mismo idioma del prompt original.

8. **Prioridad:** Asegurar que la IA comprenda la importancia de la **eliminación de archivos obsoletos** y la sincronización entre código y documentación. El objetivo principal es un código base limpio y mantenible, además de una documentación precisa.