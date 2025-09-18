# Checklist de Proyecto de Cajero Automático

Este proyecto es una herramienta de checklist interactivo para calificar proyectos de estructura de datos en Java, enfocados en la gestión de usuarios, roles y una segunda entidad (ejemplo: videojuegos para transacciones).

## ¿Cómo funciona?
- Todos los criterios aparecen marcados por defecto.
- El evaluador puede desmarcar los ítems que no cumpla el proyecto.
- Al presionar "Comprobar", se calcula la nota total sobre 5.
- Solo si todos los criterios están marcados, la nota es 5.

## Criterios evaluados
1. **Gestión de Usuarios:** CRUD completo, roles y autenticación.
2. **Gestión de la Segunda Entidad:** CRUD completo para una entidad transaccional (ejemplo: videojuego).
3. **Interfaces según Rol:** Diferenciación de interfaz para administrador y cliente.
4. **Gestión de Datos:** Uso de estructuras de datos, transacciones y validaciones.
5. **Interacción con el Usuario:** Mensajes claros de confirmación.
6. **Historial:** Consulta de eventos pasados.
7. **Seguridad y Manejo de Errores:** Mensajes adecuados ante errores.

## Archivos principales
- `index.html`: Checklist y estructura visual.
- `assets/js/script.js`: Lógica de cálculo de nota.
- `assets/styles/styles.css`: Estilos visuales.

## Uso
1. Abre `index.html` en tu navegador.
2. Marca o desmarca los criterios según el proyecto a evaluar.
3. Haz clic en "Comprobar" para ver la nota.

---

**Autor:** sarboleda72

**Repositorio:** https://github.com/sarboleda72/check-list-cajero-java
