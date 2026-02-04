# - Proyecto SPA Vanilla JS

Este documento define la estructura, estándares y flujo de trabajo para el desarrollo de la aplicación web estática (SPA) utilizando **Vanilla JavaScript**, **Bootstrap 5** y **NPM**.

Este proyecto utiliza un **Sistema de Agentes Especializados** para generar material educativo de alta calidad (presentaciones, juegos, podcasts y fichas literarias) en castellano, inglés y valenciano.

## 🌟 Filosofía Pedagógica y Técnica
- **Método Feynman:** Simplificación de conceptos complejos mediante analogías y lenguaje claro sin perder rigor.
- **Andamiaje (Scaffolding):** Todo material incluye guías, consejos y elementos de apoyo para el aprendizaje autónomo.
- **Stack Moderno:** Desarrollo preferente en **Vue.js, Tailwind CSS y Reveal.js** (versiones de producción) para una experiencia interactiva y visualmente premium.
- **Política de Contenido:** "Expandir, no eliminar". Se preserva y enriquece el trabajo previo.

## 🤖 Agentes Disponibles
El sistema carga automáticamente los agentes definidos en `.gemini/agents/`:
- **SME**: Experto en contenido académico.
- **Visual Artist**: Diseño y estética premium.
- **Aesthetic Critic**: Guardián de la excelencia visual y UX móvil.
- **Audio Producer**: Generación de audio realista.
- **Architect**: Estructura técnica y lógica.
- **Master Ops Architect**: Planificación milimétrica de operaciones.
- **Phaser Developer**: Desarrollo de juegos educativos.
- **Quality Enforcer**: Garantía de profundidad y detalle.
- **Educational Consultant**: Guía de interacción y objetivos.

## 🚀 Inicio Rápido
Al cargar este directorio, Gemini leerá automáticamente las instrucciones en `.gemini/instructions.md` y activará el protocolo de colaboración entre agentes para cualquier tarea solicitada.

## 🚀 Arquitectura del Proyecto

La aplicación funciona como una **SPA** donde el contenido se carga dinámicamente sin recargar la página, utilizando el `hash` de la URL o la API de History.

### Estructura de Archivos

```text
/
├── public/              # Archivos estáticos (imágenes, favicons)
├── src/
│   ├── assets/          # CSS personalizado y recursos
│   ├── components/      # Fragmentos de UI reutilizables
│   ├── views/           # "Páginas" o vistas de la SPA
│   ├── router.js        # Lógica de enrutamiento
│   ├── main.js          # Punto de entrada de la aplicación
│   └── index.html       # Archivo HTML único
├── package.json         # Dependencias y scripts
└── GEMINI.md            # Este manual

```

---

## 🛠️ Configuración e Instalación

Para levantar el entorno de desarrollo, sigue estos pasos:

1. **Instalar dependencias:**
```bash
npm install bootstrap @popperjs/core

```


2. **Servidor de desarrollo:** (Se recomienda usar `vite` o `live-server` para desarrollo rápido).
```bash
npm install --save-dev vite

```



### Scripts de `package.json` recomendados:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}

```

---

## 🎨 Estilos y UI (Bootstrap)

* **Importación:** Bootstrap se importa en `src/main.js` o mediante un archivo SCSS centralizado.
* **Componentes:** Se priorizan las clases utilitarias de Bootstrap para mantener el CSS personalizado al mínimo.
* **Layout:** Uso estricto de `container`, `row` y `col` para el diseño responsivo.

---

## 📑 Lógica de la SPA (Router)

El enrutador debe interceptar los cambios en la URL y renderizar la vista correspondiente en el contenedor principal (`#app`).

**Ejemplo de flujo del Router:**

1. El usuario hace clic en un enlace: `<a href="#/contacto">`.
2. `router.js` detecta el cambio de `hash`.
3. Se busca la función en `src/views/contacto.js`.
4. Se inyecta el HTML resultante en `document.getElementById('app')`.

---

## 🛠️ Reglas de Desarrollo

1. **Modularidad:** Cada "página" debe ser un módulo de JavaScript en `src/views/` que exporte una función o una cadena de texto HTML.
2. **Estado:** El estado global (si es necesario) se manejará en un objeto simple en `main.js`.
3. **Vanilla JS:** No se permiten frameworks (React, Vue, etc.). Solo manipulación del DOM nativa.
4. **Limpieza:** Cada vez que se cambie de vista, se deben limpiar los *event listeners* anteriores si es necesario para evitar fugas de memoria.

---

## 📦 Despliegue

La carpeta de salida para producción es `/dist` (generada por el comando `npm run build`). Al ser una SPA estática, puede alojarse en:

* GitHub Pages
* Netlify
* Vercel

---

> **Nota:** Este proyecto prioriza la velocidad de carga y la simplicidad. Menos es más.





